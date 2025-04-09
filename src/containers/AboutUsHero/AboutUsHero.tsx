import ArrowRightSub from "@/assets/svgIcons/ArrowRightSub";
import Button from "@/components/Button/Button";
import Image from "next/image";
import classes from "./AboutUsHero.module.css";
import aboutUsHero from "../../assets/Images/aboutUsHero.svg";

const AboutUsHero = () => {
  return (
    <section className={classes.container}>
      <div className={classes.textSection}>
        <h1>
          {" "}
          Bridging the Gap Between <span> You & Your Audience</span>
        </h1>
        <p>
          At Eazy Text, we believe that communication should be effortless,
          efficient, and impactful. Our platform is designed to simplify bulk
          messaging—whether through SMS or email—allowing businesses and
          individuals to connect with their audience in a seamless and
          cost-effective way. With powerful features like message scheduling,
          custom templates, and real-time tracking, we make sure your messages
          reach the right people at the right time.
        </p>
        <Button>
          <ArrowRightSub />
          <span>Join Us</span>
        </Button>
      </div>

      <Image alt="About Us" src={aboutUsHero} />
    </section>
  );
};

export default AboutUsHero;
