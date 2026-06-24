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
import { toast } from "react-toastify";

export default function UserComments() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const id = user?.id;

  const [comments, setComments] = useState(null);

  const fetchComments = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/comments/user/${id}`,
    );
    const comments = await res.json();
    setComments(comments);
  };

  useEffect(() => {
    if (id) {
      fetchComments();
    }
  }, [id]);

  const handleDelete = async (id) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/comments/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const ret = await res.json();

    if (ret) {
      toast.success("Your comment is deleted");
      fetchComments();
    }
  };

  return (
    <SectionStructure>
      <SubHeading text="Your Comments" />
      <Heading texts={["Your Comments History"]} />

      <div className="mt-16">
        <Table tableHeads={["Laywer", "Comment", "Date", "Action"]}>
          {!comments ? (
            <></>
          ) : (
            <>
              {comments.map((comment, index) => {
                return (
                  <TableRow key={index}>
                    <td className="py-4 px-6">{comment.lawyerName}</td>
                    <td className="py-4 px-6">{comment.comment}</td>
                    <td className="py-4 px-6">
                      {format(new Date(comment.date), "PPP")}
                    </td>
                    <td className="flex gap-2 py-4 px-6">
                      <Button text="Edit" type="action" variant="payment" />
                      <Button
                        text="Delete"
                        type="action"
                        action={() => handleDelete(comment._id)}
                        variant="delete"
                      />
                    </td>
                  </TableRow>
                );
              })}
            </>
          )}
        </Table>
      </div>
    </SectionStructure>
  );
}
