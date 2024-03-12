import React from 'react'
import { Link } from 'react-router-dom'
import PhoneIcone from '../components/icons/PhoneIcon'
import { Formik, Form } from "formik";
import Input from "@/components/ui/Input";

const Verifydetails = () => {
    return (
        <div>

            <div className='relative sm:w-full xl:w-[1120px] sm:h-[200px] md:h-[250px] mx-auto bg-black'>
                <div className='h-2 bg-[#ffb90b]'></div>
                <img className=' h-full w-full object-cover ' src="/assets/truck.jpg" alt="Blue Truck" />
                <div className='absolute top-0 mt-8 ml-8'>
                    <div className=''>
                        <Link className='bg-[#ffb90b] px-4 py-1 rounded text-white font-medium' href="https://fmcsaregistration.com/">🏠︎ fmcsaregistration.com</Link>
                    </div>
                    <h1 className='font-bold sm:text-[22px] lg:text-[32px] text-white mt-8'>FMCSA verification</h1>
                    <h2 className='text-white mt-4 font-normal'><span className='text-[#ffb90b] flex'><PhoneIcone /> <span className='text-white font-medium'>+1 (866) 477-0707</span></span></h2>
                </div>

                <div className='md:grid grid-cols-2 gap-4 mt-8 '>
                    <div className='bg-[#1C38A1]'>

                        <Formik>
                            <form className='px-4 py-4' action="">
                                <h3 className='font-bold text-[20px] text-white mb-4'>Verification</h3>
                                <Input
                                    label="Full Name"
                                    id="fullname"
                                    name="Full Name"
                                    type="text"
                                    inputClass="py-2 my-4 px-3 rounded-none"
                                    placeholder="Enter Full Name"
                                    containerClass="relative "
                                    required

                                />
                                <Input
                                    label="Company Name"
                                    id="fullname"
                                    name="Full Name"
                                    type="text"
                                    inputClass="py-2 my-4 px-3 rounded-none"
                                    placeholder="Enter Company Name"
                                    containerClass="relative "
                                    required
                                />
                                <Input
                                    label="Document Type"
                                    id="fullname"
                                    name="Full Name"
                                    type="text"
                                    inputClass="py-2 my-4 px-3 rounded-none"
                                    placeholder="Document Type"
                                    containerClass="relative "
                                    required

                                />

                                <div>
                                    <h4 className='mb-[10px] text-sm font-medium text-white'>Verified <span className='text-red-700 text-700'>*</span></h4>
                                    <div className="inline-flex items-center pr-4">
                                        <label className="relative flex items-center  rounded-full cursor-pointer" htmlFor="html">
                                            <input name="type" type="radio"
                                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-white transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#ffb90b] checked:before:bg-green-800 hover:before:opacity-10"
                                                id="html" />
                                            <span
                                                className="absolute text-green-700 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                                </svg>
                                            </span>
                                        </label>
                                        <label className="mt-px text-sm font-medium text-white cursor-pointer select-none pl-2" htmlFor="html">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="inline-flex items-center">
                                        <label className="relative flex items-center  rounded-full cursor-pointer" htmlFor="html">
                                            <input name="type" type="radio"
                                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-white transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#ffb90b] checked:before:bg-green-800 hover:before:opacity-10"
                                                id="html" />
                                            <span
                                                className="absolute text-green-700 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                                </svg>
                                            </span>
                                        </label>
                                        <label className="mt-px text-sm font-medium text-white cursor-pointer select-none pl-2" htmlFor="html">
                                            No
                                        </label>
                                    </div>
                                </div>

                                <div className='mt-5'>
                                    <button className='bg-[#ffb90b] w-full py-2 text-[18px] text-white font-medium hover:bg-white hover:text-black'>Submit</button>
                                </div>

                            </form>
                        </Formik>
                    </div>
                    <div className='relative'>
                        <div className='bg-[#1C38A1] w-full py-20 flex justify-center items-center absolute bottom-0'>
                            <img className='w-' src="/assets/logo.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verifydetails