import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Navbar from "./navber/nevbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="app-grid">
        <div className="navi">
          <Navbar />
        </div>

        
        
        <div className="col-span-5 p-5">

          <div className="col-span-1">
            <Header />
          </div>

          <main>{children}</main>

          <div className="col-span-1">
            <Footer />
          </div>

        </div>



      </div>
    </>
  );
};

export default Layout;
