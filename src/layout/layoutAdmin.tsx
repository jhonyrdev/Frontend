import FooterA from "../components/common-admin/footerA";
import Navbar from "../components/common-admin/navbar";
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <>
      <div className="layout-admin d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Outlet />
        </main>
        <FooterA />
      </div>
    </>
  );
};

export default LayoutAdmin;