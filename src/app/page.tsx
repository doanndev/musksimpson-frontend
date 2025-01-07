import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ParticlesEffect from "@/components/ParticlesEffect";
import About from "@/layouts/About";
import BuyForm from "@/layouts/BuyForm";
import FAQ from "@/layouts/FAQ";
import HowToBuy from "@/layouts/HowToBuy";
import Roadmap from "@/layouts/Roadmap";
import Tokenomics from "@/layouts/Tokenomics";


export default function Home() {
  return (
    <div className="w-full h-auto">
      <ParticlesEffect />
      <Navbar />
      <BuyForm />
      <About />
      <HowToBuy />
      <Tokenomics />
      <Roadmap />
      <FAQ />
      <Footer />
    </div>
  );
}
