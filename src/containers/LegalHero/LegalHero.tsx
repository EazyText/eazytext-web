import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import classes from "./LegalHero.module.css";

type LegalHeroTypes = {
  header: string;
  caption: string;
};

const LegalHero = ({ header, caption }: LegalHeroTypes) => {
  // Router
  const router = useRouter();

  return (
    <section className={classes.container}>
      <h1>{header}</h1>
      <p>{caption}</p>
      <Button onClick={() => router.push("#legal")}>Start Reading</Button>
    </section>
  );
};

export default LegalHero;
