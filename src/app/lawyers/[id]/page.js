"use client";
import { authClient } from "@/lib/auth-client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function LawyerDetails() {
  const params = useParams();
  const id = params?.id;

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [lawyer, setLawyer] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchLawyer = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/lawyers/list/${id}`,
      );
      const data = await res.json();
      setLawyer(data);
    };

    fetchLawyer();
  }, [id]);

  if (!lawyer) {
    return <div>Loading...</div>;
  }

  const handleHiring = async () => {
    if (user) {
      const data = {
        userId: user.id,
        userName: user.name,
        lawyerId: lawyer._id,
        lawyerName: lawyer.name,
        hiredAt: new Date().toISOString(),
        status: "pending",
        specialization: lawyer.specialization,
        fee: lawyer.fee,
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/hiring`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const ret = await res.json();
      toast.info("Request sent to lawyer");
    }
  };

  return (
    <main className="min-h-screen bg-[#43311c] text-[#fdfbf7] py-20 px-6 md:px-12 lg:px-24 selection:bg-[#c5a880] selection:text-[#43311c]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 bg-[#352514] border border-white/10 p-6 md:p-8 sticky top-6">
            <div className="w-full aspect-4/5 bg-neutral relative overflow-hidden mb-6">
              <img
                src={lawyer.photo}
                alt={`Professional portrait of ${lawyer.name}`}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-4 left-4">
                <span
                  className={`badge rounded-none border-none px-4 py-3 text-xs tracking-wider uppercase shadow-lg ${
                    lawyer.status === "available"
                      ? "bg-emerald-800 text-emerald-100"
                      : "bg-rose-900 text-rose-100"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full mr-2 inline-block ${
                      lawyer.status === "available"
                        ? "bg-emerald-400 animate-pulse"
                        : "bg-rose-400"
                    }`}
                  ></span>
                  {lawyer.status}
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-6 border-b border-white/10 pb-6">
              <div className="flex justify-between items-baseline">
                <span className="text-xs tracking-wider text-[#c7bca9] uppercase">
                  Consultation Fee
                </span>
                <span className="text-3xl font-medium text-[#c5a880]">
                  {lawyer.fee}
                  <span className="text-sm text-[#c7bca9] font-normal">
                    {" "}
                    / hr
                  </span>
                </span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-xs tracking-wider text-[#c7bca9] uppercase">
                  Date Joined
                </span>
              </div>
            </div>

            {session && (
              <>
                <button
                  onClick={() =>
                    document.getElementById("hiring_confirmation").showModal()
                  }
                  className="btn w-full bg-[#fdfbf7] text-[#43311c] hover:bg-[#e6e2db] border-none rounded-none py-4 min-h-0 h-auto font-medium text-sm tracking-widest uppercase transition-transform hover:-translate-y-0.5"
                >
                  Hire {lawyer.name.split(" ")[0]}
                </button>
                <button className="btn btn-ghost w-full border border-solid border-white/10 rounded-none py-4 min-h-0 h-auto font-medium text-sm tracking-widest uppercase transition-transform hover:-translate-y-0.5 mt-2">
                  Comment
                </button>
              </>
            )}

            <p className="text-[11px] text-center text-[#c7bca9]/60 mt-3">
              * Initial conflict checking procedures apply prior to final
              engagement acceptance.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-8 flex flex-col ">
            <div>
              <span className="text-sm tracking-widest text-[#c5a880] font-medium mb-2 block uppercase">
                {lawyer.specialization}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-4">
                {lawyer.name}
              </h1>
              <div className="w-20 h-0.75 bg-[#c5a880]"></div>
            </div>

            <div className="space-y-6 text-base md:text-lg leading-relaxed text-[#c7bca9]">
              <p className="font-medium text-[#fdfbf7]">{lawyer.summary}</p>
            </div>
          </div>
        </div>
      </div>

      <dialog
        id="hiring_confirmation"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box bg-[#43311c]">
          <h3 className="font-bold text-lg">Are you sure?</h3>
          <p className="py-4">
            Are you sure to hire {lawyer.name} at an hourly rate of $
            {lawyer.fee} to handle your case?
          </p>
          <div className="flex flex-row gap-4 modal-action">
            <form method="dialog">
              <button
                onClick={handleHiring}
                className="mt-1 btn bg-[#c5a880] text-[#352514] border-none rounded-none px-5 py-2 min-h-0 h-auto font-medium text-xs tracking-wider shrink-0 uppercase"
              >
                YES
              </button>
              <button className="btn btn-ghost">NO</button>
            </form>
          </div>
        </div>
      </dialog>
    </main>
  );
}
