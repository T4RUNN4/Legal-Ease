"use client";

import Button from "@/components/Button";
import FormLabel from "@/components/FormLabel";
import Heading from "@/components/Heading";
import SectionStructure from "@/components/SectionStructure";
import SubHeading from "@/components/SubHeading";
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
    if (!role) {
      toast.error("Select your role first");
      return;
    }

    localStorage.setItem("selectedRole", role);
    const data = await authClient.signIn.social({
      provider: "google",
    });
    if (data) {
      router.push("/");
    }
  };

  return (
    <SectionStructure>
      <SubHeading text="User Registration" />
      <Heading texts={["Join Legal Ease Family"]} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 mt-16 border-2 border-black/10 p-8 max-w-2xl mx-auto"
      >
        <div className="form-control w-full">
          <FormLabel label="Your Role" />
          <div className="grid grid-cols-2 gap-4 mt-1">
            <label className="relative flex items-center justify-center border border-[#c5a880] p-3 cursor-pointer transition-all bg-[#fdfbf7] text-[#43311c] has-checked:bg-[#43311c] has-checked:text-white hover:bg-white/5 ">
              <input
                type="radio"
                value="client"
                className="sr-only"
                {...register("role", { required: true })}
              />
              <span>Client</span>
            </label>

            <label className="relative flex items-center justify-center border border-[#c5a880] p-3 cursor-pointer transition-all bg-[#fdfbf7] text-[#43311c] has-checked:bg-[#43311c] has-checked:text-white hover:bg-white/5 ">
              <input
                type="radio"
                value="lawyer"
                className="sr-only"
                {...register("role", { required: true })}
              />
              <span>Lawyer</span>
            </label>
          </div>
          {errors.role && (
            <span className=" text-rose-400 mt-1 block">
              Please select your account type.
            </span>
          )}
        </div>

        <div className="form-control w-full">
          <FormLabel label="Full Name" />
          <input
            type="text"
            className="border border-[#43311c]/20 focus:border-[#c5a880] focus:outline-none rounded-none w-full transition-colors px-4 py-2"
            placeholder="e.g., Alexander Reed"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className=" text-rose-400 mt-1 block">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="form-control w-full flex flex-col gap-2">
          <FormLabel label="Email Adress" />
          <input
            type="email"
            className="border border-[#43311c]/20 focus:border-[#c5a880] focus:outline-none rounded-none w-full transition-colors px-4 py-2"
            placeholder="name@firm.com"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className=" text-rose-400 mt-1 block">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="form-control w-full">
          <FormLabel label="Profile Photo" />
          <input
            type="text"
            className="border border-[#43311c]/20 focus:border-[#c5a880] focus:outline-none rounded-none w-full transition-colors px-4 py-2"
            placeholder="https://images.unsplash.com/your-portrait"
            {...register("photo", {
              required: "Profile photo path is required",
            })}
          />
          {errors.photo && (
            <span className=" text-rose-400 mt-1 block">
              {errors.photo.message}
            </span>
          )}
        </div>

        <div className="form-control w-full">
          <FormLabel label="Password" />
          <input
            type="password"
            className="border border-[#43311c]/20 focus:border-[#c5a880] focus:outline-none rounded-none w-full transition-colors px-4 py-2"
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
            <span className=" text-rose-400 mt-1 block">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="form-control w-full">
          <FormLabel label="Confirm Password" />
          <input
            type="password"
            className="border border-[#43311c]/20 focus:border-[#c5a880] focus:outline-none rounded-none w-full transition-colors px-4 py-2"
            placeholder="••••••••"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <span className=" text-rose-400 mt-1 block">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <div className="flex gap-4">
          <Button
            text="Register"
            type="action"
            btnType="submit"
            variant="dark"
          />
          <Button
            text="Continue With Google"
            type="action"
            action={handleGoogleLogin}
            variant="none"
          />
        </div>
      </form>

      <p className="text-lg text-center mt-8">
        Already Registered?{" "}
        <Link href="/login" className="font-bold underline underline-offset-2">
          Sign-In
        </Link>
      </p>
    </SectionStructure>
  );
}
