"use client";

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { AuthContext } from "@/context/AuthContext";
import { inputChangeHandler } from "@/helpers/inputChangeHandler";
import { ROUTES } from "@/utilities/routes";
import Link from "next/link";
import { useContext } from "react";
import classes from "./SignUp.module.css";

const SignUp = () => {
  // Context
  const { authData, setAuthData } = useContext(AuthContext);

  return (
    <section className={classes.container}>
      <h3>Sign Up</h3>

      <form>
        <Input
          label="Email"
          type="email"
          name="email"
          value={authData?.email}
          onChange={(e) => inputChangeHandler(e, setAuthData)}
        />
        <Input
          label="Firstname "
          name="firstName"
          value={authData?.firstName}
          onChange={(e) => inputChangeHandler(e, setAuthData)}
        />
        <Input
          label="Lastname "
          name="lastName"
          value={authData?.lastName}
          onChange={(e) => inputChangeHandler(e, setAuthData)}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={authData?.password}
          onChange={(e) => inputChangeHandler(e, setAuthData)}
        />

        <Button
          disabled={
            !authData?.email ||
            !authData?.firstName ||
            !authData?.lastName ||
            !authData?.password
          }
        >
          Sign in
        </Button>
      </form>

      <p>
        Already have an acount? <Link href={ROUTES.SIGN_IN}> Sign In</Link>{" "}
      </p>
      <p>
        By continuing, you agree to the{" "}
        <Link href={ROUTES.TERMS_OF_USE}>Terms of use</Link> and{" "}
        <Link href={ROUTES.PRIVACY_POLICY}>Privacy Policy.</Link>
      </p>
    </section>
  );
};

export default SignUp;
