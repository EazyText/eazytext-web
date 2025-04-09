import Loader from "@/components/Loader/Loader";
import AboutUs from "@/containers/AboutUs/AboutUs";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AboutUs />
    </Suspense>
  );
};

export default page;
