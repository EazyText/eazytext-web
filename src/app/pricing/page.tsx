import Loader from "@/components/Loader/Loader";
import PlanAndPricing from "@/containers/PlanAndPricing/PlanAndPricing";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <PlanAndPricing />
    </Suspense>
  );
};

export default page;
