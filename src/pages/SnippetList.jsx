import { useMemo, useState, useEffect } from "react";
import Table from "@/components/ui/Table";
import TableBar from "@/components/ui/TableBar";
import {
  useGetSnippetListQuery,
} from "@/features/snippet/snippetApi";
import snippetColumn from "@/utils/table-columns/snippetColumn";
import { usePagination } from "@/hooks/usePagination";
import { Link } from "react-router-dom";
const SnippetsList = () => { 
  const {  onPaginationChange,  pagination } = usePagination(10);
  const [query, setQuery] = useState(""); 
  const { data, isFetching } = useGetSnippetListQuery(
  
   
  );


  const totalPage = Math.ceil((data?.data?.length || 0) / pagination?.pageSize);
  // const dataPagention = () => {
  //   {
  //     page: pagination?.pageIndex || 0,
  //     size: pagination?.pageSize || 0,
  //     q:query,
    
  //   },

  // }

  const filteredData = useMemo(() => {
    if (!data?.data?.length) return [];
    
    const { pageIndex, pageSize } = pagination ?? {};
    const lowerCaseQuery = query.toLowerCase();
    
  
    // Adjust pageIndex to be at least 1
  
   let carrentIndex = pageIndex+1
    const startIndex = (carrentIndex - 1) * pageSize;
    const endIndex =  startIndex + pageSize;
  
    // Filter the data based on query and pagination
    const filteredResult = data?.data
      .filter(snippet =>
        query ? snippet.name.toLowerCase().includes(lowerCaseQuery) : true
      )
      .slice(startIndex, endIndex);
  
    return filteredResult;
  
  }, [data, query, pagination]);


 


  const columns = useMemo(() => snippetColumn, []);



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
      data={filteredData || []}
      pageCount={totalPage}
      totalRecord={data?.data?.length||0}
      columns={columns}
      title="User List">
      <div className="flex justify-between border-b py-4">
        <div>
          <b className="text-theme-color-700">Snippet </b> - Listing
        </div>
        <div>
          <Link
            className="bg-theme-primary-700 text-white rounded px-2.5 text-base font-normal py-2"
            to="/admin/snippet-add">
            Add Snippet 
          </Link>
        </div>
      </div>
      <TableBar setQuery={setQuery} query={query} pageSize={pagination?.pageSize} onPaginationChange={onPaginationChange}/>
     
    </Table>
  );
};

export default SnippetsList;
