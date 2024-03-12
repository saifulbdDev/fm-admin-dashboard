import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import Input from "@/components/ui/Input";
import { toast } from "react-toastify";

import Button from "@/components/ui/Buttons/Button";
import { useAddAuthorMutation, } from "@/features/author/authorApi";
import {
  authorSchema,
  authorInitialValues
} from "@/utils/validations/schema";



const AuthorAdd = () => {
  const [addAuthor] = useAddAuthorMutation();
  const navigate = useNavigate();
  const submitHandler = async (values) => {
 
    const form = new FormData();
    form.append("author_name", values.author_name);
    form.append("info", values.info);
  
  
    try {
      await addAuthor(form);
      toast.success("Author added successfully!");
      navigate("/admin/author-list");
    } catch (error) {
      toast.error("Error added author");
      console.error("Error added author:", error);
    
    }
  };

  return (
    <Formik
      initialValues={authorInitialValues}
      validationSchema={authorSchema}
      onSubmit={(values) => submitHandler(values)}>
      {({
        errors,

        isSubmitting,

        handleBlur,
        touched
      }) => (
        console.log(errors, 'errors'),
        <Form className="flex">
          <div className="w-full">
            <div className="bg-white rounded-md shadow-md">
              <div className="border-b border-solid">
                <h3 className="bg-theme-color-200 inline-block font-bold  px-2 py-3 text-white">
                  Create Author
                </h3>
              </div>
              <div className="px-5 py-2 ">
                <Input
                  label="Author name"
                  id="author_name"
                  name="author_name"
                  labelClass="block text-gray-700 text-base font-bold mb-1.5"
                  type="text"
                  errorText={errors.author_name}
                  error={touched.author_name}
                  onBlur={handleBlur}
                  inputdiv="full"
                  inputClass="appearance-none block rounded-md py-1 px-4  text-gray-700  border-gray-400"
                  placeholder="Enter Author name"
                  containerClass="w-full  mb-5"
                />
                <Input
              


                  component="textarea"
                  id="info"
                  name="info"
                  labelClass="block text-gray-700 text-base font-bold mb-1.5"
                  type="TEXT"
                  errorText={errors.info}
                  error={touched.info}
                  onBlur={handleBlur}
                  inputdiv="full"
                  inputClass="appearance-none block rounded-md py-1 px-4  text-gray-700  border-gray-400"
                  placeholder="Enter info name"
                  containerClass="w-full  mb-5"
                />
              

                <div className="flex items-center justify-start space-x-4">
                  <Button
                    type="submit"
                    isSubmitting={isSubmitting}
                    className="bg-theme-color-100 rounded text-base text-white px-3 py-2">
                    Add Author
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

export default AuthorAdd;
