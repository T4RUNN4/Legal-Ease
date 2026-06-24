export default function Table({ tableHeads, children }) {
  return (
    <table className="table w-full rounded-none">
      <thead>
        <tr className="tracking-wider md:text-xl bg-[#43311c] text-[#fdfbf7] font-bold">
          {tableHeads.map((tableHead) => {
            return <th className="py-4 md:px-6 rounded-none">{tableHead}</th>;
          })}
        </tr>
      </thead>
      <tbody className="divide-y divide-white/5 md:text-lg">{children}</tbody>
    </table>
  );
}
