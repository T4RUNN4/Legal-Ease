import Button from "./Button";

export default function FeaturedCard({ lawyer }) {
  return (
    <div className="p-4 bg-[#43311c] text-white hover:scale-105 transition-all duration-300">
      <div className="w-full aspect-4/5 mb-6 overflow-hidden bg-gray-200">
        <img
          src={lawyer.photo}
          alt={`Portrait of ${lawyer.name}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-2 pb-2">
        {lawyer.status !== "available" && (
          <span className="badge rounded-none border-none px-4 py-3 font-mono text-xs tracking-wider uppercase bg-rose-900 text-rose-100 mb-2">
            Busy
          </span>
        )}
        <h3 className="text-3xl font-medium mb-1">{lawyer.name}</h3>
        <p className="text-[#c5a880]">{lawyer.specialization}</p>

        <p className="mt-8 mb-4 text-xl">${lawyer.fee} / hour</p>
        <Button text="View Profile" link={`lawyers/${lawyer._id}`} />
      </div>
    </div>
  );
}
