import React from 'react'

const Dashboard = () => {
    return (
        <div className='bg-[#f6f6f6] sm:px-10 sm:py-5'>
            <div>
                {/* Customers Cards  */}
                <div>
                    <h1 className="font-normal text-[24px] text-[#343a40]">Customers</h1>
                    <div className="grid grid-cols-2 gap-4 mt-5 mb-10">
                        <div className="bg-white p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:flex justify-between items-center">
                            <div className=" sm:text-center md:text-center lg:text-left">
                                <h2 className="font-bold text-[40px]">1</h2>
                                <p>New customers - Today </p>
                            </div>
                            <div className="sm:float-right float-none py-0 sm:hidden md:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hover:w-55 h-55 hover:animate-pulse" width="70px" height="70px">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>
                            </div>
                        </div>
                        <div className="bg-white p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:flex justify-between items-center">
                            <div className=" sm:text-center md:text-center lg:text-left">
                                <h2 className="font-bold text-[40px]">27</h2>
                                <p>New customers - Today </p>
                            </div>
                            <div className="sm:float-right float-none py-0 sm:hidden md:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hover:w-55 h-55 hover:animate-pulse" width="70px" height="70px">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-5'>
                    <hr />
                </div>

                {/* Earnings Cards  */}
                <div>
                    <h2 className="font-normal text-[24px] text-[#343a40]">Earnings</h2>
                    <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 mb-10">
                        <div className="bg-white p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:flex justify-between items-center">
                            <div className=" sm:text-center md:text-center lg:text-left">
                                <h2 className="font-bold text-[40px]">1</h2>
                                <p>New customers - Today </p>
                            </div>
                            <div className="sm:float-right float-none py-0 sm:hidden md:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hover:w-55 h-55 hover:animate-pulse" width="70px" height="70px">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>
                            </div>
                        </div>
                        <div className="bg-white p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:flex justify-between items-center">
                            <div className=" sm:text-center md:text-center lg:text-left">
                                <h2 className="font-bold text-[40px]">27</h2>
                                <p>New customers - Today </p>
                            </div>
                            <div className="sm:float-right float-none py-0 sm:hidden md:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hover:w-55 h-55 hover:animate-pulse" width="70px" height="70px">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>
                            </div>
                        </div>
                        <div className="bg-white p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:flex justify-between items-center">
                            <div className=" sm:text-center md:text-center lg:text-left">
                                <h2 className="font-bold text-[40px]">27</h2>
                                <p>New customers - Today </p>
                            </div>
                            <div className="sm:float-right float-none py-0 sm:hidden md:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hover:w-55 h-55 hover:animate-pulse" width="70px" height="70px">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>
                            </div>
                        </div>
                        <div className="bg-white p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:flex justify-between items-center">
                            <div className=" sm:text-center md:text-center lg:text-left">
                                <h2 className="font-bold text-[40px]">27</h2>
                                <p>New customers - Today </p>
                            </div>
                            <div className="sm:float-right float-none py-0 sm:hidden md:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hover:w-55 h-55 hover:animate-pulse" width="70px" height="70px">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-5'>
                    <hr />
                </div>
                <div className='my-5'>
                    <hr />
                </div>

                {/* Orders Cards  */}
                <div>
                    <h2 className="font-normal text-[24px] text-[#343a40]">Orders</h2>
                    <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 mb-10">
                        <div className="bg-white p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:flex justify-between items-center">
                            <div className=" sm:text-center md:text-center lg:text-left">
                                <h2 className="font-bold text-[40px]">1</h2>
                                <p>New customers - Today </p>
                            </div>
                            <div className="sm:float-right float-none py-0 sm:hidden md:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hover:w-55 h-55 hover:animate-pulse" width="70px" height="70px">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>
                            </div>
                        </div>
                        <div className="bg-white p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:flex justify-between items-center">
                            <div className=" sm:text-center md:text-center lg:text-left">
                                <h2 className="font-bold text-[40px]">27</h2>
                                <p>New customers - Today </p>
                            </div>
                            <div className="sm:float-right float-none py-0 sm:hidden md:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hover:w-55 h-55 hover:animate-pulse" width="70px" height="70px">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>
                            </div>
                        </div>
                        <div className="bg-white p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:flex justify-between items-center">
                            <div className=" sm:text-center md:text-center lg:text-left">
                                <h2 className="font-bold text-[40px]">27</h2>
                                <p>New customers - Today </p>
                            </div>
                            <div className="sm:float-right float-none py-0 sm:hidden md:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hover:w-55 h-55 hover:animate-pulse" width="70px" height="70px">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>
                            </div>
                        </div>
                        <div className="bg-white p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:flex justify-between items-center">
                            <div className=" sm:text-center md:text-center lg:text-left">
                                <h2 className="font-bold text-[40px]">27</h2>
                                <p>New customers - Today </p>
                            </div>
                            <div className="sm:float-right float-none py-0 sm:hidden md:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hover:w-55 h-55 hover:animate-pulse" width="70px" height="70px">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-5'>
                    <hr />
                </div>

                {/* Email Stats Cards  */}
                <div>
                    <h2 className="font-normal text-[24px] text-[#343a40]">Email Stats</h2>
                    <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 mb-10">
                        <div className="bg-white p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:flex justify-between items-center">
                            <div className=" sm:text-center md:text-center lg:text-left">
                                <h2 className="font-bold text-[40px]">1</h2>
                                <p>New customers - Today </p>
                            </div>
                            <div className="sm:float-right float-none py-0 sm:hidden md:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hover:w-55 h-55 hover:animate-pulse" width="70px" height="70px">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>
                            </div>
                        </div>
                        <div className="bg-white p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:flex justify-between items-center">
                            <div className=" sm:text-center md:text-center lg:text-left">
                                <h2 className="font-bold text-[40px]">27</h2>
                                <p>New customers - Today </p>
                            </div>
                            <div className="sm:float-right float-none py-0 sm:hidden md:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hover:w-55 h-55 hover:animate-pulse" width="70px" height="70px">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>
                            </div>
                        </div>
                        <div className="bg-white p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:flex justify-between items-center">
                            <div className=" sm:text-center md:text-center lg:text-left">
                                <h2 className="font-bold text-[40px]">27</h2>
                                <p>New customers - Today </p>
                            </div>
                            <div className="sm:float-right float-none py-0 sm:hidden md:block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hover:w-55 h-55 hover:animate-pulse" width="70px" height="70px">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-5'>
                    <hr />
                </div>
            </div>

            <div>
                <h3 className='text-[1.75rem] mt-10 mb-5'>TOP 8 Products</h3>
                <h4 className='text-[1rem] font-bold text-[#212529]'>Search By Date</h4>
                <input className='mt-6' type="date" name="" id="" />
            </div>

            <div className='mt-10 bg-white p-5'>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, natus?</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, natus?</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, natus?</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, natus?</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, natus?</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, natus?</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, natus?</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, natus?</li>
            </div>

        </div>
    )
}

export default Dashboard