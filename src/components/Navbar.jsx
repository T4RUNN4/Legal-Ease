"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const pathname = usePathname();
  const user = session?.user;

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
    <div className="navbar shadow-sm px-40 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                href="/"
                className={
                  pathname === "/" ? "underline underline-offset-4" : ""
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname === "/lawyers" ? "underline underline-offset-4" : ""
                }
                href="/lawyers"
              >
                Browse Lawyers
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className={
                  pathname === "/dashboard"
                    ? "underline underline-offset-4"
                    : ""
                }
              >
                Dashboard
              </Link>
              <ul className="p-2">
                {user && user.role === "client" && (
                  <>
                    <li>
                      <Link
                        href="/dashboard/user/hiring-history"
                        className={
                          pathname === "/dashboard/user/hiring-history"
                            ? "underline underline-offset-4"
                            : ""
                        }
                      >
                        Hiring History
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/user/update-profile"
                        className={
                          pathname === "/dashboard/user/update-profile"
                            ? "underline underline-offset-4"
                            : ""
                        }
                      >
                        Update Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/user/comments"
                        className={
                          pathname === "/dashboard/user/comments"
                            ? "underline underline-offset-4"
                            : ""
                        }
                      >
                        Comments
                      </Link>
                    </li>
                  </>
                )}

                {user && user.role === "lawyer" && (
                  <>
                    <li>
                      <Link
                        href="/dashboard/lawyer/hiring-history"
                        className={
                          pathname === "/dashboard/lawyer/hiring-history"
                            ? "underline underline-offset-4"
                            : ""
                        }
                      >
                        Hiring History
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/lawyer/legal-profile"
                        className={
                          pathname === "/dashboard/lawyer/legal-profile"
                            ? "underline underline-offset-4"
                            : ""
                        }
                      >
                        Manage Legal Profile
                      </Link>
                    </li>
                  </>
                )}

                {user && user.role === "admin" && (
                  <>
                    <li>
                      <Link
                        href="/dashboard/admin/user-list"
                        className={
                          pathname === "/dashboard/admin/user-list"
                            ? "underline underline-offset-4"
                            : ""
                        }
                      >
                        Manage Users
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/admin/transactions"
                        className={
                          pathname === "/dashboard/admin/transactions"
                            ? "underline underline-offset-4"
                            : ""
                        }
                      >
                        All Transactions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/admin/analytics"
                        className={
                          pathname === "/dashboard/admin/analytics"
                            ? "underline underline-offset-4"
                            : ""
                        }
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
        <Link href="/" className="btn btn-ghost text-2xl font-extrabold">
          Legal Ease
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-6">
          <li>
            <Link
              href="/"
              className={pathname === "/" ? "underline underline-offset-4" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/lawyers"
              className={
                pathname === "/lawyers" ? "underline underline-offset-4" : ""
              }
            >
              Browse Lawyers
            </Link>
          </li>
          <li>
            <details>
              <summary>
                <Link
                  href="/dashboard"
                  className={
                    pathname === "/dashboard"
                      ? "underline underline-offset-4"
                      : ""
                  }
                >
                  Dashboard
                </Link>
              </summary>
              <ul className="p-2 bg-base-100 w-40 z-1">
                {user && user.role === "client" && (
                  <>
                    <li>
                      <Link
                        href="/dashboard/user/hiring-history"
                        className={
                          pathname === "/dashboard/user/hiring-history"
                            ? "underline underline-offset-4"
                            : ""
                        }
                      >
                        Hiring History
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/user/update-profile"
                        className={
                          pathname === "/dashboard/user/update-profile"
                            ? "underline underline-offset-4"
                            : ""
                        }
                      >
                        Update Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/user/comments"
                        className={
                          pathname === "/dashboard/user/comments"
                            ? "underline underline-offset-4"
                            : ""
                        }
                      >
                        Comments
                      </Link>
                    </li>
                  </>
                )}

                {user && user.role === "lawyer" && (
                  <>
                    <li>
                      <Link
                        href="/dashboard/lawyer/hiring-history"
                        className={
                          pathname === "/dashboard/lawyer/hiring-history"
                            ? "underline underline-offset-4"
                            : ""
                        }
                      >
                        Hiring History
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/lawyer/legal-profile"
                        className={
                          pathname === "/dashboard/lawyer/legal-profile"
                            ? "underline underline-offset-4"
                            : ""
                        }
                      >
                        Manage Legal Profile
                      </Link>
                    </li>
                  </>
                )}

                {user && user.role === "admin" && (
                  <>
                    <li>
                      <Link
                        href="/dashboard/admin/user-list"
                        className={
                          pathname === "/dashboard/admin/user-list"
                            ? "underline underline-offset-4"
                            : ""
                        }
                      >
                        Manage Users
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/admin/transactions"
                        className={
                          pathname === "/dashboard/admin/transactions"
                            ? "underline underline-offset-4"
                            : ""
                        }
                      >
                        All Transactions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/admin/analytics"
                        className={
                          pathname === "/dashboard/admin/analytics"
                            ? "underline underline-offset-4"
                            : ""
                        }
                      >
                        Analytics
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex flex-row gap-4">
        <label className="input">
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
          <input type="search" required placeholder="Search" />
        </label>
        {session ? (
          <button
            onClick={handleLogout}
            className="btn btn-error rounded-none px-5 py-2 min-h-0 h-auto tracking-wider shrink-0 uppercase text-white font-bold"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="btn bg-[#43311c] text-[#fdfbf7] hover:bg-[#352514] border-none rounded-none px-5 py-2 min-h-0 h-auto font-medium tracking-wider shrink-0 uppercase"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
