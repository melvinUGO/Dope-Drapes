"use client";
import AccountDetailsForm from "@/components/AccountDetailsForm";
import HeadingOne from "@/components/HeadingOne";
import { useGlobalUserContext } from "@/contexts/userContext";
import Link from "next/link";
import React, { useState } from "react";

const AccountPage = () => {
  const { user, logout } = useGlobalUserContext();

  const [ordersLoaded, setOrdersLoaded] = useState(true);
  const [orders, setOrders] = useState([]);
  const [accountDetails, setAccountDetails] = useState([]);

  return (
    <>
      <div className="center px-[20px] py-[40px]">
        <HeadingOne text={"MY ACCOUNT"} />
        <Link
          onClick={logout}
          href="/"
          className=" flex justify-center items-center pb-5"
        >
          LOG OUT
        </Link>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="">
            <h1>ORDER HISTORY</h1>
            <p>You haven&apos;t placed any orders yet.</p>
          </div>
          <div className=" md:min-w-[300px]">
            <AccountDetailsForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountPage;
