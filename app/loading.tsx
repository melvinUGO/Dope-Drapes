"use client";
import React from "react";
import { Rings } from "react-loader-spinner";

const Loading = () => {
  return (
    <div>
      <div className="flex items-center justify-center my-28 py-28">
        <Rings
          height="80"
          width="100"
          color="#121212"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      </div>
    </div>
  );
};

export default Loading;
