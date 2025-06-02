import NavBar from "../../components/NavBar";
import MainSection from "../../components/MainSection";
import HeroPsico from "../../components/HeroPsico";
import SectionDivider from "../../components/SectionDivider";
import WhyPubliCarePsico from "../../components/WhyPubliCarePsico";
import HowItWorksPsico from "../../components/HowItWorksPsico";
import BePartOfPsico from "../../components/BePartOfPsico";
import Footer from "../../components/Footer";
import FAQ from "../../components/FAQ";

export default function Psicologos() {
  return (
    <>
      <MainSection>
        <NavBar />
        <HeroPsico />
      </MainSection>
      <SectionDivider src="/wave2.png" />
      <WhyPubliCarePsico />
      <SectionDivider src="/wave2.png" rotate="scaleY(-1)" />
      <HowItWorksPsico />
      <SectionDivider src="/wave9.png" />
      <BePartOfPsico />
      <SectionDivider src="/wave5.png" rotate="scaleX(-1)" />
      <FAQ />
      <SectionDivider src="/wave7.png" />
      <Footer />
    </>
  );
}
