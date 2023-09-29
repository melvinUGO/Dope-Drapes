"use client";
import { handlePayment } from "@/app/paystackInterface";
import { NigerianStates } from "@/assets/NigerianStates";
import { useGlobalCartContext } from "@/contexts/cartContext";
import { useGlobalUserContext } from "@/contexts/userContext";
import axios from "axios";
//import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
// const handlePayment = dynamic(() => import("@/app/paystackInterface"), {
//   ssr: false,
// });

const CheckoutCustomerDetails = () => {
  const { user } = useGlobalUserContext();
  const { subTotal } = useGlobalCartContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();

  //    const [shippingFee, setShippingFee] = useState("");

  // //    set shipping fee
  //    useEffect(() => {
  //      if (state?.toLowerCase() !== "lagos") {
  //        console.log(state.toLowerCase());
  //        setShippingFee(5000);
  //      } else {
  //        axios.get("/api/settings?name=shippingFee").then((res) => {
  //          setShippingFee(res.data?.value);
  //        });
  //      }
  //    }, [state]);

  const getUserDetails = async () => {
    const response = await axios("/api/account/address?id=" + user?.userId);
    const userDetails = response.data;
    if (userDetails) {
      setName(userDetails?.name);
      setEmail(userDetails?.email);
      setState(userDetails?.state);
      setAddress(userDetails?.address);
      setNumber(userDetails?.number);
    }
  };

  useEffect(() => {
    if (!user.userId) return;
    getUserDetails();
  }, []);

  const goToPayment = async () => {
    handlePayment(email, subTotal, router);

    // const res = await axios.post("/api/checkout", {
    //   name,
    //   email,
    //   address,
    //   number,
    //   state,
    //   country,
    //   total: productsTotal + parseInt(shippingFee || 0),
    //   products: cartProducts.join(","),
    // });
  };

  return (
    <div>
      <form>
        <input
          required
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          required
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">--Select State--</option>
          {NigerianStates.map((state, index) => {
            return (
              <option value={state} key={index}>
                {state}
              </option>
            );
          })}
        </select>
        <br />
        <input
          required
          type="text"
          placeholder="Street Address"
          value={address}
          name="address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <input
          required
          type="tel"
          placeholder="Number"
          value={number === null ? "" : number}
          name="number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <button className="btn" type="button" onClick={goToPayment}>
          Pay
        </button>
      </form>

      <Link
        href="/products"
        className="flex items-center gap-3 pt-10 text-[#197bbd]"
      >
        <FaAngleLeft />
        Continue Shopping
      </Link>
    </div>
  );
};

export default CheckoutCustomerDetails;
