"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    const { data: res, error } = await authClient.signUp.email({
    name: data.name,
    email: data.email,
    password: data.password,
    role: data.role,
    image: data.photo,
    callbackURL: "/login",
});

    if(error) {
      toast.error("Something went wrong")
      console.log(error);
    } else {
      toast.success("Registration Successful");
      reset();
    }
  };

  return (
    <section className="lg:col-span-4 p-6 md:p-8 space-y-6 max-w-xl mx-auto">
      <div>
        <h2 className="text-4xl font-medium text-center">
          Join Legal Ease Family
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text uppercase tracking-wider">Name</span>
          </label>
          <input
            type="text"
            className="input w-full border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none h-11"
            placeholder="Enter username"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-sm text-red-500">Name is required</span>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text uppercase tracking-wider">Email</span>
          </label>
          <input
            type="email"
            className="input w-full border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none h-11"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-sm text-red-500">Email is required</span>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text uppercase tracking-wider">
              Profile Photo URL
            </span>
          </label>
          <input
            type="text"
            className="input w-full border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none h-11"
            placeholder="Enter photo url"
            {...register("photo", { required: true })}
          />
          {errors.photo && (
            <span className="text-sm text-red-500">
              Profile Photo is required
            </span>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text uppercase tracking-wider">
              Password
            </span>
          </label>
          <input
            type="password"
            className="input w-full border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none h-11 "
            placeholder="Enter password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text uppercase tracking-wider">
              Confirm Password
            </span>
          </label>
          <input
            type="password"
            className="input w-full border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none h-11 "
            placeholder="confirm password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <span className="text-sm text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text uppercase tracking-wider">
              Your Role
            </span>
          </label>
          <div className="flex gap-4">
            <div className="flex gap-1">
              <label className="label">Client</label>
              <input
                type="radio"
                name="radio-1"
                className="radio"
                value="client"
                {...register("role", { required: true })}
              />
            </div>
            <div className="flex gap-1">
              <label className="label">Lawyer</label>
              <input
                type="radio"
                name="radio-1"
                className="radio"
                value="lawyer"
                {...register("role", { required: true })}
              />
            </div>
          </div>

          {errors.role && (
            <span className="text-sm text-red-500">Please select a role</span>
          )}
        </div>

        <button
          type="submit"
          className="btn bg-[#43311c] text-[#fdfbf7] hover:bg-[#352514] border-none rounded-none px-5 py-2 min-h-0 h-auto font-medium tracking-wider shrink-0 uppercase"
        >
          Register
        </button>
      </form>

      <div className="flex flex-col items-center justify-center">
        <p className="text-center">
          Already Regsitered?{" "}
          <Link href="/login" className="text-[#c5a880] hover:underline">
            Sign in
          </Link>
        </p>
        <p className="text-center text-gray-300 my-4">OR</p>
        <button
          type="submit"
          className="btn btn-ghost border border-[#43311c] rounded-none px-5 py-2 min-h-0 h-auto font-medium tracking-wider shrink-0 uppercase"
        >
          Continue With Google
        </button>
      </div>
    </section>
  );
}
