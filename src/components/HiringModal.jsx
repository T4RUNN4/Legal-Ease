import Button from "./Button";

export default function HiringModal({ func, lawyer }) {
  return (
    <dialog
      id="hiring_confirmation"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">Are you sure?</h3>
        <p className="py-4">
          Are you sure to hire {lawyer.name} at an hourly rate of ${lawyer.fee}{" "}
          to handle your case?
        </p>
        <div className="flex flex-row gap-6 modal-action">
          <form method="dialog">
            <Button
              type="action"
              btnType="submit"
              text="Yes"
              action={func}
              variant="dark"
            />
            <Button type="action" btnType="submit" text="No" variant="light" />
          </form>
        </div>
      </div>
    </dialog>
  );
}
