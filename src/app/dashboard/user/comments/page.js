export default function UserComments() {
  const commentsHistory = [
    {
      id: 1,
      lawyer: "Alexander Reed",
      comment:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "June 14, 2026",
    },
    {
      id: 2,
      lawyer: "Eleanor Vance",
      comment:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "June 18, 2026",
    },
    {
      id: 3,
      lawyer: "Marcus Sterling",
      comment:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "May 22, 2026",
    },
  ];

  return (
    <section className="space-y-6 mt-10 flex flex-col items-center">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-medium text-center">Your Comments</h2>
      </div>

      <div className="border border-white/10 mt-8 w-full">
        <table className="table w-full rounded-none text-left">
          <thead>
            <tr className="border-b border-white/10 uppercase tracking-wider text-xl">
              <th className="py-4 px-6 rounded-none font-medium">Advocate</th>
              <th className="py-4 px-6 font-medium">Comment</th>
              <th className="py-4 px-6 font-medium">Date</th>
              <th className="py-4 px-6 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-lg">
            {commentsHistory.map((row) => (
              <tr key={row.id} className="hover:bg-white/5 transition-colors">
                <td className="py-4 px-6 font-medium ">{row.lawyer}</td>
                <td className="py-4 px-6">{row.comment}</td>
                <td className="py-4 px-6">{row.date}</td>
                <td className="py-4 px-6 flex gap-2">
                  <span className="inline-block text-xs uppercase tracking-wider px-3 py-1 rounded-none font-medium bg-emerald-950 text-white border border-emerald-800">
                    Accepted
                  </span>
                  <span className="inline-block text-xs uppercase tracking-wider px-3 py-1 rounded-none font-medium bg-rose-950 text-white border border-rose-900">
                    Rejected
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
