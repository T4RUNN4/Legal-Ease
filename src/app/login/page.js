"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/dashboard",
    });

    if (error) {
      toast.error("Something went wrong");
      console.log(error);
    } else {
      toast.success("Welcome Back!");
      reset();
    }
  };

  return (
    <section className="lg:col-span-4 p-6 md:p-8 space-y-6 max-w-xl mx-auto">
      <div>
        <h2 className="text-4xl font-medium text-center">Welcome Back!</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text uppercase tracking-wider">email</span>
          </label>
          <input
            type="email"
            className="input w-full border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none h-11"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-sm text-red-500">Email is required</span>
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
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-sm text-red-500">password is required</span>
          )}
        </div>

        <button
          type="submit"
          className="btn bg-[#43311c] text-[#fdfbf7] hover:bg-[#352514] border-none rounded-none px-5 py-2 min-h-0 h-auto font-medium tracking-wider shrink-0 uppercase"
        >
          Login
        </button>
      </form>

      <div className="flex flex-col items-center justify-center">
        <p className="text-center">
          New to Legal Ease?{" "}
          <Link href="/register" className="text-[#c5a880] hover:underline">
            Sign up
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
