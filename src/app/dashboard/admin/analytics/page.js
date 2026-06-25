import AnalyticsCard from "@/components/AnalyticsCard";
import Heading from "@/components/Heading";
import SectionStructure from "@/components/SectionStructure";
import SubHeading from "@/components/SubHeading";

export default async function Analytics() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/stats`);
    const stats = await res.json();

    return (
      <SectionStructure page="true">
        <SubHeading text="Legal Ease Statistics" />
        <Heading texts={["Analytics Dashboard"]} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <AnalyticsCard title="Registered User" value={stats.totalUser} />
          <AnalyticsCard title="Lawyers Profile" value={stats.totalLawyer} />
          <AnalyticsCard title="Hiring" value={stats.totalHires} />
          <AnalyticsCard title="Revenue" value={`$${stats.totalRevenue}`} />
        </div>
      </SectionStructure>
    );
}