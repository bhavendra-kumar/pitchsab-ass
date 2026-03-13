import { motion } from "framer-motion";
import { Rocket, Lightbulb, Users } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

function Features() {
  return (
    <section id="features" className="py-24 px-10">

      <h2 className="text-4xl font-bold text-center mb-16">
        Platform Features
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-10"
      >

        <motion.div variants={item} className="bg-white/5 border border-gray-800 p-8 rounded-2xl hover:scale-105 transition">
          <Rocket size={40} className="text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Idea Validation</h3>
          <p className="text-gray-400">Validate ideas before building.</p>
        </motion.div>

        <motion.div variants={item} className="bg-white/5 border border-gray-800 p-8 rounded-2xl hover:scale-105 transition">
          <Lightbulb size={40} className="text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Expert Feedback</h3>
          <p className="text-gray-400">Get insights from founders.</p>
        </motion.div>

        <motion.div variants={item} className="bg-white/5 border border-gray-800 p-8 rounded-2xl hover:scale-105 transition">
          <Users size={40} className="text-indigo-400 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
          <p className="text-gray-400">Work with builders.</p>
        </motion.div>

      </motion.div>

    </section>
  );
}

export default Features;