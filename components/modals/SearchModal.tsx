"use client";
import React from "react";
import { RxCross1 } from "react-icons/rx";
import SearchInput from "../SearchInput";
import { useNavGlobalContext } from "@/contexts/navigaionContext";
import Link from "next/link";

const SearchModal = () => {
  const { searchModalRef, closeSearchModal } = useNavGlobalContext();
  return (
    <dialog
      ref={searchModalRef}
      className="p-0 w-full sm:w-[75vw] md:max-w-[600px] backdrop:bg-[rgba(0,0,0,.7)] border dark:border-1 dark:border-[#666666]"
    >
      <div className=" flex items-center justify-between bg-[#f2f2f2] dark:bg-[#444444] p-3">
        <div></div>
        <h1>SEARCH</h1>
        <button
          onClick={closeSearchModal}
          className=" text-[1.3rem] outline-none dark:text-[#FFFFFF]"
        >
          <RxCross1 />
        </button>
      </div>
      <div className="p-5">
        <SearchInput outline closeSearchModal={closeSearchModal} />
        <div className="py-5">
          <h2>MAIN MENU</h2>
          <div className="grid grid-cols-2 gap-1 pt-2">
            <Link href={""}>
              {" "}
              <p>Shop</p>
            </Link>
            <Link href={""}>
              {" "}
              <p>Campaigns</p>
            </Link>
            <Link href={""}>
              {" "}
              <p>Articles</p>
            </Link>
            <Link href={""}>
              {" "}
              <p>Lookbook</p>
            </Link>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default SearchModal;
