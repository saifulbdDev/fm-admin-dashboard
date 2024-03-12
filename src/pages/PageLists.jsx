import { useMemo, useState, useEffect } from "react";
import Table from "@/components/ui/Table";
import { DebouncedInput } from "@/components/ui/DebouncedInput";
import { useGetPageListQuery } from "@/features/post/postApi";
import pageColumn from "@/utils/table-columns/pageColumn";
import { usePagination } from "@/hooks/usePagination";
import { Link } from "react-router-dom";
const PageLists = () => {
  const { onPaginationChange, pagination } = usePagination(20);
  const [query, setQuery] = useState("");

  const { data, isFetching } = useGetPageListQuery(
    { page: pagination?.pageIndex || 0, query },
   
  );
  const columns = useMemo(() => pageColumn, []);
  const totalPage = Math.ceil((data?.count || 0) / pagination?.pageSize);

  useEffect(() => {
    onPaginationChange((prevState) => ({
      ...prevState,
      pageIndex: 0
    }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  console.log(pagination, 'pagination')
  return (
    <Table
      isLoading={isFetching}
      onPaginationChange={onPaginationChange}
      pagination={pagination}
      totalRecord={data?.count}
      data={data?.results || []}
      pageCount={totalPage}
      columns={columns}
      title="User List">
      <div className="flex justify-between border-b py-4">
        <div>
          <b className="text-theme-color-700">Page</b> - Listing
        </div>
        <div>
          <Link
            className="bg-theme-primary-700 text-white rounded px-2.5 text-base font-normal py-2"
            to="/admin/page-add">
            Add Page
          </Link>
        </div>
      </div>
      <div className="w-full flex space-x-2 py-3 items-end justify-end">
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

export default PageLists;
