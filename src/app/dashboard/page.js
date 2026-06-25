"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import SectionStructure from "@/components/SectionStructure";
import SubHeading from "@/components/SubHeading";
import { useSession } from "@/lib/auth-client";
import DashboardSkeleton from "@/skeleton-loading/S-Dashboard";
import { format } from "date-fns";

export default function Dashboard() {
  const { data: session, isPending } = useSession();
  const user = session?.user;

  if (isPending) {
    return <DashboardSkeleton />;
  }

  const registrationDate = format(new Date(user.createdAt), "PPPP");

  return (
    <SectionStructure page="true">
      <SubHeading text="Profile Page" />
      <Heading texts={["Your Profile Details"]} />

      <div className="border border-black/10 p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-8 relative overflow-hidden rounded-none mt-16">
        <div className="w-28 h-36 md:w-32 md:h-40 border border-white/10 bg-[#43311c] shrink-0 overflow-hidden rounded-none shadow-md">
          <img
            src={user.image}
            alt={`Portrait of ${user.name}`}
            className="w-full h-full object-cover hover:grayscale-0 transition-all duration-300 scale-100 hover:scale-105"
          />
        </div>

        <div className="flex-1 text-center sm:text-left space-y-4 w-full">
          <div>
            <span className="badge bg-[#43311c] border-[#c5a880]/30 text-white tracking-wider rounded-none p-3 mb-3">
              Role: <span className="first-letter:uppercase">{user.role}</span>
            </span>

            <h3 className="text-2xl md:text-3xl font-serif font-medium tracking-wide">
              {user.name}
            </h3>

            <p className="text-sm mt-1 opacity-80">{user.email}</p>
          </div>

          <div className="pt-4 border-t border-black/5 flex flex-wrap justify-center sm:justify-start gap-x-8 gap-y-2">
            <div>
              <span className="mr-1">Joined: </span> {registrationDate}
            </div>
          </div>
        </div>

        {user.role === "client" && (
          <Button
            text="Update Profile"
            link="/dashboard/user/update-profile"
            variant="dark"
          />
        )}
      </div>
    </SectionStructure>
  );
}
