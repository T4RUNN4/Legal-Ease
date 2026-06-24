"use client";

import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const { data: session } = useSession();
  const user = session?.user;
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <div className="flex w-full min-h-screen">
      <aside className="hidden lg:w-64 bg-[#352514] border-r border-white/10 lg:flex flex-col justify-between min-h-screen shrink-0">
        <div className="p-6">
          <div className="mt-10 mb-8 pb-6 border-b border-white/10">
            <span className="text-2xl font-serif font-semibold tracking-wider block text-[#c5a880]">
              DASHBOARD
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#c7bca9]/50 block mt-1">
              Internal Portal
            </span>
          </div>

          <nav className="space-y-6">
            {!user ? (
              <div className="border-transparent text-[#c7bca9] hover:bg-white/5 hover:text-[#fdfbf7] animate-pulse">
                Loading...
              </div>
            ) : (
              user.role === "client" && (
                <div className="space-y-2">
                  <ul className="space-y-1">
                    <li>
                      <Link
                        href="/dashboard/user/hiring-history"
                        className={`flex items-center px-4 py-3 font-medium transition-all duration-200 border-l-2 rounded-none ${
                          isActive("/dashboard/user/hiring-history")
                            ? "bg-[#fdfbf7] text-[#43311c] border-[#c5a880]"
                            : "border-transparent text-[#c7bca9] hover:bg-white/5 hover:text-[#fdfbf7]"
                        }`}
                      >
                        Hiring History
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/user/update-profile"
                        className={`flex items-center px-4 py-3 font-medium transition-all duration-200 border-l-2 rounded-none ${
                          isActive("/dashboard/user/update-profile")
                            ? "bg-[#fdfbf7] text-[#43311c] border-[#c5a880]"
                            : "border-transparent text-[#c7bca9] hover:bg-white/5 hover:text-[#fdfbf7]"
                        }`}
                      >
                        Update Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/user/comments"
                        className={`flex items-center px-4 py-3 font-medium transition-all duration-200 border-l-2 rounded-none ${
                          isActive("/dashboard/user/comments")
                            ? "bg-[#fdfbf7] text-[#43311c] border-[#c5a880]"
                            : "border-transparent text-[#c7bca9] hover:bg-white/5 hover:text-[#fdfbf7]"
                        }`}
                      >
                        Comments
                      </Link>
                    </li>
                  </ul>
                </div>
              )
            )}

            {user && user.role === "lawyer" && (
              <div className="space-y-2">
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="/dashboard/lawyer/hiring-history"
                      className={`flex items-center px-4 py-3 font-medium transition-all duration-200 border-l-2 rounded-none ${
                        isActive("/dashboard/lawyer/hiring-history")
                          ? "bg-[#fdfbf7] text-[#43311c] border-[#c5a880]"
                          : "border-transparent text-[#c7bca9] hover:bg-white/5 hover:text-[#fdfbf7]"
                      }`}
                    >
                      Case Retainers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/lawyer/legal-profile"
                      className={`flex items-center px-4 py-3 font-medium transition-all duration-200 border-l-2 rounded-none ${
                        isActive("/dashboard/lawyer/legal-profile")
                          ? "bg-[#fdfbf7] text-[#43311c] border-[#c5a880]"
                          : "border-transparent text-[#c7bca9] hover:bg-white/5 hover:text-[#fdfbf7]"
                      }`}
                    >
                      Manage Legal Profile
                    </Link>
                  </li>
                </ul>
              </div>
            )}

            {user && user.role === "admin" && (
              <div className="space-y-2">
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="/dashboard/admin/user-list"
                      className={`flex items-center px-4 py-3 font-medium transition-all duration-200 border-l-2 rounded-none ${
                        isActive("/dashboard/admin/user-list")
                          ? "bg-[#fdfbf7] text-[#43311c] border-[#c5a880]"
                          : "border-transparent text-[#c7bca9] hover:bg-white/5 hover:text-[#fdfbf7]"
                      }`}
                    >
                      Manage Users
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/admin/transactions"
                      className={`flex items-center px-4 py-3 font-medium transition-all duration-200 border-l-2 rounded-none ${
                        isActive("/dashboard/admin/transactions")
                          ? "bg-[#fdfbf7] text-[#43311c] border-[#c5a880]"
                          : "border-transparent text-[#c7bca9] hover:bg-white/5 hover:text-[#fdfbf7]"
                      }`}
                    >
                      All Transactions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/admin/analytics"
                      className={`flex items-center px-4 py-3 font-medium transition-all duration-200 border-l-2 rounded-none ${
                        isActive("/dashboard/admin/analytics")
                          ? "bg-[#fdfbf7] text-[#43311c] border-[#c5a880]"
                          : "border-transparent text-[#c7bca9] hover:bg-white/5 hover:text-[#fdfbf7]"
                      }`}
                    >
                      Analytics Metrics
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </div>

        {user && (
          <div className="p-4 border-t border-white/10 bg-[#2e1f0f] flex items-center justify-between gap-3">
            <div className="overflow-hidden truncate">
              <p className="font-medium text-[#fdfbf7] truncate">{user.name}</p>
              <p className="text-[10px] font-mono text-[#c5a880] uppercase tracking-wider mt-0.5">
                {user.role}
              </p>
            </div>
          </div>
        )}
      </aside>

      <div className="max-w-6xl mx-auto w-full">{children}</div>
    </div>
  );
}
