import { useState } from "react";
import { joinForms } from "../data/mockData";

function Popup({ type, message, onClose }) {
  const isSuccess = type === "success";
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="bg-bg-dark border rounded-[15px] p-8 max-w-sm w-full mx-4 text-center"
        style={{ borderColor: isSuccess ? "#22c55e" : "#FF4D4D", borderWidth: "1px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: isSuccess ? "rgba(34,197,94,0.15)" : "rgba(255,77,77,0.15)" }}
        >
          {isSuccess ? (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF4D4D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          )}
        </div>
        <h3
          className="text-white uppercase mb-2"
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontWeight: 700,
            fontSize: "22px",
            letterSpacing: "4%",
          }}
        >
          {isSuccess ? "SUCCESS!" : "ALREADY EXISTS"}
        </h3>
        <p
          className="text-text-gray mb-6"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "15px",
          }}
        >
          {message}
        </p>
        <button
          onClick={onClose}
          className="font-poppins font-semibold text-white bg-red-primary rounded-md px-6 py-3 text-sm uppercase"
        >
          OK
        </button>
      </div>
    </div>
  );
}

function SignupCard({ formData }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [enroll, setEnroll] = useState("");
  const [popup, setPopup] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE || "http://localhost:8000"}/api/signups/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: formData.role,
          name,
          location,
          enroll_info: enroll,
        }),
      });
      if (res.status === 409) {
        setPopup({
          type: "exists",
          message: "A signup with this name and role already exists in our system.",
        });
      } else if (res.ok) {
        setPopup({
          type: "success",
          message: "Your registration has been received. We'll be in touch soon!",
        });
        setName("");
        setLocation("");
        setEnroll("");
      } else {
        setPopup({
          type: "exists",
          message: "Something went wrong. Please try again later.",
        });
      }
    } catch {
      setPopup({
        type: "exists",
        message: "Could not connect to the server. Please check your connection.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div
        className="bg-[#0A0A0A] border border-border-gray"
        style={{ width: "396px", height: "460px", borderRadius: "15px", borderWidth: "1px", padding: "24px" }}
      >
        <h3
          className="text-white uppercase mb-5"
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "100%",
          }}
        >
          {formData.heading}
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full bg-bg-dark border border-[#3A3A3A] rounded-md px-3 py-3 text-white font-poppins text-sm placeholder-text-gray outline-none focus:border-red-primary"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="w-full bg-bg-dark border border-[#3A3A3A] rounded-md px-3 py-3 text-white font-poppins text-sm placeholder-text-gray outline-none focus:border-red-primary"
          />
          <input
            type="text"
            placeholder="Enroll"
            value={enroll}
            onChange={(e) => setEnroll(e.target.value)}
            required
            className="w-full bg-bg-dark border border-[#3A3A3A] rounded-md px-3 py-3 text-white font-poppins text-sm placeholder-text-gray outline-none focus:border-red-primary"
          />
          <button
            type="submit"
            disabled={submitting}
            className={`w-full font-poppins font-semibold text-white bg-red-primary rounded-md py-[14px] mt-1 transition-opacity ${
              submitting ? "opacity-60" : ""
            }`}
          >
            {submitting ? "SUBMITTING..." : "SIGN UP"}
          </button>
        </form>
      </div>
      {popup && (
        <Popup
          type={popup.type === "success" ? "success" : "exists"}
          message={popup.message}
          onClose={() => setPopup(null)}
        />
      )}
    </>
  );
}

export default function JoinEcosystem() {
  return (
    <section className="bg-black py-20 px-10">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-white uppercase mb-10 text-center"
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontWeight: 700,
            fontSize: "60px",
            lineHeight: "100%",
            letterSpacing: "4%",
          }}
        >
          JOIN THE ECOSYSTEM
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          {joinForms.map((form) => (
            <SignupCard key={form.role} formData={form} />
          ))}
        </div>
      </div>
    </section>
  );
}
