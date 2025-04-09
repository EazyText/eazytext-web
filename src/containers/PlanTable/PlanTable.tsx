import CustomTable from "@/components/CustomTable/CustomTable";
import { planTable } from "@/utilities/plans";
import classes from "./PlanTable.module.css";

const tableHeaders = ["Plan", "Starter", "Pro", "Enterprise"];

const PlanTable = () => {
  return (
    <section className={classes.container}>
      <CustomTable
        data={planTable}
        fields={["title", "free", "basic", "premium"]}
        header={"Plans and Pricing"}
        headers={tableHeaders}
      />
    </section>
  );
};

export default PlanTable;
