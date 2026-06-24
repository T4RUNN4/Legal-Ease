"use client";
import Button from "@/components/Button";
import Fallback from "@/components/Fallback";
import Heading from "@/components/Heading";
import Loading from "@/components/Loading";
import SectionStructure from "@/components/SectionStructure";
import SubHeading from "@/components/SubHeading";
import TableData from "@/components/TableData";
import TableRow from "@/components/TableRow";
import { authClient } from "@/lib/auth-client";
import Table from "@/sections/Table";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function LawyerHiringHistory() {
  const { data: session } = authClient.useSession();
  const userID = session?.user?.id;

  const [hiring, setHiring] = useState(null);

  const loadHiringHistory = async () => {
    if (!userID) return;

    const res1 = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/lawyers/find/${userID}`,
    );
    const lawyer = await res1.json();

    const res2 = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/lawyer/hiring-history/${lawyer._id}`,
    );

    const hiringData = await res2.json();
    setHiring(hiringData);
  };

  useEffect(() => {
    loadHiringHistory();
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
    loadHiringHistory();
  };

  if (!hiring) {
    return <Loading />;
  }

  return (
    <SectionStructure page="true">
      <SubHeading text="Hiring History" />
      <Heading texts={["Client Hiring Requests"]} />

      <div className="mt-16">
        {hiring.length === 0 ? (
          <Fallback text="You didn't get any client yet" />
        ) : (
          <Table tableHeads={["Client Name", "Date", "Status"]}>
            {hiring.map((hire) => (
              <TableRow key={hire._id}>
                <TableData text={hire.userName} />
                <TableData text={format(new Date(hire.hiredAt), "PPP")} />
                <td className="py-4 md:px-6 flex flex-col md:flex-row gap-2">
                  {hire.status === "pending" ? (
                    <>
                      <Button
                        text="Accept"
                        type="action"
                        variant="payment"
                        action={() => updateStatus(hire._id, "unpaid")}
                      />
                      <Button
                        text="Reject"
                        type="action"
                        variant="delete"
                        action={() => updateStatus(hire._id, "rejected")}
                      />
                    </>
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
        )}
      </div>
    </SectionStructure>
  );
}
