import { format } from "date-fns";

export default async function Transactions() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/transactions`,
  );
  const transactions = await res.json();

  return (
    <section className="space-y-6 mt-10 flex flex-col items-center">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-medium text-center">Transactions List</h2>
      </div>

      <div className="border border-white/10 mt-8 w-full">
        <table className="table w-full rounded-none text-center">
          <thead>
            <tr className="border-b border-white/10 uppercase tracking-wider text-lg md:text-xl">
              <th className="py-4 px-4 md:px-6 rounded-none font-medium">
                Transaction ID
              </th>
              <th className="py-4 px-4 md:px-6 font-medium">Lawyer</th>
              <th className="py-4 px-4 md:px-6 font-medium">Amount</th>
              <th className="py-4 px-4 md:px-6 font-medium">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 md:text-lg">
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="hover:bg-white/5 transition-colors"
              >
                <td className="py-4 px-4 md:px-6 font-medium">
                  {transaction.transaction.transactionId}
                </td>
                <td className="py-4 px-4 md:px-6">{transaction.lawyerName}</td>
                <td className="py-4 px-4 md:px-6">${transaction.fee}</td>
                <td className="py-4 px-4 md:px-6"> {format(new Date(transaction.transaction.transactionDate), "PPPP")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
