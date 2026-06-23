import SubHeading from "@/components/SubHeading";
import Heading from "@/components/Heading";
import FeaturedCard from "./S-FeaturedCard";

export default function FeaturedSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-2 pt-20">
      <div className="max-w-7xl mx-auto">
        <SubHeading text="Featured Laweyrs" />
        <Heading texts={["Credentialed Counsel,", "Diverse Expertise"]} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div>
      </div>
    </section>
  );
}
