import { Medal, Gavel, Briefcase, Zap } from "lucide-react";
import { whyRegisterItems } from "../data/mockData";

const iconMap = {
  medal: Medal,
  gavel: Gavel,
  briefcase: Briefcase,
  zap: Zap,
};

export default function WhyRegister() {
  return (
    <div className="flex-1">
      <p
        className="text-red-primary uppercase"
        style={{
          fontFamily: "Orbitron, sans-serif",
          fontWeight: 600,
          fontSize: "45px",
          lineHeight: "100%",
          letterSpacing: "4%",
          marginBottom: "8px",
        }}
      >
        WHY REGISTER ?
      </p>
      <h2
        className="text-white uppercase"
        style={{
          fontFamily: "Orbitron, sans-serif",
          fontWeight: 700,
          fontSize: "50px",
          lineHeight: "100%",
          letterSpacing: "4%",
          marginBottom: "32px",
        }}
      >
        THE LEAGUE ADVANTAGE
      </h2>
      <div className="flex flex-col gap-7">
        {whyRegisterItems.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                {Icon && <Icon className="text-red-primary w-6 h-6" />}
              </div>
              <div>
                <h3
                  className="text-white"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 500,
                    fontSize: "40px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-text-gray"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 400,
                    fontSize: "25px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    marginTop: "4px",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
