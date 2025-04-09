import { useState } from "react";
import Button from "../Button/Button";
import classes from "./PlanCard.module.css";

type PlanCardTypes = {
  title: string;
  features: string[];
  caption: string;
  accentColors: string[];
};

const PlanCard = ({
  title,
  features,
  caption,
  accentColors,
}: PlanCardTypes) => {
  return (
    <div className={classes.container}>
      <h2 style={{ backgroundColor: accentColors[0] }}>{caption}</h2>
      <div
        className={`${classes.featuresSection}`}
        style={{ backgroundColor: accentColors[1] }}
      >
        <h4>{title}</h4>
        <ul>
          {features?.map((data) => {
            return <li key={data}>{data}</li>;
          })}
        </ul>

        <Button>Pay for this plan</Button>
      </div>
    </div>
  );
};

export default PlanCard;
