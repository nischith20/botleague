import WhyRegister from "./WhyRegister";
import leaderboardBg from "../assets/images/Leaderboard.png";

export default function WhyRegisterSection() {
  return (
    <section className="bg-bg-dark py-20 px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        <WhyRegister />
        <div className="flex-shrink-0 ml-auto" style={{ width: "700px", height: "760px", overflow: "hidden" }}>
          <img
            src={leaderboardBg}
            alt="Leaderboard"
            style={{ width: "831px", height: "760px", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}
