function Features() {
  return (
    <section id="features" className="py-20 px-10 text-center">

      <h2 className="text-3xl font-bold text-gray-800">
        Platform Features
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-12">

        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h3 className="font-semibold text-lg">Idea Validation</h3>
          <p className="text-gray-500 mt-2">
            Validate your startup ideas before investing time and money.
          </p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h3 className="font-semibold text-lg">Expert Collaboration</h3>
          <p className="text-gray-500 mt-2">
            Connect with mentors and experienced founders.
          </p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h3 className="font-semibold text-lg">Startup Framework</h3>
          <p className="text-gray-500 mt-2">
            Follow a structured path from idea to startup launch.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;