/* eslint-disable react/prop-types */
// Table.js
import { useMemo } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import PageLoader from './PageLoader'
import Pagination from "./Pagination";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues
} from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";

const fuzzyFilter = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta({
    itemRank
  });
  return itemRank.passed;
};

const Table = ({
  children,
  data: tableData,
  columns: tableColumns,
  globalFilter,
  onGlobalFilterChange,
  isLoading,
  onPaginationChange,  
  pageCount,
  pagination,
  totalRecord,
}) => {
  const data = useMemo(() => tableData, [tableData]);  
  const columns = useMemo(() => tableColumns, [tableColumns]);
  const table = useReactTable({

    columns,
    data,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      globalFilter,
      pagination,
    },
    pageCount,     
    manualPagination: true,
    onGlobalFilterChange,
    onPaginationChange,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  });

  return (
    <div className="flex flex-col">
      <div className="align-middle inline-block w-full overflow-hidden mt-6">
        <div className={`sm:px-6 px-3  bg-white rounded-lg shadow-lg min-h-screen ${!table?.getRowModel()?.rows?.length ?'pb-3 sm:pb-6':''}`}>
          {children}
        {  isLoading ? <PageLoader/> :'' }
          <div className="overflow-x-auto w-full ">
            <table className="w-full border-collapse   border border-solid">
              <thead className="text-left">
                {table.getHeaderGroups().map((headerGroup, index) => (
                  <tr key={`${headerGroup.id}-tr-${index}`} className="hover:bg-theme-color-200 group">
                    {headerGroup.headers.map((header, i) => (
                      <th
                        key={`${header.id}-th-${i}`}
                        colSpan={header.colSpan}
                        scope="col"
                        className="lg:max-w-[200px] px-2 py-1 text-base text-black border group-hover:text-white">
                        {header.isPlaceholder ? null : (
                          <button
                            {...{
                              className: header.column.getCanSort()
                                ? "cursor-pointer select-none w-full"
                                : "w-full",
                              onClick: header.column.getToggleSortingHandler()
                            }}>
                            <div className="flex items-center justify-between w-full">
                              <span className="">
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                              </span>

                              {header.column.getCanSort() && (
                                <div className="flex ml-3">
                                   <ArrowUpIcon className={`w-3 h-2.5  ${header?.column?.getIsSorted() === "asc" ? 'text-gray-900 group-hover:text-white':'group-hover:text-gray-400'}`} />
                                   <ArrowDownIcon className={`w-3 h-2.5 ${header?.column?.getIsSorted() === "desc" ? 'text-gray-900 group-hover:text-white':'group-hover:text-gray-400'}`}  />
                                  
                                </div>
                              )}
                            </div>
                          </button>
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="bg-white">
                { table?.getRowModel()?.rows.map((row) => (
                      <tr
                        key={row.id + "_row"}
                        className="border-b group hover:bg-theme-color-200 even:bg-[rgba(0,0,0,.05)]">
                        {row.getVisibleCells().map((cell, i) => (
                          <td
                            key={`${cell.id}-${i}`}
                            className=" lg:max-w-[200px] px-2 py-1 break-words text-sm group-hover:text-white border ">
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                {!isLoading && !table?.getRowModel()?.rows?.length && (
                  <tr className="border-b text-center bg-[rgba(0,0,0,.05)]">
                    <td colSpan={20} className="text-center h-4">
                      <div className="p-4">No data available in table</div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <Pagination maxDisplayedPages={5} table={table} totalRecord={totalRecord}/>
        </div>
      </div>
    </div>
  );
};


export default Table;
