"use client";

import Button from "@/components/Button";
import Fallback from "@/components/Fallback";
import Heading from "@/components/Heading";
import Loading from "@/components/Loading";
import SectionStructure from "@/components/SectionStructure";
import SubHeading from "@/components/SubHeading";
import TableData from "@/components/TableData";
import TableRow from "@/components/TableRow";
import UpdateCommentModal from "@/components/UpdateCommentModal";
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
  const [activeComment, setActiveComment] = useState(null);

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

  if (!comments) {
    return <Loading />;
  }

  const handleComment = (comment) => {
    setActiveComment(comment);
    setTimeout(() => {
      document.getElementById("update_comment_modal").showModal();
    }, 50);
  };

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
          {comments.length === 0 ? (
            <Fallback text="You didn't commented any lawyer yet" />
          ) : (
            <>
              {comments.map((comment, index) => {
                return (
                  <TableRow key={index}>
                    <TableData text={comment.lawyerName} />
                    <TableData text={comment.comment} />
                    <TableData text=
                      {format(new Date(comment.date), "PPP")}
                     />
                    <td className="flex flex-col md:flex-row gap-2 py-4 md:px-6">
                      <Button
                        text="Edit"
                        action={() => handleComment(comment)}
                        type="action"
                        variant="payment"
                      />
                      <Button
                        text="Delete"
                        type="action"
                        action={() => handleDelete(comment._id)}
                        variant="delete"
                      />
                    </td>
                  </TableRow>
                );
              })}</>
          )}
        </Table>
      </div>

      {activeComment && (
        <UpdateCommentModal
          key={activeComment._id}
          comment={activeComment}
          fetchComments={fetchComments}
        />
      )}
    </SectionStructure>
  );
}
