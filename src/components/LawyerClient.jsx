"use client";

import FeaturedCard from "@/components/FeaturedCard";
import Heading from "@/components/Heading";
import SectionStructure from "@/components/SectionStructure";
import SubHeading from "@/components/SubHeading";
import BrowseLawyers from "@/skeleton-loading/S-BrowseLawyers";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LawyersClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";
  const specialization = searchParams.get("specialization") || "";
  const maxFee = searchParams.get("maxFee") || "";

  const [data, setData] = useState(null);

  useEffect(() => {
    const load = async () => {
      const url = new URL(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/lawyers/list`,
      );

      url.searchParams.set("page", page);
      url.searchParams.set("limit", 12);

      if (search) url.searchParams.set("search", search);
      if (specialization)
        url.searchParams.set("specialization", specialization);
      if (maxFee) url.searchParams.set("maxFee", maxFee);

      const res = await fetch(url.toString());
      const result = await res.json();

      setData(result);
    };

    load();
  }, [page, search, specialization, maxFee]);

  if (!data) {
    return <BrowseLawyers />;
  }

  const updateQuery = (params) => {
    const current = new URLSearchParams(searchParams.toString());

    Object.entries(params).forEach(([key, value]) => {
      if (!value) current.delete(key);
      else current.set(key, value);
    });

    router.push(`/lawyers?${current.toString()}`);
  };

  return (
    <SectionStructure>
      <SubHeading text="Available Lawyers in the Platform" />
      <Heading texts={["Browse Lawyers"]} />

      <div className="flex flex-col md:flex-row my-16 gap-8">
        <div className="relative flex items-center w-full">
          <span className="absolute left-3 text-[#c7bca9]/50 pointer-events-none">
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>

          <input
            type="search"
            required
            placeholder="Search lawyers..."
            defaultValue={search}
            onChange={(e) => updateQuery({ search: e.target.value, page: 1 })}
            className="border border-[#43311c]/20 focus:border-[#c5a880] focus:outline-none rounded-none pl-9 pr-4 h-12 w-full transition-colors"
          />
        </div>

        <select
          defaultValue={specialization}
          onChange={(e) =>
            updateQuery({ specialization: e.target.value, page: 1 })
          }
          className="bg-[#352514] border border-white/10 shadow-2xl rounded-none text-white px-8 py-4"
        >
          <option value="">All</option>
          <option value="criminal defense">Criminal Defense</option>
          <option value="corporate & business">Corporate & Business</option>
          <option value="family & matrimonial">Family & Matrimonial</option>
          <option value="real estate & property">Real Estate & Property</option>
          <option value="employment & labour">Employment & Labour</option>
        </select>
      </div>

      {data.lawyers.length > 0 ? (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.lawyers.map((lawyer) => (
              <FeaturedCard key={lawyer._id} lawyer={lawyer} />
            ))}
          </div>

          <div className="flex items-center justify-center font-normal join mt-20">
            {page > 1 && (
              <button
                onClick={() => router.push(`/lawyers?page=${page - 1}`)}
                className="join-item btn text-lg"
              >
                {`<<`}
              </button>
            )}
            <span className="join-item btn btn-ghost text-lg">
              Page {page} of {data.totalPage}
            </span>
            {page < data.totalPage && (
              <button
                onClick={() => router.push(`/lawyers?page=${page + 1}`)}
                className="join-item btn text-lg"
              >
                {`>>`}
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center text-xl">
          <p>No Lawyers found</p>
        </div>
      )}
    </SectionStructure>
  );
}
