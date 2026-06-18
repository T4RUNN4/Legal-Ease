import FeaturedCard from "@/components/FeaturedCard";
import Link from "next/link";

export default function FeaturedLawyers() {
  const lawyers = [
    {
      name: "Alexander Reed",
      role: "Senior Advocate",
      image:
        "https://i.pinimg.com/736x/ab/57/ca/ab57cadd895944460c54e562c50d352e.jpg",
      isActive: true,
    },
    {
      name: "Olivia Bennett",
      role: "Legal Advisor",
      image:
        "https://images.squarespace-cdn.com/content/v1/55ffbe15e4b04e8914439ca4/1444170778540-96E0LERKFV69WER58J6T/image-asset.jpeg?format=2500w",
      isActive: false,
    },
    {
      name: "Daniel Carter",
      role: "Associate Lawyer",
      image: "https://justatic.com/profile-images/1485258-1540835498-s.jpg",
      isActive: false,
    },
  ];

  return (
    <section className="bg-[#442c05] py-20 px-6 md:px-12 lg:px-24 font-sans text-[#fdfbf7]">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
          <div className="max-w-xl">
            <span className="text-sm tracking-widest text-[#d5c7b4] mb-4 block">
              // Featured Lawyers
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Meet The Professionals Delivering Trusted Legal Support
            </h2>
          </div>

          <div className="max-w-sm flex flex-col items-start lg:items-end gap-6 lg:text-right mt-2 lg:mt-0">
            <p className="text-sm leading-relaxed text-[#c7bca9]">
              We Bring Together Expertise, Clarity, And Strategic Thinking To Deliver Effective Legal Solutions. Every Step Is Guided By Trust, Transparency, And A Commitment To Your Success.
            </p>
            <Link href="/lawyers" className="btn bg-[#fdfbf7] text-[#43311c] hover:bg-[#e6e2db] border-none rounded-none px-6 py-2 min-h-0 h-auto font-medium">
              View Our Team
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lawyers.map((lawyer, index) => (
            <FeaturedCard key={index} lawyer={lawyer} />
          ))}
        </div>

      </div>
    </section>
  );
};