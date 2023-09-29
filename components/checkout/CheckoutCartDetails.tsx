"use client";
import { useGlobalCartContext } from "@/contexts/cartContext";
import { Cart } from "@/types";
import React, { useEffect, useState } from "react";

const CheckoutCartDetails = () => {
  const { cart, sortCart } = useGlobalCartContext();
  const [sortedCart, setSortedCart] = useState([]);

  const uniqueCartIds = [...new Set(cart.map((item: Cart) => item.id))];

  useEffect(() => {
    const array = sortCart(cart, uniqueCartIds);
    setSortedCart(array);
  }, [cart]);

  const total = sortedCart.reduce((acc, obj: Cart) => {
    return acc + obj.price * obj.quantity;
  }, 0);
  return (
    <div>
      <div className="pl-[44px] pr-[5vw] hidden lg:block border-l border-l-[#6c6c6c]">
        {sortedCart.map((item: Cart, index) => {
          return (
            <article
              key={index}
              className="flex gap-3 items-center justify-between mb-3"
            >
              <div className=" flex gap-3 items-center">
                <div className="relative w-[60px] h-[60px] border border-[#dadada] rounded-md overflow-hidden">
                  <img src={item.image} alt={item.title} />
                  <p className=" w-[18px] h-[18px] text-center rounded-full bg-[#6c6c6c] text-white absolute right-0 top-0">
                    {item.quantity}
                  </p>
                </div>
                <div>
                  <p className=" font-bold m-0">{item.title}</p>
                  <p className=" text-[#6c6c6c] m-0">{item.size}</p>
                </div>
              </div>
              <p>₦{item.price}</p>
            </article>
          );
        })}
        <div className=" flex items-center justify-between my-10 text-[1.2rem]">
          <p className=" text-[1.2rem] font-bold">Total</p>
          <p className=" text-[1.2rem] ">₦{total}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCartDetails;
