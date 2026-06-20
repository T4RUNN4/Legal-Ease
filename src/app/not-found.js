import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-80px)] px-4 flex items-center justify-center">
      
      <div className="w-full max-w-xl bg-[#352514] border border-white/10 p-8 md:p-12 relative text-center rounded-none shadow-2xl">
        
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#c5a880] via-[#c5a880]/30 to-transparent"></div>

        <div className="w-20 h-20 border border-white/10 bg-[#43311c]/30 flex flex-col items-center justify-center mx-auto rounded-none mb-8 relative">
          <span className="text-2xl font-medium text-[#c5a880] tracking-wide">404</span>
          <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-[#c5a880]/40"></div>
        </div>

        <div className="space-y-3 mb-8">
          <h1 className="text-3xl font-medium text-[#fdfbf7] tracking-wide">
            Not Found
          </h1>
          <p className="text-sm text-[#c7bca9] max-w-xs mx-auto leading-relaxed opacity-80">
            The jurisdiction or record string you are looking for does not exist, has been struck from the record, or moved permanently.
          </p>
        </div>

        <div className="bg-[#43311c]/40 border border-white/5 p-4 text-left rounded-none text-[11px] text-[#c7bca9]/60 space-y-1 mb-8">
          <div><span className="text-[#c5a880]">// SYSTEM LOG</span></div>
          <div><span className="opacity-40">Origin:</span> Client_Router_Exception</div>
          <div><span className="opacity-40">Action:</span> Execution Terminated [Code 0x0404]</div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto bg-[#fdfbf7] text-[#43311c] hover:bg-[#e6e2db] transition-transform hover:-translate-y-0.5 rounded-none px-6 h-11 flex items-center justify-center text-xs uppercase tracking-widest font-semibold"
          >
            Return Home
          </Link>
          <Link
            href="/dashboard"
            className="w-full sm:w-auto border border-white/10 text-[#c7bca9] hover:text-[#fdfbf7] hover:bg-white/5 transition-colors rounded-none px-6 h-11 flex items-center justify-center text-xs uppercase tracking-wider"
          >
            Go to Dashboard
          </Link>
        </div>

      </div>
    </main>
  );
}