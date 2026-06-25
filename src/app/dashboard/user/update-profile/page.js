"use client";

import Button from "@/components/Button";
import FormLabel from "@/components/FormLabel";
import Heading from "@/components/Heading";
import Loading from "@/components/Loading";
import SectionStructure from "@/components/SectionStructure";
import SubHeading from "@/components/SubHeading";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function UpdateProfile() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const id = user?.id;

  const [isUpdating, setIsUpdating] = useState(false);
  const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    setIsUpdating(true);
    let imageUrl = user?.image;

    const fileSelected = data.image && data.image.length > 0;

    if (fileSelected) {
      const imageFile = data.image[0];
      const formData = new FormData();
      formData.append("image", imageFile);

      const imgbbResponse = await fetch(
        `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        },
      );

      const imgbbData = await imgbbResponse.json();

      if (!imgbbData.success) {
        throw new Error("Failed to upload new profile image.");
      }

      imageUrl = imgbbData.data.url;
    }

    const formattedData = {
      name: data.name,
      email: data.email,
      image: imageUrl,
      id,
    };

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
    toast.success("Profile Updated Successfully");
  };

  if (!user) {
    return <Loading />;
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
          {user.image && (
            <div className="mb-2 flex items-center gap-3">
              <span className="text-sm text-gray-500">Current photo:</span>
              <img
                src={user.image}
                alt="Current profile"
                className="w-10 h-10 rounded-full object-cover border border-black/10"
              />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            className="border border-[#43311c]/20 focus:border-[#c5a880] focus:outline-none rounded-none w-full transition-colors px-4 py-2 file:mr-4 file:py-1 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-[#43311c] file:text-white hover:file:bg-[#c5a880]"
            {...register("image", { required: false })} // Notice required is false here!
          />
        </div>

        <Button
          text="Update Profile"
          type="action"
          btnType="submit"
          variant="dark"
        />
      </form>
    </SectionStructure>
  );
}
