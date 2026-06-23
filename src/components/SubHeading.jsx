export default function SubHeading({ text, mode="light" }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className={`w-12 h-0.5 ${mode === "light" ? "bg-[#c5a880]" : "bg-white"}`}></span>
      <span className={`tracking-widest ${mode === "light" ? "text-[#c5a880]" : "text-white"} font-medium uppercase`}>
        {text}
      </span>
    </div>
  );
}
