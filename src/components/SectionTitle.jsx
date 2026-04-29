export default function SectionTitle({ text, className = "", titleRef }) {
  return (
    <h2 className={`${className} section-title`}>
      {text.split("").map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="char"
          ref={(element) => {
            if (!titleRef || !element) return;
            titleRef.current[index] = element;
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
}
