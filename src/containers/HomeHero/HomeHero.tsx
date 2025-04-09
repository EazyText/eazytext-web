"use client";

import Button from "@/components/Button/Button";
import Link from "next/link";
import classes from "./HomeHero.module.css";
import { ROUTES } from "../../utilities/routes";
import Input from "@/components/Input/Input";
import bg2 from "../../assets/Images/heroSectionBg2.svg";
import bg3 from "../../assets/Images/heroSectionBg3.svg";
import glassBall from "../../assets/Images/glassBall.svg";

import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { inputChangeHandler } from "@/helpers/inputChangeHandler";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";

const HomeHero = () => {
  // Context
  const { setAuthData, authData } = useContext(AuthContext);

  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();

  return (
    <section className={classes.container}>
      <div className={classes.textSection}>
        <p>launching 2025</p>
        <h1>
          Grow your users. <br />
          Smarter.
        </h1>
        <p>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div>
          <Input
            placeholder="Enter email"
            name="email"
            value={authData?.email}
            onChange={(e) => {
              inputChangeHandler(e, setAuthData);
            }}
          />
          <Button
            type="secondary"
            onClick={() => {
              if (authData?.email) updateSearchParams("auth", "sign-up", "set");
            }}
          >
            Join Us
          </Button>
        </div>
        <p>
          We care about your data in our{" "}
          <Link href={ROUTES.PRIVACY_POLICY}>privacy policy</Link>.
        </p>
      </div>

      <Image alt="Grow your Users, Smarter" src={bg2} />
      <Image alt="Grow your Users, Smarter" src={glassBall} />
      <Image alt="Grow your Users, Smarter" src={bg3} />
    </section>
  );
};

export default HomeHero;
