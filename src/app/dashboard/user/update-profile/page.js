"use client"

import Button from "@/components/Button";
import FormLabel from "@/components/FormLabel";
import Heading from "@/components/Heading";
import Loading from "@/components/Loading";
import SectionStructure from "@/components/SectionStructure";
import SubHeading from "@/components/SubHeading";
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
    return <Loading />
  }

  return (
    <SectionStructure>
      <SubHeading text="Profile Update" />
      <Heading texts={["Update Your Profile"]} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 mt-16 border-2 border-black/10 p-8 max-w-2xl mx-auto"
      >
        <h3 className="text-3xl font-bold mt-4 mb-10 text-center">
          Profile Update From
        </h3>
        <div className="form-control w-full">
          <FormLabel label="Username" />
          <input
            type="text"
            defaultValue={user.name}
            className="border border-[#43311c]/20 focus:border-[#c5a880] focus:outline-none rounded-none w-full transition-colors px-4 py-2"
            placeholder="Enter username"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500">Name is requried</span>
          )}
        </div>

        <div className="form-control w-full">
          <FormLabel label="Email" />
          <input
            type="email"
            defaultValue={user.email}
            className="border border-[#43311c]/20 focus:border-[#c5a880] focus:outline-none rounded-none w-full transition-colors px-4 py-2"
            placeholder="Enter username"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">Name is requried</span>
          )}
        </div>

        <div className="form-control w-full">
          <FormLabel label="Profile Image" />
          <input
            type="text"
            defaultValue={user.image}
            className="border border-[#43311c]/20 focus:border-[#c5a880] focus:outline-none rounded-none w-full transition-colors px-4 py-2"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="text-red-500">Name is requried</span>
          )}
        </div>

        <Button text="Update Profile" type="action" btnType="submit" variant="dark" />
      </form>
    </SectionStructure>
  );
}
