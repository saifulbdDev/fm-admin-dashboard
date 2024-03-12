import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import Input from "@/components/ui/Input";
import { toast } from "react-toastify";
import { useAddAccordionMutation, } from "@/features/accordion/accordionApi";
import Button from "@/components/ui/Buttons/Button";

import {
  schema,
  initialValues
} from "@/utils/validations/schema";



const AccordionAdd = () => {
  const [addAccordion] = useAddAccordionMutation();
  const navigate = useNavigate();
  const submitHandler = async (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("content", values.content);
    formData.append("button_text", values.button_text);
    formData.append("button_url", values.button_url);
    try {
      await addAccordion(formData);
     
      toast.success("Accordion added successfully!");
      navigate("/admin/accordion-list");
    } catch (error) {
      toast.error("Error adding accordion");
      console.error("Error adding accordion:", error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
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
                  Create Accordion
                </h3>
              </div>
              <div className="px-5 py-2 ">
                <Input
                  label="Title"
                  id="title"
                  name="title"
                  labelClass="block text-gray-700 text-base font-bold mb-1.5"
                  type="text"
                  errorText={errors.title}
                  error={touched.title}
                  onBlur={handleBlur}
                  inputdiv="full"
                  inputClass="appearance-none block rounded-md py-1 px-4  text-gray-700  border-gray-400"
                  placeholder="Enter Accordion Title"
                  containerClass="w-full  mb-5"
                />
                <Input
                  label="Button URL"
                  id="button_url"
                  name="button_url"
                  labelClass="block text-gray-700 text-base font-bold mb-1.5"
                  type="url"
                  errorText={errors.button_url}
                  error={touched.button_url}
                  onBlur={handleBlur}
                  inputdiv="full"
                  inputClass="appearance-none block rounded-md py-1 px-4  text-gray-700  border-gray-400"
                  placeholder="Enter Button URL"
                  containerClass="w-full  mb-5"
                />
                <Input
                  label="Button Text"
                  id="button_text"
                  name="button_text"
                  labelClass="block text-gray-700 text-base font-bold mb-1.5"
                  type="text"
                  errorText={errors.button_text}
                  error={touched.button_text}
                  onBlur={handleBlur}
                  inputdiv="full"
                  inputClass="appearance-none block rounded-md py-1 px-4  text-gray-700  border-gray-400"
                  placeholder="Button Text"
                  containerClass="w-full  mb-5"
                />
                <Input
                  label="Accordion content"
                  component="textarea"
                  id="content"
                  name="content"
                  labelClass="block text-gray-700 text-base font-bold mb-1.5"
                  type="TEXT"
                  errorText={errors.content}
                  error={touched.content}
                  onBlur={handleBlur}
                  inputdiv="full"
                  inputClass="appearance-none block rounded-md py-1 px-4  text-gray-700  border-gray-400"
                  placeholder="Enter Accordion content"
                  containerClass="w-full  mb-5"
                />

                <div className="flex items-center justify-start space-x-4">
                  <Button
                    type="submit"
                    isSubmitting={isSubmitting}
                    className="bg-theme-color-100 rounded text-base text-white px-3 py-2">
                    Add Accordion
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

export default AccordionAdd;
