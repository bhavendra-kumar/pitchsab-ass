function Problem() {
  return (
    <section id="problem" className="py-20 px-10 text-center">
      <h2 className="text-3xl font-bold text-gray-800">
        Why Startup Ideas Fail
      </h2>

      <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
        Most startup ideas fail because they are never validated properly.
        Founders often struggle to find feedback, understand the market,
        and build the right product.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="font-semibold text-lg">No Market Validation</h3>
          <p className="text-gray-500 mt-2">
            Many founders build products without testing market demand.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="font-semibold text-lg">Lack of Feedback</h3>
          <p className="text-gray-500 mt-2">
            Ideas often fail without expert insights and suggestions.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="font-semibold text-lg">Wrong Product Direction</h3>
          <p className="text-gray-500 mt-2">
            Without validation, founders may build the wrong solution.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Problem;