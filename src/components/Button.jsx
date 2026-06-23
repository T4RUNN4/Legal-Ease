import Link from "next/link";

export default function Button({
  text,
  type = "non-action",
  link,
  action,
  variant = "light",
  btnType = "button",
}) {
  const btnClass = `btn rounded-none px-8 py-3 min-h-0 h-auto font-medium tracking-wider uppercase transition-transform hover:-translate-y-1 ${
    variant === "dark"
      ? "border-none  bg-[#43311c] text-[#fdfbf7] hover:bg-[#43311c]/90"
      : variant === "secondary"
        ? "btn btn-ghost hover:text-black border border-white/10 text-white"
        : variant === "payment"
          ? "border-none bg-emerald-800 text-white hover:bg-emerald-900"
          : "border-none bg-[#fdfbf7] text-[#43311c] hover:bg-[#e6e2db]"
  }`;

  if (type === "non-action") {
    return (
      <Link href={link} className={btnClass}>
        {text}
      </Link>
    );
  } else {
    return (
      <button type={btnType} className={btnClass} onClick={action}>
        {text}
      </button>
    );
  }
}
