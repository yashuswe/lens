import AboutUs from "../sections/AboutUs";
import Hero from "../sections/Hero";
import TrueAI from "../sections/TrueAI";
import Services from "../sections/Services";
import Header from "../components/Header";
import { ThemeProvider } from "next-themes";
import WhyChooseLens from "../sections/WhyChooseLens";
import OurVision from "../sections/OurVision";
import OurBlogs from "../sections/OurBlogs";
export default function Home() {
  return (
  <ThemeProvider attribute="class">
    <Header/>
    <Hero/>
    <AboutUs/>
    <Services/>
    <TrueAI/>
    <WhyChooseLens/>
    <OurVision/>
    <OurBlogs/>
  </ThemeProvider>
  );
}
