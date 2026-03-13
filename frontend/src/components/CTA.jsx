import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">

      <h2 className="text-3xl font-bold">
        Ready to Validate Your Startup Idea?
      </h2>

      <p className="mt-4 text-lg">
        Join Pitchsap today and start building your startup journey.
      </p>

      <Link
        to="/signup"
        className="inline-block mt-8 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
      >
        Join as Ideator
      </Link>

    </section>
  );
}

export default CTA;