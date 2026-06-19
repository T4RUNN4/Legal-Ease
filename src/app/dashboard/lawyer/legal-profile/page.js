"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function UpdateLegalProfile() {
  const { data: session } = authClient.useSession();
  const userId = session?.user?.id;
  const [lawyer, setLawyer] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  useEffect(() => {
    const fetchLawyer = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/lawyers/${userId}`,
      );

      const data = await res.json();
      setLawyer(data);
      reset(data);
    };

    if (userId) {
      fetchLawyer();
    }
  }, [userId, reset]);

  const name = watch("name");
  const fee = watch("fee");
  const photo = watch("photo");
  const specialization = watch("specialization");
  const summary = watch("summary");

  const onSubmit = async () => {
    const formattedData = {
      name: name,
      fee: Number(fee),
      photo: photo,
      specialization: specialization,
      summary: summary,
      user: userId,
      status: "available",
      gotHired: 0
    }

     const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/lawyers/update-profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
    });

    if(res) {
      toast.success("Your Legal Profile Updated Successfully");
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <section className="w-full max-w-3xl mx-auto mt-6 bg-[#352514] border border-white/10 p-6 md:p-10 relative rounded-none">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-[#c5a880] via-[#c5a880]/30 to-transparent"></div>
      <div className="mb-8 border-b border-white/5 pb-6">
        <h2 className="text-2xl md:text-3xl font-medium text-[#fdfbf7]">
          Update Legal Profile
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text  uppercase text-[#c7bca9] tracking-wider">
              Legal Name
            </span>
          </label>
          <input
            type="text"
            className="input w-full bg-[#43311c]/40 border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none text-sm text-[#fdfbf7] h-11"
            placeholder="Enter legal name"
            {...register("name", { required: true })}
          />
        </div>
        {errors.name && (
          <span className="text-xs text-rose-400 mt-1 block">
            Name is required
          </span>
        )}

        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text  uppercase text-[#c7bca9] tracking-wider">
              Professional Photo URL
            </span>
          </label>
          <input
            type="text"
            className="input w-full bg-[#43311c]/40 border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none text-sm text-[#fdfbf7] h-11"
            placeholder="https://example.com/portrait.jpg"
            {...register("photo", { required: true })}
          />
          {errors.photo && (
            <span className="text-xs text-rose-400 mt-1 block">
              Photo URL is required
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control w-full">
            <label className="label py-1">
              <span className="label-text uppercase text-[#c7bca9] tracking-wider">
                Core Specialization
              </span>
            </label>
            <select
              className="select w-full bg-[#43311c]/40 border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none text-sm text-[#fdfbf7] h-11 min-h-0 px-4"
              {...register("specialization", { required: true })}
            >
              <option value="" disabled>
                Select your specialization
              </option>
              <option value="Criminal Defense">Criminal Defense</option>
              <option value="Corporate & Business">Corporate & Business</option>
              <option value="Family & Matrimonial">Family & Matrimonial</option>
              <option value="Real Estate & Property">
                Real Estate & Property
              </option>
              <option value="Employment & Labour">Employment & Labour</option>
            </select>

            {errors.specialization && (
              <span className="text-xs text-rose-400 mt-1 block">
                Specialization is required
              </span>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label py-1">
              <span className="label-text  uppercase text-[#c7bca9] tracking-wider">
                Consultation Fee (USD / Hour)
              </span>
            </label>
            <input
              type="number"
              className="input w-full bg-[#43311c]/40 border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none text-sm text-[#fdfbf7] h-11"
              placeholder="e.g., 350"
              min="0"
              {...register("fee", { required: true })}
            />

            {errors.fee && (
              <span className="text-xs text-rose-400 mt-1 block">
                Fee is required
              </span>
            )}
          </div>
        </div>

        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text  uppercase text-[#c7bca9] tracking-wider">
              Professional Summary / Bio
            </span>
          </label>
          <textarea
            className="textarea w-full bg-[#43311c]/40 border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none text-sm text-[#fdfbf7] min-h-35 p-4 leading-relaxed resize-none"
            placeholder="Compose summary detailing courtroom records and regulatory compliance history..."
            {...register("summary", { required: true })}
          ></textarea>

          {errors.summary && (
            <span className="text-xs text-rose-400 mt-1 block">
              Summary is required
            </span>
          )}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="btn bg-[#fdfbf7] text-[#43311c] hover:bg-[#e6e2db] border-none rounded-none px-8 h-12 min-h-0 font-medium tracking-widest uppercase transition-transform hover:-translate-y-0.5"
          >
            Save Changes
          </button>
        </div>
      </form>
    </section>
  );
}
