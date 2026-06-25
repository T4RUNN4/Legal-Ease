"use client";

import Button from "@/components/Button";
import Fallback from "@/components/Fallback";
import Heading from "@/components/Heading";
import LegalProfileModal from "@/components/LegalProfileModal";
import Loading from "@/components/Loading";
import SectionStructure from "@/components/SectionStructure";
import SubHeading from "@/components/SubHeading";
import TableData from "@/components/TableData";
import TableRow from "@/components/TableRow";
import { authClient } from "@/lib/auth-client";
import Table from "@/sections/Table";
import { format } from "date-fns";
import { useEffect, useState } from "react";

export default function LegalProfile() {
  const { data: session } = authClient.useSession();
  const userId = session?.user?.id;

  const [legalProfiles, setLegalProfiles] = useState(null);
  const fetchLegalProfile = async () => {
    if (!userId) return;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/lawyers/${userId}`,
    );

    const data = await res.json();
    console.log(data);
    setLegalProfiles(data);
  };

  useEffect(() => {
    fetchLegalProfile();
  }, [userId]);

  if (!legalProfiles) {
    return <Loading />;
  }

  return (
    <SectionStructure>
      <SubHeading text="Legal Profile List" />
      <Heading texts={["Manage Your Legal Profile"]} />

      <div className="mt-16">
        {legalProfiles.length === 0 ? (
          <Fallback text="You didn't created any legal profile yet" />
        ) : (
          <Table tableHeads={["Category", "Fee", "Publishing Date", "Action"]}>
            {legalProfiles.map((legalProfile) => {
              return (
                <TableRow key={legalProfile._id}>
                  <td className="py-4 md:py-6 first-letter:uppercase">
                    {legalProfile.specialization}
                  </td>
                  <TableData text={`$${legalProfile.fee}`} />
                  <TableData
                    text={format(new Date(legalProfile.createdAt), "PPP")}
                  />
                  <td className="py-4 md:py-6 flex flex-col md:flex-row gap-4">
                    {legalProfile.publishingFee === "paid" ? (
                      <Button type="action" variant="payment" text="Edit" />
                    ) : (
                      <Button type="action" variant="payment" text="Pay" />
                    )}
                    <Button type="action" variant="delete" text="Delete" />
                  </td>
                </TableRow>
              );
            })}
          </Table>
        )}
      </div>

      <div className="flex items-end justify-end mt-8">
        <Button
          action={() =>
            document.getElementById("legal_profile_modal").showModal()
          }
          type="action"
          variant="dark"
          text="Create New"
        />
      </div>
      <LegalProfileModal user={session?.user} fetchLegalProfile={fetchLegalProfile} />
    </SectionStructure>
  );
}
