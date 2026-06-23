import Link from "next/link";

export default function HyperLinkButton({ text, link }) {
  return (
    <Link
      href={link}
      className="btn bg-[#fdfbf7] text-[#43311c] hover:bg-[#e6e2db] border-none rounded-none px-8 py-3 min-h-0 h-auto font-medium text-sm tracking-wider uppercase transition-transform hover:-translate-y-1"
    >
      {text}
    </Link>
  );
}
