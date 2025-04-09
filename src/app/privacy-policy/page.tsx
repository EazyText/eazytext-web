import Loader from "@/components/Loader/Loader";
import LegalNoticesLayout from "@/layouts/LegalNoticesLayout/LegalNoticesLayout";
import { privacyPolicy } from "@/utilities/legalNotices";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <LegalNoticesLayout
        caption="Privacy Poicy"
        header="Our Privacy Policy"
        data={privacyPolicy}
      />
    </Suspense>
  );
};

export default page;
