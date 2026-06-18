export default function LawyerDetails() {
  const lawyer = {
    name: "Alexander Reed",
    photo:
      "https://i.pinimg.com/736x/ab/57/ca/ab57cadd895944460c54e562c50d352e.jpg",
    specialization: "Senior Advocate — Criminal Defense & White Collar Crime",
    status: "Available",
    consultationFee: "$350",
    dateJoined: "October 2024",
    bio: "With over fifteen years of courtroom experience, Alexander Reed specializes in complex state and federal criminal defense, corporate compliance audits, and high-profile appellate litigation. Prior to anchoring our litigation division, he served as a senior public prosecutor, gaining invaluable, inside-out knowledge of trial strategy and regulatory enforcement maneuvers.",
    extendedSummary:
      "His practice focuses on defending individuals and corporate entities against allegations of financial fraud, cybercrime, and regulatory violations. Alexander is recognized for his meticulous case preparation, aggressive defense tactics, and unwavering commitment to safeguarding his clients' constitutional rights at every tier of the judicial system.",
    achievements: [
      "Successfully defended over 120+ federal jury trials.",
      "Named 'Trial Lawyer of the Year' by the Elite Legal Counsel Board (2025).",
      "Admitted to the Supreme Court Bar Association.",
    ],
  };

  return (
    <main className="min-h-screen bg-[#43311c] text-[#fdfbf7] py-20 px-6 md:px-12 lg:px-24 font-sans selection:bg-[#c5a880] selection:text-[#43311c]">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 bg-[#352514] border border-white/10 p-6 md:p-8 sticky top-6">
            
            <div className="w-full aspect-4/5 bg-neutral relative overflow-hidden mb-6">
              <img 
                src={lawyer.photo} 
                alt={`Professional portrait of ${lawyer.name}`} 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute top-4 left-4">
                <span className={`badge rounded-none border-none px-4 py-3 font-mono text-xs tracking-wider uppercase shadow-lg ${
                  lawyer.status === "Available" 
                    ? "bg-emerald-800 text-emerald-100" 
                    : "bg-rose-900 text-rose-100"
                }`}>
                  <span className={`w-2 h-2 rounded-full mr-2 inline-block ${
                    lawyer.status === "Available" ? "bg-emerald-400 animate-pulse" : "bg-rose-400"
                  }`}></span>
                  {lawyer.status}
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-6 border-b border-white/10 pb-6">
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-mono tracking-wider text-[#c7bca9] uppercase">Consultation Fee</span>
                <span className="text-3xl font-serif font-medium text-[#c5a880]">{lawyer.consultationFee}<span className="text-sm font-sans text-[#c7bca9] font-normal"> / hr</span></span>
              </div>
              
              <div className="flex justify-between items-center text-sm pt-2">
                <span className="text-xs font-mono tracking-wider text-[#c7bca9] uppercase">Tenure</span>
                <span className="text-[#fdfbf7] text-xs">Member Since {lawyer.dateJoined}</span>
              </div>
            </div>

            <button className="btn w-full bg-[#fdfbf7] text-[#43311c] hover:bg-[#e6e2db] border-none rounded-none py-4 min-h-0 h-auto font-medium text-sm tracking-widest uppercase transition-transform hover:-translate-y-0.5">
              Hire {lawyer.name.split(" ")[0]}
            </button>
            
            <p className="text-[11px] text-center text-[#c7bca9]/60 mt-3 font-serif">
              * Initial conflict checking procedures apply prior to final engagement acceptance.
            </p>
          </div>


          <div className="lg:col-span-7 space-y-8">
            
            <div>
              <span className="text-sm tracking-widest text-[#c5a880] font-medium mb-2 block uppercase">
                {lawyer.specialization}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-4">
                {lawyer.name}
              </h1>
              <div className="w-20 h-0.75 bg-[#c5a880]"></div>
            </div>

            <div className="space-y-6 text-base md:text-lg leading-relaxed text-[#c7bca9]">
              <p className="font-medium text-[#fdfbf7]">
                {lawyer.bio}
              </p>
              <p className="text-sm md:text-base text-[#c7bca9]/90">
                {lawyer.extendedSummary}
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-xs font-mono tracking-widest text-[#c5a880] uppercase mb-4">
                Achievements & Recognitions
              </h3>
              <ul className="space-y-3">
                {lawyer.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#fdfbf7]/90">
                    <span className="text-[#c5a880] mt-1 shrink-0">▪</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#352514]/40 border border-[#c5a880]/20 p-6 rounded-none">
              <h4 className="text-sm font-semibold mb-2 text-[#fdfbf7]">Practice Philosophy</h4>
              <p className="text-xs text-[#c7bca9] leading-relaxed">
                Legal defense requires more than understanding structural procedures—it demands immediate tactical adaptivity. Every case trajectory is built on absolute opacity to the prosecution and completely transparent collaboration with the client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};