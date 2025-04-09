import AboutUs from "@/containers/AboutUs/AboutUs";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense>
      <AboutUs />
    </Suspense>
  );
};

export default page;
