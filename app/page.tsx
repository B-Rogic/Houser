import Image from "next/image";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import ProjectSection from "./components/ProjectSection";
import Build from "./components/Build";
import OvernightSection from "./components/OvernightSection";
import Better from "./components/Better";
import Choose from "./components/Choose";
import Questions from "./components/Questions";
import Perspectives from "./components/Perspectives";
import SemiFooter from "./components/SemiFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <ProjectSection />
      <Build />
      <OvernightSection />
      <Better />
      <Choose />
      <Questions />
      <Perspectives />
      <SemiFooter />
    </>
  );
}
