"use client";
import { authClient } from "@/lib/auth-client";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function LawyerHiringHistory() {
  const { data: session } = authClient.useSession();
  const userID = session?.user?.id;

  const [hiring, setHiring] = useState(null);

  useEffect(() => {
    if (!userID) return;

    const load = async () => {
      try {
        const res1 = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/lawyers/find/${userID}`,
        );
        const lawyer = await res1.json();

        const res2 = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/lawyer/hiring-history/${lawyer._id}`,
        );

        const hiringData = await res2.json();
        setHiring(hiringData);
      } catch (err) {
        console.error(err);
      }
    };

    load();
  }, [userID]);

  const updateStatus = async (commentId, status) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/hiring/update-status/${commentId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      },
    );
    const data = await res.json();
    toast.success("Status updated");
  };

  if (!hiring) {
    return <div>Loading...</div>;
  }

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
              <th className="py-4 px-6 rounded-none font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-lg text-center">
            {hiring.map((hire) => (
              <tr key={hire._id} className="hover:bg-white/5 transition-colors">
                <td className="py-4 px-6 font-medium ">{hire.userName}</td>
                <td className="py-4 px-6">
                  {format(new Date(hire.hiredAt), "PPPP")}
                </td>
                <td className="py-4 px-6 flex gap-2">
                  {hire.status === "pending" ? (
                    <>
                      <button
                        onClick={() => updateStatus(hire._id, "unpaid")}
                        className="btn inline-block text-sm uppercase tracking-wider px-3 py-1 rounded-none font-medium bg-emerald-950 text-white border border-emerald-800"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => updateStatus(hire._id, "rejected")}
                        className="btn inline-block text-sm uppercase tracking-wider px-3 py-1 rounded-none font-medium bg-rose-950 text-white border border-rose-900"
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <span className="inline-block text-sm uppercase tracking-wider px-3 py-1 rounded-none font-medium">
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
