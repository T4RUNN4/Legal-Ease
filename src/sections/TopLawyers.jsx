import BestLawyer from "@/components/BestLawyer";
import HyperLinkButton from "@/components/Buttons/HyperLinkButton";
import Heading from "@/components/Heading";
import SectionStructure from "@/components/SectionStructure";
import SubHeading from "@/components/SubHeading";
import TopOne from "@/components/TopOne";

export default async function TopLawyer() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/lawyers/top`);
  const lawyers = await res.json();

  return (
    <SectionStructure>
      <SubHeading text="Best Among The All" />
      <Heading texts={["Most Hired Lawyers"]} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-16">
        {lawyers.map((lawyer, index) => {
          if (index === 0) {
            return <TopOne key={index} lawyer={lawyer} />;
          }
        })}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {lawyers.map((lawyer, index) => {
            if (index !== 0) {
              return <BestLawyer key={index} lawyer={lawyer} />;
            }
          })}

          <div className="bg-[#fdfbf7] text-[#43311c] p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-auto">
            <div>
              <h4 className="font-semibold text-lg">
                Looking for someone specific?
              </h4>
              <p className="text-xs text-[#43311c]/80">
                Explore our full registry of legal professionals.
              </p>
            </div>

            <HyperLinkButton text="Full Directory" link="/lawyers?page=1" variant="dark" />
          </div>
        </div>
      </div>
    </SectionStructure>
  );
}
