import Link from "next/link";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div>
        <h4>Join us:</h4>
        <a href="#0">Instagram</a>
        <a href="#0">Facebook</a>
        <a href="#0">Youtube</a>
      </div>

      <div>
        <h4>Contact us:</h4>
        <a href="#0">support@tobe.com</a>
        <a href="#0">+123 4567 89 10</a>
      </div>

      <div>
        <p>
          The information on this website is provided for general informational
          purposes only and does not constitute legal or professional advice.
          The information is accurate to the best of our knowledge for USA law.
          Use of this website constitutes acceptance of our{" "}
          <Link href="/terms-of-use">Terms of Use</Link> and{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>
        </p>

        <p>All rights reserved. ©2025 EazyText.</p>
      </div>
    </footer>
  );
};

export default Footer;
