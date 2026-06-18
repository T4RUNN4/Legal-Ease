export default function Transactions() {
  const transactions = [
    {
      id: 1,
      transactionId: "TXN001",
      lawyer: "John Doe",
      email: "john.doe@example.com",
      amount: "$100",
      date: "2023-08-01",
    },
    {
      id: 2,
      transactionId: "TXN002",
      lawyer: "Jane Smith",
      email: "jane.smith@example.com",
      amount: "$200",
      date: "2023-08-02",
    },
    {
      id: 3,
      transactionId: "TXN003",
      lawyer: "Bob Johnson",
      email: "bob.johnson@example.com",
      amount: "$300",
      date: "2023-08-03",
    },
  ];

  return (
    <section className="space-y-6 mt-10 flex flex-col items-center">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-medium text-center">Transactions List</h2>
      </div>

      <div className="border border-white/10 mt-8 w-full">
        <table className="table w-full rounded-none text-left">
          <thead>
            <tr className="border-b border-white/10 uppercase tracking-wider text-xl">
              <th className="py-4 px-6 rounded-none font-medium">Transaction ID</th>
              <th className="py-4 px-6 font-medium">Lawyer</th>
              <th className="py-4 px-6 font-medium">Amount</th>
              <th className="py-4 px-6 font-medium">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-lg">
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-white/5 transition-colors">
                <td className="py-4 px-6 font-medium">{transaction.transactionId}</td>
                <td className="py-4 px-6">{transaction.lawyer}</td>
                <td className="py-4 px-6">{transaction.amount}</td>
                <td className="py-4 px-6">{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
