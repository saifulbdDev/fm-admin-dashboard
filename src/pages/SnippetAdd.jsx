import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import React from "react";
import Input from "@/components/ui/Input";
import { toast } from "react-toastify";
import ReactSelect from "@/components/ui/ReactSelect";
import { PlusIcon, PencilIcon, XMarkIcon } from "@heroicons/react/24/solid";
import PageLoader from "@/components/ui/PageLoader";
import {
  useAddSnippetMutation,
  useGetSnippetCategoryQuery
} from "@/features/snippet/snippetApi";
import Button from "@/components/ui/Buttons/Button";
const CKEditor = React.lazy(() => import("@components/ui/CKEditor"));
import {
  snippetSchema,
  snippetInitialValues
} from "@/utils/validations/schema";

const SnippetAdd = () => {
  const [addSnippet] = useAddSnippetMutation();
  const { data, isLoading } = useGetSnippetCategoryQuery();
  const navigate = useNavigate();
  const submitHandler = async (values) => {
    try {
      const response = await addSnippet(values);
     
      if (response?.data?.data?.id) {
        toast.success("Snippet added successfully!");
        navigate("/admin/snippet-list");
      }
    } catch (error) {
      toast.error("Error adding snippet");
      console.error("Error adding snippet:", error);
    }
  };

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <Formik
          initialValues={{
            ...snippetInitialValues,
            category: data?.snippetCategory[0]?.value || ""
          }}
          validationSchema={snippetSchema}
          onSubmit={(values) => submitHandler(values)}>
          {({
            errors,
            setFieldValue,
            isSubmitting,
            values,
            handleBlur,
            touched
          }) => (
            <Form className="flex">
              <div className="w-full">
                <div className="bg-white rounded-md shadow-md">
                  <div className="border-b border-solid">
                    <h3 className="bg-theme-color-200 inline-block font-bold  px-2 py-3 text-white">
                      Create Snippet
                    </h3>
                  </div>
                  <div className="px-5 py-2 ">
                    <Input
                      label="Snippet name"
                      id="name"
                      name="name"
                      labelClass="block text-gray-700 text-base font-bold mb-1.5"
                      type="text"
                      errorText={errors.name}
                      error={touched.name}
                      onBlur={handleBlur}
                      inputdiv="full"
                      inputClass="appearance-none block rounded-md py-1 px-4  text-gray-700  border-gray-400"
                      placeholder="Enter Snippet name"
                      containerClass="w-full  mb-5"
                    />
                    <div className="flex items-center justify-between mb-3 space-x-2">
                      <Input
                        containerClass="w-3/4 "
                        label="Categories"
                        id="category"
                        name="category"
                        labelClass="block text-gray-700 text-base font-bold mb-1.5"
                        errorText={errors.category}
                        component={ReactSelect}
                        placeholder="Selected Category"
                        inputClass="z-[100]"
                        error={touched.category}
                        onBlur={handleBlur}
                        options={data?.snippetCategory || []}
                      />
                      <div className="w-1/4 mt-7">
                        <div className="flex  justify-center items-center space-x-2">
                          <button to="/admin/snippet-add">
                            <PlusIcon className="w-5 h-5" />
                          </button>
                          <button type="button">
                            <PencilIcon className="w-5 h-5" />
                          </button>
                          <button type="button">
                            <XMarkIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <CKEditor
                      label="Snippet content"
                      id="content"
                      name="content"
                      containerClass="w-full mb-8"
                      labelClass="block text-gray-700 text-base font-bold mb-1.5"
                      errorText={errors.content}
                      error={touched.content}
                      data={values.content}
                      onChange={(e) => {
                        setFieldValue("content", e);
                      }}
                    />

                    <div className="flex items-center justify-start space-x-4">
                      <Button
                        type="submit"
                        isSubmitting={isSubmitting}
                        className="bg-theme-color-100 rounded text-base text-white px-3 py-2">
                        Add Snippet
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default SnippetAdd;
