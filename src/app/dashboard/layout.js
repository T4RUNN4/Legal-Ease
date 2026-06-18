import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-row gap-6">
      <div>
        <ul className="menu bg-[#43311c] min-h-screen text-white py-4 px-8 flex flex-col gap-4 text-base">
          <li>
            <Link href="/dashboard/user/hiring-history">
              (User) Hiring History{" "}
            </Link>
          </li>
          <li>
            <Link href="/dashboard/user/update-profile">
              (User) Update Profile{" "}
            </Link>
          </li>
          <li>(User) Comments</li>
          <li>
            <Link href="/dashboard/lawyer/hiring-history">
              (Lawyer) Hiring History{" "}
            </Link>
          </li>
          <li>(Lawyer) Manage Legal Profile</li>
          <li>(Admin) Manage Users</li>
          <li>(Admin) All Transactions</li>
          <li>(Admin) Analytics</li>
        </ul>
      </div>
      <div className="flex justify-center w-full">
        {children}
      </div>
    </div>
  );
}
