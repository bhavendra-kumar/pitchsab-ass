import { Link } from "react-router-dom";

const hasValidToken = () => {
  const token = localStorage.getItem("token");
  return Boolean(token && token !== "undefined" && token !== "null");
};

function CTA() {
  return (
    <section className="py-28 text-center">

      <h2 className="text-5xl font-bold mb-6">
        Ready to Build Your Startup?
      </h2>

      <p className="text-gray-400 mb-10">
        Join Pitchsap and validate your idea today.
      </p>

      <Link
        to={hasValidToken() ? "/dashboard" : "/signup"}
        className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-xl text-lg"
      >
        Join as Ideator
      </Link>

    </section>
  );
}

export default CTA;