import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import ProductRow from "./products/ProductRow";
import ProductRow2 from "./products/ProductRow2";
import ProductRow3 from "./products/ProductRow3";

function App() {

  return (
    <>
      <Header />
      <div className="App">
        <ProductRow />
        <ProductRow2 />
        <ProductRow3 />

      </div>
    </>
  );
}

export default App;
