import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}

export default LandingPage;