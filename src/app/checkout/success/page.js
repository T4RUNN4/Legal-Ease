import Button from "@/components/Button";
import Heading from "@/components/Heading";
import SectionStructure from "@/components/SectionStructure";
import SubHeading from "@/components/SubHeading";

export default async function PaymentSuccess({ searchParams }) {
  let data;
  const { session_id, hiringId, lawyerId } = await searchParams;
  
  if(hiringId) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/verify-payment?session_id=${session_id}&hiringId=${hiringId}`,
    );
    data = await res.json();
  } else {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/verify-lawyer?session_id=${session_id}&lawyerId=${lawyerId}`,
    );
    data = await res.json();
  }

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
