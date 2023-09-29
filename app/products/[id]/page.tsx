"use client";
import Loading from "@/app/loading";
import AddToCart from "@/components/cart/AddToCart";
import { Product } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";

type productPageProps = {
  params: {
    id: string;
  };
};

const ProductsPage = ({ params }: productPageProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get("/api/products?id=" + params.id).then((res) => {
      setProduct(res.data);
    });
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-[600px] mx-auto lg:max-w-[1200px] p-[20px] md:py-[40px]">
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="w-full">
          {product && <img src={product?.images[0]} alt="product.title" />}
        </div>

        {product && <AddToCart product={product} />}
      </div>
      <div className="py-10">
        <h1 className="py-5">
          {" "}
          &ldquo;ORIGINAL RELEASE DATE:
          {product &&
            new Date(product?.createdAt).toUTCString().substring(0, 16)}
          &rdquo;
        </h1>
        <p className=" font-bold">ALL SALES ARE FINAL.</p>
        <p className=" font-bold">
          Please allow up to 3-5 business days for shipping and processing
        </p>
      </div>
    </div>
  );
};

export default ProductsPage;
