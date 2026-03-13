import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">Pitchsap</h1>

      <div className="space-x-6 hidden md:flex">
        <a href="#features">Features</a>
        <a href="#how">How It Works</a>
        <a href="#about">About</a>
      </div>

      <div className="space-x-4">
        <Link to="/login" className="text-gray-600">
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;