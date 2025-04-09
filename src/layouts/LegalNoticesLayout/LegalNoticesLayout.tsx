"use client";

import LegalNoticesBody from "@/containers/LegalNoticesBody/LegalNoticesBody";
import LegalNoticesLayoutHeroSection from "@/containers/LegalNoticesLayoutHeroSection/LegalNoticesLayoutHeroSection";
import LegalNoticesSections from "@/containers/LegalNoticesSections/LegalNoticesSections";
import React, { useRef, useState } from "react";
import classes from "./LegalNoticesLayout.module.css";
import { legalNoticesType } from "@/utilities/types";
import Layout from "../Layout/Layout";
import LegalHero from "@/containers/LegalHero/LegalHero";

type LegalNoticesLayoutTypes = {
  header: string;
  caption: string;
  data: legalNoticesType[];
};

const LegalNoticesLayout = ({
  header,
  caption,
  data,
}: LegalNoticesLayoutTypes) => {
  // Refs
  const sectionsRef = useRef([]);

  //   States
  const [activeSection, setActiveSection] = useState("");

  return (
    <Layout className={classes.container}>
      <LegalHero header={header} caption={caption} />
      <div className={classes.detailSection}>
        <LegalNoticesSections
          sectionsRef={sectionsRef}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          privacyPolicy={data}
        />
        <LegalNoticesBody sectionsRef={sectionsRef} privacyPolicy={data} />
      </div>
    </Layout>
  );
};

export default LegalNoticesLayout;
