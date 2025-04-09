import Loader from "@/components/Loader/Loader";
import LegalNoticesLayout from "@/layouts/LegalNoticesLayout/LegalNoticesLayout";
import { termsAndConditions } from "@/utilities/legalNotices";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <LegalNoticesLayout
        caption="Terms and Conditions"
        header="Terms and Conditions"
        data={termsAndConditions}
      />
    </Suspense>
  );
};

export default page;
