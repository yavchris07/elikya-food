// import Image from "next/image";

import About from "@/component/about";
import Footer from "@/component/footer";
import Hero from "@/component/hero";
import InvestCTA from "@/component/invest-cta";
import Navbar from "@/component/navbar";
import SolutionImpact from "@/component/solution-impact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <SolutionImpact />
      <InvestCTA />
      <Footer/>
    </>
  );
}
