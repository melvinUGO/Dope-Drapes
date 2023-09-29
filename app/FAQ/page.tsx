"use client";
import HeadingOne from "@/components/HeadingOne";
import React, { useState } from "react";
import SingleQuestion from "../../components/Question";
import data from "../../assets/question";

const FaqPage = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <>
      <div className="center">
        <div className="p-[20px]">
          <HeadingOne text={"FAQ"} />
          <div>
            {questions.map((question) => {
              return (
                <SingleQuestion
                  key={question.id}
                  {...question}
                ></SingleQuestion>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
