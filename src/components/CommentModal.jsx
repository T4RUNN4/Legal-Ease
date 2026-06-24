import { useForm } from "react-hook-form";
import Button from "./Button";
import { toast } from "react-toastify";

export default function CommentModal({ name, userName, userId, lawyerId, fetchComments }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const formattedData = {
      ...data,
      lawyerName: name,
      userId: userId,
      userName: userName,
      lawyerId: lawyerId,
      date: new Date(),
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/commments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      },
    );

    const ret = res.json();

    if(ret) {
        toast.success("Your comment is recorded successfully");
        reset();
        fetchComments();
        document.getElementById("comment").close();
    } else {
        toast.error("Something went wrong");
        console.log(ret);
    }

  };

  return (
    <dialog id="comment" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-2xl">Review</h3>
        <p className="py-4">
          Share your experience with {name}. Explain why did you choose him and
          how is your reaction after working with him.
        </p>
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
