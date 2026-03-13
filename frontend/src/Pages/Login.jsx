import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const apiBaseUrl =
    import.meta.env.VITE_API_URL ||
    (import.meta.env.DEV
      ? "http://localhost:5000"
      : "https://pitchsab-ass.onrender.com");

  const handleLogin = async () => {
    try {

      setLoading(true);

      const res = await axios.post(
        `${apiBaseUrl}/api/auth/login`,
        { email, password }
      );

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");

    } catch (error) {
      alert(error?.response?.data?.message || "Invalid login credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 blur-[150px] opacity-20 rounded-full"></div>

      <div className="bg-white/5 backdrop-blur-lg border border-gray-800 p-10 rounded-2xl shadow-xl w-96 relative z-10">

        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Welcome Back
        </h2>

        <p className="text-gray-400 text-center mb-8">
          Login to continue building your startup
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 bg-[#1e293b] border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 bg-[#1e293b] border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-xl text-white font-semibold hover:scale-105 transition disabled:opacity-60">
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-gray-400 text-sm text-center mt-6">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;