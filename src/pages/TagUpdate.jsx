import { Formik, Form } from "formik";

import { useParams, useNavigate } from "react-router-dom";
import Input from "@/components/ui/Input";
import { toast } from "react-toastify";
import Button from "@/components/ui/Buttons/Button";
import PageLoader from "@/components/ui/PageLoader"
import { tagSchema } from "@/utils/validations/schema";
import { useGetTagDetailQuery, useEditTagMutation } from "@/features/tag/tagApi";


const TagUpdate = () => {
  let { id } = useParams();
  const { data, isLoading } = useGetTagDetailQuery(id, {
    skip: !id
  }, );

  const [editTagMutation] = useEditTagMutation();
  const navigate = useNavigate();
  
  const submitHandler = async (values) => {
    const form = new FormData();
    form.append("tag_texts", values.tag_texts);
    form.append("tag_url", values.tag_url);
    form.append("is_active", values.is_active);
  
    try {
      await editTagMutation({ form, id });
      toast.success("Tag updated successfully!!");
      navigate("/admin/tag-list");
    } catch (error) {
      toast.error("Error updating tag");
      console.error("Error updating tag:", error);
    
    }
  };

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <Formik
          initialValues={data?.data}
          validationSchema={tagSchema}
          onSubmit={(values) => submitHandler(values)}>
          {({
            errors,

            isSubmitting,

            handleBlur,
            touched
          }) => (
            <Form className="flex">
              <div className="w-full">
                <div className="bg-white rounded-md shadow-md">
                  <div className="border-b border-solid">
                    <h3 className="bg-theme-color-200 inline-block font-bold  px-2 py-3 text-white">
                      Edit Tag
                    </h3>
                  </div>
                  <div className="px-5 py-2 ">
                    <Input
                      label="Tag text"
                      id="tag_texts"
                      name="tag_texts"
                      labelClass="block text-gray-700 text-base font-bold mb-1.5"
                      type="text"
                      errorText={errors.tag_texts}
                      error={touched.tag_texts}
                      onBlur={handleBlur}
                      inputdiv="full"
                      inputClass="appearance-none block rounded-md py-1 px-4  text-gray-700  border-gray-400"
                      placeholder="Enter Tag Text"
                      containerClass="w-full  mb-5"
                    />
                    <Input
                      label="Tag url"
                      id="tag_url"
                      name="tag_url"
                      labelClass="block text-gray-700 text-base font-bold mb-1.5"
                      type="url"
                      errorText={errors.tag_url}
                      error={touched.tag_url}
                      onBlur={handleBlur}
                      inputdiv="full"
                      inputClass="appearance-none block rounded-md py-1 px-4  text-gray-700  border-gray-400"
                      placeholder="Enter Tag url"
                      containerClass="w-full  mb-5"
                    />
                    <Input
                      label="Is Active"
                      id="is_active"
                      name="is_active"
                      labelClass="block text-gray-700 text-base font-bold mb-1.5"
                      type="checkbox"
                      errorText={errors.is_active}
                      error={touched.is_active}
                      onBlur={handleBlur}
                      inputdiv="full"
                      inputClass="appearance-none block rounded-md py-1 px-4  text-gray-700  border-gray-400"
                     
                      containerClass="w-full flex space-x-3 mb-5"
                    />

                    <div className="flex items-center justify-start space-x-4">
                      <Button
                        type="submit"
                        isSubmitting={isSubmitting}
                        className="bg-theme-color-100 rounded text-base text-white px-3 py-2">
                        Update Tag
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

export default TagUpdate;
