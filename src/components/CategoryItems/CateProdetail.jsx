import React from "react";
import Categories from "./Categories";
import FlashDeals from "../flashDeals/FlashDeals";
import Product from "./Product";
import './style.css'

const CateProdetail = ({ addToCart, productItems, shopItems }) => {
  return (
    <>
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <div className="category_detail">
        <Categories />
        <Product shopItems={shopItems} addToCart={addToCart} />
      </div>
    </>
  );
};

export default CateProdetail;
