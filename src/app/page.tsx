import BannerExpert from "@/components/BannerExpert/BannerExpert";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AIStack from "@/components/Home/AIStack/AIStack";
import AcceleratedExecution from "@/components/Home/AcceleratedExecution/AcceleratedExecution";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import Hero from "@/components/Home/Hero";
import Industries from "@/components/Home/Industries/Industries";
import Testimonial from "@/components/Home/Testimonial/Testimonial";
import dynamic from "next/dynamic";

const CloudDeployment = dynamic(
  () => import("@/components/Home/CloudDeployment"),
  {
    ssr: false,
  },
);
const Features = dynamic(() => import("@/components/Home/Features/Features"), {
  ssr: false,
});
const PlatformBuild = dynamic(
  () => import("@/components/Home/PlatformBuild/PlatformBuild"),
  {
    ssr: false,
  },
);

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
      <BannerExpert ctaText="Book a Demo" />
      <Footer />
    </section>
  );
};

export default home;
