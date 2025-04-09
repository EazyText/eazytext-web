import FaqComponent from "@/components/FaqComponent/FaqComponent";
import { faqs } from "@/utilities/faqs";
import classes from "./HomeFaqs.module.css";

const HomeFaqs = () => {
  return (
    <section className={classes.container}>
      <h4 className="h2">Everything You Need to Know</h4>
      {faqs?.map((data) => {
        return <FaqComponent key={data?.question} {...data} />;
      })}
    </section>
  );
};

export default HomeFaqs;
