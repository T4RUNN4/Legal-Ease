import FeaturedCard from "@/components/FeaturedCard";

export default function Lawyers() {
    const lawyers = [
      {
        name: "Alexander Reed",
        role: "Senior Advocate",
        image:
          "https://i.pinimg.com/736x/ab/57/ca/ab57cadd895944460c54e562c50d352e.jpg",
          rate: 150,
      },
      {
        name: "Olivia Bennett",
        role: "Legal Advisor",
        image:
          "https://images.squarespace-cdn.com/content/v1/55ffbe15e4b04e8914439ca4/1444170778540-96E0LERKFV69WER58J6T/image-asset.jpeg?format=2500w",
            rate: 120,
      },
      {
        name: "Daniel Carter",
        role: "Associate Lawyer",
        image: "https://justatic.com/profile-images/1485258-1540835498-s.jpg",
        rate: 100,
      },
      {
        name: "Sophia Mitchell",
        role: "Corporate Attorney",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
        rate: 130,
      },
      {
        name: "Ethan Brooks",
        role: "Criminal Defense Lawyer",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
        rate: 110,
      },
      {
        name: "Charlotte Hayes",
        role: "Family Law Specialist",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800",
        rate: 90,
      },
      {
        name: "Benjamin Foster",
        role: "Litigation Attorney",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800",
        rate: 140,
      },
      {
        name: "Amelia Parker",
        role: "Immigration Lawyer",
        image:
          "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800",
        rate: 95,
      },
      {
        name: "Nathan Collins",
        role: "Civil Rights Attorney",
        image:
          "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800",
        rate: 125,
      },
      {
        name: "Grace Turner",
        role: "Intellectual Property Lawyer",
        image:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
        rate: 135,
      },
      {
        name: "William Cooper",
        role: "Tax Attorney",
        image:
          "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800",
        rate: 115,
      },
      {
        name: "Victoria Scott",
        role: "Employment Lawyer",
        image:
          "https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=800",
        rate: 105,
      },
      {
        name: "Christopher Evans",
        role: "Real Estate Attorney",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
        rate: 120,
      },
      {
        name: "Isabella Morgan",
        role: "Legal Consultant",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        rate: 100,
      },
    ];

    return (
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#43311c] font-sans text-[#fdfbf7]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <span className="text-sm tracking-widest text-[#c5a880] font-medium mb-3 block uppercase">
              // Browse Lawyers
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
                Explore Our Diverse Team Of Legal Experts Across All Practice Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {lawyers.map((lawyer, index) => (
                <FeaturedCard key={index} lawyer={lawyer} />
              ))}
          </div>
        </div>
      </section>
    );
}