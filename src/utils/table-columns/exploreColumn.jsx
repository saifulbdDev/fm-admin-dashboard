/* eslint-disable react/prop-types */
import { useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/24/solid";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import ViewModal from "@/components/ui/Modals/ViewModal";
import {
  useGetExploreDetailQuery,
 
} from "@/features/explore/exploreApi";

const columnHelper = createColumnHelper();

const ViewModalDetails = ({ isView, setView, id }) => {
  const { data, isLoading } = useGetExploreDetailQuery(id, {
    skip: !id
  });

 

  const { explore_f_op_name, explore_f_op_url } = data?.data || {};

  return (
    <ViewModal
      isLoading={isLoading}
      title="Explore Details"
      onClose={() => setView(false)}
      open={isView}
    >
      <div className="space-y-2">
        <h5 className="text-gray-700 text-base">
          <b>Explore Name:</b> {explore_f_op_name || "-"}
        </h5>
        <div className="text-gray-700 text-base">
          <b>Explore url: </b> {explore_f_op_url || "-"}
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
        <Link to={`/admin/explore-edit/${info}`}>
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
  columnHelper.accessor("explore_f_op_id", {
    cell: (info) => <span>{info.getValue() || "-"}</span>,
    header: () => <span>ID #</span>
  }),
  columnHelper.accessor("explore_f_op_name", {
    cell: (info) => <span>{info.getValue() || "-"}</span>,
    header: () => <span>Explore Name</span>
  }),
  columnHelper.accessor("explore_f_op_url", {
    cell: (info) => <span>{info.getValue() || "-"}</span>,
    header: () => <span>Explore Url</span>
  }),

  columnHelper.accessor("created_at", {
    cell: (info) => <span>{info.getValue() || "-"}</span>,
    header: () => <span>Created</span>
  }),
  columnHelper.accessor("updated_at", {
    cell: (info) => <span>{info.getValue() || "-"}</span>,
    header: () => <span>Updated</span>
  }),

  columnHelper.accessor("explore_f_op_id", {
    cell: (info) => <ActionsColumn info={info.getValue()} />,
    header: () => <span>Actions</span>
  })
];

export default accordionColumn;
