export default function BestLawyer({ lawyer }) {
    return (
      <div
        className="bg-transparent border border-white/10 p-4 flex flex-row gap-5 items-center hover:border-white/30 hover:scale-105 transition-all duration-300"
      >
        <div className="w-24 h-28 md:w-28 md:h-32 bg-neutral shrink-0 overflow-hidden">
          <img
            src={lawyer.image}
            alt={lawyer.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h4 className="text-xl font-medium mb-1">{lawyer.name}</h4>
          <p className="text-sm text-[#c7bca9] mb-4">{lawyer.role}</p>
          <a
            href="#"
            className="text-xs font-semibold tracking-wider text-[#c5a880] hover:text-[#fdfbf7] transition-colors flex items-center gap-1"
          >
            View Profile <span className="text-[10px]">→</span>
          </a>
        </div>
      </div>
    );
}