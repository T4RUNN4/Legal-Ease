export default function UpdateLegalProfile() {
    const lawyer = {
    name: "Alexander Reed",
    photo:
      "https://i.pinimg.com/736x/ab/57/ca/ab57cadd895944460c54e562c50d352e.jpg",
    specialization: "Senior Advocate — Criminal Defense & White Collar Crime",
    consultationFee: 350,
    summary:
      "His practice focuses on defending individuals and corporate entities against allegations of financial fraud, cybercrime, and regulatory violations. Alexander is recognized for his meticulous case preparation, aggressive defense tactics, and unwavering commitment to safeguarding his clients' constitutional rights at every tier of the judicial system.",
    };

  return (
    <section className="lg:col-span-4 p-6 md:p-8 space-y-6">
      <div>
        <h2 className="text-4xl font-medium text-center">
          Update Legal Profile
        </h2>
      </div>

      <form className="space-y-4">
        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text uppercase tracking-wider">
              Legal Name
            </span>
          </label>
          <input
            type="text"
            value={lawyer.name}
            className="input w-full border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none h-11"
            placeholder="Enter legal name"
            required
          />
        </div>

        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text uppercase tracking-wider">
              Professional Photo URL
            </span>
          </label>
          <input
            type="text"
            value={lawyer.photo}
            className="input w-full border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none h-11 "
            required
          />
        </div>

        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text uppercase tracking-wider">
              Specialization
            </span>
          </label>
          <input
            type="text"
            value={lawyer.specialization}
            className="input w-full border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none h-11"
            placeholder="Enter specialization"
            required
          />
        </div>

        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text uppercase tracking-wider">
              Consultation Fee (per hour)
            </span>
          </label>
          <input
            type="number"
            value={lawyer.consultationFee}
            className="input w-full border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none h-11"
            placeholder="Enter consultation fee"
            required
          />
        </div>

        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text uppercase tracking-wider">
              Summary / Bio
            </span>
          </label>
          <input
            type="text"
            value={lawyer.summary}
            className="input w-full border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none h-11"
            placeholder="Enter summary or bio"
            required
          />
        </div>

        <button
          type="submit"
          className="btn bg-[#43311c] text-[#fdfbf7] hover:bg-[#352514] border-none rounded-none px-5 py-2 min-h-0 h-auto font-medium tracking-wider shrink-0 uppercase"
        >
          Update Legal Profile
        </button>
      </form>
    </section>
  );
}