export default function Analytics() {
    return (
        <section className="space-y-6 mt-10 flex flex-col items-center">
            <div className="flex flex-col gap-2">
                <h2 className="text-4xl font-medium text-center">Analytics Dashboard</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="p-10 rounded-lg border border-white/50 text-center">
                    <h3 className="text-xl font-bold mb-4">Total Users</h3>
                    <p className="text-3xl font-bold">150</p>
                </div>
                <div className="p-10 rounded-lg border border-white/50 text-center">
                    <h3 className="text-xl font-bold mb-4">Total Lawyers</h3>
                    <p className="text-3xl font-bold">70</p>
                </div>
                <div className="p-10 rounded-lg border border-white/50 text-center">
                    <h3 className="text-xl font-bold mb-4">Total Hires</h3>
                    <p className="text-3xl font-bold">200</p>
                </div>
                <div className="p-10 rounded-lg border border-white/50 text-center">
                    <h3 className="text-xl font-bold mb-4">Total Revenue</h3>
                    <p className="text-3xl font-bold">$15,000</p>
                </div>
            </div>
        </section>
    )
}