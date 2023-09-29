import React from "react";
import ProductBox from "./ProductBox";
import { Product } from "@/types";

const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className=" py-20 center grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-7">
      {products.map((product, index) => {
        return <ProductBox key={index} product={product} />;
      })}
    </div>
  );
};

export default ProductsGrid;
