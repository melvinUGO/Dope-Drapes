"use client";

import { useAppSelector } from "@/redux/store";

const { createContext, useContext, useEffect, useState } = require("react");

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const cart = useAppSelector((state) => state.cartReducer);
  const [subTotal, setSubTotal] = useState(0);

  const saveToLocalstorage = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  useEffect(() => {
    saveToLocalstorage();
  }, [cart]);

  const sortCart = (cart, uniqueCartIds) => {
    const sortedByIdCartArray = [];
    const sortedBySizeCartArray = [];

    uniqueCartIds.map((id) => {
      const uniqueCartItem = cart.filter((item) => item.id === id);
      sortedByIdCartArray.push(uniqueCartItem);
    });

    if (sortedByIdCartArray.length > 0) {
      sortedByIdCartArray.map((itemsArray) => {
        // small
        const sizeSmall = itemsArray.filter(
          (item) => item.size.toLowerCase() === "small"
        );
        if (sizeSmall.length > 0) {
          const sizeSmallQuantity = sizeSmall?.reduce((acc, obj) => {
            return acc + obj.quantity;
          }, 0);
          sortedBySizeCartArray.push({
            id: sizeSmall[0]?.id,
            quantity: sizeSmallQuantity,
            size: sizeSmall[0]?.size,
            image: sizeSmall[0]?.image,
            title: sizeSmall[0]?.title,
            price: sizeSmall[0]?.price,
          });
        }
        // medium
        const sizeMedium = itemsArray.filter(
          (item) => item.size.toLowerCase() === "medium"
        );
        if (sizeMedium.length > 0) {
          const sizeMediumQuantity = sizeMedium?.reduce((acc, obj) => {
            return acc + obj.quantity;
          }, 0);
          sortedBySizeCartArray.push({
            id: sizeMedium[0]?.id,
            quantity: sizeMediumQuantity,
            size: sizeMedium[0]?.size,
            image: sizeMedium[0]?.image,
            title: sizeMedium[0]?.title,
            price: sizeMedium[0]?.price,
          });
        }
        // large
        const sizeLarge = itemsArray.filter(
          (item) => item.size.toLowerCase() === "large"
        );
        if (sizeLarge.length > 0) {
          const sizeLargeQuantity = sizeLarge.reduce((acc, obj) => {
            return acc + obj.quantity;
          }, 0);
          sortedBySizeCartArray.push({
            id: sizeLarge[0]?.id,
            quantity: sizeLargeQuantity,
            size: sizeLarge[0]?.size,
            image: sizeLarge[0]?.image,
            title: sizeLarge[0]?.title,
            price: sizeLarge[0]?.price,
          });
        }
        // xlarge
        const sizeXlarge = itemsArray.filter(
          (item) => item.size.toLowerCase() === "x-large"
        );
        if (sizeXlarge.length > 0) {
          const sizeXlargeQuantity = sizeXlarge.reduce((acc, obj) => {
            return acc + obj.quantity;
          }, 0);
          sortedBySizeCartArray.push({
            id: sizeXlarge[0]?.id,
            quantity: sizeXlargeQuantity,
            size: sizeXlarge[0]?.size,
            image: sizeXlarge[0]?.image,
            title: sizeXlarge[0]?.title,
            price: sizeXlarge[0]?.price,
          });
        }
        // xxlarge
        const sizeXxlarge = itemsArray.filter(
          (item) => item.size.toLowerCase() === "xx-large"
        );
        if (sizeXxlarge.length > 0) {
          const sizeXxlargeQuantity = sizeXxlarge.reduce((acc, obj) => {
            return acc + obj.quantity;
          }, 0);
          sortedBySizeCartArray.push({
            id: sizeXxlarge[0]?.id,
            quantity: sizeXxlargeQuantity,
            size: sizeXxlarge[0]?.size,
            image: sizeXxlarge[0]?.image,
            title: sizeXxlarge[0]?.title,
            price: sizeXxlarge[0]?.price,
          });
        }
      });
    }
    return sortedBySizeCartArray;
  };

  const addSubtotal = (total) => {
    setSubTotal(total);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        sortCart,
        subTotal,
        addSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useGlobalCartContext = () => {
  return useContext(CartContext);
};
