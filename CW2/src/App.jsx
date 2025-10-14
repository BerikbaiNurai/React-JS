import React from "react";
import Product from "./Product";

function App() {
  return (
    <div>
      <h1>Product List</h1>

      <Product
        title = "MacOS 14"
        price = {1114000}
        inStock = {true}
        description = "New Macbook pro"
        rating = {5}
        tags = {["New", "Sale"]}
      />

      <Product
        title = "Redmi 14S"
        price = {79990}
        inStock = {true}
        description = "Great phone"
        rating = {3}
        tags = {["Sale"]}
      />

      <Product
        title = "Headphones"
        price = {40000}
        inStock = {true}
        description = "Hot version Marshall 4"
        rating = {4}
        tags = {["hot"]}
      />

    </div>
  );
}

export default App;