import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import FileUpload from "@/components/ui/fileUpload.jsx";
import Input from "@/components/ui/Input";
import { toast } from "react-toastify";
import { PlusIcon, PencilIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Button from "@/components/ui/Buttons/Button";
import ReactSelect from "@/components/ui/ReactSelect";
import { pageSchema } from "@/utils/validations/blogSchema";
import { generateSlug } from "@/utils/postData";
import PageLoader from "@/components/ui/PageLoader";
import DeleteModal from "@/components/ui/Modals/DeleteModal";
import {
  useUpdatePageMutation,
  useGetPageDetailsQuery,
  useDeletePageMutation,
  useGetSnippetsListQuery
} from "@/features/post/postApi";

import { useSelector } from "react-redux";
const CKEditor = React.lazy(() => import("@components/ui/CKEditor"));
const PageAdd = () => {
  let { id } = useParams();
  const [isDeleteModel, setDeleteModel] = useState(false);
  const { data, isLoading } = useGetPageDetailsQuery(id, {
    skip: !id
  });
  const [updatePageMutation] = useUpdatePageMutation();
  const { snippets } = useSelector((state) => state.post);
  const [deletePage, { isLoading: isDelete }] = useDeletePageMutation();
  const navigate = useNavigate();
  useGetSnippetsListQuery();

  const submitHandler = async (values) => {
    try {
      const response = await updatePageMutation({ ...values, id });
      console.log(response);
      if ("error" in response) {
        // Handling error
        toast.error("Error to save edit page");
      } else if (response?.data?.message) {
        toast.success(response?.data?.message);
        navigate("/admin/page-list");
      }
    } catch (error) {
      toast.error("Error to publish Page");
    }
  };
  const onDeledePage = async () => {
    try {
      await deletePage(id);

      toast.success("Page Deleted Successfully!");
      navigate("/admin/page-list");
      setDeleteModel(false);
    } catch (error) {
      // Handle errors during the asynchronous operation
      console.error("Error deleting page:", error.message);
      toast.error("Error deleting page. Please try again.");
    }
  };

  const seoTitleChange = (e, setFieldValue) => {
    let seoTitle = e?.target?.value;

    let slug = generateSlug(seoTitle);
    setFieldValue("seo_name_post", seoTitle);
    setFieldValue("slug", slug);
  };

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <Formik
          initialValues={data?.pageData}
          validationSchema={pageSchema}
          onSubmit={(values) => submitHandler(values)}>
          {({
            errors,
            values,
            isSubmitting,
            setFieldValue,
            handleBlur,
            touched
          }) => (
            <Form className="flex">
              <div className="w-2/3">
                <div className="bg-white rounded-md shadow-md">
                  <div className="border-b border-solid">
                    <h3 className="bg-theme-color-200 inline-block font-bold  px-2 py-3 text-white">
                      Edit Page
                    </h3>
                  </div>
                  <div className="px-5 py-2 ">
                    <Input
                      label="Page name"
                      id="name_post"
                      name="name_post"
                      labelClass="block text-gray-700 text-base font-bold mb-1.5"
                      type="text"
                      errorText={errors.name_post}
                      error={touched.name_post}
                      onBlur={handleBlur}
                      inputClass="appearance-none block w-full rounded-md py-1 px-4 text-gray-700  border-gray-400"
                      placeholder="Page name"
                      containerClass="w-full mb-4"
                    />
                    <CKEditor
                      label="Page content"
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
                      label="Page content 2"
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
                      label="Page content 3"
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
                    <div className="flex items-center justify-start space-x-4">
                      <Button
                        onClick={() => setDeleteModel(true)}
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
                      onChange={(ev) => seoTitleChange(ev, setFieldValue)}
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
                      placeholder="Seo Slug"
                      containerClass="w-full mb-5"
                    />
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
                      {" "}
                      <option value="index, follow">All</option>
                      <option value="noindex, nofollow">None</option>
                      <option value="noindex, follow">No index, Follow</option>
                      <option value="index, nofollow">Index, No follow</option>
                      <option value="index">Index</option>
                      <option value="follow">Follow</option>
                      <option value="noindex">No index</option>
                      <option value="nofollow">No follow</option>
                    </Input>
                    <div className="flex items-center mt-5 justify-end space-x-2">
                      <Button
                        type="submit"
                        isSubmitting={isSubmitting}
                        className="bg-[#ffc107] border-[#ffc107] rounded text-base text-gray-900 px-2.5 py-2">
                        Save and continue editing
                      </Button>
                      <a
                        href={values.url}
                        target="blank"
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
        onClose={() => setDeleteModel(false)}
        onConfirm={onDeledePage}
        text="Are you sure delete this page?"
        title="Delete this page?"
      />
    </>
  );
};

export default PageAdd;
