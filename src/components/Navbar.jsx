"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const pathname = usePathname();

  const linkStyle = (path) =>
    `uppercase tracking-wider transition-colors duration-200 ${
      pathname === path
        ? "text-[#43311c] font-semibold"
        : "text-[#c7bca9] hover:text-black"
    }`;

  const subLinkStyle = (path) =>
    `block px-4 py-2 tracking-wide text-[#c7bca9] transition-all duration-200 border-l border-transparent hover:border-[#c5a880] hover:text-[#fdfbf7] hover:bg-white/5 rounded-none ${
      pathname === path ? "text-[#c5a880] bg-white/5 border-[#c5a880]" : ""
    }`;

    const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  return (
    <header className="w-full backdrop-blur-md border-b border-black/10 sticky top-0 z-50">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#c5a880]/60 via-[#c5a880]/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 navbar h-20 min-h-0 flex justify-between items-center">
        <div className="navbar-start flex items-center gap-2">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost p-2 text-[#c7bca9] hover:text-[#fdfbf7] hover:bg-white/5 rounded-none min-h-0 h-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu mt-4 w-56 bg-[#352514] border border-white/10 p-2 shadow-xl rounded-none space-y-1"
            >
              <li>
                <Link
                  href="/"
                  className="rounded-none py-2.5 uppercase text-[#c7bca9]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/lawyers"
                  className="rounded-none py-2.5 uppercase text-[#c7bca9]"
                >
                  Browse Lawyers
                </Link>
              </li>
              <li className="border-t border-white/5 mt-2 pt-2">
                <span className="text-[10px] uppercase tracking-widest text-[#c5a880] bg-transparent font-semibold">
                  Dashboard Context
                </span>
                <ul className="pl-2 mt-1 space-y-0.5">
                  {user?.role === "client" && (
                    <>
                      <li>
                        <Link
                          href="/dashboard/user/hiring-history"
                          className="rounded-none"
                        >
                          Hiring History
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dashboard/user/update-profile"
                          className="rounded-none"
                        >
                          Update Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dashboard/user/comments"
                          className="rounded-none"
                        >
                          Comments
                        </Link>
                      </li>
                    </>
                  )}
                  {user?.role === "lawyer" && (
                    <>
                      <li>
                        <Link
                          href="/dashboard/lawyer/hiring-history"
                          className="rounded-none"
                        >
                          Hiring History
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dashboard/lawyer/legal-profile"
                          className="rounded-none"
                        >
                          Legal Profile
                        </Link>
                      </li>
                    </>
                  )}
                  {user?.role === "admin" && (
                    <>
                      <li>
                        <Link
                          href="/dashboard/admin/user-list"
                          className="rounded-none"
                        >
                          Manage Users
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dashboard/admin/transactions"
                          className="rounded-none"
                        >
                          Transactions
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dashboard/admin/analytics"
                          className="rounded-none"
                        >
                          Analytics
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </li>
            </ul>
          </div>

          <Link
            href="/"
            className="text-xl font-bold tracking-wider text-[#43311c] hover:opacity-90 transition-opacity ml-2 lg:ml-0"
          >
            LEGAL EASE
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <nav>
            <ul className="flex items-center gap-10">
              <li>
                <Link href="/" className={linkStyle("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/lawyers" className={linkStyle("/lawyers")}>
                  Browse Lawyers
                </Link>
              </li>

              <li className="relative group py-2">
                <Link href="/dashboard" className={linkStyle("/dashboard")}>
                  Dashboard{" "}
                  <span className="text-[9px] text-[#c5a880] ml-0.5 opacity-60">
                    ▼
                  </span>
                </Link>

                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-52 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                  <ul className="bg-[#352514] border border-white/10 p-2 shadow-2xl rounded-none divide-y divide-white/5">
                    {!user && (
                      <div className="px-4 py-3 text-sm text-[#c7bca9]/50 uppercase tracking-wider text-center">
                        Please Login First
                      </div>
                    )}

                    {user?.role === "client" && (
                      <div className="py-1">
                        <li>
                          <Link
                            href="/dashboard/user/hiring-history"
                            className={subLinkStyle(
                              "/dashboard/user/hiring-history",
                            )}
                          >
                            Hiring History
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/dashboard/user/update-profile"
                            className={subLinkStyle(
                              "/dashboard/user/update-profile",
                            )}
                          >
                            Update Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/dashboard/user/comments"
                            className={subLinkStyle("/dashboard/user/comments")}
                          >
                            Comments Feed
                          </Link>
                        </li>
                      </div>
                    )}

                    {user?.role === "lawyer" && (
                      <div className="py-1">
                        <li>
                          <Link
                            href="/dashboard/lawyer/hiring-history"
                            className={subLinkStyle(
                              "/dashboard/lawyer/hiring-history",
                            )}
                          >
                            Hiring History
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/dashboard/lawyer/legal-profile"
                            className={subLinkStyle(
                              "/dashboard/lawyer/legal-profile",
                            )}
                          >
                            Manage Profile
                          </Link>
                        </li>
                      </div>
                    )}

                    {user?.role === "admin" && (
                      <div className="py-1">
                        <li>
                          <Link
                            href="/dashboard/admin/user-list"
                            className={subLinkStyle(
                              "/dashboard/admin/user-list",
                            )}
                          >
                            Manage Users
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/dashboard/admin/transactions"
                            className={subLinkStyle(
                              "/dashboard/admin/transactions",
                            )}
                          >
                            Transactions
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/dashboard/admin/analytics"
                            className={subLinkStyle(
                              "/dashboard/admin/analytics",
                            )}
                          >
                            Metrics Analytics
                          </Link>
                        </li>
                      </div>
                    )}
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <div className="navbar-end flex items-center gap-4">
          <div className="relative hidden md:flex items-center">
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
              placeholder="Search registry..."
              className="border border-[#43311c]/20 focus:border-[#c5a880] focus:outline-none rounded-none pl-9 pr-4 h-9 w-48 transition-colors"
            />
          </div>

          {user ? (
            <button
              onClick={handleLogout}
              className="btn border border-rose-900 bg-rose-900 text-white hover:bg-rose-950 transition-colors rounded-none px-4 h-9 min-h-0 text-sm uppercase tracking-wider font-semibold"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="btn bg-[#43311c] text-white hover:bg-[#43311c]/80 transition-transform hover:-translate-y-0.5 rounded-none px-5 h-9 flex items-center text-[11px] uppercase tracking-wider font-semibold shadow-sm"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
