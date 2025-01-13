import React from "react";
import { Outlet } from "react-router-dom";
import ClientFooter from "./Footer";
import ClientHeader from "./clientHeader";

const ClientLayout = () => {
  return (
    <>
      <ClientHeader />
      <Outlet />
      <ClientFooter />
    </>
  );
};

export default ClientLayout;
