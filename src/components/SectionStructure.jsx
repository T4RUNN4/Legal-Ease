export default function SectionStructure({ children, page="false" }) {
  return (
    <section className={`py-20 px-6 md:px-12 lg:px-2 pt-20 ${!page && "border-b border-black/10"}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
