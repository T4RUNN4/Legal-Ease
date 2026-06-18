export default function Dashboard() {
  return (
    <div className="p-4 text-[#43311c] flex items-center justify-center gap-10 mt-10">
      <div className="h-100 w-50 rounded-full">
        <img
        src="https://i.pinimg.com/736x/ab/57/ca/ab57cadd895944460c54e562c50d352e.jpg"
        alt="Portrait of Alexander Reed"
        className="w-full h-full object-cover"
      />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h3 className="text-xl font-medium mb-1">Alexander Reed</h3>
        <p>Joined: 15th April, 2026</p>
      </div>
    </div>
  );
}
