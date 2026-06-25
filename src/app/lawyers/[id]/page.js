"use client";

import Button from "@/components/Button";
import CommentCard from "@/components/CommentCard";
import CommentModal from "@/components/CommentModal";
import Heading from "@/components/Heading";
import HiringModal from "@/components/HiringModal";
import SectionStructure from "@/components/SectionStructure";
import SubHeading from "@/components/SubHeading";
import { authClient } from "@/lib/auth-client";
import { format } from "date-fns";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function LawyerDetails() {
  const params = useParams();
  const id = params?.id;

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [lawyer, setLawyer] = useState(null);
  const [comments, setComments] = useState(null);

  const fetchComments = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/comments/lawyer/${id}`,
      );
      const data = await res.json();
      setComments(data);
      console.log(data);
    }

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
    fetchComments();
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
    <SectionStructure>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 bg-[#352514] border border-white/10 p-6 md:p-8 md:sticky top-6">
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
                {lawyer.status === "available" ? "available" : "busy"}
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
                Joined At:
              </span>
              <span className="text-3xl font-medium text-[#c5a880]">
                {format(new Date(lawyer.createdAt), "PPP")}
              </span>
            </div>
          </div>

          {session && (
            <div className="flex gap-2">
              <Button
                type="action"
                text={`Hire ${lawyer.name.split(" ")[0]}`}
                action={() =>
                  document.getElementById("hiring_confirmation").showModal()
                }
                variant="light"
              />
              {lawyer.client && lawyer.client.includes(user.id) && (
                <Button
                  type="action"
                  action={() => document.getElementById("comment").showModal()}
                  text={`Comment ${lawyer.name.split(" ")[0]}`}
                  variant="secondary"
                />
              )}
            </div>
          )}

          <p className="text-[11px] text-center text-[#c7bca9]/60 mt-3">
            * Initial conflict checking procedures apply prior to final
            engagement acceptance.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-8 flex flex-col">
          <SubHeading text={lawyer.specialization} />
          <Heading texts={[`${lawyer.name}`]} />

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-justify">
            <p className="font-medium">{lawyer.summary}</p>
          </div>

          <p className="mt-16 text-xl font-medium">User Comments</p>
          <div className="flex flex-col gap-4 font-medium text-gray-400 px-4 py-10 pr-10 border border-black/10">
            {!comments ? <div>Loading...</div> :
            comments.length < 1
              ? "No comments yet..."
              : <>
              {comments.map((comment) => {
                return <CommentCard comment={comment} />
              })}
              </>}
          </div>
        </div>
      </div>

      <HiringModal func={handleHiring} lawyer={lawyer} />
      {user && (
        <CommentModal
          name={lawyer.name}
          userName={user?.name}
          userId={user?.id}
          lawyerId={id}
          fetchComments={fetchComments}
        />
      )}
    </SectionStructure>
  );
}
