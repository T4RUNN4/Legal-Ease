"use client";

import FeaturedCard from "@/components/FeaturedCard";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Lawyers() {
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
    return <div>Loading...</div>;
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
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#43311c] text-[#fdfbf7]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-medium leading-tight">
            Explore Our Diverse List Of Legal Experts Across All Practice Areas
          </h2>
        </div>

        <div className="flex mt-8 mb-16 gap-8">
          <label className="input text-black">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search lawyers..."
              defaultValue={search}
              onChange={(e) => updateQuery({ search: e.target.value, page: 1 })}
              className="w-full"
            />
          </label>

          <select
            defaultValue={specialization}
            onChange={(e) =>
              updateQuery({ specialization: e.target.value, page: 1 })
            }
            className="select w-full bg-[#43311c]/40 border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none text-sm text-[#fdfbf7] h-11 min-h-0 px-4"
          >
            <option value="">All</option>
            <option value="Criminal Defense">Criminal Defense</option>
            <option value="Corporate & Business">Corporate & Business</option>
            <option value="Family & Matrimonial">Family & Matrimonial</option>
            <option value="Real Estate & Property">
              Real Estate & Property
            </option>
            <option value="Employment & Labour">Employment & Labour</option>
          </select>
        </div>

        {data.lawyers.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {data.lawyers.map((lawyer) => (
                <FeaturedCard key={lawyer._id} lawyer={lawyer} />
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-12">
              {page > 1 && (
                <button
                  onClick={() => router.push(`/lawyers?page=${page - 1}`)}
                  className="btn btn-ghost"
                >
                  Previous
                </button>
              )}
              <span className="mt-2">
                Page {page} of {data.totalPage}
              </span>
              {page < data.totalPage && (
                <button
                  onClick={() => router.push(`/lawyers?page=${page + 1}`)}
                  className="btn btn-ghost"
                >
                  Next
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center text-xl">
            <p>No Lawyers found</p>
          </div>
        )}
      </div>
    </section>
  );
}
