"use client";

import { useForm } from "react-hook-form";
import Button from "./Button";
import FormLabel from "./FormLabel";
import { toast } from "react-toastify";

export default function LegalProfileModal({ fetchLegalProfile, user }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const formattedData = {
        fee: data.fee,
        summary: data.summary,
        specialization: data.specialization,
        name: user.name,
        user: user.id,
        gotHired: 0,
        photo: user.image,
        status: "available",
        client: [],
        createdAt: new Date(),
        publishingFee: "unpaid",
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/lawyer/add-new`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      },
    );
    const ret = res.json()

    if(ret) {
        reset();
        fetchLegalProfile();
        toast.success("New Legal Profile Added");
        toast.info("Pay activation fee to activate profile")
        document.getElementById("legal_profile_modal").close();
    }
  };

  return (
    <dialog
      id="legal_profile_modal"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 border-2 border-black/10 p-8 max-w-2xl mx-auto"
        >
          <div className="flex items-end justify-items-end">
            <button onClick={() => document.getElementById("legal_profile_modal").close()} className="btn">X</button>
          </div>
          <h3 className="text-3xl font-bold mt-4 mb-10 text-center">
            Add New Profile
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control w-full">
              <FormLabel label="Specialization" />
              <select
                className="border border-[#43311c]/20 focus:border-[#c5a880] focus:outline-none rounded-none w-full transition-colors px-4 py-2"
                {...register("specialization", { required: true })}
              >
                <option value="" disabled>
                  Select your specialization
                </option>
                <option value="criminal defense">Criminal Defense</option>
                <option value="corporate & business">
                  Corporate & Business
                </option>
                <option value="family & matrimonial">
                  Family & Matrimonial
                </option>
                <option value="real estate & property">
                  Real Estate & Property
                </option>
                <option value="employment & labour">Employment & Labour</option>
              </select>
              {errors.specialization && (
                <span className="text-sm text-red-600">
                  Select your specialization is required
                </span>
              )}
            </div>

            <div className="form-control w-full">
              <FormLabel label="Fee" />
              <input
                type="number"
                className="border border-[#43311c]/20 focus:border-[#c5a880] focus:outline-none rounded-none w-full transition-colors px-4 py-2"
                placeholder="e.g., 350"
                min="0"
                {...register("fee", { required: true })}
              />
              {errors.fee && (
                <span className="text-sm text-red-600">Fee is required</span>
              )}
            </div>
          </div>

          <div className="form-control w-full">
            <FormLabel label="Proffesional Summary" />
            <textarea
              className="border border-[#43311c]/20 focus:border-[#c5a880] focus:outline-none rounded-none w-full transition-colors px-4 py-2"
              placeholder="Compose summary detailing courtroom records and regulatory compliance history..."
              {...register("summary", { required: true })}
            />
            {errors.summary && (
              <span className="text-sm text-red-600">Summary is required</span>
            )}
          </div>

          <div className="pt-2">
            <Button
              type="action"
              text="Create"
              btnType="Submit"
              variant="dark"
            />
          </div>
        </form>
      </div>
    </dialog>
  );
}
