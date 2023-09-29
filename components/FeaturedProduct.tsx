"use client";
import React from "react";
import AddToCart from "./cart/AddToCart";
import { Product } from "@/types";

const FeaturedProduct = ({ product }: { product: Product }) => {
  return (
    <div className=" center py-[40px]">
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="w-full">
          {product && <img src={product.images[0]} alt="product.title" />}
        </div>
        <AddToCart product={product} />
      </div>
    </div>
  );
};

export default FeaturedProduct;
