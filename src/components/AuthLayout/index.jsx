import Loader from "@/components/ui/Loader";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Footer from "./Footer";
const AuthLayout = () => {
  return (
    <>
       <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      <Footer />
    </>
  );
};

export default AuthLayout;
