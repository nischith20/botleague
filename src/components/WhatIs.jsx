import { whatIsPoints } from "../data/mockData";
import whatIsImg from "../assets/images/What is Botleagure Section Image.png";

export default function WhatIs() {
  return (
    <section className="bg-bg-dark py-20 px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h2
            className="text-white uppercase mb-10"
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 700,
              fontSize: "50px",
              lineHeight: "100%",
              letterSpacing: "2%",
            }}
          >
            WHAT IS BOTLEAGUE?
          </h2>
          <div className="grid grid-cols-2 gap-x-10 gap-y-10">
            {whatIsPoints.map((item) => (
              <div key={item.num}>
                <span
                  className="text-red-primary"
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontWeight: 700,
                    fontSize: "50px",
                    lineHeight: "100%",
                    letterSpacing: "2%",
                  }}
                >
                  {item.num}
                </span>
                <h3
                  className="text-white mt-1"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 600,
                    fontSize: "40px",
                    lineHeight: "100%",
                    letterSpacing: "2%",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-text-gray mt-1"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 400,
                    fontSize: "25px",
                    lineHeight: "100%",
                    letterSpacing: "2%",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-shrink-0">
          <img
            src={whatIsImg}
            alt="BotLeague illustration"
            style={{ width: "375px", height: "386px", opacity: 1 }}
            className="grayscale"
          />
        </div>
      </div>
    </section>
  );
}
