import Layout from "@/layouts/Layout/Layout";
import React from "react";
import HomeAmplifying from "../HomeAmplifying/HomeAmplifying";
import HomeDiscover from "../HomeDiscover/HomeDiscover";
import HomeFaqs from "../HomeFaqs/HomeFaqs";
import HomeHero from "../HomeHero/HomeHero";
import HomePlans from "../HomePlans/HomePlans";
import HomeSignUp from "../HomeSignUp/HomeSignUp";
import HomeTestimonials from "../HomeTestimonials/HomeTestimonials";
import HomeUseCase from "../HomeUseCase/HomeUseCase";

const Home = () => {
  return (
    <Layout>
      <HomeHero />
      <HomeAmplifying />
      <HomeUseCase />
      <HomePlans />
      <HomeTestimonials />
      <HomeFaqs />
      <HomeDiscover />
      <HomeSignUp />
    </Layout>
  );
};

export default Home;
