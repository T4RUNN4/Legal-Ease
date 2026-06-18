export default function FeaturedCard({ lawyer }) {
    return (
      <div
        className={`p-4 transition-all duration-300 ${
          lawyer.isActive
            ? "bg-[#fdfbf7] text-[#43311c]"
            : "border border-white/20 text-[#fdfbf7]"
        }`}
      >
        <div className="w-full aspect-4/5 mb-6 overflow-hidden bg-gray-200">
          <img
            src={lawyer.image}
            alt={`Portrait of ${lawyer.name}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-2 pb-2">
          <h3 className="text-xl font-medium mb-1">{lawyer.name}</h3>
          <p
            className={`text-sm ${lawyer.isActive ? "text-gray-600" : "text-[#c7bca9]"}`}
          >
            {lawyer.role}
          </p>
        </div>
      </div>
    );
}