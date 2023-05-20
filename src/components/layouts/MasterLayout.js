import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./include/Navbar";
import Footer from "./include/Footer";

const MasterLayout = () => {
  return (
    <>
      {/* <!-- light-dark mode button --> */}
      <a href="javascript: void(0);" id="mode" class="mode-btn text-white rounded-end" >
        <i class="uil uil-brightness mode-dark mx-auto"></i>
        <i class="uil uil-moon bx-spin mode-light"></i>
      </a>


      <Navbar />


      <Outlet />
      <Footer />
    </>
  );
};

export default MasterLayout;
