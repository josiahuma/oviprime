import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TrainingShowcase from "../components/TrainingShowcase";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <TrainingShowcase />
      <About />
    </main>
  );
}