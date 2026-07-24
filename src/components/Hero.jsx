import { Link } from "react-router-dom";
import { heroContent } from "../data/mockData";
import heroBg from "../assets/images/Hero Section Image.png";

export default function Hero() {
  return (
    <section className="relative min-h-[621px] flex items-center pt-[100px] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "1077px 621px",
          backgroundPosition: "420px center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, #000000 0%, #000000 25%, transparent 65%)",
        }}
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-10 flex flex-col items-start gap-6">
        <div className="bg-black/40 border border-[#333] rounded-md px-4 py-[10px] flex items-center gap-3 self-end">
          <span className="w-2 h-2 bg-red-primary rounded-full" />
          <span className="text-white font-poppins text-sm">
            {heroContent.liveLabel}
          </span>
          <span className="text-red-primary font-poppins font-semibold text-sm">
            {heroContent.watchLabel}
          </span>
        </div>
        <h1 className="font-orbitron font-800 text-white text-5xl md:text-[56px] uppercase leading-tight">
          {heroContent.heading1}
          <br />
          {heroContent.heading2}
        </h1>
        <p className="font-poppins text-text-gray text-base max-w-xl">
          {heroContent.subtext}
        </p>
        <div className="flex gap-4">
          <Link
            to="/signup"
            className="font-poppins font-semibold text-white bg-red-primary rounded-md px-7 py-[14px] inline-block"
          >
            CREATE ACCOUNT
          </Link>
          <span className="font-poppins font-semibold text-white border border-white rounded-md px-7 py-[14px] bg-transparent inline-block">
            EXPLORE EVENTS
          </span>
        </div>
      </div>
    </section>
  );
}
