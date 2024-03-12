/* eslint-disable react/prop-types */
import { useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/24/solid";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import ViewModal from "@/components/ui/Modals/ViewModal";
import { useGetTagDetailQuery,  } from "@/features/tag/tagApi";

const columnHelper = createColumnHelper();

const ViewModalDetails = ({ isView, setView, id }) => {
  const { data, isLoading } = useGetTagDetailQuery(id, {
    skip: !id
  });

  const { tag_texts,  tag_url} = data?.data || {};

  return (
    <ViewModal
      isLoading={isLoading}
      title="Tag Details"
      onClose={() => setView(false)}
      open={isView}
    >
      <div className="space-y-2">      
        <div className="text-gray-700 text-base">
          <b>Tag Text: </b> {tag_texts || "-"}
        </div>
        <div className="text-gray-700 text-base">
          <b>Tag url: </b> {tag_url || "-"}
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
        <Link to={`/admin/tag-edit/${info}`}>
          <PencilSquareIcon className="h-4 w-4" />
        </Link>
      </div>
      {isView && (
        <ViewModalDetails setView={setView} isView={isView} id={info} />
      )}
    </>
  );
};

const accordionColumn = [
  columnHelper.accessor("post_tag_id", {
    cell: (info) => <span>{info.getValue() || "-"}</span>,
    header: () => <span>ID #</span>
  }),
  columnHelper.accessor("tag_texts", {
    cell: (info) => <span>{info.getValue() || "-"}</span>,
    header: () => <span>Tag Text</span>
  }),
  columnHelper.accessor("tag_url", {
    cell: (info) => <span>{info.getValue() || "-"}</span>,
    header: () => <span>Tag Url</span>
  }),

  columnHelper.accessor("updated_at", {
    cell: (info) => <span>{info.getValue() || "-"}</span>,
    header: () => <span>Updated</span>
  }),

  columnHelper.accessor("post_tag_id", {
    cell: (info) => <ActionsColumn info={info.getValue()} />,
    header: () => <span>Actions</span>
  })
];

export default accordionColumn;
