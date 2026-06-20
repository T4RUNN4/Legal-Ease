import BestLawyer from "@/components/BestLawyer";
import TopOne from "@/components/TopOne";
import Link from "next/link";

export default async function TopLawyer() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/lawyers/top`);
  const lawyers = await res.json();

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm tracking-widest text-[#c5a880] font-medium mb-3 block uppercase">
            // Top Lawyers
          </span>
          <h2 className="text-4xl md:text-5xl font-medium leading-tight">
            Driven By Distinction, Proven In Practice
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
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
              <Link
                href="/lawyers"
                className="btn bg-[#43311c] text-[#fdfbf7] hover:bg-[#352514] border-none rounded-none px-5 py-2 min-h-0 h-auto font-medium text-xs tracking-wider shrink-0 uppercase"
              >
                Full Directory
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
