import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 bg-gray-50">

      <h1 className="text-5xl font-bold max-w-3xl leading-tight">
        Validate Your Startup Ideas Faster
      </h1>

      <p className="mt-6 text-gray-600 max-w-xl">
        Pitchsap helps ideators test, refine, and launch their ideas with expert feedback and collaboration.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          to="/signup"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Get Started
        </Link>

        <button className="px-6 py-3 border rounded-lg">
          Learn More
        </button>
      </div>

    </section>
  );
}

export default Hero;