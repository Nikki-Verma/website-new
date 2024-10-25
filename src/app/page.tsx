import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AIStack from "@/components/Home/AIStack/AIStack";
import AcceleratedExecution from "@/components/Home/AcceleratedExecution/AcceleratedExecution";
import Banner from "@/components/Home/Banner/Banner";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import CloudDeployment from "@/components/Home/CloudDeployment";
import Features from "@/components/Home/Features/Features";
import Hero from "@/components/Home/Hero";
import Industries from "@/components/Home/Industries/Industries";
import PlatformBuild from "@/components/Home/PlatformBuild/PlatformBuild";
import Testimonial from "@/components/Home/Testimonial/Testimonial";

const home = () => {
  return (
    <section>
      <Header />
      <Hero />
      <Features />
      <AIStack />
      <PlatformBuild />
      <AcceleratedExecution />
      <Industries />
      <CloudDeployment />
      <Testimonial />
      <CaseStudy />
      <Banner />
      <Footer />
    </section>
  );
};

export default home;
