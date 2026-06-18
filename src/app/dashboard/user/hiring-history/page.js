export default function UserHiringHistory() {
  const hiringHistory = [
    {
      id: 1,
      lawyer: "Alexander Reed",
      specialty: "Criminal Defense",
      fee: "$350/hr",
      date: "June 14, 2026",
      status: "accepted",
    },
    {
      id: 2,
      lawyer: "Eleanor Vance",
      specialty: "Managing Partner",
      fee: "$500/hr",
      date: "June 18, 2026",
      status: "pending",
    },
    {
      id: 3,
      lawyer: "Marcus Sterling",
      specialty: "Corporate Law",
      fee: "$400/hr",
      date: "May 22, 2026",
      status: "rejected",
    },
  ];

  return (
    <section className="space-y-6 mt-10 flex flex-col items-center">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-medium text-center">
          Your Legal Retainers
        </h2>
      </div>

      <div className="border border-white/10 mt-8 w-full flex items-center justify-center">
        <table className="table w-full rounded-none text-left">
          <thead>
            <tr className="border-b border-white/10 uppercase tracking-wider text-xl">
              <th className="py-4 px-6 rounded-none font-medium">
                Advocate
              </th>
              <th className="py-4 px-6 font-medium">Specialization</th>
              <th className="py-4 px-6 font-medium">Retainer Fee</th>
              <th className="py-4 px-6 font-medium">Hiring Date</th>
              <th className="py-4 px-6 rounded-none font-medium">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-lg text-center">
            {hiringHistory.map((row) => (
              <tr key={row.id} className="hover:bg-white/5 transition-colors">
                <td className="py-4 px-6 font-medium ">
                  {row.lawyer}
                </td>
                <td className="py-4 px-6">{row.specialty}</td>
                <td className="py-4 px-6">
                  {row.fee}
                </td>
                <td className="py-4 px-6">{row.date}</td>
                <td className="py-4 px-6 text-right">
                  <span
                    className={`inline-block text-xs uppercase tracking-wider px-3 py-1 rounded-none font-medium text-white ${
                      row.status === "accepted"
                        ? "bg-emerald-950 border border-emerald-800"
                        : row.status === "rejected"
                          ? "bg-rose-950 border border-rose-900"
                          : "bg-amber-950 border border-amber-800" // Default: Pending
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
