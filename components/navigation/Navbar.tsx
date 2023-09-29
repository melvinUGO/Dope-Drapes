"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { useNavGlobalContext } from "@/contexts/navigaionContext";
import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import { Cart } from "@/types";

const Navbar = () => {
  const { openSidebar, openSearchModal, openCartModal, onCheckoutPage } =
    useNavGlobalContext();
  const [isHidden, setIsHidden] = useState(false);
  const cart = useAppSelector((state) => state.cartReducer);
  const [cartState, setCartState] = useState<Cart[]>([]);
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setIsCollapsed(prevScrollPos < currentScrollPos);
        setPrevScrollPos(currentScrollPos);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [prevScrollPos]);

  // Hide navbar when user in checkout
  useEffect(() => {
    setIsHidden(pathname === "/checkout");
  }, [pathname]);

  // set cart state in client
  useEffect(() => {
    setCartState(cart);
  }, [cart]);

  return (
    <nav
      className={`w-full fixed left-0 top-0 bg-[#ffffff] dark:bg-[#121212] z-40 ${
        isHidden ? "hidden" : ""
      } ${
        isCollapsed && "max-h-0 overflow-hidden"
      } transition-max-h duration-300 ease-in-out`}
    >
      <div className=" max-w-[1400px] mx-auto flex items-center justify-between p-4 pt-8 sm:p-5 lg:px-3">
        <button onClick={openSidebar}>
          <FaBars className="dark:text-[#FFFFFF]" />
        </button>
        <Link href={"/"}>
          {" "}
          <Image
            src={logo}
            alt="logo"
            priority
            className=" w-[130px] sm:w-[180px] md:w-[250px]"
          />
        </Link>
        <div className=" flex items-center gap-2">
          <button onClick={openSearchModal}>
            <FiSearch className="dark:text-[#FFFFFF]" />
          </button>

          <div
            className={`dark:text-[#FFFFFF] relative ${
              isHidden ? " hidden " : " "
            }`}
          >
            <button
              onClick={openCartModal}
              className={` ${
                cartState.length > 0 &&
                "  before:w-[11px] before:h-[11px] before:absolute before:top-0 before:left-0 before:rounded-full before:bg-[#141414] dark:before:bg-white "
              }`}
            >
              {" "}
              <HiOutlineShoppingBag />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
