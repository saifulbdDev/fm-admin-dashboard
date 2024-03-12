import { useMemo, useState, useEffect } from "react";
import Table from "@/components/ui/Table";
import TableBar from "@/components/ui/TableBar";
import {
  useGetExploreListQuery,
} from "@/features/explore/exploreApi";
import exploreColumn from "@/utils/table-columns/exploreColumn";
import { usePagination } from "@/hooks/usePagination";
import { Link } from "react-router-dom";
const ExploresList = () => { 
  const {  onPaginationChange,  pagination } = usePagination(10);
  const [query, setQuery] = useState(""); 
  const { data, isFetching } = useGetExploreListQuery(
    {
      page: pagination?.pageIndex || 0,
      size: pagination?.pageSize || 0,
      q:query,
    
    },
   
  );


  const columns = useMemo(() => exploreColumn, []);



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
      data={data?.results?.data || []}
      totalRecord={data?.count}
      pageCount={data?.results?.count_page
      }
      columns={columns}
      title="User List">
      <div className="flex justify-between border-b py-4">
        <div>
          <b className="text-theme-color-700">Explore </b> - Listing
        </div>
        <div>
          <Link
            className="bg-theme-primary-700 text-white rounded px-2.5 text-base font-normal py-2"
            to="/admin/explore-add">
            Add Explore 
          </Link>
        </div>
      </div>
      <TableBar setQuery={setQuery} query={query} pageSize={pagination?.pageSize} onPaginationChange={onPaginationChange}/>
     
    </Table>
  );
};

export default ExploresList;
