import ArrowRightSub from "@/assets/svgIcons/ArrowRightSub";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Link from "next/link";
import classes from "./HomeSignUp.module.css";

const HomeSignUp = () => {
  return (
    <section className={classes.container}>
      <div>
        <h4>
          <span> Join our community </span> of talented artists
        </h4>
        <p>
          Are you an artist looking to showcase your work and connect with other
          creatives? Fill out our application form and join our community of
          talented artists. We can't wait to see what you have to offer.
        </p>
      </div>

      <form>
        <Input label="Email Address" type="email" />
        <Input label="First Name" />
        <Input label="Last Name" />
        <Input label="Password" type="password" />

        <Button>
          <ArrowRightSub fill="#000" />
          <span>Join Us</span>
        </Button>

        <p>
          By clicking the button, you agree to our{" "}
          <Link href="#0">Terms and conditions</Link> .
        </p>
      </form>
    </section>
  );
};

export default HomeSignUp;
