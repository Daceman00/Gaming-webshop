import React from "react";
import HomePage from "../../pages/HomePage";
import Main from "../Main/Main";
import { Outlet } from "react-router-dom";
import ProductsPage from "../../pages/ProductsPage";
import Footer from "../Footer/Footer";
import GenrePage from "../../pages/GenrePage";
import Navbar from "../Navbar/Navbar";

function AppLayout() {
  return (
    <>
      <Main>
        <Outlet>
          <HomePage />
          <ProductsPage />
          <GenrePage />
        </Outlet>
        <Footer />
      </Main>
    </>
  );
}

export default AppLayout;
