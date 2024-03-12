import { useState } from "react";

export function usePagination(initialSize = 5) {
  const [pagination, setPagination] = useState({
    pageSize: initialSize,
    pageIndex: 0,
  });


  return {
    // table states
    onPaginationChange: setPagination,
    pagination,
  
  };
}