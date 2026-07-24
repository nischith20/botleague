import { useNavigate } from "react-router-dom";

const roles = [
  {
    key: "judge",
    title: "JUDGE",
    desc: "Oversee competitions, ensure fair play, and evaluate participants.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#FF4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z" />
        <path d="M19 17v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2" />
        <path d="M5 17a5 5 0 0 1 14 0" />
      </svg>
    ),
  },
  {
    key: "volunteer",
    title: "VOLUNTEER",
    desc: "Support event operations, assist teams, and help run the league.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#FF4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    key: "community_member",
    title: "COMMUNITY MEMBER",
    desc: "Join as a participant, build your team, and compete in events.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#FF4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen pt-[100px] flex items-center justify-center px-10">
      <div className="max-w-5xl w-full">
        <h1
          className="text-white uppercase text-center mb-4"
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontWeight: 700,
            fontSize: "50px",
            lineHeight: "100%",
            letterSpacing: "4%",
          }}
        >
          JOIN THE ECOSYSTEM
        </h1>
        <p
          className="text-text-gray text-center mb-12"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "20px",
          }}
        >
          Choose your role to get started
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role) => (
            <button
              key={role.key}
              onClick={() => navigate(`/${role.key}/register`)}
              className="flex flex-col items-center text-center p-8 rounded-[15px] border border-border-gray bg-bg-dark hover:border-red-primary hover:bg-[#222] transition-all cursor-pointer"
              style={{ minHeight: "320px" }}
            >
              <div className="mb-6">{role.icon}</div>
              <h2
                className="text-white uppercase mb-3"
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  fontWeight: 700,
                  fontSize: "24px",
                  letterSpacing: "4%",
                }}
              >
                {role.title}
              </h2>
              <p
                className="text-text-gray"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "1.5",
                }}
              >
                {role.desc}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
