import { Wrench, Landmark, Trophy, Users } from "lucide-react";
import { journeySteps } from "../data/mockData";

const iconMap = {
  wrench: Wrench,
  landmark: Landmark,
  trophy: Trophy,
  users: Users,
};

export default function Journey() {
  return (
    <section className="bg-black py-20 px-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-orbitron text-red-primary text-sm uppercase tracking-wider mb-2">
          USER JOURNEY
        </p>
        <h2 className="font-orbitron text-white text-4xl uppercase mb-3">
          YOUR PATH TO THE LEAGUE
        </h2>
        <p className="text-text-gray font-poppins text-base mb-16 max-w-2xl mx-auto">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>

        <div className="relative flex items-start justify-center gap-8 md:gap-16">
          <div
            className="hidden md:block absolute top-[93px] left-[12%] right-[12%] z-0"
            style={{ borderTop: "5px solid #1301CF" }}
          />

          {journeySteps.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <div key={i} className="relative z-10 flex flex-col items-center" style={{ maxWidth: "220px" }}>
                <div
                  className="rounded-full bg-bg-dark"
                  style={{
                    width: "186px",
                    height: "186px",
                    border: "2px solid #2B2B2B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="rounded-full flex items-center justify-center"
                    style={{
                      width: "140px",
                      height: "140px",
                      border: "5px solid #1301CF",
                    }}
                  >
                    {Icon && <Icon className="text-white" style={{ width: "67px", height: "67px" }} strokeWidth={1.5} />}
                  </div>
                </div>
                <p
                  className="text-center text-red-primary"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 500,
                    fontSize: "25px",
                    lineHeight: "100%",
                    letterSpacing: "2%",
                    marginTop: "24px",
                  }}
                >
                  {step.step}
                </p>
                <p
                  className="text-center text-white"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 500,
                    fontSize: "26px",
                    lineHeight: "100%",
                    letterSpacing: "2%",
                    maxWidth: "220px",
                    marginTop: "8px",
                  }}
                >
                  {step.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
