import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-row gap-6">
      <div>
        <ul className="menu bg-[#43311c] min-h-screen text-white py-4 px-8 flex flex-col gap-4 text-base">
          <li>User Menu</li>
          <li>
            <Link href="/dashboard/user/hiring-history">Hiring History</Link>
          </li>
          <li>
            <Link href="/dashboard/user/update-profile">Update Profile</Link>
          </li>
          <li>
            <Link href="/dashboard/user/comments">Comments</Link>
          </li>
          <li>Lawyer Menu</li>
          <li>
            <Link href="/dashboard/lawyer/hiring-history">Hiring History</Link>
          </li>
          <li>Manage Legal Profile</li>
          <li>Admin Menu</li>
          <li>
            <Link href="/dashboard/admin/user-list">Manage Users</Link>
          </li>
          <li>All Transactions</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div className="flex justify-center w-full">{children}</div>
    </div>
  );
}
