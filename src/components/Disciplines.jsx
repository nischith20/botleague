import { disciplines } from "../data/mockData";

function DisciplineCard({ image, label, index }) {
  const isLongText = label === "FPV Drone Racing & Aeromodelling";

  return (
    <div
      className="overflow-hidden border border-border-gray mx-auto"
      style={{ width: "300px", height: "317px", borderRadius: "15px", borderWidth: "1px" }}
    >
      <img
        src={`/images/${image}`}
        alt={label}
        style={{ width: "300px", height: "236px", display: "block" }}
        className="object-cover"
      />
      <div
        className="bg-bg-card flex items-center"
        style={{ height: "81px", padding: "0 16px" }}
      >
        <p
          className="text-white"
          style={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: 500,
            fontSize: isLongText ? "22px" : "35px",
            lineHeight: "100%",
            letterSpacing: "4%",
          }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

export default function Disciplines() {
  return (
    <section className="bg-black py-20 px-10">
      <div className="max-w-7xl mx-auto">
        <p className="font-orbitron text-red-primary text-sm uppercase tracking-wider mb-2">
          SPORTS
        </p>
        <h2
          className="text-white uppercase mb-10"
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontWeight: 700,
            fontSize: "50px",
            lineHeight: "100%",
            letterSpacing: "4%",
          }}
        >
          COMPETITION DISCIPLINES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {disciplines.slice(0, 4).map((d, i) => (
            <DisciplineCard key={i} {...d} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5">
          {disciplines.slice(4).map((d, i) => (
            <DisciplineCard key={i} {...d} index={i + 4} />
          ))}
        </div>
      </div>
    </section>
  );
}
