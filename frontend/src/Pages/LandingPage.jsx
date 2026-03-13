import GridBackground from "../components/GridBackground"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Features from "../components/Features"
import HowItWorks from "../components/HowItWorks"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#0f172a] text-white">
      <GridBackground />

      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />

    </div>
  );
}

export default LandingPage;