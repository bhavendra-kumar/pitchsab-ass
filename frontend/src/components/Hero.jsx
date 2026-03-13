import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

const hasValidToken = () => {
  const token = localStorage.getItem("token");
  return Boolean(token && token !== "undefined" && token !== "null");
};

function Hero() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden py-36 text-center px-6">

      {/* Gradient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600 rounded-full blur-[180px] opacity-20"></div>
      <div className="absolute top-40 right-10 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[160px] opacity-20"></div>

      <div className="relative z-10">

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <Rocket size={48} className="text-blue-400" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight"
        >
          Build Your
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {" "}Startup Idea
          </span>
          {" "}Faster
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto"
        >
          Pitchsap helps ideators validate ideas, collaborate with experts,
          and launch startups faster.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <button
            onClick={() => navigate(hasValidToken() ? "/dashboard" : "/signup")}
            className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-xl hover:scale-105 transition"
          >
            Get Started
          </button>

          <button
            onClick={() => scrollToSection("features")}
            className="border border-gray-700 px-8 py-3 rounded-xl hover:bg-white/10 transition"
          >
            Learn More
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;