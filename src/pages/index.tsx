import NavBar from "../components/NavBar";
import MainSection from "../components/Home";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <MainSection>
        <NavBar />
        <Hero />
      </MainSection>
    </>
  );
}
