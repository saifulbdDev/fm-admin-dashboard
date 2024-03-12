import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "@/components/ui/Loader";
import Sidebar from "./Sidebar";
import { Suspense, useState } from "react";

export default function Layout() {
  const [isSidebar, setSideBar] = useState(false);
  return (
    <div className="flex overflow-x-hidden h-screen">
      <Sidebar isSidebar={isSidebar} />
      <div className="flex-1">
        <main
          className={`flex flex-col bg-[#f4f6f9] ${
            isSidebar ? "xl:ml-64 " : "md:ml-16"
          }`}>
          <Header setSideBar={setSideBar} isSidebar={isSidebar} />
          <div className="px-5 py-5 min-h-screen">
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
