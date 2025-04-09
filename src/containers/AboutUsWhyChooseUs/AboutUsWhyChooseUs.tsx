import classes from "./AboutUsWhyChooseUs.module.css";
import whyChooseUs1 from "../../assets/Images/whyChooseUs1.svg";
import whyChooseUs2 from "../../assets/Images/whyChooseUs2.svg";
import whyChooseUs3 from "../../assets/Images/whyChooseUs3.svg";
import Image from "next/image";

const whyChooseus = [
  {
    title: "Simplicity",
    caption:
      "At Eazy Text, we believe technology should make life easier—not more complicated. That's why our platform is built with simplicity at its core. From account setup to sending your first message, every step is intuitive, streamlined, and easy to follow. Whether you're a tech expert or new to bulk messaging, our goal is to make the experience feel natural and stress-free, so you can focus on what matters most: communicating effectively.",
    image: whyChooseUs3,
  },
  {
    title: "Reliability",
    caption:
      "When it comes to messaging, timing and accuracy are everything. Our system is engineered for stability, ensuring that your messages are sent and delivered without fail. With built-in scheduling, delivery status updates, and real-time performance insights, you can trust that Eazy Text will perform when you need it most—every single time. We're committed to making sure your voice is heard without interruption or delay.",
    image: whyChooseUs2,
  },
  {
    title: "Innovation",
    caption:
      "Your privacy and data protection are top priorities for us. We use industry-standard encryption and secure protocols to safeguard all communications and sensitive information shared on our platform. Whether you're managing contact lists or scheduling campaigns, you can rest assured that your data—and your recipients’—is in safe hands. We’re fully compliant with data privacy regulations, giving you peace of mind as you grow your messaging efforts.",
    image: whyChooseUs1,
  },
];

const AboutUsWhyChooseUs = () => {
  return (
    <section className={classes.container}>
      <h4>Why Choose Us?</h4>

      <div className={classes.sections}>
        {whyChooseus?.map((data) => {
          return (
            <div className={classes.item} key={data?.title}>
              <h4>{data?.title}</h4>
              <p>{data?.caption}</p>
              <Image src={data?.image} alt={data?.caption} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutUsWhyChooseUs;
