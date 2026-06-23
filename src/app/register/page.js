"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const role = watch("role");
  const router = useRouter();

  const onSubmit = async (data) => {
    const { data: res, error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
      image: data.photo,
    });

    if (error) {
      toast.error(error.message || "Something went wrong");
      console.log(error);
    } else {
      toast.success("Registration Successful");
      reset();
      router.push("/dashboard");
    }
  };

  const handleGoogleLogin = async () => {
    if(!role) {
      toast.error("Select your role first");
      return;
    }
    
    localStorage.setItem("selectedRole", role);
    const data = await authClient.signIn.social({
      provider: "google",
    });
    if(data) {
      router.push("/")
    }
  }

  return (
    <section className="min-h-screen] flex items-center justify-center py-16 px-6 md:px-12 font-sans">
      <div className="w-full max-w-xl bg-[#352514] border border-white/10 p-8 md:p-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-0.75 bg-linear-to-r from-[#c5a880] via-[#c5a880]/40 to-transparent"></div>

        <div className="text-center mb-8">
          <span className="text-xs tracking-widest text-[#c5a880] uppercase block mb-2">
            Registration
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight text-[#c5a880]">
            Join The Legal Registry
          </h2>
          <div className="w-12 h-px bg-white/20 mx-auto mt-4"></div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="form-control w-full">
            <label className="label py-1">
              <span className="label-text text-xs uppercase text-[#c7bca9] tracking-wider">
                Account Classification
              </span>
            </label>
            <div className="grid grid-cols-2 gap-4 mt-1">
              <label className="relative flex items-center justify-center border border-white/20 p-3 cursor-pointer text-sm font-medium transition-all has-checked:bg-[#fdfbf7] has-checked:text-[#43311c] has-checked:border-[#c5a880] hover:bg-white/5 text-[#c7bca9]">
                <input
                  type="radio"
                  value="client"
                  className="sr-only" // Hidden visually, fully accessible
                  {...register("role", { required: true })}
                />
                <span>Seeking Counsel (Client)</span>
              </label>

              <label className="relative flex items-center justify-center border border-white/20 p-3 cursor-pointer text-sm font-medium transition-all has-checked:bg-[#fdfbf7] has-checked:text-[#43311c] has-checked:border-[#c5a880] hover:bg-white/5 text-[#c7bca9]">
                <input
                  type="radio"
                  value="lawyer"
                  className="sr-only"
                  {...register("role", { required: true })}
                />
                <span>Legal Practitioner (Lawyer)</span>
              </label>
            </div>
            {errors.role && (
              <span className="text-xs text-rose-400 mt-1 block">
                Please select your account type.
              </span>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label py-1">
              <span className="label-text text-xs uppercase text-[#c7bca9] tracking-wider">
                Full Name
              </span>
            </label>
            <input
              type="text"
              className="input w-full bg-[#43311c]/40 border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none text-sm text-[#fdfbf7] h-11 transition-colors"
              placeholder="e.g., Alexander Reed"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-xs text-rose-400 mt-1 block">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label py-1">
              <span className="label-text text-xs uppercase text-[#c7bca9] tracking-wider">
                Email Address
              </span>
            </label>
            <input
              type="email"
              className="input w-full bg-[#43311c]/40 border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none text-sm text-[#fdfbf7] h-11 transition-colors"
              placeholder="name@firm.com"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-xs text-rose-400 mt-1 block">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label py-1">
              <span className="label-text text-xs uppercase text-[#c7bca9] tracking-wider">
                Profile Photo URL
              </span>
            </label>
            <input
              type="text"
              className="input w-full bg-[#43311c]/40 border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none text-sm text-[#fdfbf7] h-11 transition-colors"
              placeholder="https://images.unsplash.com/your-portrait"
              {...register("photo", {
                required: "Profile photo path is required",
              })}
            />
            {errors.photo && (
              <span className="text-xs text-rose-400 mt-1 block">
                {errors.photo.message}
              </span>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label py-1">
              <span className="label-text text-xs uppercase text-[#c7bca9] tracking-wider">
                Password
              </span>
            </label>
            <input
              type="password"
              className="input w-full bg-[#43311c]/40 border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none text-sm text-[#fdfbf7] h-11 transition-colors"
              placeholder="••••••••"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-xs text-rose-400 mt-1 block">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label py-1">
              <span className="label-text text-xs uppercase text-[#c7bca9] tracking-wider">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              className="input w-full bg-[#43311c]/40 border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none text-sm text-[#fdfbf7] h-11 transition-colors"
              placeholder="••••••••"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <span className="text-xs text-rose-400 mt-1 block">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="btn w-full bg-[#fdfbf7] text-[#43311c] hover:bg-[#e6e2db] border-none rounded-none h-12 min-h-0 font-medium tracking-widest uppercase transition-transform hover:-translate-y-0.5 mt-2"
          >
            Complete Registration
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/5 space-y-4 text-sm text-center">
          <p className="text-[#c7bca9]">
            Already registered?{" "}
            <Link
              href="/login"
              className="text-[#c5a880] font-medium hover:underline ml-1"
            >
              Sign In
            </Link>
          </p>

          <div className="relative flex py-2 items-center justify-center">
            <div className="grow border-t border-white/5"></div>
            <span className="shrink mx-4 text-xs text-[#c7bca9]/40 uppercase tracking-widest">
              or
            </span>
            <div className="grow border-t border-white/5"></div>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-block bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-[#fdfbf7] rounded-none h-11 min-h-0 font-medium text-xs tracking-wider uppercase transition-colors"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </section>
  );
}
