import Button from "@/components/Button";
import Heading from "@/components/Heading";
import SectionStructure from "@/components/SectionStructure";
import Link from "next/link";

export default function NotFound() {
  return (
    <SectionStructure>
      <div className="text-center">
        <Heading texts={["404 Not Found!!"]} />
      <p>
        The page you are looking for either permanently removed or moved
        somewhere else.
      </p>
      </div>
      <div className="flex items-center justify-center gap-8 mt-20">
        <Button text="Return Home" variant="dark" link="/" />
        <Button text="Go To Dashboard" link="/dashboard" />
      </div>
    </SectionStructure>
  );
}
