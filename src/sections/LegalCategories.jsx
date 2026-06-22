import CategoryCard from "@/components/CategoryCard";

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
    <section className="bg-[#43311c] py-24 px-6 md:px-12 lg:px-24 text-[#fdfbf7]">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="text-sm tracking-widest text-[#c5a880] font-medium mb-3 block uppercase">
              // Legal Categories
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Explore experts in every legal discipline
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#c7bca9]">
            Providing tailored legal frameworks and aggressive advocacy across multiple disciplines to safeguard what matters most to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>

      </div>
    </section>
  );
};