export default function CategoryCard ({ category }) {
    return (
      <div
        className="group border border-white/10 p-8 flex flex-col justify-between bg-transparent hover:bg-[#fdfbf7] hover:text-[#43311c] hover:scale-105 transition-all duration-300 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-[2px] bg-[#c5a880] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div>
          <div className="flex justify-between items-center">
            <span className="text-xs tracking-widest text-[#c5a880] group-hover:text-[#43311c]/60 transition-colors duration-300">
              [{category.code}]
            </span>
            <div className="w-1.5 h-1.5 bg-[#c5a880] group-hover:bg-[#43311c]"></div>
          </div>
          <h3 className="text-2xl font-medium">
            {category.title}
          </h3>
        </div>
      </div>
    );
}