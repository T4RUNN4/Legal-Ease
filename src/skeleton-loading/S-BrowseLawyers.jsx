import SubHeading from "@/components/SubHeading";
import Heading from "@/components/Heading";
import FeaturedCard from "./S-FeaturedCard";

export default function BrowseLawyers() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-2 pt-20">
      <div className="max-w-7xl mx-auto">
        <SubHeading text="Available Lawyers in the Platform" />
        <Heading texts={["Browse Lawyers"]} />

        <div className="flex my-16 gap-8">
          <div className="relative flex items-center w-full">
            <span className="absolute left-3 text-[#c7bca9]/50 pointer-events-none">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>

            <input
              type="search"
              required
              placeholder="Search lawyers..."
              className="border border-[#43311c]/20 focus:border-[#c5a880] focus:outline-none rounded-none pl-9 pr-4 h-12 w-full transition-colors"
            />
          </div>

          <select className="bg-[#352514] border border-white/10 shadow-2xl rounded-none text-white px-8">
            <option value="">All</option>
            <option value="Criminal Defense">Criminal Defense</option>
            <option value="Corporate & Business">Corporate & Business</option>
            <option value="Family & Matrimonial">Family & Matrimonial</option>
            <option value="Real Estate & Property">
              Real Estate & Property
            </option>
            <option value="Employment & Labour">Employment & Labour</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div>
      </div>
    </section>
  );
}
