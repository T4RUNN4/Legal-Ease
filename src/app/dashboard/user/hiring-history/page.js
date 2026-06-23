"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import SectionStructure from "@/components/SectionStructure";
import SubHeading from "@/components/SubHeading";
import TableRow from "@/components/TableRow";
import { authClient } from "@/lib/auth-client";
import Table from "@/sections/Table";
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
    <SectionStructure page="true">
      <SubHeading text="Hiring History" />
      <Heading texts={["Lawyers You Hired"]} />

      <div className="border border-white/10 mt-16 w-full flex items-center justify-center">
        <Table
          tableHeads={[
            "Name",
            "Specialization",
            "Fee",
            "Hiring Date",
            "Status",
          ]}
        >
          {hiring.map((hire) => (
            <TableRow key={hire._id}>
              <td className="py-4 px-6">{hire.lawyerName}</td>
              <td className="py-4 px-6">{hire.specialization}</td>
              <td className="py-4 px-6">${hire.fee}</td>
              <td className="py-4 px-6">
                {format(new Date(hire.hiredAt), "PPP")}
              </td>
              <td className="py-4 px-6">
                {hire.status === "unpaid" ? (
                  <Button
                    text="Pay"
                    type="action"
                    variant="payment"
                    action={() => handleCheckout(hire._id)}
                  />
                ) : (
                  <span
                    className={`uppercase tracking-wider rounded-none ${
                      hire.status === "paid"
                        ? "text-emerald-600"
                        : hire.status === "rejected"
                          ? "text-rose-600"
                          : "text-gray-400"
                    }`}
                  >
                    {hire.status}
                  </span>
                )}
              </td>
            </TableRow>
          ))}
        </Table>
      </div>
    </SectionStructure>
  );
}
