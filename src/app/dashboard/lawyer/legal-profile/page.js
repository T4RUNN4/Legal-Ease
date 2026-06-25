"use client";

import Button from "@/components/Button";
import EditLegalProfileModal from "@/components/EditLegalProfileModal";
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
import { processFetch } from "next/dist/client/components/router-reducer/fetch-server-response";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function LegalProfile() {
  const { data: session } = authClient.useSession();
  const userId = session?.user?.id;

  const [legalProfiles, setLegalProfiles] = useState(null);
  const [activeLegalProfile, setActiveLegalProfile] = useState(null);

  const fetchLegalProfile = async () => {
    if (!userId) return;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/lawyers/${userId}`,
    );

    const data = await res.json();
    setLegalProfiles(data);
  };

  useEffect(() => {
    fetchLegalProfile();
  }, [userId]);

  if (!legalProfiles) {
    return <Loading />;
  }

  const handleCheckout = async (lawyerId) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/checkout/lawyer/${lawyerId}`,
    );
    const data = await res.json();
    window.location.href = data.url;
  };

  const handleEdit = async (legalProfile) => {
    setActiveLegalProfile(legalProfile);
    setTimeout(() => {
      document.getElementById("edit_legal_profile_modal").showModal();
    }, 50);
  };

  const handleDelete = async (lawyerId) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/lawyer/profile/${lawyerId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const ret = await res.json();

    if (ret) {
      toast.success("Your profile is deleted");
      fetchLegalProfile();
    }
  };

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
                      <Button
                        type="action"
                        variant="payment"
                        text="Edit"
                        action={() => handleEdit(legalProfile)}
                      />
                    ) : (
                      <Button
                        type="action"
                        variant="payment"
                        text="Pay"
                        action={() => handleCheckout(legalProfile._id)}
                      />
                    )}
                    <Button
                      type="action"
                      variant="delete"
                      text="Delete"
                      action={() => handleDelete(legalProfile._id)}
                    />
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
      <LegalProfileModal
        user={session?.user}
        fetchLegalProfile={fetchLegalProfile}
      />
      {activeLegalProfile && (
        <EditLegalProfileModal legalProfile={activeLegalProfile} fetchLegalProfile={fetchLegalProfile} />
      )}
    </SectionStructure>
  );
}
