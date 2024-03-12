/* eslint-disable react/prop-types */
import { useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/24/solid";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import ViewModal from "@/components/ui/Modals/ViewModal";
import { useGetAccordionDetailQuery } from "@/features/accordion/accordionApi";

const columnHelper = createColumnHelper();

const ViewModalDetails = ({ isView, setView, id }) => {
  const { data, isLoading } = useGetAccordionDetailQuery(id, {
    skip: !id
  });

  const { title, button_text, button_url, updated_at, content } = data?.data || {};

  return (
    <ViewModal
      isLoading={isLoading}
      title="Accordion Details"
      onClose={() => setView(false)}
      open={isView}
    >
      <div className="space-y-2">
        <h5 className="text-lg font-semibold text-gray-700">
          <b>Title: </b> {title || "-"}
        </h5>
        <div className="text-gray-700 text-base">
          <b>Button Text: </b> {button_text || "-"}
        </div>
        <div className="text-gray-700 text-base">
          <b>Button url: </b> {button_url || "-"}
        </div>
        <div className="text-gray-700 text-base">
          <b>Updated: </b> {updated_at || "-"}
        </div>
        <div className="text-gray-700 text-base">
          <b>Content: </b> <p className="">{content || "-"}</p>
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
        <Link to={`/admin/accordion-edit/${info}`}>
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
  columnHelper.accessor("title", {
    cell: (info) => <span>{info.getValue() || "-"}</span>,
    header: () => <span>Title</span>
  }),
  columnHelper.accessor("content", {
    cell: (info) => <span>{info.getValue() || "-"}</span>,
    header: () => <span>Content</span>
  }),
  columnHelper.accessor("button_text", {
    cell: (info) => <span>{info.getValue() || "-"}</span>,
    header: () => <span>Button Text</span>
  }),
  columnHelper.accessor("button_url", {
    cell: (info) => <span>{info.getValue() || "-"}</span>,
    header: () => <p className="text-wrap text-left">Button url</p>
  }),
  columnHelper.accessor("updated_at", {
    cell: (info) => <span>{info.getValue() || "-"}</span>,
    header: () => <span>Updated</span>
  }),

  columnHelper.accessor("id", {
    cell: (info) => <ActionsColumn info={info.getValue()} />,
    header: () => <span>Actions</span>
  })
];

export default accordionColumn;
