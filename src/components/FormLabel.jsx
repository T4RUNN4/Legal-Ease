export default function FormLabel({ label }) {
    return (
      <label className="label py-1 font-bold">
        <span className="label-text text-black font-semibold uppercase tracking-wider">
          {label}
        </span>
      </label>
    );
}