function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-gray-50 px-10 text-center">

      <h2 className="text-3xl font-bold text-gray-800">
        How Pitchsap Works
      </h2>

      <div className="grid md:grid-cols-4 gap-8 mt-12">

        <div className="bg-white shadow-md p-6 rounded-xl">
          <h3 className="font-semibold">1. Submit Idea</h3>
          <p className="text-gray-500 mt-2">
            Share your startup idea with the platform.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-xl">
          <h3 className="font-semibold">2. Get Feedback</h3>
          <p className="text-gray-500 mt-2">
            Receive insights from experienced mentors.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-xl">
          <h3 className="font-semibold">3. Improve Concept</h3>
          <p className="text-gray-500 mt-2">
            Refine your idea using structured feedback.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-xl">
          <h3 className="font-semibold">4. Build Startup</h3>
          <p className="text-gray-500 mt-2">
            Turn your validated idea into a real startup.
          </p>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;