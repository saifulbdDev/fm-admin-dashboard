import { Formik, Form } from "formik";

import { useParams, useNavigate } from "react-router-dom";
import Input from "@/components/ui/Input";
import { toast } from "react-toastify";
import Button from "@/components/ui/Buttons/Button";
import PageLoader from "@/components/ui/PageLoader";
import { exploreSchema } from "@/utils/validations/schema";
import {
  useGetExploreDetailQuery,
  useEditExploreMutation
} from "@/features/explore/exploreApi";

const ExploreUpdate = () => {
  let { id } = useParams();
  const { data, isLoading } = useGetExploreDetailQuery(id, {
    skip: !id
  });

  const [editExploreMutation] = useEditExploreMutation();
  const navigate = useNavigate();

  const submitHandler = async (values) => {
    const form = new FormData();
    form.append("explore_f_op_name", values.explore_f_op_name);
    form.append("explore_f_op_url", values.explore_f_op_url);
    form.append("is_active", values.is_active);

    try {
      await editExploreMutation({ form, id });
      toast.success("Explore updated successfully!!");
      navigate("/admin/explore-list");
    } catch (error) {
      toast.error("Error updating explore");
      console.error("Error updating explore:", error);
    }
  };

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <Formik
          initialValues={data?.data}
          validationSchema={exploreSchema}
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
                      Edit Explore
                    </h3>
                  </div>
                  <div className="px-5 py-2 ">
                    <Input
                      label="Explore name"
                      id="explore_f_op_name"
                      name="explore_f_op_name"
                      labelClass="block text-gray-700 text-base font-bold mb-1.5"
                      type="text"
                      errorText={errors.explore_f_op_name}
                      error={touched.explore_f_op_name}
                      onBlur={handleBlur}
                      inputdiv="full"
                      inputClass="appearance-none block rounded-md py-1 px-4  text-gray-700  border-gray-400"
                      placeholder="Enter Explore name"
                      containerClass="w-full  mb-5"
                    />
                    <Input
                      label="Explore url"
                      id="explore_f_op_url"
                      name="explore_f_op_url"
                      labelClass="block text-gray-700 text-base font-bold mb-1.5"
                      type="url"
                      errorText={errors.explore_f_op_url}
                      error={touched.explore_f_op_url}
                      onBlur={handleBlur}
                      inputdiv="full"
                      inputClass="appearance-none block rounded-md py-1 px-4  text-gray-700  border-gray-400"
                      placeholder="Enter Explore url"
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
                        Update Explore
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

export default ExploreUpdate;
