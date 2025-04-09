import Image from "next/image";
import classes from "./HomeDiscover.module.css";
import homeDiscover from "../../assets/Images/homeDiscover.svg";
import Button from "@/components/Button/Button";
import ArrowRightSub from "@/assets/svgIcons/ArrowRightSub";

const HomeDiscover = () => {
  return (
    <section className={classes.container}>
      <h2>
        Discover the endless
        <span>possibilities of Messaging</span>
      </h2>

      <Image
        src={homeDiscover}
        alt="Discover the endless possibilitis of messaging"
      />

      <Button>
        <ArrowRightSub />
        <span>Join us</span>
      </Button>
    </section>
  );
};

export default HomeDiscover;
