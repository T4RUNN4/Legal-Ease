"use client"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function UserList() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/users`);
      const users = await res.json();
      setUsers(users);
    }

    fetchData();
  }, [])

  if(!users) {
    return <div>Loading...</div>
  }

  const handleDelete = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/users/delete/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if(data) {
      toast.success("User Deleted Successfully");
    } else {
      console.log(data);
    }
  }

  const handleRoleChange = async (role, id) => {
    const newRole = role === "client" ? "lawyer" : "client";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/user/update/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: newRole}),
      }
    );

    const data = await res.json();

    if(data) {
      toast.success("User Role Chnged Successfully");
    } else {
      console.log(data);
    }
  }

  return (
    <section className="space-y-6 mt-10 flex flex-col items-center">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-medium text-center">Users List</h2>
      </div>

      <div className="border border-white/10 mt-8 w-full">
        <table className="table w-full rounded-none text-center">
          <thead>
            <tr className="border-b border-white/10 uppercase tracking-wider text-lg md:text-xl">
              <th className="py-4 px-4 md:px-6 rounded-none font-medium">Name</th>
              <th className="py-4 px-4 md:px-6 font-medium">Email</th>
              <th className="py-4 px-4 md:px-6 font-medium">Role</th>
              <th className="py-4 px-4 md:px-6 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 md:text-lg">
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-white/5 transition-colors">
                <td className="py-4 px-4 md:px-6 font-medium">{user.name}</td>
                <td className="py-4 px-4 md:px-6">{user.email}</td>
                <td className="py-4 px-4 md:px-6">{user.role}</td>
                <td className="py-4 px-4 md:px-6 flex flex-col md:flex-row items-center justify-center gap-2">
                  <button onClick={() => handleRoleChange(user.role, user._id)} className="btn inline-block text-xs uppercase tracking-wider px-3 py-1 rounded-none font-medium bg-emerald-950 text-white border border-emerald-800">
                    Change Role
                  </button>
                  <button onClick={() => handleDelete(user._id)} className="btn inline-block text-xs uppercase tracking-wider px-3 py-1 rounded-none font-medium bg-rose-950 text-white border border-rose-900">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
