"use client"

import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function UpdateProfile() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const id = user?.id;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    const formattedData = {
      ...data,
      id
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/update-profile`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      },
    );
    const ret = res.json();
    toast.success("Profile Updated Successfully")
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <section className="lg:col-span-4 p-6 md:p-8 space-y-6">
      <div>
        <h2 className="text-4xl font-medium text-center">Update Profile</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text uppercase tracking-wider">
              Username
            </span>
          </label>
          <input
            type="text"
            defaultValue={user.name}
            className="input w-full border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none h-11"
            placeholder="Enter username"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500">Name is requried</span>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text uppercase tracking-wider">Email</span>
          </label>
          <input
            type="email"
            defaultValue={user.email}
            className="input w-full border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none h-11"
            placeholder="Enter username"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">Name is requried</span>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text uppercase tracking-wider">
              Profile Image URL
            </span>
          </label>
          <input
            type="text"
            defaultValue={user.image}
            className="input w-full border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none h-11 "
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="text-red-500">Name is requried</span>
          )}
        </div>

        <button
          type="submit"
          className="btn bg-[#43311c] text-[#fdfbf7] hover:bg-[#352514] border-none rounded-none px-5 py-2 min-h-0 h-auto font-medium tracking-wider shrink-0 uppercase"
        >
          Update User
        </button>
      </form>
    </section>
  );
}
