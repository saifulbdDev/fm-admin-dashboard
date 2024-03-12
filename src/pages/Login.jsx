import { useEffect } from "react";
// import loginImage from '../public/assets/login.png';
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { loginSchema } from "@/utils/validations/auth";
import { useLoginMutation } from "@/features/auth/authApi";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Buttons/Button";

import { useSelector } from "react-redux";

const initialValues = {
  username: "",
  password: ""
};

const Login = () => {
  const { access_token } = useSelector((state) => state.auth);
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const submitHandler = async (values) => {
    try {
      const response = await login(values);
     if(response?.error?.data.error){
      toast.error(response?.error?.data.error, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    } catch (err) {
      // Handle error
      console.log(">>> err", err);
    }
  };

  useEffect(() => {
    if (access_token) {
      navigate("/admin"); // Redirect to dashboard if user is already logged in
    }
  }, [access_token]);

  return (
    <div className="flex h-screen">
      <div className="sm:w-1/2 max-w[500px] p-8 flex justify-center items-center bg-[#1135a7]">
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={(values) => submitHandler(values)}>
          {({
            errors,
            values,
            isValidating,
            isSubmitting,
            handleBlur,
            touched
          }) => (
            <Form className="">
              <h2 className="text-3xl text-white font-semibold">
                Welcome to FMCSARegistration.com
              </h2>
              <Input
                label="Email"
                required
                id="username"
                name="username"
                labelClass="block capitalize tracking-wide text-white  text-xs font-bold mb-5"
                type="email"
                errorText={errors.username}
                error={touched.username}
                onBlur={handleBlur}
                inputClass="appearance-none block w-full rounded-none py-3 px-4 mb-3 leading-tight focus:outline-none"
                placeholder="Email"
                containerClass="w-full md:mb-5 mt-6"
              />

              <Input
                label="Password"
                id="password"
                name="password"
                type="password"
                errorText={errors.password}
                error={touched.password}
                onBlur={handleBlur}
                inputClass="py-2 px-3 rounded-none"
                placeholder="Password"
                containerClass="relative "
              />

              <div className="w-full mt-10 md:mb-0">
                <Button
                  isSubmitting={isSubmitting || isLoading}
                  type="submit"
               
                  disabled={isValidating || !loginSchema.isValidSync(values)}
                  className="bg-[#fcd12a] opacity-100 py-1.5 w-1/2 px-16 border uppercase rounded hover:bg-[#1135a7] hover:text-white">
                  Login
                </Button>
              </div>
              <div>
                <p className="text-white mt-10">
                  <span className="mr-1">Forgot your password?</span>
                  <Link to="/register" className="text-[#FCD12A]">
                    Click here
                  </Link>
                </p>
                <p className="text-white mt-6">www.FMCSAregistration.com</p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="sm:w-1/2 hidden sm:hidden md:hidden lg:block w-full">
        <img
          className="h-screen w-full"
          src="/assets/login.png"
          alt="React Image"
        />
      </div>
    </div>
  );
};
export default Login;
