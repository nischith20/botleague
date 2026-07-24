import { MSquare, Lightbulb, PersonStanding, Brain } from "lucide-react";
import { categories } from "../data/mockData";

const iconMap = {
  "m-square": MSquare,
  lightbulb: Lightbulb,
  "person-standing": PersonStanding,
  brain: Brain,
};

export default function Categories() {
  return (
    <section className="bg-bg-dark py-20 px-10">
      <div className="max-w-7xl mx-auto">
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
          CATEGORIES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <div
                key={i}
                className="flex flex-col"
                style={{
                  width: "310px",
                  height: "391px",
                  borderRadius: "20px",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: cat.highlighted ? "#FFC702" : "#3A3A3A",
                  background: cat.highlighted
                    ? "linear-gradient(135deg, rgba(255,199,2,0.15), #191919 70%)"
                    : "#191919",
                  padding: "20px",
                }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{ width: "115px", height: "105px" }}
                >
                  {Icon && (
                    <Icon className="text-gold" style={{ width: "115px", height: "105px" }} strokeWidth={1.5} />
                  )}
                </div>
                <h3
                  className="text-white mt-2"
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 700,
                    fontSize: "32px",
                    lineHeight: "100%",
                    letterSpacing: "4%",
                  }}
                >
                  {cat.title}
                </h3>
                <p
                  className="text-text-gray mt-2"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "100%",
                    letterSpacing: "4%",
                  }}
                >
                  {cat.desc}
                </p>
                <a
                  href="#"
                  className="text-red-primary mt-auto"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 500,
                    fontSize: "23px",
                    lineHeight: "100%",
                    letterSpacing: "4%",
                  }}
                >
                  LEARN MORE →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
