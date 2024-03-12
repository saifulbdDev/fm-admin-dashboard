import { useEffect } from 'react'
// import { Menu, Transition } from '@headlessui/react'
import { Bars3Icon, ChatBubbleLeftRightIcon, ChatBubbleOvalLeftEllipsisIcon, ArrowRightOnRectangleIcon,EnvelopeIcon, } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {logout} from "@/features/auth/authSlice"
export default function Header({isSidebar,setSideBar}) {
  const dispatch = useDispatch();
  const { access_token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleLogout = () => {
    // Dispatch the logout action when the "Log out" button is clicked
    dispatch(logout());
  };
  useEffect(() => {
    if (!access_token) {
      navigate("/login"); // Redirect to dashboard if user is already logged in
    }
  }, [access_token]);
  return (
    <div  className="bg-white shadow">
     
          <div className={`mx-auto  px-4  lg:px-4 `}>
            <div className="flex h-14 justify-between">
              <div className="flex">
                <div className=" flex items-center">
                  {/* Mobile menu button */}
                  <button type='button'  onClick={(e) => setSideBar(!isSidebar)} className="relative inline-flex items-center justify-center rounded-md  text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none  ">
                 
                    {/* {isSidebar ? (
                      <XMarkIcon className="block h-8 w-7" aria-hidden="true" />
                    ) : ( */}
                      <Bars3Icon className="block h-8 w-7" aria-hidden="true" />
                    {/* )} */}
                  </button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                   
                </div>
              
              </div>
              <div className="flex w-4/5  justify-end">
              
              <div className="flex space-x-4 items-center">
                  <button
                    type="button"
                    className="relative flex items-center   rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                  
                    <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
                    <span>0</span>
                  </button>
                  <button
                    type="button"
                    className="relative flex items-center  rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                  
                    <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" aria-hidden="true" />
                    <span>0</span>
                  </button>
                  <button
                    type="button"
                    className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                  
                    <ChatBubbleLeftRightIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    onClick={handleLogout}
                    type="button"
                    className="relative rounded-full flex items-center space-x-1 bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                 
                    <ArrowRightOnRectangleIcon className="h-6 w-6" aria-hidden="true" />
                    <span className="text-base text-gray-700">Log out</span>
                  </button>

                  {/* Profile dropdown */}
                  {/* <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu> */}
                </div>
              </div>
            </div>
          </div>

        
     
    </div>
  )
}