import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";
import { testimonials } from "@/utilities/testimonials";
import classes from "./HomeTestimonials.module.css";

const HomeTestimonials = () => {
  return (
    <section className={classes.container}>
      <h4 className="h2">Success Stories That Speak Volumes</h4>

      <div className={classes.testimonials}>
        {testimonials?.map((data) => {
          return <TestimonialCard key={data?.name} {...data} />;
        })}
      </div>
    </section>
  );
};

export default HomeTestimonials;
