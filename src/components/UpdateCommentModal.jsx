import { useForm } from "react-hook-form";
import Button from "./Button";
import { toast } from "react-toastify";

export default function UpdateCommentModal({ comment, fetchComments }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      comment: comment?.comment || "",
    },
  });

  const onSubmit = async (data) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/comments/update/${comment._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: data.comment,
        }),
      },
    );

    const ret = await res.json();
    if (ret) {
      toast.success("Comment updated successfully!");
      fetchComments();
      document.getElementById("update_comment_modal").close();
    }
  };

  return (
    <dialog
      id="update_comment_modal"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <h3 className="font-bold text-2xl">Update Comment</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            className="border border-[#43311c]/20 focus:border-[#c5a880] focus:outline-none rounded-none w-full transition-colors px-4 py-2 textarea my-4"
            placeholder="Share your thoughts"
            {...register("comment", { required: true })}
          ></textarea>
          {errors.comment && (
            <span className="text-red-600">Comment is required</span>
          )}
          <Button
            type="action"
            text="Comment"
            btnType="Submit"
            variant="dark"
          />
        </form>
      </div>
    </dialog>
  );
}
