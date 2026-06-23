export default function FeaturedCard() {
  return (
    <div className="w-full rounded-xl border border-gray-200 p-6 space-y-4 animate-pulse bg-white">
      <div className="h-48 w-full bg-gray-200 rounded-lg" />
      <div className="h-6 bg-gray-200 rounded w-2/3 mt-4" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>
      <div className="h-10 bg-gray-200 rounded w-full pt-4" />
    </div>
  );
}
