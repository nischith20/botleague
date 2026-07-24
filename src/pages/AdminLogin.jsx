import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await login(email, password, true);
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
        className="w-full max-w-md bg-bg-dark border border-gold rounded-[15px] p-8"
        style={{ borderWidth: "1px" }}
      >
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate("/")}
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
            ADMIN LOGIN
          </h1>
        </div>

        <p
          className="text-gold font-poppins text-sm mb-8"
          style={{ opacity: 0.8 }}
        >
          Authorized personnel only
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-black border border-[#3A3A3A] rounded-md px-4 py-3 text-white font-poppins text-sm placeholder-text-gray outline-none focus:border-gold transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full bg-black border border-[#3A3A3A] rounded-md px-4 py-3 text-white font-poppins text-sm placeholder-text-gray outline-none focus:border-gold transition-colors"
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
            className={`w-full font-poppins font-bold text-white bg-gold rounded-md py-[14px] text-sm uppercase tracking-wide transition-opacity ${
              submitting ? "opacity-60" : "hover:opacity-90"
            }`}
            style={{ backgroundColor: "#FFC702", color: "#000" }}
          >
            {submitting ? "Please wait..." : "LOGIN"}
          </button>
        </form>
      </div>
    </div>
  );
}
