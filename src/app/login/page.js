"use client";

import Button from "@/components/Button";
import FormLabel from "@/components/FormLabel";
import Heading from "@/components/Heading";
import SectionStructure from "@/components/SectionStructure";
import SubHeading from "@/components/SubHeading";
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

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <SectionStructure>
      <SubHeading text="User Login" />
      <Heading texts={["Welcome Back!"]} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 mt-16 border-2 border-black/10 p-8 max-w-2xl mx-auto"
      >
        <h3 className="text-3xl font-bold mt-4 mb-10 text-center">
          Login From
        </h3>
        <div className="form-control w-full">
          <FormLabel label="Email" />
          <input
            type="email"
            className="border border-[#43311c]/20 focus:border-[#c5a880] focus:outline-none rounded-none w-full transition-colors px-4 py-2"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-sm text-red-500">Email is required</span>
          )}
        </div>

        <div className="form-control w-full">
          <FormLabel label="Password" />
          <input
            type="password"
            className="border border-[#43311c]/20 focus:border-[#c5a880] focus:outline-none rounded-none w-full transition-colors px-4 py-2"
            placeholder="Enter password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-sm text-red-500">password is required</span>
          )}
        </div>

        <div className="flex gap-4">
          <Button text="Login" type="action" btnType="submit" variant="dark" />
          <Button
            text="Continue With Google"
            type="action"
            action={handleGoogleLogin}
            variant="none"
          />
        </div>
      </form>

      <p className="text-lg text-center mt-8">
        New to Legal Ease?{" "}
        <Link href="/register" className="font-bold underline underline-offset-2">
          Sign-Up
        </Link>
      </p>
    </SectionStructure>
  );
}
