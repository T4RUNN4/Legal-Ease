export default function TopOne({ lawyer }) {
    return (
      <div className="lg:col-span-7 bg-[#352514] border border-[#c5a880]/30 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center justify-between relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-0.75 bg-linear-to-r from-[#c5a880] to-transparent"></div>

        <div className="w-full md:w-1/2 aspect-4/5 overflow-hidden bg-neutral rounded-none shrink-0">
          <img
            src={lawyer.image}
            alt={lawyer.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between h-full py-2">
          <div>
            <div className="badge badge-outline border-[#c5a880] text-[#c5a880] rounded-none px-3 py-2 text-xs font-semibold tracking-wider uppercase mb-4">
              Best Lawyer of the Year 2026
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-medium mb-1 text-white">
              {lawyer.name}
            </h3>
            <p className="text-[#c5a880] text-sm font-medium tracking-wide mb-4">
              {lawyer.role}
            </p>

            <p className="text-sm italic text-[#c7bca9] leading-relaxed mb-6 font-serif">
              {lawyer.quote}
            </p>
          </div>

          <div className="border-t border-white/10 pt-4">
            <span className="text-xs tracking-wider text-white/50 block mb-1 uppercase">
              Distinction
            </span>
            <p className="text-sm font-medium text-white">
              {lawyer.accolade}
            </p>
          </div>
        </div>
      </div>
    );
}