import { useMemo, useState, useEffect } from "react";
import Table from "@/components/ui/Table";
import TableBar from "@/components/ui/TableBar";
import { useGetAccordionListQuery } from "@/features/accordion/accordionApi";
import accordionColumn from "@/utils/table-columns/accordionColumn";
import { usePagination } from "@/hooks/usePagination";
import { Link } from "react-router-dom";
const BlogLists = () => {
  const { onPaginationChange, pagination } = usePagination(10);

  const [query, setQuery] = useState("");

  const { data, isFetching } = useGetAccordionListQuery({
    page: pagination?.pageIndex || 0,
    size: pagination?.pageSize || 0,
    q: query
  });

  const columns = useMemo(() => accordionColumn, []);

  useEffect(() => {
    onPaginationChange((prevState) => ({
      ...prevState,
      pageIndex: 0
    }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  return (
    <Table
      isLoading={isFetching}
      onPaginationChange={onPaginationChange}
      pagination={pagination}
      data={data?.results?.data || []}
      pageCount={data?.results?.count_page}
      totalRecord={data?.count}
      columns={columns}
      title="User List">
      <div className="flex justify-between border-b py-4">
        <div>
          <b className="text-theme-color-700">Accordion</b> - Listing
        </div>
        <div>
          <Link
            className="bg-theme-primary-700 text-white rounded px-2.5 text-base font-normal py-2"
            to="/admin/accordion-add">
            Add Accordion
          </Link>
        </div>
      </div>
      <TableBar
        setQuery={setQuery}
        query={query}
        pageSize={pagination?.pageSize}
        onPaginationChange={onPaginationChange}
      />
    </Table>
  );
};

export default BlogLists;
