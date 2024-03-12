import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import Input from "@/components/ui/Input";
import { toast } from "react-toastify";

import Button from "@/components/ui/Buttons/Button";
import { useAddTagMutation, } from "@/features/tag/tagApi";
import {
  tagSchema,
  tagInitialValues
} from "@/utils/validations/schema";



const TagAdd = () => {
  const [addTag] = useAddTagMutation();
  const navigate = useNavigate();
  const submitHandler = async (values) => {
    const form = new FormData();
    form.append("tag_texts", values.tag_texts);
    form.append("tag_url", values.tag_url);
   
  
    try {
      await addTag(form);
      toast.success("Tag added successfully!");
      navigate("/admin/tag-list");
    } catch (error) {
      toast.error("Error added tag");
      console.error("Error added tag:", error);
    
    }
  };

  return (
    <Formik
      initialValues={tagInitialValues}
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
                  Create Tag
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
              

                <div className="flex items-center justify-start space-x-4">
                  <Button
                    type="submit"
                    isSubmitting={isSubmitting}
                    className="bg-theme-color-100 rounded text-base text-white px-3 py-2">
                    Add Tag
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default TagAdd;
