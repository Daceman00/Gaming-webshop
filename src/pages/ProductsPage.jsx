import React, { useState } from "react";
import Products from "../components/Products/Products";
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";

function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <Navbar />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Products searchQuery={searchQuery} />
    </>
  );
}

export default ProductsPage;
