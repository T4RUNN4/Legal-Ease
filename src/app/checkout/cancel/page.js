import Button from "@/components/Button";
import Heading from "@/components/Heading";
import SectionStructure from "@/components/SectionStructure";
import SubHeading from "@/components/SubHeading";

export default function Cancel() {
    return (
      <SectionStructure>
        <SubHeading text="Payment Failed" />
        <Heading texts={["Payment Cancellation"]} />

        <p className="text-xl mt-16 text-rose-600">
          Your payment process is either cancelled or failed due to some
          reasons. Please try again later.
        </p>

        <div className="mt-6">
          <Button text="Go To Dashbaord" link="/dashboard" variant="dark" />
        </div>
      </SectionStructure>
    );
}