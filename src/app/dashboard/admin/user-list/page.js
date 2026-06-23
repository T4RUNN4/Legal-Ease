"use client";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import SectionStructure from "@/components/SectionStructure";
import SubHeading from "@/components/SubHeading";
import TableRow from "@/components/TableRow";
import Table from "@/sections/Table";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function UserList() {
  const [users, setUsers] = useState(null);

  const fetchData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/users`,
    );
    const users = await res.json();
    setUsers(users);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!users) {
    return <div>Loading...</div>;
  }

  const handleDelete = async (id) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/users/delete/${id}`,
      {
        method: "DELETE",
      },
    );
    const data = await res.json();

    if (data) {
      toast.success("User Deleted Successfully");
      fetchData();
    } else {
      console.log(data);
    }
  };

  const handleRoleChange = async (role, id) => {
    const newRole = role === "client" ? "lawyer" : "client";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/user/update/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: newRole }),
      },
    );

    const data = await res.json();

    if (data) {
      toast.success("User Role Changed Successfully");
      fetchData();
    } else {
      console.log(data);
    }
  };

  return (
    <SectionStructure>
      <SubHeading text="Users List" />
      <Heading texts={["Registered Users of Legal Ease"]} />

      <div className="border border-white/10 mt-16 w-full">
        <Table tableHeads={["Name", "Email", "Role", "Actions"]}>
          {users.map((user) => (
            <TableRow key={user._id}>
              <td className="py-4 px-4 md:px-6">{user.name}</td>
              <td className="py-4 px-4 md:px-6">{user.email}</td>
              <td className="py-4 px-4 md:px-6 uppercase">{user.role}</td>
              <td className="py-4 px-4 md:px-6 flex flex-col md:flex-row gap-2">
                <Button
                  text="Change Role"
                  variant="dark"
                  type="action"
                  action={() => handleRoleChange(user.role, user._id)}
                />
                <Button
                  text="Delete User"
                  type="action"
                  variant="delete"
                  action={() => handleDelete(user._id)}
                />
              </td>
            </TableRow>
          ))}
        </Table>
      </div>
    </SectionStructure>
  );
}
