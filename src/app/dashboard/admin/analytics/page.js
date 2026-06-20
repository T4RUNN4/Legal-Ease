export default async function Analytics() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/stats`);
    const stats = await res.json();
    console.log(stats)

    return (
      <section className="space-y-6 mt-10 flex flex-col items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-medium text-center">
            Analytics Dashboard
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-10 rounded-lg border border-white/50 text-center">
            <h3 className="text-xl font-bold mb-4">Total Users</h3>
            <p className="text-3xl font-bold">{stats.totalUser}</p>
          </div>
          <div className="p-10 rounded-lg border border-white/50 text-center">
            <h3 className="text-xl font-bold mb-4">Total Lawyers</h3>
            <p className="text-3xl font-bold">{stats.totalLawyer}</p>
          </div>
          <div className="p-10 rounded-lg border border-white/50 text-center">
            <h3 className="text-xl font-bold mb-4">Total Hires</h3>
            <p className="text-3xl font-bold">{stats.totalHires}</p>
          </div>
          <div className="p-10 rounded-lg border border-white/50 text-center">
            <h3 className="text-xl font-bold mb-4">Total Revenue</h3>
            <p className="text-3xl font-bold">${stats.totalRevenue}</p>
          </div>
        </div>
      </section>
    );
}