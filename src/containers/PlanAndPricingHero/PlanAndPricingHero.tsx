import CheckIcon from "@/assets/svgIcons/CheckIcon";
import Button from "@/components/Button/Button";
import classes from "./PlanAndPricingHero.module.css";
import planAndPricingHero from "../../assets/Images/planAndPricingHero.svg";
import Image from "next/image";

const pricingFeatures = [
  "Bulk SMS & Email Messaging",
  "Custom Templates & Automation",
  "Real-Time Tracking & Insights",
  " Secure Payment & Easy Upgrades",
];

const PlanAndPricingHero = () => {
  return (
    <section className={classes.container}>
      <div className={classes.textSection}>
        <h1>
          Messaging That Grows <br />
          with You
        </h1>
        <p>
          No matter your messaging needs, we’ve got a plan that fits. Whether
          you're a small business, a large enterprise, or just getting started,
          our flexible pricing ensures you only pay for what you need.
        </p>

        <ul>
          {pricingFeatures.map((data) => {
            return (
              <li key={data}>
                <CheckIcon />
                <span>{data}</span>
              </li>
            );
          })}
        </ul>

        <Button>Start Free Trial Now</Button>
      </div>

      <Image alt="Messaging That Grows With You" src={planAndPricingHero} />
    </section>
  );
};

export default PlanAndPricingHero;
