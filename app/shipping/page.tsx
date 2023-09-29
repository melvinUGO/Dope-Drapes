import React from "react";

const ShippingPage = () => {
  return (
    <>
      <div className="max-w-[560px] mx-auto p-[20px] ">
        <h1 className="text-center py-5">SHIPPING POLICY</h1>
        <div className="shipping-details">
          <p>
            Email fake@gmail.com with your order number, with any order
            questions.
          </p>
          <p>
            <span className=" underline font-bold">Return Policy</span>
          </p>
          <p>
            <b>No refunds</b> unless we messed up item or size.
          </p>
          <br />
          <br />
          <p>
            <span className=" underline font-bold">Shipping</span>
          </p>
          <p>
            <span className=" font-bold">
              Priority shipping is only time from when we actually bring to post
              office and ship.
            </span>{" "}
            All of our products are made to order to be environmentally friendly
            as possible and eliminate waste - please allow 2-3 weeks to receive
            your order.
          </p>
          <p>
            Email us asap for address changes and we shall see if we can
            accommodate.
          </p>
        </div>
      </div>
    </>
  );
};

export default ShippingPage;
