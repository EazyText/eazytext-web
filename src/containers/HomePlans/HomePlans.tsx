import PlanCard from "@/components/PlanCard/PlanCard";
import { plans } from "@/utilities/plans";
import classes from "./HomePlans.module.css";

const HomePlans = () => {
  return (
    <section className={classes.container}>
      <h2 className="h2">Flexible Plans for Every Need</h2>
      <p className="p">
        Choose a plan that fits your messaging volume and business goals.
      </p>

      <div className={classes.plans}>
        {plans?.map((data) => {
          return <PlanCard key={data?.title} {...data} />;
        })}
      </div>
    </section>
  );
};

export default HomePlans;
