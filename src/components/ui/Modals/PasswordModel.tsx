import { Fragment, useRef } from 'react';

import { Dialog, Transition } from '@headlessui/react';

import Input from '@/components/ui/Input';
import Button from '@/components/ui/Buttons/Button';
import { Formik, Form } from 'formik';
import { PasswordSchema } from '@/utils/validations/auth';
type ModelProps = {
  open: boolean;

  onClose: () => void;
  onConfirm: () => void;
};

const PasswordModel = ({ open, onClose, onConfirm }: ModelProps) => {
  const cancelButtonRef = useRef(null);

  const initialValues = {
    password: '',
  };
  const submitHandler = async (values: typeof initialValues) => {
       //@ts-ignore
    onConfirm(values.password)
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
                <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
             
                   
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Please give your password
                      </Dialog.Title>
                      <div className="mt-2">
                        <Formik
                          initialValues={initialValues}
                          validationSchema={PasswordSchema}
                          onSubmit={(values) => submitHandler(values)}
                        >
                          {({
                            values,
                            errors,
                            handleChange,
                            isValidating,
                            isSubmitting,
                            handleBlur,
                            touched,
                          }) => (
                            <Form className="">
                              <Input
                                label="*Password"
                                id="password"
                                name="password"
                                type="password"
                                errorText={errors.password}
                                error={touched.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                inputClass="py-2 px-3"
                                placeholder="Password"
                                containerClass="relative mb-4"
                              />
                              <div className="px-4 py-3 bg-gray-50 sm:flex space-x-3  sm:px-6">
                              <button
                                  type="button"
                                  className="inline-flex w-1/2 justify-center px-3 py-2 items-center  text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                  onClick={onClose}
                                  ref={cancelButtonRef}
                                >
                                  Cancel
                                </button>
                                <Button
                                  isSubmitting={isSubmitting}
                                  type="submit"
                                  disabled={isValidating || !PasswordSchema.isValidSync(values)}
                                  className=" inline-flex w-1/2 justify-center  rounded-md text-base lg:py-3.5 py-3"
                                >
                                  Save
                                </Button>
                             
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  </div>
               
           
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PasswordModel;
