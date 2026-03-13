function HowItWorks() {
  return (
    <section id="how" className="py-24 px-10 text-center">

      <h2 className="text-4xl font-bold mb-16">
        How It Works
      </h2>

      <div className="grid md:grid-cols-4 gap-10">

        {[
          "Submit your idea",
          "Get expert feedback",
          "Refine your concept",
          "Launch your startup"
        ].map((step, index) => (

          <div
            key={index}
            className="bg-white/5 border border-gray-800 p-6 rounded-xl"
          >
            <div className="text-blue-400 text-2xl font-bold mb-3">
              {index + 1}
            </div>

            <p className="text-gray-400">{step}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default HowItWorks;