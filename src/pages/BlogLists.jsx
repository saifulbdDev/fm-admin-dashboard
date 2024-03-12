import { useMemo, useState, useEffect } from "react";
import Table from "@/components/ui/Table";
import { DebouncedInput } from "@/components/ui/DebouncedInput";
import {
  useGetPostListQuery,
  useGetSubCategoryListQuery,
  useGetCategoryListQuery
} from "@/features/post/postApi";
import blogColumn from "@/utils/table-columns/blogColumn";
import { useSelector } from "react-redux";
import { usePagination } from "@/hooks/usePagination";
import { Link } from "react-router-dom";
import Select from "react-select";
const BlogLists = () => {
  useGetCategoryListQuery();
  const {  onPaginationChange,  pagination } = usePagination(20);
  const { categoryList,subCategoryList } = useSelector((state) => state.post);
  
 
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const [query, setQuery] = useState("");
  useGetSubCategoryListQuery(category?.value, { skip: !category?.value });
  const { data, isFetching } = useGetPostListQuery(
    { page: pagination?.pageIndex || 0, query, category:category?.value, subcategory: subCategory?.value},
   { refetchOnMountOrArgChange: true,}
  );
  const columns = useMemo(() => blogColumn, []);
  const totalPage = Math.ceil((data?.count || 0) / pagination?.pageSize);


  const handleSelectChange = (selectedOption) => {
    setCategory(selectedOption);
  };
  const handleSubSelectChange = (selectedOption) => {
    setSubCategory(selectedOption);
  };
  useEffect(() => {
  
    onPaginationChange((prevState) => ({
      ...prevState,
      pageIndex: 0,
    }));
 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, category,subCategory])

  console.log(pagination, 'pagination')
  return (
   
      <Table
        isLoading={isFetching}      
        onPaginationChange={onPaginationChange}
        pagination={pagination}
        data={data?.results || []}       
        pageCount={totalPage}
        totalRecord={data?.count}
       
        columns={columns}
        title="User List">
        <div className="flex justify-between border-b py-4">
          <div>
            <b className="text-theme-color-700">Blog</b> - Listing
          </div>
          <div>
            <Link
              className="bg-theme-primary-700 text-white rounded px-2.5 text-base font-normal py-2"
              to="/admin/blog-add">
              Add Blog
            </Link>
          </div>
        </div>
        <div className="w-full flex space-x-2 items-center py-3">
          <div className="sm:flex items-center sm:w-[33%] 2xl:w-1/3 space-x-2">
            <label className="font-bold  ">Filter by Category</label>
            <Select
              className="basic-single  min-w-[200px]"
              classNamePrefix="select"
              value={category}
              onChange={handleSelectChange}
              styles={{
                input: (base) => ({
                  ...base,
                  'input:focus': {
                    boxShadow: 'none',
                  },
                }),
              }}
              autoFocus
              defaultValue={categoryList[0]}
              isClearable
              isSearchable
              name="category"
              options={categoryList}
            />
          </div>
          <div className="sm:flex items-center space-x-1.5 sm:w-[37%] 2xl:w-1/3">
            <label className="font-bold ">Filter by Subcategory</label>
            <Select
              className="basic-single min-w-[200px]"
              classNamePrefix="select"
              defaultValue={subCategoryList[0]}
              value={subCategory}
              isClearable
              isSearchable
              styles={{
                input: (base) => ({
                  ...base,
                  'input:focus': {
                    boxShadow: 'none',
                  },
                }),
              }}
              name="category"
              onChange={handleSubSelectChange}
              options={subCategoryList}
            />
          </div>
          <div className="relative rounded-md sm:w-[30%] 2xl:w-1/3 flex justify-end">
            <DebouncedInput
              value={query ?? ""}
              onChange={(value) => setQuery(String(value))}
              placeholder="Search"
            />
          </div>
        </div>
      </Table>
    
  );
};

export default BlogLists;
