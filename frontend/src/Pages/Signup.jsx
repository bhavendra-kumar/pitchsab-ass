import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const apiBaseUrl =
    import.meta.env.VITE_API_URL ||
    (import.meta.env.DEV
      ? "http://localhost:5000"
      : "https://pitchsab-ass.onrender.com");

  const handleSignup = async () => {
    try {

      const res = await axios.post(`${apiBaseUrl}/api/auth/signup`, {
        name,
        email,
        password
      });

      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
      }

      navigate("/dashboard");

    } catch (error) {
      alert(error?.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600 blur-[150px] opacity-20 rounded-full"></div>

      <div className="bg-white/5 backdrop-blur-lg border border-gray-800 p-10 rounded-2xl shadow-xl w-96 relative z-10">

        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Create Account
        </h2>

        <p className="text-gray-400 text-center mb-8">
          Start validating your startup ideas
        </p>

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 bg-[#1e293b] border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 bg-[#1e293b] border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 bg-[#1e293b] border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-xl text-white font-semibold hover:scale-105 transition"
        >
          Create Account
        </button>

        <p className="text-gray-400 text-sm text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;