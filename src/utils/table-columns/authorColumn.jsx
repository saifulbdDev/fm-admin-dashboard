/* eslint-disable react/prop-types */
import { useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/24/solid";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import ViewModal from "@/components/ui/Modals/ViewModal";
import { useGetAuthorDetailQuery } from "@/features/author/authorApi";

const columnHelper = createColumnHelper();

const ViewModalDetails = ({ isView, setView, id }) => {
  const { data, isLoading } = useGetAuthorDetailQuery(id, {
    skip: !id
  });

  const {  author_name, info,  } = data?.data || {};

  return (
    <ViewModal
      isLoading={isLoading}
      title="Author Details"
      onClose={() => setView(false)}
      open={isView}
    >
      <div className="space-y-2">
      <div className="text-gray-700 text-base">
          <b>Author Name: </b> {author_name || "-"}
        </div>
        <div className="text-gray-700 text-base">
          <b>Info: </b> {info || "-"}
        </div>
     
      </div>
    </ViewModal>
  );
};
const ActionsColumn = ({ info }) => {
  const [isView, setView] = useState(false);
  const onViewModel = (id) => {
    setView(true);
    console.log(id, "id");
  };

  return (
    <>
      <div className="flex items-center space-x-2">
        <button type="button" onClick={() => onViewModel(info)}>
          <EyeIcon className="h-4 w-4" />
        </button>
        <Link to={`/admin/author-edit/${info}`}>
          <PencilSquareIcon className="h-4 w-4" />
        </Link>
      </div>
      {isView && (
        <ViewModalDetails setView={setView} isView={isView} id={info} />
      )}
    </>
  );
};


const authorColumn = [
  columnHelper.accessor("fmcsa_author_id", {
    cell: (info) => <span>{info.getValue() || "-"}</span>,
    header: () => <span>ID #</span>
  }),
  columnHelper.accessor("author_name", {
    cell: (info) => <span>{info.getValue() || "-"}</span>,
    header: () => <span>Author Name</span>
  }),
  columnHelper.accessor("info", {
    cell: (info) => <span>{info.getValue() || "-"}</span>,
    header: () => <span>info</span>
  }),

  columnHelper.accessor("created_at", {
    cell: (info) => <span>{info.getValue() || "-"}</span>,
    header: () => <span>Created</span>
  }),
  columnHelper.accessor("updated_at", {
    cell: (info) => <span>{info.getValue() || "-"}</span>,
    header: () => <span>Updated</span>
  }),

  columnHelper.accessor("fmcsa_author_id", {
    cell: (info) => <ActionsColumn info={info.getValue()} />,
    header: () => <span>Actions</span>
  })
];

export default authorColumn;
