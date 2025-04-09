"use client";

import Footer from "@/containers/Footer/Footer";
import Header from "@/containers/Header/Header";
import classes from "./Layout.module.css";

type LayoutTypes = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className }: LayoutTypes) => {
  return (
    <>
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
