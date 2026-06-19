"use client";

import { useSession } from "@/lib/auth-client";
import { format } from "date-fns";
import Link from "next/link";

export default function Dashboard() {
  const { data: session, isPending } = useSession();
  const user = session?.user;

  if (isPending) {
    return (
      <div className="animate-pulse max-w-3xl mx-auto mt-6 space-y-4">
        <div className="h-4 bg-white/10 w-24 rounded-none"></div>
        <div className="h-40 bg-[#352514] border border-white/10 rounded-none"></div>
      </div>
    );
  }

  const registrationDate = format(new Date(user.createdAt), 'PPPP');

  return (
    <div className="max-w-3xl mx-auto mt-6 w-full">
      
      <div className="my-8">
        <span className="text-4xl tracking-widest text-[#c5a880] uppercase block">
          Your Profile
        </span>
      </div>

      <div className="bg-[#352514] border border-white/10 p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-8 relative overflow-hidden rounded-none">
        <div className="absolute top-0 left-0 w-full h-0.5px bg-linear-to-r from-[#c5a880] via-[#c5a880]/30 to-transparent"></div>

        <div className="w-28 h-36 md:w-32 md:h-40 border border-white/10 bg-[#43311c] shrink-0 overflow-hidden rounded-none shadow-md">
          <img
            src={user.image}
            alt={`Portrait of ${user.name}`}
            className="w-full h-full object-cover hover:grayscale-0 transition-all duration-300 scale-100 hover:scale-105"
          />
        </div>

        <div className="flex-1 text-center sm:text-left space-y-4 w-full">
          <div>
            <span className="badge bg-[#43311c] border-[#c5a880]/30 text-[#c5a880] tracking-wider uppercase rounded-none px-2.5 py-2.5 mb-3">
              Role: {user.role || "Client"}
            </span>
            
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-[#fdfbf7] tracking-wide">
              {user.name || "Identified User"}
            </h3>
            
            <p className="text-sm text-[#c7bca9]  mt-1 opacity-80">
              {user.email}
            </p>
          </div>

          <div className="pt-4 border-t border-white/5 flex flex-wrap justify-center sm:justify-start gap-x-8 gap-y-2 text-[#c7bca9]/60">
            <div>
              <span className="text-[#c5a880]  mr-1">Joined: </span> {registrationDate}
            </div>
          </div>
        </div>
      </div>

      {user && user.role === "lawyer" && 
        <div className="bg-yellow-300 text-black p-4 mt-4">
          Complete your <Link href="/dashboard/lawyer/legal-profile">Legal Profile</Link> to appear in the Lawyer List
        </div>
      }
    </div>
  );
}