import BestLawyer from "@/components/BestLawyer";
import TopOne from "@/components/TopOne";
import Link from "next/link";

export default function TopLawyer() {
  const topOne = {
    name: "Eleanor Vance",
    role: "Criminal Defense Specialist",
    accolade: "Highest Acquittal Rate in the State",
    quote:
      "“The best legal strategy isn't just about finding loopholes; it's about building an unshakeable foundation of trust and foresight.”",
    image:
      "https://static.wixstatic.com/media/7d5b6a_efa8322bc1e6487c9ee3b68791940436~mv2.jpg/v1/fill/w_1050,h_1050,al_c,q_85/lawyer-attorney-headshot-professional.jpg",
  };

  const bestLawyers = [
    {
      name: "Marcus Sterling",
      role: "Head of Corporate Law",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu9VIHoJd9ldRtuqnQvFzqLGbXT4hLedb7zbukdcp_eKuCWVfgGD9lM3s&s=10",
    },
    {
      name: "Sophia Martinez",
      role: "Senior Defense Counsel",
      image:
        "https://thegallerystudios.com/wp-content/uploads/2023/06/legal-marketing-attorney-headshot-02-791x1024.jpg",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm tracking-widest text-[#c5a880] font-medium mb-3 block uppercase">
            // Top Lawyers
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
            Driven By Distinction, Proven In Practice
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <TopOne lawyer={topOne} />
          <div className="lg:col-span-5 flex flex-col gap-6">
            {bestLawyers.map((bestLawyer, index) => (
              <BestLawyer key={index} lawyer={bestLawyer} />
            ))}

            <div className="bg-[#fdfbf7] text-[#43311c] p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-auto">
              <div>
                <h4 className="font-semibold text-lg">
                  Looking for someone specific?
                </h4>
                <p className="text-xs text-[#43311c]/80">
                  Explore our full registry of legal professionals.
                </p>
              </div>
              <Link href="/lawyers" className="btn bg-[#43311c] text-[#fdfbf7] hover:bg-[#352514] border-none rounded-none px-5 py-2 min-h-0 h-auto font-medium text-xs tracking-wider shrink-0 uppercase">
                Full Directory
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};