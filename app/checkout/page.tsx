import CheckoutCartDetails from "@/components/checkout/CheckoutCartDetails";
import { FaAngleRight } from "react-icons/fa";
import dynamic from "next/dynamic";

const CheckoutCustomerDetails = dynamic(
  () => import("@/components/checkout/CheckoutCustomerDetails"),
  {
    ssr: false,
  }
);

const CheckoutPage = () => {
  return (
    <div className="px-[20px] py-[40px] center">
      <h1>DEKREATORS IDEA</h1>
      <p className="flex items-center gap-2">
        <span className=" flex items-center">
          <span className=" text-[#197bbd]">Cart</span>
          <FaAngleRight />
        </span>
        <span className=" flex items-center text-black dark:text-white">
          Information
          <FaAngleRight />
        </span>
        <span className="text-[#707070]">Payment</span>
      </p>
      <div className=" lg:grid grid-cols-2 gap-5 pt-10">
        <CheckoutCustomerDetails />
        <CheckoutCartDetails />
      </div>
    </div>
  );
};

export default CheckoutPage;
