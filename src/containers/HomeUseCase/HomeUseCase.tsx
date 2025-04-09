import classes from "./HomeUseCase.module.css";
import useCase1 from "../../assets/Images/useCase1.svg";
import useCase2 from "../../assets/Images/useCase2.svg";
import useCase3 from "../../assets/Images/useCase3.svg";
import Image from "next/image";

const images = [useCase1, useCase2, useCase3];

const HomeUseCase = () => {
  return (
    <section className={classes.container}>
      <h2>
        Effortless Messaging, <span>Powerful Connections</span>
      </h2>

      <div>
        {images?.map((data, i) => {
          return (
            <Image
              key={i}
              src={data}
              alt="Effortless Messaging, Powerful Connections"
            />
          );
        })}
      </div>

      <p>
        Eazy Text empowers businesses and individuals with seamless bulk
        messaging, making communication faster and more effective. Whether it’s
        sending promotional campaigns, appointment reminders, event updates, or
        internal team alerts, our platform ensures that messages reach the right
        audience at the right time. With features like message scheduling,
        custom templates, and contact group management, users can personalize
        their outreach while maintaining efficiency. Real-time tracking and
        delivery insights provide transparency, ensuring every message counts.
      </p>
    </section>
  );
};

export default HomeUseCase;
