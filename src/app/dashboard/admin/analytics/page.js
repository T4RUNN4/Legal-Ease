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
          <AnalyticsCard title="Total User" value={stats.totalUser} />
          <AnalyticsCard title="Total Lawyers" value={stats.totalLawyer} />
          <AnalyticsCard title="Total Hire" value={stats.totalHires} />
          <AnalyticsCard title="Total Revenue" value={`$${stats.totalRevenue}`} />
        </div>
      </SectionStructure>
    );
}