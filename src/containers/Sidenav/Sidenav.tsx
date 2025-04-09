import classes from "./Sidenav.module.css";
import Link from "next/link";
import Close from "@/assets/svgIcons/Close";
import { headerRoutes, ROUTES } from "@/utilities/routes";

type SidenavTypes = {
  onClose: () => void;
};

const Sidenav = ({ onClose }: SidenavTypes) => {
  return (
    <section className={classes.container}>
      <div>
        <Close onClick={onClose} />
      </div>
      <nav>
        <Link href={ROUTES.BASE_URL}>Home</Link>
        {headerRoutes?.map((route, i) => {
          return (
            <Link key={i} href={route?.route}>
              {route?.name}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidenav;
