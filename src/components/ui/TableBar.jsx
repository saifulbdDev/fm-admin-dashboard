import { DebouncedInput } from "@/components/ui/DebouncedInput";
import { useCallback } from 'react';

const TableBar = ({ setQuery, query, onPaginationChange, pageSize }) => {
  const onPageSizeChange = useCallback((value) => {
    onPaginationChange(() => ({
      pageIndex: 0,
      pageSize: value
    }));
  }, [onPaginationChange]);


  return (
    <div className="w-full flex space-x-2 items-center py-3 justify-between">
      <div className="w-full sm:w-1/2">
        <div className="relative inline-block w-full max-w-[80px]">
          <select
            value={pageSize}
            onChange={(event) => onPageSizeChange(event?.target?.value)}
            className="block appearance-none w-full h-full py-1 px-2 pr-2 text-base font-normal leading-1.5 text-gray-700 bg-white border border-gray-300 rounded-md shadow-inner focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>

      <div className="relative w-full sm:w-1/2">
        <div className="flex justify-end">
          <DebouncedInput
            value={query ?? ""}
            onChange={(value) => setQuery(String(value))}
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default TableBar;