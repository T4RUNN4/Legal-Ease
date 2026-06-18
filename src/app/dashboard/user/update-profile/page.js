export default function UpdateProfile() {
  return (
    <section className="lg:col-span-4 p-6 md:p-8 space-y-6">
      <div>
        <h2 className="text-4xl font-medium text-center">
          Update Profile
        </h2>
      </div>

      <form className="space-y-4">
        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text uppercase tracking-wider">
              Username
            </span>
          </label>
          <input
            type="text"
            value="John Doe"
            className="input w-full border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none h-11"
            placeholder="Enter username"
            required
          />
        </div>

        <div className="form-control w-full">
          <label className="label py-1">
            <span className="label-text uppercase tracking-wider">
              Profile Image URL
            </span>
          </label>
          <input
            type="text"
            value="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800"
            className="input w-full border border-white/20 focus:border-[#c5a880] focus:outline-none rounded-none h-11 "
            required
          />
        </div>

        <button
          type="submit"
          className="btn bg-[#43311c] text-[#fdfbf7] hover:bg-[#352514] border-none rounded-none px-5 py-2 min-h-0 h-auto font-medium tracking-wider shrink-0 uppercase"
        >
          Update User
        </button>
      </form>
    </section>
  );
}
