import Layout from "@/layouts/Layout/Layout";
import React from "react";
import HomeAmplifying from "../HomeAmplifying/HomeAmplifying";
import HomeDiscover from "../HomeDiscover/HomeDiscover";
import HomeFaqs from "../HomeFaqs/HomeFaqs";
import HomePlans from "../HomePlans/HomePlans";
import PlanAndPricingHero from "../PlanAndPricingHero/PlanAndPricingHero";
import PlanTable from "../PlanTable/PlanTable";

const PlanAndPricing = () => {
  return (
    <Layout>
      <PlanAndPricingHero />
      <PlanTable />
      <HomePlans />
      <HomeAmplifying />
      <HomeFaqs />
      <HomeDiscover />
    </Layout>
  );
};

export default PlanAndPricing;
