
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Disclosure } from "@headlessui/react";
import { navs } from "@/utils/menus";
import { UserIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useHover } from "@uidotdev/usehooks";
const Sidebar = ({ isSidebar = false }) => {
  const [ref, hovering] = useHover();
  const router = useLocation();

 
  const sideBarHover = hovering  || isSidebar ? true: false;
  const SidebarLink = ({ href, icon, label }) => (
    <Link
      to={href}
      className={`px-4 py-2 mb-1 text-gray-200 hover:text-white rounded  hover:bg-theme-color-400 text-center cursor-pointer flex items-center  transition-colors ${
        router.pathname === href ? "bg-theme-color-400 " : ""
      } ${sideBarHover ? "" : "justify-center"}`}>
      <div className={`${sideBarHover ? "mr-2" : ""}`}>
        {icon ? icon : <UserIcon className="w-5 h-5" />}
      </div>
      {sideBarHover ? (
        <div>
          <p>{label}</p> <p></p>
        </div>
      ) : (
        ""
      )}
    </Link>
  );

  return (
    <div
      ref={ref}
      className={`fixed top-0 bottom-0 sidebar-transition  bg-theme-color-700 shadow-sm z-[3000] ${
        sideBarHover ? "w-64" : "w-16"
      }`}>
      <div className="flex  px-2.5 py-3 border-b">
        <Link href="/admin" className=" flex items-center">
          <img
            src="/logo.png"
            alt="company Logo"
            className="mx-auto w-12 mr-2"
          />
          {/* {sideBarHover ? ( */}
            <span className={`text-base text-white sidebar-child-transition ${sideBarHover ? '':'hidden'}`}>Registration LLC</span>
          {/* ) : (
            ""
          )} */}
        </Link>
      </div>
      <div className="flex items-center px-4 space-x-3 py-3 border-b">
        <img
          src="/user2-160x160.jpg"
          alt=""
          className="h-8 w-8 rounded-full bg-gray-800"
        />
        <div className="truncate saiful:!text-lg sm:text-sm font-medium leading-6 text-white">
          Saiful Islam
        </div>
      </div>

      <div className={`flex  overflow-hidden overflow-y-auto scroll-smooth flex-col  px-2 ${sideBarHover ? 'h-full':''}`}>
        {navs.map((nav, key) => {
          return nav?.menus?.length ? (
            <Disclosure key={"item" + key}>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${
                      open ? "bg-theme-color-400" : " "
                    }  flex hover:bg-theme-color-400  w-full px-4 py-2 text-sm font-medium text-left text-white rounded  focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75 ${
                      sideBarHover ? "justify-between" : "justify-center"
                    }`}>
                    <div className="flex space-x-2">
                      {nav?.icon}
                      {sideBarHover ? <span>{nav?.name}</span> : ""}
                    </div>
                    {sideBarHover ? (
                      <ChevronLeftIcon
                        className={`${
                          open ? "rotate-90 transform " : " "
                        } h-5 w-5 `}
                      />
                    ) : (
                      ""
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-1  text-sm text-gray-500">
                    {nav?.menus?.map((menu, index) => {
                      return (
                        <SidebarLink
                          key={`${menu.name}-${index}`}
                          href={menu?.link}
                          icon={menu.icon}
                          label={menu?.name}
                        />
                      );
                    })}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ) : (
            <SidebarLink
              key={"item" + key}
              href={nav?.link}
              icon={nav.icon}
              label={nav?.name}
            />
          );
        })}
      </div>
    </div>
  );
};



export default Sidebar;
