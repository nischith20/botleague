import { Link } from "react-router-dom";
import { navLinks } from "../data/mockData";
import logo from "../assets/images/Logo.png";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[100px] bg-bg-dark flex items-center px-10 justify-between">
      <div className="flex items-center gap-6">
        <Link to="/">
          <img src={logo} alt="BotLeague" className="h-10" />
        </Link>
        <div className="hidden md:flex items-center gap-8 ml-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`font-poppins font-medium text-sm ${
                link.active
                  ? "text-white border-b-2 border-red-primary pb-1"
                  : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Link
          to="/admin-login"
          className="font-poppins font-semibold text-[#FFC702] border border-[#FFC702] rounded-md px-5 py-[10px] bg-transparent text-sm hover:bg-[#FFC702] hover:text-black transition-colors"
        >
          ADMIN
        </Link>
        {isAuthenticated ? (
          <div className="flex items-center gap-3">
            <Link
              to="/dashboard"
              className="font-poppins font-semibold text-white text-sm"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Hi {user.display_name}
            </Link>
            <button
              onClick={logout}
              className="font-poppins font-semibold text-white border border-white rounded-md px-5 py-[10px] bg-transparent text-sm hover:bg-white hover:text-black transition-colors"
            >
              LOGOUT
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              to="/signup"
              className="btn-outline-compat font-poppins font-semibold text-white border border-white rounded-md px-6 py-[10px] bg-transparent text-sm"
            >
              LOGIN
            </Link>
            <Link
              to="/signup"
              className="font-poppins font-semibold text-white bg-red-primary rounded-md px-6 py-[10px] text-sm w-[160px] h-[41px] flex items-center justify-center"
            >
              REGISTER NOW
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
