import Link from "next/link";

export default function CategoryCard ({ category }) {
    return (
      <Link
        href={`/lawyers?specialization=${category.link}&page=1`}
        className="group border border-white/10 p-8 flex flex-col justify-between bg-[#43311c] hover:bg-[#43311c]/90 text-white hover:scale-105 transition-all duration-300"
      >
        <div>
          <div className="flex justify-between items-center">
            <span className="text-[#c5a880] text-sm tracking-widest">
              {category.code}
            </span>
            <div className="w-1.5 h-1.5 bg-[#c5a880]"></div>
          </div>
          <h3 className="text-2xl font-medium">{category.title}</h3>
        </div>
      </Link>
    );
}