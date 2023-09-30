"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import SocialIcons from "../SocialIcons";
import { usePathname } from "next/navigation";

const Footer = () => {
  const [isHidden, setIsHidden] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsHidden(pathname === "/checkout");
  }, [pathname]);
  return (
    <footer
      className={`border border-t-[#e4e4e4] dark:border-[#666666] mt-10  ${
        isHidden ? " hidden " : " "
      }`}
    >
      <div className="px-3 py-10 md:grid grid-cols-2  max-w-[1400px] mx-auto">
        <div className=" footer-links-container flex flex-col gap-4 text-[#111c] text-[.8rem] pb-5 md:pb-0">
          <Link href="/contact">Contact Us</Link>
          <Link href="/shipping">Shipping</Link>
          <Link href="/FAQ">FAQ</Link>
          <Link href="returnPolicy">Return Policy</Link>
          <Link href="privacyPolicy">Privacy Policy</Link>
        </div>
        <div className="">
          <p>SOCIALS</p>
          <SocialIcons />
        </div>
      </div>
      <div className=" p-5 flex flex-col sm:block gap-3 text-[#111c] dark:text-[#CCCCCC] text-center lg:text-right sm:text-left bg-[#f2f2f2] dark:bg-[#1A1A1A]">
        <small className="md:pr-5">
          Developed by{" "}
          <a
            href="https://melvin-ugo.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Melvin Ugo
          </a>
        </small>
        <small> &copy; 2023, Dope Drapes </small>
      </div>
    </footer>
  );
};

export default Footer;
