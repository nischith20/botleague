import { sponsors } from "../data/mockData";

export default function Sponsors() {
  return (
    <section className="bg-black py-20 px-10">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-white uppercase mb-12"
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontWeight: 700,
            fontSize: "35px",
            lineHeight: "100%",
            letterSpacing: "2%",
          }}
        >
          SPONSORS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
          {sponsors.map((sp, i) => (
            <div key={i} className="flex items-center gap-4">
              <img
                src={`/images/${sp.image}`}
                alt={sp.name}
                style={{ width: "140px", height: "140px", opacity: 0.6, flexShrink: 0 }}
                className="grayscale"
              />
              <span
                className="text-white"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 600,
                  fontSize: "30px",
                  lineHeight: "100%",
                  letterSpacing: "2%",
                }}
              >
                {sp.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
