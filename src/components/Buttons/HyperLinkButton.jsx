import Link from "next/link";

export default function HyperLinkButton({ text, link, variant="light" }) {
  return (
    <Link
      href={link}
      className={`btn border-none rounded-none px-8 py-3 min-h-0 h-auto font-medium tracking-wider uppercase transition-transform hover:-translate-y-1 ${variant === "dark" ? "bg-[#43311c] text-[#fdfbf7] hover:bg-[#43311c]/90" : "bg-[#fdfbf7] text-[#43311c] hover:bg-[#e6e2db]"}`}
    >
      {text}
    </Link>
  );
}
