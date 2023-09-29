import { Product } from "@/types";
import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const ProductBox = ({ product }: { product: Product }) => {
  return (
    <Link href={"/products/" + product._id} className=" text-center">
      <div className=" relative w-full h-[250px] sm:h-[300px] md:h-[350px] ">
        <img
          src={product.images[0]}
          alt={product.title}
          className=" w-full h-full object-cover absolute z-10 hover:z-0"
          loading="lazy"
        />
        {product?.images[1] && (
          <img
            src={product.images[1]}
            alt={product.title}
            className=" w-full h-full object-cover absolute hover:z-10"
            loading="lazy"
          />
        )}
      </div>
      <button className="btn text-center" role="button" aria-label="button">
        <p className="m-0 flex text-center w-fit mx-auto ">
          {" "}
          SELECT OPTIONS
          <FaAngleRight className=" text-[1.1rem]" />
        </p>
      </button>
      <div>
        <h1 className="py-1 hover:text-[#6e6e6e]">{product.title}</h1>
        <p>₦{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductBox;
