import Loader from "@/components/Loader/Loader";
import GetTheApp from "@/containers/GetTheApp/GetTheApp";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <GetTheApp />
    </Suspense>
  );
};

export default page;
