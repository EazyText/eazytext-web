"use client";

import Menu from "@/assets/svgIcons/Menu";
import Button from "@/components/Button/Button";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { headerRoutes } from "@/utilities/routes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Sidenav from "../Sidenav/Sidenav";
import classes from "./Header.module.css";

const Header = () => {
  // Router
  const pathname = usePathname();
  const router = useRouter();

  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();

  // Refs
  const sideNavRef = useRef<HTMLDivElement | null>(null);

  // Utils
  const handleSidenavOpen = () => {
    if (sideNavRef?.current) {
      sideNavRef.current.style.width = "100vw";
    }
  };

  const handleSidenavClose = () => {
    if (sideNavRef?.current) {
      sideNavRef.current.style.width = "0%";
    }
  };

  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(currentScrollPos < prevScrollPos || currentScrollPos < 50);
    setPrevScrollPos(currentScrollPos);
  };

  // Effects
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [prevScrollPos]);

  return (
    <header
      className={`${classes.container} 
      ${
        visible ? classes.visible : classes.hidden
        // null
      }
      `}
    >
      <h4 onClick={() => router.push("/")}>EazyText</h4>

      <nav>
        {headerRoutes?.map((route) => {
          return (
            <Link
              key={route?.route}
              href={route?.route}
              className={
                pathname === route.route ? classes?.active : classes?.inActive
              }
            >
              {route.name}
            </Link>
          );
        })}
      </nav>

      <Button onClick={() => updateSearchParams("auth", "sign-up", "set")}>
        Sign Up
      </Button>

      <Menu onClick={handleSidenavOpen} />

      <div className={classes.sidenav} ref={sideNavRef}>
        <Sidenav onClose={handleSidenavClose} />
      </div>
    </header>
  );
};

export default Header;
