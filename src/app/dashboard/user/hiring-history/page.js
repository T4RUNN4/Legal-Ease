"use client";
import { authClient } from "@/lib/auth-client";
import { format } from "date-fns";
import { useEffect, useState } from "react";

export default function UserHiringHistory() {
  const { data: session } = authClient.useSession();
  const userID = session?.user?.id;

  const [hiring, setHiring] = useState(null);

  useEffect(() => {
    if (!userID) return;

    const load = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/hiring-history/${userID}`,
      );
      const hiringData = await res.json();
      console.log(hiringData);
      setHiring(hiringData);
    };

    load();
  }, [userID]);

  if (!hiring) {
    return <div>Loading...</div>;
  }

  const handleCheckout = async (hiringId) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/checkout/${hiringId}`,
    );

    const data = await res.json();

    window.location.href = data.url;
  };

  return (
    <section className="space-y-6 mt-10 flex flex-col items-center">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-medium text-center">
          Your Legal Retainers
        </h2>
      </div>

      <div className="border border-white/10 mt-8 w-full flex items-center justify-center">
        <table className="table w-full rounded-none text-center">
          <thead>
            <tr className="border-b border-white/10 uppercase tracking-wider text-xl">
              <th className="py-4 px-6 rounded-none font-medium">Advocate</th>
              <th className="py-4 px-6 font-medium">Specialization</th>
              <th className="py-4 px-6 font-medium">Retainer Fee</th>
              <th className="py-4 px-6 font-medium">Hiring Date</th>
              <th className="py-4 px-6 rounded-none font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-lg">
            {hiring.map((hire) => (
              <tr key={hire._id} className="hover:bg-white/5 transition-colors">
                <td className="py-4 px-6 font-medium ">{hire.lawyerName}</td>
                <td className="py-4 px-6">{hire.specialization}</td>
                <td className="py-4 px-6">{hire.fee}</td>
                <td className="py-4 px-6">
                  {format(new Date(hire.hiredAt), "PPPP")}
                </td>
                <td className="py-4 px-6 text-right">
                  {hire.status === "unpaid" ? (
                    <button
                    onClick={() => handleCheckout(hire._id)}
                      className="btn inline-block text-sm uppercase tracking-wider px-3 py-1 rounded-none font-medium bg-emerald-950 text-white border border-emerald-800"
                    >
                      Pay
                    </button>
                  ) : (
                    <span
                      className={`inline-block text-xs uppercase tracking-wider px-3 py-1 rounded-none font-medium text-white ${
                        hire.status === "accepted"
                          ? "bg-emerald-950 border border-emerald-800"
                          : hire.status === "rejected"
                            ? "bg-rose-950 border border-rose-900"
                            : "bg-amber-950 border border-amber-800"
                      }`}
                    >
                      {hire.status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
