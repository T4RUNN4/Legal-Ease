import FeaturedCard from "@/components/FeaturedCard";

export default async function Lawyers() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/lawyers/list`);
    const lawyers = await res.json();

    return (
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#43311c] text-[#fdfbf7]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <span className="text-sm tracking-widest text-[#c5a880] font-medium mb-3 block uppercase">
              // Browse Lawyers
            </span>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight">
                Explore Our Diverse List Of Legal Experts Across All Practice Areas
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {lawyers.map((lawyer) => (
                <FeaturedCard key={lawyer._id} lawyer={lawyer} />
              ))}
          </div>
        </div>
      </section>
    );
}