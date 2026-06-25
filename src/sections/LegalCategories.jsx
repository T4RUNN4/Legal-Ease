import CategoryCard from "@/components/CategoryCard";
import Heading from "@/components/Heading";
import SectionStructure from "@/components/SectionStructure";
import SubHeading from "@/components/SubHeading";

export default function LegalCategories () {
  const categories = [
    {
      title: "Criminal Defense",
      code: "01",
      link: "criminal+defense",
    },
    {
      title: "Corporate & Business",
      code: "02",
      link: "corporate+%26+business",
    },
    {
      title: "Family & Matrimonial",
      code: "03",
      link: "family+%26+matrimonial",
    },
    {
      title: "Real Estate & Property",
      code: "04",
      link: "real+estate+%26+property",
    },
    {
      title: "Employment & Labor",
      code: "05",
      link: "employment+%26+labour",
    },
  ];

  return (
    <SectionStructure>
      <SubHeading text="Exprest from every discipline" />
      <Heading texts={["Legal Categories"]} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </SectionStructure>
  );
};