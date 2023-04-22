import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header/Header";

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
