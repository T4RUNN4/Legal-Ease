export default function AnalyticsCard({ title, value }) {
  return (
    <div className="p-10 border border-white/50 text-center bg-[#43311c] text-white hover:scale-105 transition-all duration-300 rounded-none">
      <h3 className="text-2xl font-bold mb-4 text-[#c5a880]">{title}</h3>
      <p className="text-4xl font-bold">{value}</p>
    </div>
  );
}
