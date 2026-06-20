"use client";

import FeaturedCard from "@/components/FeaturedCard";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Lawyers() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get("page")) || 1;

  const [data, setData] = useState(null);

  useEffect(() => {
    const loadLawyers = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/lawyers/list?page=${page}&limit=12`
      );

      const result = await res.json();
      setData(result);
    };

    loadLawyers();
  }, [page]);

  if (!data) {
    return <div>Loading...</div>;
  }

    return (
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#43311c] text-[#fdfbf7]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <span className="text-sm tracking-widest text-[#c5a880] font-medium mb-3 block uppercase">
              // Browse Lawyers
            </span>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight">
              Explore Our Diverse List Of Legal Experts Across All Practice
              Areas
            </h2>
          </div>

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
        </div>
      </section>
    );
}