import { Fragment, useRef } from "react";
import Loader from "../Loader";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const DeleteModal = ({
  open,
  isSubmit,
  onClose,
  onConfirm,
  title,
  btn_title = "Confirm",
  children
}) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[30000]"
        initialFocus={cancelButtonRef}
        onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-[30000] overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
                <div className="flex border-b border-solid p-4">
                  <Dialog.Title
                    as="h3"
                    className="text-lg  font-semibold leading-6 text-gray-900 ">
                    {title}
                  </Dialog.Title>
                </div>
                <div className="px-4  bg-white py-2 border-b border-solid relative">
                  <div className="mt-2">{children}</div>
                </div>
                <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-theme-color-100  rounded-md shadow-sm hover:bg-theme-color-100 sm:ml-3 sm:w-auto"
                    onClick={onConfirm}>
                    {btn_title}{" "}
                    {isSubmit ? (
                      <Loader className="w-5 h-5 ml-3 text-white" />
                    ) : (
                      ""
                    )}
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={onClose}
                    ref={cancelButtonRef}>
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default DeleteModal;
