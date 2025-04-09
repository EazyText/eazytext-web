import classes from "./AboutUsMissionAndVision.module.css";
import missionImage from "../../assets/Images/missionImage.svg";
import visionImage from "../../assets/Images/visionImage.svg";
import Image from "next/image";

const missionAndVision = [
  {
    title: "Our Mission",
    caption: [
      "To revolutionize messaging by providing a simple, scalable, and effective bulk communication solution for businesses and individuals.",
    ],
    image: missionImage,
  },
  {
    title: "Our Vision",
    caption: [
      "To be the go-to platform for seamless bulk messaging, helping brands and people connect without limits.",
      "We’re committed to making communication accessible, efficient, and results-driven. Whether you're a small business sending updates or a large organization running campaigns, Eazy Text is built for you.",
    ],
    image: visionImage,
  },
];

const AboutUsMissionAndVision = () => {
  return (
    <section className={classes.container}>
      {missionAndVision?.map((data) => {
        return (
          <div className={classes.item} key={data?.title}>
            <Image src={data?.image} alt={data?.title} />

            <div>
              <h4>{data?.title}</h4>
              {data?.caption?.map((capt) => {
                return <p key={capt}>{capt}</p>;
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default AboutUsMissionAndVision;
