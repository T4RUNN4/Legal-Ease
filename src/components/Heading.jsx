export default function Heading({ texts }) {
  return (
    <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#fdfbf7] leading-tight mb-8">
      {texts.map((text, index) => (
        <span key={index}>
          {text}
          {index < texts.length - 1 && <br />}
        </span>
      ))}
    </h1>
  );
}
