import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const hasValidToken = () => {
  const token = localStorage.getItem("token");
  return Boolean(token && token !== "undefined" && token !== "null");
};

function Navbar() {
  const navigate = useNavigate();
  const [isAuthed, setIsAuthed] = useState(hasValidToken());

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const syncAuth = () => setIsAuthed(hasValidToken());
    window.addEventListener("storage", syncAuth);
    return () => window.removeEventListener("storage", syncAuth);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthed(false);
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/40 border-b border-gray-800">

      <div className="flex justify-between items-center px-10 py-5">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
        >
          Pitchsap
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-gray-300">

          <button
            onClick={() => scrollToSection("features")}
            className="hover:text-white transition"
          >
            Features
          </button>

          <button
            onClick={() => scrollToSection("how")}
            className="hover:text-white transition"
          >
            How it works
          </button>

        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">

          {isAuthed ? (
            <>
              <Link
                to="/dashboard"
                className="text-gray-300 hover:text-white transition"
              >
                Dashboard
              </Link>

              <button
                onClick={logout}
                className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-lg text-white hover:scale-105 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-300 hover:text-white transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-lg text-white hover:scale-105 transition"
              >
                Get Started
              </Link>
            </>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;