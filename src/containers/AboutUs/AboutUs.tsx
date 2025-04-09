import Layout from "@/layouts/Layout/Layout";
import React from "react";
import AboutUsHero from "../AboutUsHero/AboutUsHero";
import AboutUsMissionAndVision from "../AboutUsMissionAndVision/AboutUsMissionAndVision";
import AboutUsWhyChooseUs from "../AboutUsWhyChooseUs/AboutUsWhyChooseUs";
import HomeDiscover from "../HomeDiscover/HomeDiscover";
import HomeFaqs from "../HomeFaqs/HomeFaqs";

const AboutUs = () => {
  return (
    <Layout>
      <AboutUsHero />
      <AboutUsMissionAndVision />
      <AboutUsWhyChooseUs />
      <HomeFaqs />
      <HomeDiscover />
    </Layout>
  );
};

export default AboutUs;
