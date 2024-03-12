/* eslint-disable react/prop-types */

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const Pagination = ({ maxDisplayedPages, table, totalRecord=0 }) => {


  const pageIndex = table.getState().pagination.pageIndex;
  const pageSize = table.getState().pagination.pageSize;
  const rowCount = table.getRowModel().rows.length;
  const totalPageCount = table.getPageCount(); 


  const startIndex = pageIndex * pageSize + 1;
  const totalshow = (pageIndex+1)*pageSize;

  const pageNumbers =
    totalPageCount <= maxDisplayedPages
      ? Array.from({ length: totalPageCount }, (_, i) => i + 1)
      : calculatePageNumbers();

  function calculatePageNumbers() {
    const middlePage = Math.floor(maxDisplayedPages / 2);
    const startPage = Math.max(0, pageIndex - middlePage);
    const endPage = Math.min(totalPageCount - 1, startPage + maxDisplayedPages - 1);

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i + 1);
  }


  return (
    <>
      {rowCount > 0 && (
        <div className="flex items-center justify-between w-full px-1 py-3 bg-white border-t border-gray-200 ">
          <div className="flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-base text-gray-700">
                Showing <span className="font-medium">{startIndex}</span> to{' '}
                <span className="font-medium">{totalshow > totalRecord ? totalRecord:totalshow}</span> of{' '}
                <span className="font-medium">{totalRecord}</span>{' '}
                {totalPageCount > 1 ? 'entries' : 'item'}
              </p>
            </div>
            <div>
              <nav className="hidden -space-x-px rounded-md shadow-sm isolate sm:inline-flex" aria-label="Pagination">
                <button
                  type="button"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  className="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-l-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                </button>
                {pageNumbers.map((pageNumber, index) => (
                  <button
                    key={index}
                    onClick={() => table.setPageIndex(pageNumber - 1)}
                    type="button"
                    className={`${
                      pageIndex === pageNumber - 1
                        ? 'bg-theme-color-200 text-white hover:bg-theme-color-200 ring-1'
                        : 'ring-gray-300 hover:bg-gray-50 text-gray-500 ring-inset ring-1'
                    } relative inline-flex items-center px-4 py-2 text-sm font-medium  hover:z-10 focus:z-10 focus:outline-offset-0`}
                  >
                    {pageNumber}
                  </button>
                ))}
                <button
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  className={`${
                    !table.getCanNextPage() ? 'text-[#9CA3AF]' : 'text-black'
                  } relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Pagination;