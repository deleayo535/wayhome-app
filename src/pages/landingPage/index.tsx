import { Hero } from "../../components/organism/Hero";
import { NavBar } from "../../components/organism/NavBar";
import { Section } from "../../components/molecules/Section";
import { Works } from "../../components/organism/Works";
import { Meet } from "../../components/organism/Meet";

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Works />
      <Meet />
    </div>
  );
}
