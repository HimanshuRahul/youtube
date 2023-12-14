import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Head from "./Head";

const Body = () => {
  return (
    <>
      <Head />
      <div className="flex gap-8 h-max scrollbar-hide">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
