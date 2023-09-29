"use client";
import React from "react";
import { RxCross1 } from "react-icons/rx";
import SocialIcons from "../SocialIcons";
import Link from "next/link";
import { useNavGlobalContext } from "@/contexts/navigaionContext";
import SearchInput from "../SearchInput";
import { useGlobalUserContext } from "@/contexts/userContext";
import ThemeToggleButton from "../ThemeToggleButton";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useNavGlobalContext();
  const { user, logout } = useGlobalUserContext();

  return (
    <div
      className={` ${
        isSidebarOpen ? " translate-x-0 " : " -translate-x-[100%] "
      }  ease-out delay-300 transition-opacity fixed top-0 left-0 z-50 w-[100vw] h-full bg-[rgba(0,0,0,0.3)] flex`}
    >
      <nav className="bg-[#ffffff] dark:bg-[#121212] text-[#212121] h-full w-[264px] sm:w-[324px] p-[20px]">
        <button onClick={closeSidebar}>
          <RxCross1 className="dark:text-[#FFFFFF]" />
        </button>
        <div
          className=" sidebar-links-container flex flex-col gap-5 py-10"
          onClick={closeSidebar}
        >
          <Link href="/products">SHOP</Link>
          {/* <Link href="/">CAMPAIGNS</Link> */}
          <Link href="/">ARTICLES</Link>
          <Link href="/">LOOKBOOK</Link>
          {user && <Link href={"/account"}>ACCOUNT</Link>}
          {user ? (
            <Link onClick={logout} href="/">
              LOG OUT
            </Link>
          ) : (
            <Link href="/account/login">LOG IN</Link>
          )}
        </div>
        <div>
          <div className="px-2 border border-t-[#e4e4e4] my-10">
            <SearchInput closeSidebar={closeSidebar} />
          </div>
        </div>
        <ThemeToggleButton />
        <SocialIcons />
      </nav>
      <div className="grow" onClick={closeSidebar} />
    </div>
  );
};

export default Sidebar;
