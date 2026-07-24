import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Dashboard() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/signup");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="bg-black min-h-screen pt-[100px] flex items-center justify-center">
        <p className="text-white font-poppins text-lg">Loading...</p>
      </div>
    );
  }

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="bg-black min-h-screen pt-[100px] flex flex-col">
      <div className="max-w-7xl mx-auto px-10 w-full flex-1 flex flex-col items-center justify-center">
        <h1
          className="text-white text-center"
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontWeight: 700,
            fontSize: "80px",
            lineHeight: "1.2",
            letterSpacing: "4%",
          }}
        >
          Hi {user.display_name}
        </h1>
        <p
          className="text-text-gray text-center mt-4"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "24px",
          }}
        >
          Welcome to the BotLeague ecosystem
        </p>
        <p
          className="text-red-primary text-center mt-2"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: "18px",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          {user.role?.replace("_", " ") || "Member"}
        </p>

        <button
          onClick={handleLogout}
          className="mt-12 font-poppins font-semibold text-white border border-white rounded-md px-8 py-3 bg-transparent text-sm hover:bg-white hover:text-black transition-colors"
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
}
