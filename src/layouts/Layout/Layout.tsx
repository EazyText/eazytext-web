"use client";

import Modal from "@/components/Modal/Modal";
import Footer from "@/containers/Footer/Footer";
import Header from "@/containers/Header/Header";
import SignUp from "@/containers/SignUp/SignUp";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import classes from "./Layout.module.css";

type LayoutTypes = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className }: LayoutTypes) => {
  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();

  // Router
  const auth = updateSearchParams("auth", undefined, "get");

  return (
    <>
      {auth && (
        <Modal
          onClick={() => updateSearchParams("auth", undefined, "delete")}
          body={<SignUp />}
        />
      )}
      <main className={classes.container}>
        <Header />
        <section className={`${classes?.body} ${className}`}>
          {children}
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
