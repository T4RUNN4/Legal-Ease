export default function UserList() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "User",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Lawyer",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      role: "Admin",
    },
  ];

  return (
    <section className="space-y-6 mt-10 flex flex-col items-center">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-medium text-center">Users List</h2>
      </div>

      <div className="border border-white/10 mt-8 w-full">
        <table className="table w-full rounded-none text-left">
          <thead>
            <tr className="border-b border-white/10 uppercase tracking-wider text-xl">
              <th className="py-4 px-6 rounded-none font-medium">Name</th>
              <th className="py-4 px-6 font-medium">Email</th>
              <th className="py-4 px-6 font-medium">Role</th>
              <th className="py-4 px-6 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-lg">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-white/5 transition-colors">
                <td className="py-4 px-6 font-medium">{user.name}</td>
                <td className="py-4 px-6">{user.email}</td>
                <td className="py-4 px-6">{user.role}</td>
                <td className="py-4 px-6 flex gap-2">
                  <span className="inline-block text-xs uppercase tracking-wider px-3 py-1 rounded-none font-medium bg-emerald-950 text-white border border-emerald-800">
                    Change Role
                  </span>
                  <span className="inline-block text-xs uppercase tracking-wider px-3 py-1 rounded-none font-medium bg-rose-950 text-white border border-rose-900">
                    Delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
