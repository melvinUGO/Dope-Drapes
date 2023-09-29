"use client";
import React, { useState } from "react";
import HeadingOne from "@/components/HeadingOne";
import { Product } from "@/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addToCart } from "@/redux/features/cart-slice";

const AddToCart = ({ product }: { product: Product }) => {
  const [size, setSize] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch<AppDispatch>();

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrement = () => {
    setQuantity((prev) => prev - 1);
  };

  const item = {
    id: product._id,
    title: product?.title,
    price: product?.price,
    image: product?.images?.[0],
    quantity,
    size,
  };

  return (
    <div className="w-full">
      <HeadingOne text={product.title} center={false} />
      <form className=" border border-1 border-[#21212133] dark:border-[#666666]">
        <div className=" bg-[#f2f2f2] dark:bg-[#444444] p-3 px-5">
          <h1>₦{product?.price}</h1>
        </div>
        <div className="px-5 py-8">
          <div>
            <p>SIZE</p>
            <div className=" flex flex-wrap items-center gap-2">
              {product?.size?.split(",").map((s, index) => {
                return (
                  <div className="" key={index}>
                    <input
                      className=""
                      hidden
                      type="radio"
                      name="size"
                      value={s}
                      id={s}
                      checked={size === s}
                      onChange={(e) => setSize(e.target.value)}
                    />
                    <label
                      htmlFor={s}
                      className={`${
                        size === s && "bg-black text-white"
                      } capitalize cursor-pointer border border-black dark:border-[#666666] p-1 px-4 text-[0.9rem]`}
                    >
                      {s}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" flex justify-between items-center py-5">
            <p>Quantity</p>
            <div className=" border bg-[#f2f2f2] dark:border-[#666666] text-center max-w-[150px] flex items-center">
              <button
                type="button"
                className="p-2 px-3 border bg-[#ffffff] dark:bg-[#444444] dark:border-[#666666] "
                onClick={decrement}
              >
                -
              </button>
              <p className="p-2 px-3 mb-0 dark:bg-[#333333] ">{quantity}</p>
              <button
                type="button"
                className="p-2 px-3 border bg-[#ffffff] dark:bg-[#444444] dark:border-[#666666] "
                onClick={increment}
              >
                +
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={() => dispatch(addToCart(item))}
            className="w-full py-2 border border-black dark:bg-[#444444] hover:bg-black hover:text-white"
          >
            ADD TO CART <span className="text-[1.2rem]">+</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToCart;
