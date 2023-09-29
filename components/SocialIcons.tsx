import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className=" flex items-center gap-2 py-5">
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-[#111c] dark:text-[#FFFFFF] border border-[#111c] dark:border-[#FFFFFF] p-2 rounded-full w-fit"
      >
        <FaInstagram />
      </a>
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-[#111c] dark:text-[#FFFFFF] border border-[#111c] dark:border-[#FFFFFF] p-2 rounded-full w-fit"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default SocialIcons;
