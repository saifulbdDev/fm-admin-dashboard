import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import Input from "@/components/ui/Input";
import { toast } from "react-toastify";
import { PlusIcon, PencilIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Button from "@/components/ui/Buttons/Button";
import DeleteModal from "@/components/ui/Modals/DeleteModal";
import ReactSelect from "@/components/ui/ReactSelect";
import FileUpload from "@/components/ui/fileUpload.jsx";
import { blogSchema } from "@/utils/validations/blogSchema";
import { dataPayload } from "@/utils/postData";
import PageLoader from "@/components/ui/PageLoader";

import {
  useDeletePostMutation,
  useGetCategoryListQuery,
  useGetBannerListQuery,
  useGetSnippetsListQuery,
  useGetExploreListQuery,
  useGetAuthorListQuery,
  useGetTagListQuery,
  useGetBlogDetailWithQuery,
  useGetRecommendedPostListQuery
} from "@/features/post/postApi";
import axios from "@/utils/axios";
import { useSelector } from "react-redux";

const CKEditor = React.lazy(() => import("@components/ui/CKEditor"));

const BlogEdit = () => {
  const {
    snippets,
    explorelist,
    authorlist,
    taglist,
    categoryList,
    banners,
    recommendedPost
  } = useSelector((state) => state.post);
  let { blog_id } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const { data, isLoading } = useGetBlogDetailWithQuery(blog_id, {
    skip: !blog_id
  });
  const [subcategory, setSubCategory] = useState([]);
  const [isDeleteModel, setDeleteModel] = useState(false);

  useGetExploreListQuery();
  useGetAuthorListQuery();
  useGetTagListQuery();
  useGetCategoryListQuery();
  useGetSnippetsListQuery();
  useGetBannerListQuery();
  useGetRecommendedPostListQuery();
  const [deletePost, { isLoading: isDelete }] = useDeletePostMutation();

  const handleCategoryChange = async (selectedOption, setFieldValue) => {
    try {
      // Make an API call to get subcategories based on the selected category ID
      const response = await fetchSubcategories(selectedOption.value);

      // Update the subcategory options in the form

      setFieldValue("subcategory_post", response);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  const fetchSubcategories = async (categoryId) => {
    const apiUrl = `/secretQWERTY/admin/blog/api/subcategory/list/?category_id=${categoryId}`;

    try {
      const response = await axios.get(apiUrl);
      const subCategoryOptions = response?.data?.data.map((item) => ({
        value: item.id,
        label: item.name
      }));
      setSubCategory(subCategoryOptions);
      return subCategoryOptions[0]?.value;
    } catch (error) {
      console.error("Error fetching subcategories:", error);
      throw new Error("Failed to fetch subcategories");
    }
  };
  const submitHandler = async (values) => {
    try {
      const {
        formPostData,
        tagsFormData,
        bannerFormData,
        authorFormData,
        exploreFormData,
        recommendedBlogformData
      } = dataPayload(values, user?.id);

      // Update the blog post
      await axios.post(
        `secretQWERTY/admin/blog/api/blog/edit/${blog_id}/`,
        formPostData
      );

      // Append post_id to form data
      const postID = Number(blog_id);
      bannerFormData.append("post", postID);
      tagsFormData.append("post_id", postID);
      exploreFormData.append("post_id", postID);
      recommendedBlogformData.append("post_id", postID);

      // Create an array of requests
      const requests = [
        axios.put(`/recommended-banner-update/${blog_id}/`, bannerFormData),
        axios.post(`/recommended-post-create/`, recommendedBlogformData),
        axios.post(`/post-tag-add-post/`, tagsFormData),
        values.author &&
          axios.put(`/author-post-updates/${blog_id}/`, authorFormData),
        values?.explore?.length > 0 &&
          axios.post(`/explore-post-create/`, exploreFormData)
      ].filter(Boolean); // Filter out falsy values (e.g., if author or explore conditions are not met)

      // Execute requests in parallel
      await Promise.all(requests);

      // Display success message and navigate
      toast.success("Post Edited!");
    
      navigate("/admin/blog-list");
    } catch (error) {
      // Handle errors centrally
      toast.error("Error publishing post");
      console.error("Error publishing post:", error);
      throw new Error("Error publishing post");
    }
  };

  const onDeledeBlog = async () => {
    try {
     await deletePost(blog_id);
  
    
        toast.success('Blog Deleted Successfully!');
        navigate("/admin/blog-list");
        setDeleteModel(false)
    
    } catch (error) {
      // Handle errors during the asynchronous operation
      console.error("Error deleting blog:", error.message);
      toast.error("Error deleting blog. Please try again.");
    }
  };

  useEffect(() => {
    if (data?.category_post) {
      fetchSubcategories(data?.category_post);

      // setSubCategory(response);
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <Formik
          initialValues={data}
          validationSchema={blogSchema}
          onSubmit={(values) => submitHandler(values)}>
          {({
            errors,
            isSubmitting,
            values,
            setFieldValue,
            handleBlur,
            touched
          }) => (
            <Form className="flex">
              <div className="w-2/3">
                <div className="bg-white rounded-md shadow-md">
                  <div className="border-b border-solid">
                    <h3 className="bg-theme-color-200 inline-block font-bold  px-2 py-3 text-white">
                      Create Post
                    </h3>
                  </div>
                  <div className="px-5 py-2 ">
                    <Input
                      label="Post name"
                      id="name_post"
                      name="name_post"
                      labelClass="block text-gray-700 text-base font-bold mb-1.5"
                      type="text"
                      errorText={errors.name_post}
                      error={touched.name_post}
                      onBlur={handleBlur}
                      inputClass="appearance-none block w-full rounded-md py-1 px-4 text-gray-700  border-gray-400"
                      placeholder="Post name"
                      containerClass="w-full mb-4"
                    />
                    <div className="flex items-center justify-between mb-3 space-x-2">
                      <Input
                        containerClass="w-3/4 "
                        label="Category"
                        id="category_post"
                        name="category_post"
                        labelClass="block text-gray-700 text-base font-bold mb-1.5"
                        errorText={errors.category_post}
                        component={ReactSelect}
                        inputClass="z-[200]"
                        error={touched.category_post}
                        onBlur={handleBlur}
                        placeholder="Selected Category"
                        onChange={(ev) =>
                          handleCategoryChange(ev, setFieldValue)
                        }
                        options={categoryList || []}
                      />
                      <div className="w-1/4 mt-7">
                        <div className="flex  justify-center items-center space-x-2">
                          <Link to="/admin/snippet-add">
                            <PlusIcon className="w-5 h-5" />
                          </Link>
                          <button type="button">
                            <PencilIcon className="w-5 h-5" />
                          </button>
                          <button type="button">
                            <XMarkIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-3 space-x-2">
                      <Input
                        containerClass="w-3/4 "
                        label="Sub Category"
                        id="subcategory_post"
                        name="subcategory_post"
                        labelClass="block text-gray-700 text-base font-bold mb-1.5"
                        errorText={errors.subcategory_post}
                        component={ReactSelect}
                        placeholder="Selected Sub Category"
                        inputClass="z-[100]"
                        error={touched.subcategory_post}
                        onBlur={handleBlur}
                        isDisabled={true}
                        options={subcategory || []}
                      />
                      <div className="w-1/4 mt-7">
                        <div className="flex  justify-center items-center space-x-2">
                          <Link to="/admin/snippet-add">
                            <PlusIcon className="w-5 h-5" />
                          </Link>
                          <button type="button">
                            <PencilIcon className="w-5 h-5" />
                          </button>
                          <button type="button">
                            <XMarkIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <CKEditor
                      label="Post content"
                      id="content_1"
                      name="content_1"
                      containerClass="w-full mb-8"
                      labelClass="block text-gray-700 text-base font-bold mb-1.5"
                      errorText={errors.content_1}
                      error={touched.content_1}
                      data={values.content_1}
                      onChange={(e) => {
                        setFieldValue("content_1", e);
                      }}
                    />
                    <div className="flex items-center justify-between space-x-2 mb-3">
                      <div className="w-1/6">Snippet 1</div>

                      <Input
                        containerClass="w-4/6 "
                        id="snippet_1_id"
                        name="snippet_1_id"
                        placeholder="Selected Snippet"
                        labelClass="block text-gray-700 text-base font-bold mb-1.5"
                        errorText={errors.snippet_1_id}
                        component={ReactSelect}
                        inputClass="z-[100]"
                        error={touched.snippet_1_id}
                        onBlur={handleBlur}
                        options={snippets || []}
                      />
                      <div className="w-1/6">
                        <div className="flex  justify-center items-center space-x-2">
                          <Link to="/admin/snippet-add">
                            <PlusIcon className="w-5 h-5" />
                          </Link>
                          <button type="button">
                            <PencilIcon className="w-5 h-5" />
                          </button>
                          <button type="button">
                            <XMarkIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <CKEditor
                      label="Post content 2"
                      id="content_2"
                      name="content_2"
                      containerClass="w-full mb-8"
                      labelClass="block text-gray-700 text-base font-bold mb-1.5"
                      errorText={errors.content_2}
                      error={touched.content_2}
                      data={values.content_2}
                      onChange={(e) => {
                        setFieldValue("content_2", e);
                      }}
                    />

                    <div className="flex items-center justify-between space-x-2 mb-3">
                      <div className="w-1/6">Snippet 2</div>

                      <Input
                        containerClass="w-4/6 "
                        id="snippet_2_id"
                        name="snippet_2_id"
                        placeholder="Selected Snippet"
                        labelClass="block text-gray-700 text-base font-bold mb-1.5"
                        errorText={errors.snippet_2_id}
                        component={ReactSelect}
                        inputClass="z-[100]"
                        error={touched.snippet_2_id}
                        onBlur={handleBlur}
                        options={snippets || []}
                      />
                      <div className="w-1/6">
                        <div className="flex  justify-center items-center space-x-2">
                          <Link to="/admin/snippet-add">
                            <PlusIcon className="w-5 h-5" />
                          </Link>
                          <button type="button">
                            <PencilIcon className="w-5 h-5" />
                          </button>
                          <button type="button">
                            <XMarkIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <CKEditor
                      label="Post content 3"
                      containerClass="w-full mb-8"
                      id="content_3"
                      name="content_3"
                      labelClass="block text-gray-700 text-base font-bold mb-1.5"
                      errorText={errors.content_3}
                      error={touched.content_3}
                      data={values.content_3}
                      onChange={(e) => {
                        setFieldValue("content_3", e);
                      }}
                    />

                    <Input
                      label="Video URL:"
                      id="video_url"
                      name="video_url"
                      labelClass="block text-gray-700 text-base font-bold w-1/4"
                      type="url"
                      errorText={errors.video_url}
                      error={touched.video_url}
                      onBlur={handleBlur}
                      inputdiv="w-3/4"
                      inputClass="appearance-none block rounded-md py-1 px-4  text-gray-700  border-gray-400"
                      placeholder="video url"
                      containerClass="w-full flex items-center mb-5"
                    />
                    <Input
                      label="Accordion 1"
                      id="banner_1"
                      name="banner_1"
                      labelClass="block text-gray-700 text-base font-bold w-1/4"
                      component={ReactSelect}
                      errorText={errors.banner_1}
                      error={touched.banner_1}
                      onBlur={handleBlur}
                      options={banners || []}
                      inputdiv="w-3/4 "
                      placeholder="Accordion 1"
                      containerClass="w-full flex items-center mb-5"
                    />
                    <Input
                      label="Accordion 2"
                      id="banner_2"
                      name="banner_2"
                      labelClass="block text-gray-700 text-base font-bold w-1/4"
                      component={ReactSelect}
                      errorText={errors.banner_2}
                      error={touched.banner_2}
                      onBlur={handleBlur}
                      options={banners || []}
                      inputdiv="w-3/4 "
                      placeholder="Accordion 2"
                      containerClass="w-full flex items-center mb-5"
                    />
                    <Input
                      label="Accordion 3"
                      id="banner_3"
                      name="banner_3"
                      labelClass="block text-gray-700 text-base font-bold w-1/4"
                      component={ReactSelect}
                      errorText={errors.banner_3}
                      error={touched.banner_3}
                      onBlur={handleBlur}
                      options={banners || []}
                      inputdiv="w-3/4 "
                      placeholder="Accordion 3"
                      containerClass="w-full flex items-center mb-5"
                    />

                    <Input
                      label="Tags"
                      id="tags"
                      name="tags"
                      labelClass="block text-gray-700 text-base font-bold w-1/4"
                      component={ReactSelect}
                      errorText={errors.tags}
                      error={touched.tags}
                      onBlur={handleBlur}
                      defaultValue={data?.tags}
                      isMulti
                      options={taglist || []}
                      inputdiv="w-3/4 "
                      placeholder="Tags"
                      containerClass="w-full flex items-center mb-5"
                    />
                    <Input
                      label="Explore Filing Options"
                      id="explore"
                      name="explore"
                      labelClass="block text-gray-700 text-base font-bold w-1/4"
                      component={ReactSelect}
                      errorText={errors.explore}
                      error={touched.explore}
                      onBlur={handleBlur}
                      isMulti
                      options={explorelist || []}
                      inputdiv="w-3/4 "
                      placeholder="Explore"
                      containerClass="w-full flex items-center mb-5"
                    />
                    <Input
                      label="Author"
                      id="author"
                      name="author"
                      labelClass="block text-gray-700 text-base font-bold w-1/4"
                      component={ReactSelect}
                      errorText={errors.author}
                      error={touched.author}
                      onBlur={handleBlur}
                      options={authorlist || []}
                      inputdiv="w-3/4 "
                      placeholder="Author"
                      containerClass="w-full flex items-center mb-5"
                    />

                    <Input
                      label="Status"
                      component="select"
                      id="status"
                      name="status"
                      labelClass="block text-gray-700 text-base font-bold w-1/4"
                      errorText={errors.status}
                      error={touched.status}
                      onBlur={handleBlur}
                      inputdiv="w-3/4"
                      inputClass="appearance-none block rounded-md py-1 px-4  text-gray-700  border-gray-400"
                      placeholder="Status"
                      containerClass="w-full flex items-center mb-5">
                      <option value="draft">Draft</option>
                      <option value="publish">Publish</option>
                    </Input>

                    <Input
                      label="Is Schedule?"
                      id="is_schedule"
                      name="is_schedule"
                      labelClass="block text-gray-700 text-base font-bold w-1/4"
                      type="checkbox"
                      errorText={errors.is_schedule}
                      error={touched.is_schedule}
                      onBlur={handleBlur}
                      inputdiv="w-3/4  block"
                      checkboxClasses="block w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      containerClass="w-full flex items-center mb-5"
                    />
                    <Input
                      label="Schedule at"
                      id="schedule_at"
                      name="schedule_at"
                      labelClass="block text-gray-700 text-base font-bold w-1/4"
                      type="datetime-local"
                      errorText={errors.schedule_at}
                      error={touched.schedule_at}
                      onBlur={handleBlur}
                      inputdiv="w-3/4"
                      inputClass="appearance-none block rounded-md py-1 px-4  text-gray-700  border-gray-400"
                      containerClass="w-full flex items-center mb-5"
                    />
                    <Input
                      label="Order"
                      id="order"
                      name="order"
                      labelClass="block text-gray-700 text-base font-bold w-1/4"
                      type="number"
                      errorText={errors.order}
                      error={touched.order}
                      onBlur={handleBlur}
                      inputdiv="w-3/4"
                      inputClass="appearance-none block rounded-md py-1 px-4  text-gray-700  border-gray-400"
                      containerClass="w-full flex items-center mb-5"
                    />

                    <div className="flex items-center justify-start space-x-4">
                      <Button
                        onClick={(e) => setDeleteModel(true)}
                        type="button"
                        className="bg-red-700 rounded text-base text-white px-3 py-2">
                        Delete Post
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-3">
                <div className="bg-white sticky top-2 rounded-md shadow-md">
                  <div className="border-b border-solid px-2 py-2">
                    <h3>PAGE PROPERTIES</h3>
                  </div>
                  <div className="px-5 py-2 ">
                    <Input
                      label="SEO :: Title"
                      id="seo_name_post"
                      name="seo_name_post"
                      labelClass="block text-gray-700 text-base font-bold mb-1.5"
                      type="text"
                      errorText={errors.seo_name_post}
                      error={touched.seo_name_post}
                      onBlur={handleBlur}
                      inputClass="appearance-none block w-full rounded-md py-1 px-4 text-gray-700  border-gray-400"
                      placeholder="Seo Title"
                      containerClass="w-full mb-5"
                    />
                    <Input
                      label="SEO :: Description"
                      id="description_post"
                      name="description_post"
                      labelClass="block text-gray-700 text-base font-bold mb-1.5"
                      type="text"
                      errorText={errors.description_post}
                      error={touched.description_post}
                      onBlur={handleBlur}
                      inputClass="appearance-none block w-full rounded-md py-1 px-4 text-gray-700  border-gray-400"
                      placeholder="Seo Description"
                      containerClass="w-full mb-5"
                    />

                    <Input
                      label="SEO :: Keywords"
                      id="keywords_seo"
                      name="keywords_seo"
                      labelClass="block text-gray-700 text-base font-bold mb-1.5"
                      type="text"
                      errorText={errors.keywords_seo}
                      error={touched.keywords_seo}
                      onBlur={handleBlur}
                      inputClass="appearance-none block w-full rounded-md py-1 px-4 text-gray-700  border-gray-400"
                      placeholder="Seo Keywords"
                      containerClass="w-full mb-5"
                    />
                    <Input
                      label="Slug:"
                      id="slug"
                      name="slug"
                      labelClass="block text-gray-700 text-base font-bold mb-1.5"
                      type="text"
                      disabled
                      inputClass="appearance-none block w-full rounded-md py-1 px-4 text-gray-700  border-gray-400"
                      placeholder="Seo Keywords"
                      containerClass="w-full mb-5"
                    />
                    {/* <img src={values?.image_post}/> */}
                    <Input
                      label="Featured image:"
                      component={FileUpload}
                      id="image_post"
                      name="image_post"
                      labelClass="block text-gray-700 text-base font-bold mb-1.5"
                      errorText={errors.image_post}
                      error={touched.image_post}
                      onBlur={handleBlur}
                      onChange={(event) => {
                        setFieldValue(
                          "image_post",
                          event?.currentTarget?.files[0] || ""
                        );
                      }}
                      inputClass="appearance-none block w-full rounded-md py-1 px-2 text-gray-700  border-gray-400"
                      containerClass="w-full mb-5"
                    />

                    <Input
                      label="Robots"
                      id="robots"
                      name="robots"
                      labelClass="block text-gray-700 text-base font-bold mb-1.5"
                      type="text"
                      component="select"
                      errorText={errors.robots}
                      error={touched.robots}
                      onBlur={handleBlur}
                      inputClass="appearance-none block w-full rounded-md py-1 px-4 text-gray-700  border-gray-400"
                      placeholder="Robots"
                      containerClass="w-full ">
                      <option value="index, follow">All</option>
                      <option value="noindex, nofollow">None</option>
                      <option value="noindex, follow">No index, Follow</option>
                      <option value="index, nofollow">Index, No follow</option>
                      <option value="index">Index</option>
                      <option value="follow">Follow</option>
                      <option value="noindex">No index</option>
                      <option value="nofollow">No follow</option>
                    </Input>
                    <hr className="border-t-2 border-gray-300 my-4" />
                    <h2 className="text-xl mb-4"> Recommended Blogs</h2>

                    <Input
                      containerClass="w-full mb-4"
                      label="Recommended blog 1:"
                      id="recommended_blog_1"
                      name="recommended_blog_1"
                      labelClass="block text-gray-900 text-base font-bold mb-1.5"
                      errorText={errors.recommended_blog_1}
                      component={ReactSelect}
                      inputClass=""
                      error={touched.recommended_blog_1}
                      onBlur={handleBlur}
                      placeholder="Recommended blog 1"
                      options={recommendedPost || []}
                    />
                    <Input
                      containerClass="w-full mb-4"
                      label="Recommended blog 2:"
                      id="recommended_blog_2"
                      name="recommended_blog_2"
                      labelClass="block text-gray-900 text-base font-bold mb-1.5"
                      errorText={errors.recommended_blog_2}
                      component={ReactSelect}
                      inputClass=""
                      error={touched.recommended_blog_2}
                      onBlur={handleBlur}
                      placeholder="Recommended blog 2"
                      options={recommendedPost || []}
                    />
                    <Input
                      containerClass="w-full mb-4"
                      label="Recommended blog 3:"
                      id="recommended_blog_3"
                      name="recommended_blog_3"
                      labelClass="block text-gray-900 text-base font-bold mb-1.5"
                      errorText={errors.recommended_blog_3}
                      component={ReactSelect}
                      inputClass=""
                      error={touched.recommended_blog_3}
                      onBlur={handleBlur}
                      placeholder="Recommended blog 3"
                      options={recommendedPost || []}
                    />
                    <Input
                      containerClass="w-full mb-4"
                      label="Recommended blog 4:"
                      id="recommended_blog_4"
                      name="recommended_blog_4"
                      labelClass="block text-gray-900 text-base font-bold mb-1.5"
                      errorText={errors.recommended_blog_4}
                      component={ReactSelect}
                      inputClass=""
                      error={touched.recommended_blog_4}
                      onBlur={handleBlur}
                      placeholder="Recommended blog 4"
                      options={recommendedPost || []}
                    />
                    <Input
                      containerClass="w-full mb-4"
                      label="Recommended blog 5:"
                      id="recommended_blog_5"
                      name="recommended_blog_5"
                      labelClass="block text-gray-900 text-base font-bold mb-1.5"
                      errorText={errors.recommended_blog_5}
                      component={ReactSelect}
                      inputClass=""
                      error={touched.recommended_blog_5}
                      onBlur={handleBlur}
                      placeholder="Recommended blog 5"
                      options={recommendedPost || []}
                    />
                    <Input
                      containerClass="w-full mb-4"
                      label="Recommended blog 6:"
                      id="recommended_blog_6"
                      name="recommended_blog_6"
                      labelClass="block text-gray-900 text-base font-bold mb-1.5"
                      errorText={errors.recommended_blog_6}
                      component={ReactSelect}
                      inputClass=""
                      error={touched.recommended_blog_6}
                      onBlur={handleBlur}
                      placeholder="Recommended blog 6"
                      options={recommendedPost || []}
                    />
                    <div className="flex items-center justify-end space-x-2">
                      <Button
                        type="submit"
                        isSubmitting={isSubmitting}
                        className="bg-[#ffc107] border-[#ffc107] rounded text-base text-gray-900 px-2.5 py-2">
                        Save and continue editing
                      </Button>
                      <a
                        href=""
                        type="button"
                        className="bg-theme-color-100 rounded text-base text-white px-2.5 py-2">
                        View on site
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
      <DeleteModal
        open={isDeleteModel}
        isDelete={isDelete}
        onClose={(e) => setDeleteModel(false)}
        onConfirm={onDeledeBlog}
        text="Are you sure delete this post?"
        title="Delete this post?"
      />
    </>
  );
};

export default BlogEdit;
