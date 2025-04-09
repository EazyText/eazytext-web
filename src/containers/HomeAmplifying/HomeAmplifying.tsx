import Button from "@/components/Button/Button";
import classes from "./HomeAmplifying.module.css";
import homeAmplify from "../../assets/Images/homeAmplify.svg";
import Image from "next/image";

const HomeAmplifying = () => {
  return (
    <section className={classes.container}>
      <div>
        <h2>
          Amplifying Voices, <span>Celebrating Creativity</span>
        </h2>
        <p>
          Our platform empowers businesses and individuals to communicate
          effortlessly through seamless bulk messaging. With a focus on
          accessibility and efficiency, Eazy Text enables users to send
          personalized SMS and emails, manage contact groups, and schedule
          messages with ease. By integrating powerful automation and real-time
          tracking, we ensure every message reaches its audience effectively.
          Whether for marketing, customer engagement, or team communication,
          Eazy Text provides a reliable and intuitive solution to streamline
          communication and enhance connectivity.
        </p>

        <Button>Join us</Button>
      </div>

      <Image
        src={homeAmplify}
        alt="Amplifying Voices, Celebrating Creativity"
      />
    </section>
  );
};

export default HomeAmplifying;
