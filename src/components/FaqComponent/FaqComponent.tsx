"use client";

import ArrowDown from "@/assets/svgIcons/ArrowDown";
import ArrowRightSub from "@/assets/svgIcons/ArrowRightSub";
import { useState } from "react";
import classes from "./FaqComponent.module.css";

type FaqComponentTypes = {
  question: string;
  answer: string;
};

const FaqComponent = ({ question, answer }: FaqComponentTypes) => {
  // States
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`${classes.outerContainer} ${
        isActive ? classes?.active : classes.inActive
      }`}
    >
      <div className={classes.container}>
        <div className={classes.gradient}></div>

        <div
          className={classes.question}
          onClick={() => setIsActive((prevState) => !prevState)}
        >
          <h4>{question}</h4>
          <div>
            <span>More</span>
            <ArrowDown
              fill="#CDA5D5"
              style={
                isActive
                  ? {
                      transform: "rotate(-90deg)",
                      transition: "all 0.2s ease-in-out",
                    }
                  : {
                      transform: "rotate(0deg)",
                      transition: "all 0.2s ease-in-out",
                    }
              }
            />
          </div>
        </div>

        <div
          className={classes.openClose}
          style={isActive ? { maxHeight: "500px" } : { maxHeight: "0px" }}
        >
          <div className={classes.answer}>{answer}</div>

          <div className={classes.cta}>
            <ArrowRightSub fill="#CDA5D5" />
            <span>Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
