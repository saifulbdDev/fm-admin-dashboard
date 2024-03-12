
import { useParams, Link, useNavigate } from "react-router-dom";
import  { useState } from "react";
import PageLoader from '@/components/ui/PageLoader'
import { toast } from "react-toastify";
import DeleteModal from "@/components/ui/Modals/DeleteModal";
import { BlogDetailData } from "@/utils/postData";
import {
  useDeletePostMutation,
  useGetCategoryListQuery,
  useGetBlogDetailQuery,
  useGetSubCategorysListQuery
} from "@/features/post/postApi";

import { useSelector } from "react-redux";

const BlogDetails = () => {
  const [isDeleteModel, setDeleteModel] = useState(false);
  const { categoryList } = useSelector((state) => state.post);
  const navigate = useNavigate();
  useGetCategoryListQuery();
  const { data: subCategory, isLoading: isSubCategory } =
    useGetSubCategorysListQuery();
    const [deletePost, { isLoading: isDelete }] = useDeletePostMutation();
  let { blog_id } = useParams();


  const { data, isLoading } = useGetBlogDetailQuery(blog_id, {
    skip: !blog_id
  });
  let blogDetail = BlogDetailData(
    data?.data || [],
    categoryList,
    subCategory?.data || []
  );

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

  return (
    <>
    <div className="flex">
        {  isLoading || isSubCategory ? <PageLoader/> :'' }
      <div className="w-2/3">
        <div className="bg-white rounded-md shadow-md">
          <div className="border-b border-solid">
            <h3 className="bg-theme-color-200 inline-block font-bold  px-2 py-3 text-white">
              View Blog
            </h3>
          </div>
          <div className="px-5 py-2 ">
            <div className="mb-4">
              <h2 className="text-3xl font-medium">{blogDetail?.title}</h2>
            </div>

            <div className="my-3">
              <label className="bg-theme-color-200 text-white block font-bold px-1 py-0.5 rounded-sm mb-1">
                Category
              </label>
              <div className="px-3">{blogDetail?.category}</div>
            </div>
            <div className="my-3">
              <label className="bg-theme-color-200 text-white block font-bold px-1 py-0.5 rounded-sm mb-1">
                Subcategory
              </label>
              <div className="px-3">{blogDetail?.subcategory}</div>
            </div>

            <div className="my-3">
              <label className="bg-theme-color-200 text-white block font-bold px-1 py-0.5 rounded-sm mb-1">
                Post content
              </label>
              <div
                className="overscroll-contain overflow-y-auto h-60 border-2 border-solid p-3"
                dangerouslySetInnerHTML={{
                  __html: blogDetail?.content_1
                }}></div>
            </div>
            <div className="my-3 flex space-x-2 ">
              <label className=" text-gray-600 block font-bold px-1 py-0.5 rounded-sm mb-1 w-1/4">
                Snippet 1
              </label>
              <div className="px-3 text-gray-600 w-3/4">
                {blogDetail?.snippet_1}
              </div>
            </div>
            <div className="my-3">
              <label className="bg-theme-color-200 text-white block font-bold px-1 py-0.5 rounded-sm mb-1">
                Post content 2
              </label>
              <div
                className="overscroll-contain overflow-y-auto h-60 border-2 border-solid p-3"
                dangerouslySetInnerHTML={{
                  __html: blogDetail?.content_2
                }}></div>
            </div>
            <div className="my-3 flex space-x-2 ">
              <label className=" text-gray-600 block font-bold px-1 py-0.5 rounded-sm mb-1 w-1/4">
                Snippet 2
              </label>
              <div className="px-3 text-gray-600 w-3/4">
                {blogDetail?.snippet_2}
              </div>
            </div>
            <div className="my-3">
              <label className="bg-theme-color-200 text-white block font-bold px-1 py-0.5 rounded-sm mb-1">
                Post content 3
              </label>
              <div
                className="overscroll-contain overflow-y-auto h-60 border-2 border-solid p-3"
                dangerouslySetInnerHTML={{
                  __html: blogDetail?.content_3
                }}></div>
            </div>
            <div className="my-3 flex space-x-2 ">
              <label className=" text-gray-600 block font-bold px-1 py-0.5 rounded-sm mb-1 w-1/6">
                Status
              </label>
              <div className="px-3 text-gray-800 capitalize w-5/6">
                {blogDetail?.status}
              </div>
            </div>

            <div className="my-3 flex space-x-2 items-center">
              <label className=" text-gray-600 block font-bold px-1 py-0.5  w-1/6">
                Is Schedule?
              </label>
              <div className="px-3 text-gray-800 capitalize w-5/6">
                <input
                  type="checkbox"
                  disabled
                  checked={blogDetail.is_schedule}
                  className="block w-4  border-0 text-theme-color-200  ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
                />
              </div>
            </div>
            <div className="my-3 flex space-x-2 items-center">
              <label className=" text-gray-600 block font-bold px-1 py-0.5  w-1/6">
                Schedule at
              </label>
              <div className="px-3 text-gray-800 capitalize w-5/6">
                <input
                  type="datetime-local"
                  disabled
                  value={blogDetail?.schedule_at}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="my-3 flex space-x-2 items-center">
              <label className=" text-gray-600 block font-bold px-1 py-0.5  w-1/6">
                Order
              </label>
              <div className="px-3 text-gray-800 capitalize w-5/6">
                <input
                  type="text"
                  disabled
                  value={blogDetail?.order}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex space-x-2 items-center justify-between">
              <button type="button"     onClick={(e) => setDeleteModel(true)} className="btn px-2 rounded text-white py-1.5 bg-red-600 border-red-600">
                Delete Post
              </button>
              <Link to={`/admin/blog-edit/${blog_id}`} className="btn px-2 rounded text-white py-1.5 border-theme-primary-700 bg-theme-primary-700">
                Edit Post
              </Link>
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
      
 
            <div className="my-3 border-b-2 border-solid">
              <label className="text-gray-700 block font-bold rounded-sm mb-2">
                SEO :: Title
              </label>
              <div className="mb-4">{blogDetail?.seoNamePost}</div>
            </div>
            <div className="my-3 border-b-2 border-solid">
              <label className="text-gray-700 block font-bold rounded-sm mb-2">
                SEO :: Description
              </label>
              <div className="mb-4">{blogDetail?.descriptionPost}</div>
            </div>
            <div className="my-3 border-b-2 border-solid">
              <label className="text-gray-700 block font-bold rounded-sm mb-2">
                SEO :: Keywords
              </label>
              <div className="mb-4">{blogDetail?.keywordsPost}</div>
            </div>
            <div className="my-3 border-b-2 border-solid">
              <label className="text-gray-700 block font-bold rounded-sm mb-2">
                Slug
              </label>
              <div className="mb-4">{blogDetail?.slugPost}</div>
            </div>
            <div className="my-3 border-b-2 border-solid">
              <label className="text-gray-700 block font-bold rounded-sm mb-2">
              Robots
              </label>
              <div className="mb-4">{blogDetail?.robots}</div>
            </div>
            <div className="flex space-x-2 items-center justify-end">
             
              <a href={blogDetail?.slugUrl} target="blank" className="btn px-2 rounded text-white py-1.5 border-theme-primary-700 bg-theme-primary-700">
              View on site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
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

export default BlogDetails;
