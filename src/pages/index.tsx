import NavBar from "../components/NavBar";
import MainSection from "../components/MainSection";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import WhyPubliCare from "../components/WhyPubliCare";
import SectionDivider from "../components/SectionDivider";
import BurnoutSection from "../components/BurnoutSection";
import Footer from "../components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Psychologists from "../components/Psychologists";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <MainSection color="var(--roxo-escuro)">
        <NavBar />
        <Hero />
      </MainSection>
      <HowItWorks />
      <SectionDivider src="/wave2.png" />
      <WhyPubliCare />
      <SectionDivider src="/wave4.png" />
      <BurnoutSection />
      <SectionDivider src="/wave5.png" />
      <Psychologists />
      <SectionDivider src="/wave7.png" />
      <Footer />
    </>
  );
}
