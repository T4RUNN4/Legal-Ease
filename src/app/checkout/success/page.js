"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

// Core logic isolated to safely execute inside a Next.js Suspense context
function SuccessInvoiceContent() {
  const searchParams = useSearchParams();
  const hiringId = searchParams.get("hiringId");
  
  const [syncStatus, setSyncStatus] = useState("verifying"); // verifying | completed | failed
  const networkLock = useRef(false); // Prevents React StrictMode from double-firing the PATCH operation

  useEffect(() => {
    // Escape early if no ID exists or if the network request has already initialized
    if (!hiringId || networkLock.current) {
      if (!hiringId) setSyncStatus("failed");
      return;
    }

    const verifyAndMarkPayment = async () => {
      networkLock.current = true; // Engage lock immediately
      
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/mark-paid/${hiringId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Ledger mutation rejected by server");
        }

        setSyncStatus("completed");
      } catch (error) {
        console.error("[Transaction Synchronization Failure]:", error);
        setSyncStatus("failed");
      }
    };

    verifyAndMarkPayment();
  }, [hiringId]);

  return (
    <div className="w-full max-w-xl mx-auto mt-16 bg-[#352514] border border-white/10 p-8 md:p-12 relative text-center rounded-none shadow-2xl">
      {/* Signature Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-lie-to-r from-[#c5a880] via-[#c5a880]/30 to-transparent"></div>

      {syncStatus === "verifying" && (
        <div className="space-y-6 py-6">
          <div className="w-12 h-12 border-2 border-[#c5a880]/20 border-t-[#c5a880] animate-spin mx-auto rounded-none"></div>
          <div>
            <h2 className="text-xl font-serif text-[#fdfbf7]">Synchronizing Retainer Ledger...</h2>
          </div>
        </div>
      )}

      {syncStatus === "completed" && (
        <div className="space-y-8">
          <div className="w-16 h-16 border border-[#c5a880]/40 bg-[#43311c]/50 flex items-center justify-center mx-auto rounded-none">
            <svg className="w-6 h-6 text-[#c5a880]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-serif font-medium text-[#fdfbf7]">Payment Successful</h1>
            <p className="text-sm text-[#c7bca9] max-w-xs mx-auto leading-relaxed opacity-80">
              The retainment contract parameters have been cleared and marked active in our records.
            </p>
          </div>

          {/* Technical Metadata Ledger Block */}
          {hiringId && (
            <div className="bg-[#43311c]/30 border border-white/5 p-4 text-left rounded-none font-mono text-xs text-[#c7bca9]/70 space-y-1">
              <div><span className="text-[#c5a880]">[Record ID]:</span> {hiringId}</div>
              <div><span className="text-[#c5a880]">[Ledger State]:</span> Dynamic Verification Passed</div>
            </div>
          )}

          <div className="pt-2">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center bg-[#fdfbf7] text-[#43311c] hover:bg-[#e6e2db] transition-transform hover:-translate-y-0.5 rounded-none px-6 h-11 text-xs font-mono uppercase tracking-widest font-semibold"
            >
              Return to Dashboard ↗
            </Link>
          </div>
        </div>
      )}

      {syncStatus === "failed" && (
        <div className="space-y-6 py-4">
          <div className="w-12 h-12 border border-rose-900/50 bg-rose-950/20 flex items-center justify-center mx-auto rounded-none text-rose-400 font-mono text-xl">
            !
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-serif text-[#fdfbf7]">Verification Incomplete</h2>
            <p className="text-xs text-[#c7bca9]/70 max-w-sm mx-auto">
              We couldn't securely verify this payment automatically. Don't worry, if the charge went through, your transaction is safe. Reach out to firm support with your ID.
            </p>
          </div>
          <div className="pt-4">
            <Link
              href="/dashboard"
              className="border border-white/10 text-[#c7bca9] hover:text-[#fdfbf7] hover:bg-white/5 transition-colors rounded-none px-6 py-3 text-xs font-mono uppercase tracking-wider"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

// Global page wrapper serving as the entry point to guarantee safe Next.js static build compiling
export default function SuccessPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] px-4 flex items-center justify-center">
      <Suspense 
        fallback={
          <div className="text-center font-mono text-xs uppercase tracking-widest text-[#c5a880] animate-pulse">
             Accessing Secure Payment Node...
          </div>
        }
      >
        <SuccessInvoiceContent />
      </Suspense>
    </main>
  );
}