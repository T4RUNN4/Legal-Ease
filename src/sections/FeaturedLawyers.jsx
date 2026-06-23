import FeaturedCard from "@/components/FeaturedCard";
import Heading from "@/components/Heading";
import SectionStructure from "@/components/SectionStructure";
import SubHeading from "@/components/SubHeading";
import FeaturedSection from "@/skeleton-loading/S-FeatureSection";

export default async function FeaturedLawyers() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/lawyers/random`,
  );
  const lawyers = await res.json();

  if (!lawyers) {
    <FeaturedSection />;
  }

  return (
    <SectionStructure>
      <SubHeading text="Recomended Lawyers by Legal Ease" />
      <Heading texts={["Featured Lawyers"]} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {lawyers.map((lawyer) => (
          <FeaturedCard key={lawyer._id} lawyer={lawyer} />
        ))}
      </div>
    </SectionStructure>
  );
}
