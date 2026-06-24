import { format } from "date-fns";

export default function CommentCard({ comment }) {
  return (
    <div className="flex flex-col border border-black/10 p-4 text-black">
      <p className="text-lg mb-1">{comment.userName}</p>
      <p className="text-sm text-black/50">{format(new Date(comment.date), "PPP")}</p>
      <p className="text-xl mt-6">{comment.comment}</p>
    </div>
  );
}
