import Button from "@/components/Button";
import Heading from "@/components/Heading";
import SectionStructure from "@/components/SectionStructure";
import SubHeading from "@/components/SubHeading";

export default async function PaymentSuccess({ searchParams }) {
  const { session_id, hiringId } = await searchParams;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/verify-payment?session_id=${session_id}&hiringId=${hiringId}`)
  const data = await res.json();
  console.log(res);

  if(!data) {
    return <div>Loading...</div>
  }

  return (
    <SectionStructure page="true">
      <SubHeading text="Success" />
      <Heading texts={["Payment Successful"]} />

      <p className="text-xl font-semibold mt-16">You successfully paid ${data.paymentDetails.amountPaid}</p>
      <p className="text-lg font-semibold text-black/50 mb-8">Transaction ID: {data.paymentDetails.transactionId}</p>

      <Button text="Go To Home" link="/" variant="dark" />
    </SectionStructure>
  );
}
