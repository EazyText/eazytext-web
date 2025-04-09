import Image, { StaticImageData } from "next/image";
import classes from "./TestimonialCard.module.css";

type TestimonialCardTypes = {
  image: string | StaticImageData;
  name: string;
  role: string;
  comment: string;
};

const TestimonialCard = ({
  image,
  name,
  role,
  comment,
}: TestimonialCardTypes) => {
  return (
    <div
      className={classes.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={classes.blur}></div>

      <div>
        <h4>{name}</h4>
        <p>{role}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
