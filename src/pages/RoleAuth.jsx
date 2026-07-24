import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const roleLabels = {
  judge: "JUDGE",
  volunteer: "VOLUNTEER",
  community_member: "COMMUNITY MEMBER",
};

const roleColors = {
  judge: "border-red-primary",
  volunteer: "border-blue-500",
  community_member: "border-[#FFC702]",
};

export default function RoleAuth() {
  const { role } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const isLogin = location.pathname.endsWith("/login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const roleLabel = roleLabels[role] || role;
  const borderColor = roleColors[role] || "border-border-gray";

  const toggleMode = () => {
    const base = `/${role}`;
    navigate(isLogin ? `${base}/register` : `${base}/login`);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        if (!name.trim()) {
          throw new Error("Name is required");
        }
        await register(name.trim(), email, password, role);
      }
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-black min-h-screen pt-[100px] flex items-center justify-center px-10">
      <div
        className={`w-full max-w-md bg-bg-dark border ${borderColor} rounded-[15px] p-8`}
        style={{ borderWidth: "1px" }}
      >
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate("/signup")}
            className="text-text-gray hover:text-white transition-colors"
            style={{ fontSize: "24px", lineHeight: 1 }}
          >
            ←
          </button>
          <h1
            className="text-white uppercase"
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 700,
              fontSize: "28px",
              letterSpacing: "4%",
            }}
          >
            {roleLabel}
          </h1>
        </div>

        <div className="flex mb-8 bg-black rounded-lg p-1">
          <button
            onClick={() => {
              if (isLogin) {
                const base = `/${role}`;
                navigate(`${base}/register`);
                setError("");
              }
            }}
            className={`flex-1 py-3 rounded-md text-sm font-poppins font-bold uppercase transition-all ${
              !isLogin
                ? "bg-red-primary text-white shadow-lg"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Register
          </button>
          <button
            onClick={toggleMode}
            className={`flex-1 py-3 rounded-md text-sm font-poppins font-bold uppercase transition-all ${
              isLogin
                ? "bg-red-primary text-white shadow-lg"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Login
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-black border border-[#3A3A3A] rounded-md px-4 py-3 text-white font-poppins text-sm placeholder-text-gray outline-none focus:border-red-primary transition-colors"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-black border border-[#3A3A3A] rounded-md px-4 py-3 text-white font-poppins text-sm placeholder-text-gray outline-none focus:border-red-primary transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="w-full bg-black border border-[#3A3A3A] rounded-md px-4 py-3 text-white font-poppins text-sm placeholder-text-gray outline-none focus:border-red-primary transition-colors"
          />

          {error && (
            <p
              className="text-red-primary font-poppins text-sm text-center"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className={`w-full font-poppins font-bold text-white bg-red-primary rounded-md py-[14px] text-sm uppercase tracking-wide transition-opacity ${
              submitting ? "opacity-60" : "hover:opacity-90"
            }`}
          >
            {submitting ? "Please wait..." : isLogin ? "LOGIN" : "REGISTER"}
          </button>
        </form>
      </div>
    </div>
  );
}
