import Link from "next/link";

export default function FeaturedCard({ lawyer }) {
    return (
      <div className="p-4 bg-[#fdfbf7] text-[#43311c] hover:scale-105 transition-all duration-300">
        <div className="w-full aspect-4/5 mb-6 overflow-hidden bg-gray-200">
          <img
            src={lawyer.photo}
            alt={`Portrait of ${lawyer.name}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-2 pb-2">
          <h3 className="text-xl font-medium mb-1">{lawyer.name}</h3>
          <p className="text-gray-600">{lawyer.specialization}</p>

          <p className="mt-4">${lawyer.fee}/hr</p>
          <Link
            href={`lawyers/list/${lawyer._id}`}
            className="mt-1 btn bg-[#43311c] text-[#fdfbf7] hover:bg-[#352514] border-none rounded-none px-5 py-2 min-h-0 h-auto font-medium text-xs tracking-wider shrink-0 uppercase"
          >
            View Profile
          </Link>
        </div>
      </div>
    );
}