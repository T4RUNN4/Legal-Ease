import Heading from "@/components/Heading";
import SectionStructure from "@/components/SectionStructure";
import SubHeading from "@/components/SubHeading";
import TableRow from "@/components/TableRow";
import Table from "@/sections/Table";
import { format } from "date-fns";

export default async function Transactions() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/transactions`,
  );
  const transactions = await res.json();

  return (
    <SectionStructure page="true">
      <SubHeading text="Transaction List" />
      <Heading texts={["Payment Transactions History"]} />

      <div className="border border-white/10 mt-16 w-full">
        <Table tableHeads={["Transaction Id", "Lawyer Name", "Amount", "Date"]}>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <td className="py-4 px-4 md:px-6">
                {transaction.transaction.transactionId}
              </td>
              <td className="py-4 px-4 md:px-6">{transaction.lawyerName}</td>
              <td className="py-4 px-4 md:px-6">${transaction.fee}</td>
              <td className="py-4 px-4 md:px-6">
                {" "}
                {format(
                  new Date(transaction.transaction.transactionDate),
                  "PPP",
                )}
              </td>
            </TableRow>
          ))}
        </Table>
      </div>
    </SectionStructure>
  );
}
