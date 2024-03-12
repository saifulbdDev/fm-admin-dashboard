import { useMemo, useState, useEffect } from "react";
import Table from "@/components/ui/Table";
import TableBar from "@/components/ui/TableBar";
import {
  useGetAuthorListQuery,
} from "@/features/author/authorApi";
import authorColumn from "@/utils/table-columns/authorColumn";
import { usePagination } from "@/hooks/usePagination";
import { Link } from "react-router-dom";
const AuthorsList = () => { 
  const {  onPaginationChange,  pagination } = usePagination(10);
  const [query, setQuery] = useState(""); 
  const { data, isFetching } = useGetAuthorListQuery(
    {
      page: pagination?.pageIndex || 0,
      size: pagination?.pageSize || 0,
      q:query,
    
    },
   
  );


  const columns = useMemo(() => authorColumn, []);



  useEffect(() => {
    onPaginationChange((prevState) => ({
      ...prevState,
      pageIndex: 0
    }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query,]);
  return (
    <Table
      isLoading={isFetching}
      onPaginationChange={onPaginationChange}
      pagination={pagination}
      totalRecord={data?.count}
      data={data?.results?.data || []}
      pageCount={data?.results?.count_page
      }
      columns={columns}
      title="User List">
      <div className="flex justify-between border-b py-4">
        <div>
          <b className="text-theme-color-700">Author </b> - Listing
        </div>
        <div>
          <Link
            className="bg-theme-primary-700 text-white rounded px-2.5 text-base font-normal py-2"
            to="/admin/author-add">
            Add Author 
          </Link>
        </div>
      </div>
      <TableBar setQuery={setQuery} query={query} pageSize={pagination?.pageSize} onPaginationChange={onPaginationChange}/>
     
    </Table>
  );
};

export default AuthorsList;
