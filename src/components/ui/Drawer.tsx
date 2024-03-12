import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

type DrawerProps = {
  className:string
  children: React.ReactNode;
  open: boolean;
  title: string;
  onClose: () => void;
};

export default function Drawer({ children, className='max-w-md', open, onClose, title }: DrawerProps) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className={`relative w-screen pointer-events-auto ${className}`}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={onClose}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                        {title}
                      </Dialog.Title>
                    </div>
                    <div className="relative flex-1 px-4 mt-6 sm:px-6">{children}</div>
                  </div>
                
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
