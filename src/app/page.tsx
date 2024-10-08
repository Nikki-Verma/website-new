import AISoltion from "@/components/Home/AISolution/AISolution";
import AIStack from "@/components/Home/AIStack/AIStack";
import Banner from "@/components/Home/Banner/Banner";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import DataSync from "@/components/Home/DataSync/DataSync";
import Hero from "@/components/Home/Hero";
import OurApplications from "@/components/Home/OurApplications/OurApplications";
import PlatformBuild from "@/components/Home/PlatformBuild/PlatformBuild";
import Testimonial from "@/components/Home/Testimonial/Testimonial";
// import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const home = () => {
  return (
    <section>
      <Hero />
      <OurApplications />
      <AIStack />
      <AISoltion />
      <PlatformBuild />
      <DataSync />
      <CaseStudy />
      <Testimonial />
      <Banner />
      <Footer />
    </section>
  );
};

export default home;
