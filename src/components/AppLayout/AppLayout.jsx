import React from "react";
import HomePage from "../../pages/HomePage";
import Main from "../Main/Main";
import { Outlet } from "react-router-dom";
import ProductsPage from "../../pages/ProductsPage";
import Footer from "../Footer/Footer";

function AppLayout() {
  return (
    <>
      <Main>
        <Outlet>
          <HomePage />
          <ProductsPage />
        </Outlet>
        <Footer />
      </Main>
    </>
  );
}

export default AppLayout;
