import CategoryCard from "@/components/CategoryCard";
import Heading from "@/components/Heading";
import SectionStructure from "@/components/SectionStructure";
import SubHeading from "@/components/SubHeading";

export default function LegalCategories () {
  const categories = [
    {
      title: "Criminal Defense",
      code: "01",
      link: "Criminal+Defense",
    },
    {
      title: "Corporate & Business",
      code: "02",
      link: "Corporate+%26+Business",
    },
    {
      title: "Family & Matrimonial",
      code: "03",
      link: "Family+%26+Matrimonial",
    },
    {
      title: "Real Estate & Property",
      code: "04",
      link: "Real+Estate+%26+Property",
    },
    {
      title: "Employment & Labor",
      code: "05",
      link: "Employment+%26+Labour",
    },
  ];

  return (
    <SectionStructure>
        <SubHeading text="Legal Categories" />
        <Heading texts={["Explore Experts", "In Every Legal Discipline"]} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </SectionStructure>
  );
};