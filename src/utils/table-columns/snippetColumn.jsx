/* eslint-disable react/prop-types */

import { createColumnHelper } from "@tanstack/react-table";
import { Link } from "react-router-dom";

import { PencilSquareIcon } from "@heroicons/react/24/outline";

const columnHelper = createColumnHelper();

const accordionColumn = [
 
  columnHelper.accessor("name", {
    cell: (info) => <span>{info.getValue() || "-"}</span>,
    header: () => <span>Name</span>
  }),
  columnHelper.accessor("category", {
    cell: (info) => <span>{info.getValue() || "-"}</span>,
    header: () => <span>Category</span>
  }),

  columnHelper.accessor("id", {
    cell: (info) => {
      return (
        <div className="flex items-center  space-x-2">
          <Link to={`/admin/snippet-edit/${info.getValue()}`}>
            <PencilSquareIcon className="h-4 w-4" />
          </Link>
        </div>
      );
    },
    header: () => <span>Actions</span>
  })
];

export default accordionColumn;
