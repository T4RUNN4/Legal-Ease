export default function TableRow({ key, children }) {
  return (
    <tr key={key} className="transition-colors even:bg-[#43311c]/10">
      {children}
    </tr>
  );
}
