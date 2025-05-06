import NavBar from "../components/NavBar";
import MainSection from "../components/MainSection";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import WhyPubliCare from "../components/WhyPubliCare";
import SectionDivider from "../components/SectionDivider";
import BurnoutSection from "../components/BurnoutSection";
import RateUs from "../components/RateUs";

export default function Home() {
  return (
    <>
      <MainSection>
        <NavBar />
        <Hero />
      </MainSection>
      <HowItWorks />
      <SectionDivider src="/wave2.png" />
      <WhyPubliCare />
      <SectionDivider src="/wave4.png" />
      <BurnoutSection />
      <SectionDivider src="/wave5.png" />
      <RateUs />
    </>
  );
}
