import { Formik, Form } from "formik";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Buttons/Button";

const Forgetpassword = () => {
    return (
            <div className="flex justify-center h-screen">
                <div className="p-8 bg-[#1135a7] sm:w-96 md:w-96 lg:w-4/12">
                    <Formik>
                        <form action="">
                            <h2 className="text-[28px] mt-32 text-white font-semibold">
                                FMCSA Password Reset
                            </h2>
                            <Input
                                className="h-9 w-full mt-6"
                                label="Email"
                                id="username"
                                name="username"
                                labelClass="block capitalize tracking-wide text-white text-[16px] font-bold mb-5"
                                type="email"
                                inputClass="appearance-none block w-full rounded-none py-3 px-4 mb-3 leading-tight focus:outline-none"
                                placeholder="Email"
                                containerClass="w-full md:mb-5 mt-6"
                            />

                            <div className="w-full mt-10 md:mb-0">
                                <Button
                                    type="submit"
                                    className="bg-[#fcd12a] opacity-100 px-5 p-[2px] border rounded hover:bg-[#1135a7] hover:text-white">
                                    Send Email Code
                                </Button>
                            </div>
                            <div>
                                <p className="text-white font-bold text-[18px] mt-8">www.FMCSAregistration.com</p>
                            </div>
                        </form>
                    </Formik>
                </div>
                <div className="hidden sm:hidden md:hidden md:w-[26rem] lg:block">
                    <img
                        className="h-screen sm:w-96 md:w-96 lg:w-[27rem]"
                        src="/assets/forgot_password.png"
                        alt="React Image"
                    />
                </div>
            </div>
    );
};
export default Forgetpassword;
