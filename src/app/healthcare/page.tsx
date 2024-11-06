import AIPlatformOverview from "@/components/AIPlatformOverview/AIPlatformOverview";
import CardInfo from "@/components/CardInfo/CardInfo";
import CommonHero from "@/components/CommonHero/CommonHero";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import Tabs from "@/components/TabsConfig/Tabs";
import {
  banner,
  healthcare_player,
  healthcare_provider,
  healthcare_tech,
  platformData,
  solution,
} from "@/data/healthcarePageData";
import dynamic from "next/dynamic";

const BannerExpert = dynamic(
  () => import("@/components/BannerExpert/BannerExpert"),
  {
    ssr: false,
  },
);
const HealthCare = () => {
  return (
    <>
      <Header />
      <CommonHero data={banner} />
      <section className="section">
        <div className="container">
          <div className="section_heading_container">
            <div className="home_page_heading_tag">Why SimplAI?</div>
            <div className="home_page_heading">
              The fastest and simplest way to transform
              <br /> healthcare via Gen AI solutions
            </div>
          </div>
          <CardInfo data={solution} />
        </div>
      </section>
      <Tabs tabsConfig={healthcare_provider} />
      <Tabs tabsConfig={healthcare_player} />
      <Tabs tabsConfig={healthcare_tech} />
      <AIPlatformOverview
        data={platformData}
        heading1="For healthcare leaders"
        heading2="Your partner in healthcare innovation"
      />
      <CaseStudy />
      <BannerExpert
        bannerHeading="Ready to transform your healthcare operations?"
        bannerText="Unlock the potential of Gen AI to enhance clinical productivity, drive patient engagement, and streamline claims management for both providers and payers"
      />
      <Footer />
    </>
  );
};

export default HealthCare;
