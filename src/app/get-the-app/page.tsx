import GetTheApp from "@/containers/GetTheApp/GetTheApp";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense>
      <GetTheApp />
    </Suspense>
  );
};

export default page;
