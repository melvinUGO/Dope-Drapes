import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type questionProps = {
  title: string;
  info: string;
};

const Question = ({ title, info }: questionProps) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header
        className="flex items-center justify-between hover:bg-gray-300 dark:bg-[#1A1A1A] p-2 my-2"
        onClick={() => setShowInfo(!showInfo)}
      >
        <h4 className="grow">{title}</h4>
        <button className="" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p dangerouslySetInnerHTML={{ __html: info }}></p>}
    </article>
  );
};

export default Question;
