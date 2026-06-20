"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();

  const hiringId = searchParams.get("hiringId");

  useEffect(() => {
    const updatePayment = async () => {
      await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/mark-paid/${hiringId}`,
        {
          method: "PATCH",
        },
      );
    };

    if (hiringId) {
      updatePayment();
    }
  }, [hiringId]);

  return <h1>Payment Successful 🎉</h1>;
}
