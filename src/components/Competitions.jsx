import { useState } from "react";
import { competitions } from "../data/mockData";

const tabs = ["LIVE NOW", "UPCOMING", "PAST RESULTS"];

function BracketGraphic() {
  return (
    <div style={{ width: "100%", paddingLeft: "8px", paddingRight: "8px", marginTop: "16px", flex: 1, display: "flex", flexDirection: "column" }}>
      <svg
        viewBox="0 0 480 280"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: "100%", flex: 1 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="15" width="94" height="40" rx="5" fill="#3A3A3A" />
        <rect x="0" y="75" width="94" height="40" rx="5" fill="#3A3A3A" />
        <rect x="0" y="145" width="94" height="40" rx="5" fill="#3A3A3A" />
        <rect x="0" y="215" width="94" height="40" rx="5" fill="#3A3A3A" />

        <rect x="193" y="45" width="94" height="40" rx="5" fill="#3A3A3A" />
        <rect x="193" y="180" width="94" height="40" rx="5" fill="#3A3A3A" />

        <rect x="386" y="112" width="94" height="40" rx="5" fill="#3A3A3A" />

        <path d="M94,35 L143,35 L143,65 L193,65" stroke="#FF4D4D" strokeWidth="1.5" fill="none" />
        <path d="M94,95 L143,95 L143,65" stroke="#FF4D4D" strokeWidth="1.5" fill="none" />
        <path d="M94,165 L143,165 L143,200 L193,200" stroke="#FF4D4D" strokeWidth="1.5" fill="none" />
        <path d="M94,235 L143,235 L143,200" stroke="#FF4D4D" strokeWidth="1.5" fill="none" />

        <path d="M287,65 L336,65 L336,132 L386,132" stroke="#FF4D4D" strokeWidth="1.5" fill="none" />
        <path d="M287,200 L336,200 L336,132" stroke="#FF4D4D" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
}

function LiveNowCard() {
  const { liveNow } = competitions;
  return (
    <div className="bg-bg-card border border-border-gray rounded-[10px] flex flex-col" style={{ padding: "37px 28px", minHeight: "480px" }}>
      <div className="flex justify-between items-start">
        <h3 className="text-white font-bold font-poppins" style={{ fontSize: "23px", lineHeight: "35px" }}>{liveNow.title}</h3>
        <span className="bg-[#FF4D4D] text-white text-[10px] font-bold rounded-full px-3 py-1 uppercase">
          {liveNow.status}
        </span>
      </div>
      <p className="text-text-gray font-poppins" style={{ fontSize: "19px", lineHeight: "29px", marginTop: "5px" }}>
        {liveNow.description}
      </p>
      <div className="w-full h-[1px] bg-border-gray" style={{ marginTop: "39px" }} />
      <BracketGraphic />
    </div>
  );
}

function UpcomingCard({ event }) {
  return (
    <div className="bg-bg-card border border-border-gray rounded-[10px] flex flex-col" style={{ padding: "37px 28px", height: "230px" }}>
      <h3 className="text-white font-bold font-poppins" style={{ fontSize: "23px", lineHeight: "35px" }}>{event.title}</h3>
      <div className="grid grid-cols-3 gap-2" style={{ marginTop: "12px" }}>
        <div>
          <p className="text-text-gray text-[10px] font-poppins uppercase tracking-wider">Date</p>
          <p className="text-white text-sm font-poppins font-semibold">{event.date}</p>
        </div>
        <div>
          <p className="text-text-gray text-[10px] font-poppins uppercase tracking-wider">Location</p>
          <p className="text-white text-sm font-poppins font-semibold">{event.location}</p>
        </div>
        <div>
          <p className="text-text-gray text-[10px] font-poppins uppercase tracking-wider">Category</p>
          <p className="text-white text-sm font-poppins font-semibold">{event.category}</p>
        </div>
      </div>
      <button className="w-full font-poppins font-bold text-white bg-red-primary rounded-md py-[14px] hover:bg-red-600 transition-colors uppercase text-sm tracking-wide" style={{ marginTop: "auto" }}>
        REGISTER
      </button>
    </div>
  );
}

function PastResultsCard() {
  return (
    <div className="bg-bg-card border border-border-gray rounded-[10px]" style={{ padding: "37px 28px", minHeight: "480px" }}>
      {competitions.pastResults.map((item, i) => (
        <div key={i}>
          <h3 className="text-white font-bold font-poppins" style={{ fontSize: "23px", lineHeight: "35px" }}>{item.title}</h3>
          <p className="text-text-gray font-poppins" style={{ fontSize: "19px", lineHeight: "29px", marginTop: "5px" }}>{item.subtext}</p>
          {i < competitions.pastResults.length - 1 && (
            <div className="w-full h-[1px] bg-border-gray" style={{ margin: "39px 0" }} />
          )}
        </div>
      ))}
    </div>
  );
}

export default function Competitions() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-bg-dark pt-20 pb-20 px-10 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle at center, #781E1E, transparent 70%)",
          transform: "translate(20%, -20%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="font-orbitron text-white text-[32px] md:text-4xl uppercase mb-12 tracking-tight">
          COMPETITIONS & EVENTS
        </h2>

        <div className="hidden md:grid grid-cols-3 gap-6 items-start">
          <div className="flex flex-col">
            <h3 className="font-orbitron text-red-primary text-base uppercase mb-5 tracking-wider">
              {tabs[0]}
            </h3>
            <LiveNowCard />
          </div>
          <div className="flex flex-col">
            <h3 className="font-orbitron text-white text-base uppercase mb-5 tracking-wider">
              {tabs[1]}
            </h3>
            <div className="flex flex-col gap-5">
              {competitions.upcoming.map((event, i) => (
                <UpcomingCard key={i} event={event} />
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="font-orbitron text-white text-base uppercase mb-5 tracking-wider">
              {tabs[2]}
            </h3>
            <PastResultsCard />
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex gap-2 mb-8 bg-[#111] p-1 rounded-lg">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`flex-1 font-poppins text-xs font-bold py-3 rounded-md transition-all ${
                  activeTab === i
                    ? "bg-red-primary text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="transition-all duration-300">
            {activeTab === 0 && (
              <div className="animate-fadeIn">
                <LiveNowCard />
              </div>
            )}
            {activeTab === 1 && (
              <div className="flex flex-col gap-4 animate-fadeIn">
                {competitions.upcoming.map((event, i) => (
                  <UpcomingCard key={i} event={event} />
                ))}
              </div>
            )}
            {activeTab === 2 && (
              <div className="animate-fadeIn">
                <PastResultsCard />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
