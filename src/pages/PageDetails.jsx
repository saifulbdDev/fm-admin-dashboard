import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import PageLoader from "@/components/ui/PageLoader";
import { toast } from "react-toastify";
import DeleteModal from "@/components/ui/Modals/DeleteModal";

import {
  useDeletePageMutation,
  useGetPageDetailsQuery
} from "@/features/post/postApi";

const PageDetails = () => {
  const [isDeleteModel, setDeleteModel] = useState(false);

  const navigate = useNavigate();

  const [deletePage, { isLoading: isDelete }] = useDeletePageMutation();
  let { page_id } = useParams();

  const { data, isLoading } = useGetPageDetailsQuery(page_id, {
    skip: !page_id
  });
  let pageDetail = data?.pageData;


  const onDeledePage = async () => {
    try {
      await deletePage(page_id);

      toast.success("Page Deleted Successfully!");
      navigate("/admin/page-list");
      setDeleteModel(false);
    } catch (error) {
      // Handle errors during the asynchronous operation
      console.error("Error deleting page:", error.message);
      toast.error("Error deleting page. Please try again.");
    }
  };

  return (
    <>
      <div className="flex">
        {isLoading ? <PageLoader /> : ""}
        <div className="w-2/3">
          <div className="bg-white rounded-md shadow-md">
            <div className="border-b border-solid">
              <h3 className="bg-theme-color-200 inline-block font-bold  px-2 py-3 text-white">
                View Page
              </h3>
            </div>
            <div className="px-5 py-2 ">
              <div className="mb-4">
                <h2 className="text-3xl font-medium">{pageDetail?.title}</h2>
              </div>

              <div className="my-3">
                <label className="bg-theme-color-200 text-white block font-bold px-1 py-0.5 rounded-sm mb-1">
                  Post content
                </label>
                <div
                  className="overscroll-contain overflow-y-auto h-60 border-2 border-solid p-3"
                  dangerouslySetInnerHTML={{
                    __html: pageDetail?.content_1
                  }}></div>
              </div>
              <div className="my-3 flex space-x-2 ">
                <label className=" text-gray-600 block font-bold px-1 py-0.5 rounded-sm mb-1 w-1/4">
                  Snippet 1
                </label>
                <div className="px-3 text-gray-600 w-3/4">
                  {pageDetail?.snippet_1}
                </div>
              </div>
              <div className="my-3">
                <label className="bg-theme-color-200 text-white block font-bold px-1 py-0.5 rounded-sm mb-1">
                  Post content 2
                </label>
                <div
                  className="overscroll-contain overflow-y-auto h-60 border-2 border-solid p-3"
                  dangerouslySetInnerHTML={{
                    __html: pageDetail?.content_2
                  }}></div>
              </div>
              <div className="my-3 flex space-x-2 ">
                <label className=" text-gray-600 block font-bold px-1 py-0.5 rounded-sm mb-1 w-1/4">
                  Snippet 2
                </label>
                <div className="px-3 text-gray-600 w-3/4">
                  {pageDetail?.snippet_2}
                </div>
              </div>
              <div className="my-3">
                <label className="bg-theme-color-200 text-white block font-bold px-1 py-0.5 rounded-sm mb-1">
                  Post content 3
                </label>
                <div
                  className="overscroll-contain overflow-y-auto h-60 border-2 border-solid p-3"
                  dangerouslySetInnerHTML={{
                    __html: pageDetail?.content_3
                  }}></div>
              </div>
              <div className="my-3 flex space-x-2 ">
                <label className=" text-gray-600 block font-bold px-1 py-0.5 rounded-sm mb-1 w-1/6">
                  Status
                </label>
                <div className="px-3 text-gray-800 capitalize w-5/6">
                  {pageDetail?.status}
                </div>
              </div>

              <div className="flex space-x-2 items-center justify-between">
                <button
                  type="button"
                  onClick={() => setDeleteModel(true)}
                  className="btn px-2 rounded text-white py-1.5 bg-red-600 border-red-600">
                  Delete Post
                </button>
                <Link
                  to={`/admin/page-edit/${page_id}`}
                  className="btn px-2 rounded text-white py-1.5 border-theme-primary-700 bg-theme-primary-700">
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
                <div className="mb-4">{pageDetail?.seo_name_post}</div>
              </div>
              <div className="my-3 border-b-2 border-solid">
                <label className="text-gray-700 block font-bold rounded-sm mb-2">
                  SEO :: Description
                </label>
                <div className="mb-4">{pageDetail?.description_post}</div>
              </div>
              <div className="my-3 border-b-2 border-solid">
                <label className="text-gray-700 block font-bold rounded-sm mb-2">
                  SEO :: Keywords
                </label>
                <div className="mb-4">{pageDetail?.keywords_seo}</div>
              </div>
              <div className="my-3 border-b-2 border-solid">
                <label className="text-gray-700 block font-bold rounded-sm mb-2">
                  Slug
                </label>
                <div className="mb-4">{pageDetail?.slug}</div>
              </div>
              <div className="my-3 border-b-2 border-solid">
                <label className="text-gray-700 block font-bold rounded-sm mb-2">
                  Robots
                </label>
                <div className="mb-4">{pageDetail?.robots}</div>
              </div>
              <div className="flex space-x-2 items-center justify-end">
                <a
                  href={pageDetail?.slugUrl}
                  target="blank"
                  className="btn px-2 rounded text-white py-1.5 border-theme-primary-700 bg-theme-primary-700">
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
        onClose={() => setDeleteModel(false)}
        onConfirm={onDeledePage}
        text="Are you sure delete this page?"
        title="Delete this page?"
      />
    </>
  );
};

export default PageDetails;
