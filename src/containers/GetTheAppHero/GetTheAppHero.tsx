import ArrowDown from "@/assets/svgIcons/ArrowDown";
import ArrowRightSub from "@/assets/svgIcons/ArrowRightSub";
import Download from "@/assets/svgIcons/Download";
import Button from "@/components/Button/Button";
import classes from "./GetTheAppHero.module.css";
import appStoreLogo from "../../assets/Images/app-store.png";
import playStoreLogo from "../../assets/Images/play-store.png";
import Image from "next/image";

const GetTheAppHero = () => {
  return (
    <section className={classes.container}>
      <div>
        <h4>
          Your Messaging Superpower, <br /> Now in Your Pocket
        </h4>
        <p>
          With the Eazy Text mobile app, the full power of bulk messaging is
          right at your fingertips. Whether you're managing a campaign, sending
          quick updates, or scheduling messages for later, our app makes it
          effortless to stay connected—anytime, anywhere. From organizing
          contact groups to tracking delivery status in real-time, Eazy Text
          brings all the essential tools of the web platform into a sleek,
          intuitive mobile experience designed for productivity on the go.
        </p>

        <div className={classes.buttonSection}>
          <Button type="secondary">
            <Image
              src={appStoreLogo}
              alt="Download on App Store"
              width={16}
              height={16}
            />
            <span>Download on App Store</span>
          </Button>
          <Button>
            <Image
              src={playStoreLogo}
              alt="Download on Play Store"
              width={16}
              height={16}
            />
            <span>Download on Play Store</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetTheAppHero;
