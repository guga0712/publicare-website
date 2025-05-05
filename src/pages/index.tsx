import NavBar from "../components/NavBar";
import MainSection from "../components/MainSection";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Section from "../components/Section";

export default function Home() {
  return (
    <>
      <MainSection>
        <NavBar />
        <Hero />
      </MainSection>
      <Section color="var(--roxo-escuro)">
        <HowItWorks />
      </Section>
    </>
  );
}
