import Fallback from "@/components/Fallback";
import Heading from "@/components/Heading";
import Loading from "@/components/Loading";
import SectionStructure from "@/components/SectionStructure";
import SubHeading from "@/components/SubHeading";
import TableData from "@/components/TableData";
import TableRow from "@/components/TableRow";
import Table from "@/sections/Table";
import { format } from "date-fns";

export default async function Transactions() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/transactions`,
  );
  const transactions = await res.json();

  if (!transactions) {
    return <Loading />;
  }

  return (
    <SectionStructure page="true">
      <SubHeading text="Transaction List" />
      <Heading texts={["Payment Transactions History"]} />

      {transactions.length === 0 ? (
        <Fallback text="There is no transaction yet" />
      ) : (
        <div className="border border-white/10 mt-16 w-full">
          <Table
            tableHeads={["Transaction Id", "Lawyer Name", "Amount", "Date"]}
          >
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableData text={transaction.transactionId} />
                <TableData text={transaction.lawyerName} />
                <TableData text={`$${transaction.fee}`} />
                <TableData text={format(new Date(transaction.paidAt), "PPP")} />
              </TableRow>
            ))}
          </Table>
        </div>
      )}
    </SectionStructure>
  );
}
