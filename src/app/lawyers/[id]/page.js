"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LawyerDetails() {
  const params = useParams();
  const id = params?.id;

  const [lawyer, setLawyer] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchLawyer = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/lawyers/list/${id}`);
      console.log(res);
      const data = await res.json();
      setLawyer(data);
    };

    fetchLawyer();
  }, [id]);

  if(!lawyer) {
    return <div>Loading...</div>
  }

  return (
    <main className="min-h-screen bg-[#43311c] text-[#fdfbf7] py-20 px-6 md:px-12 lg:px-24 font-sans selection:bg-[#c5a880] selection:text-[#43311c]">
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
                  className={`badge rounded-none border-none px-4 py-3 font-mono text-xs tracking-wider uppercase shadow-lg ${
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
                <span className="text-xs font-mono tracking-wider text-[#c7bca9] uppercase">
                  Consultation Fee
                </span>
                <span className="text-3xl font-serif font-medium text-[#c5a880]">
                  {lawyer.fee}
                  <span className="text-sm font-sans text-[#c7bca9] font-normal">
                    {" "}
                    / hr
                  </span>
                </span>
              </div>
            </div>

            <button className="btn w-full bg-[#fdfbf7] text-[#43311c] hover:bg-[#e6e2db] border-none rounded-none py-4 min-h-0 h-auto font-medium text-sm tracking-widest uppercase transition-transform hover:-translate-y-0.5">
              Hire {lawyer.name.split(" ")[0]}
            </button>

            <p className="text-[11px] text-center text-[#c7bca9]/60 mt-3 font-serif">
              * Initial conflict checking procedures apply prior to final
              engagement acceptance.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-8 flex flex-col ">
            <div>
              <span className="text-sm tracking-widest text-[#c5a880] font-medium mb-2 block uppercase">
                {lawyer.specialization}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-4">
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
    </main>
  );
};