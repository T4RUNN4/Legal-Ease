export default function LawyerHiringHistory() {
  const hiringHistory = [
    {
      id: 1,
      client: "Alexander Reed",
      date: "June 14, 2026",
    },
    {
      id: 2,
      client: "Eleanor Vance",
      date: "June 18, 2026",
    },
    {
      id: 3,
      client: "Marcus Sterling",
      date: "May 22, 2026",
      status: "rejected",
    },
  ];

  return (
    <section className="space-y-6 mt-10 flex flex-col items-center">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-medium">Client Hiring History</h2>
      </div>

      <div className="border border-white/20">
        <table className="table w-full rounded-none text-center mt-8">
          <thead>
            <tr className="border-b border-white/10 uppercase tracking-wider text-xl">
              <th className="py-4 px-6 rounded-none font-medium">
                Client Name
              </th>
              <th className="py-4 px-6 font-medium">Date</th>
              <th className="py-4 px-6 rounded-none font-medium">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-lg text-center">
            {hiringHistory.map((row) => (
              <tr key={row.id} className="hover:bg-white/5 transition-colors">
                <td className="py-4 px-6 font-medium ">{row.client}</td>
                <td className="py-4 px-6">{row.date}</td>
                <td className="py-4 px-6 flex gap-2">
                  <span className="inline-block text-xs uppercase tracking-wider px-3 py-1 rounded-none font-medium bg-emerald-950 text-white border border-emerald-800">Accepted</span>
                  <span className="inline-block text-xs uppercase tracking-wider px-3 py-1 rounded-none font-medium bg-rose-950 text-white border border-rose-900">Rejected</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
