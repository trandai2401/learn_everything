import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import  Footer  from "../../commons/Footer";
export default function DefaultLayout() {
  return (
    <>
      <Header />
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
