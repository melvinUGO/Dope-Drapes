"use client";
import React from "react";
import ProductBox from "./ProductBox";
import { Product } from "@/types";
import { RevealWrapper } from "next-reveal";

const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className=" py-20 center grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-7">
      {products.map((product, index) => {
        return (
          <RevealWrapper key={index} delay={index * 50}>
            <ProductBox product={product} />
          </RevealWrapper>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
