import Header from "@/components/Header/Header";
import style from "./healthcare.module.css";
import CommonHero from "@/components/CommonHero/CommonHero";
import CardInfo from "@/components/CardInfo/CardInfo";
import Tabs from "@/components/TabsConfig/Tabs";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import Footer from "@/components/Footer/Footer";
import BannerExpert from "@/components/BannerExpert/BannerExpert";
import {
  banner,
  solution,
  healthcare_provider,
  healthcare_player,
  healthcare_tech,
} from "@/data/healthcarePageData";
import AIPlatformOverview from "@/components/AIPlatformOverview/AIPlatformOverview";

const HealthCare = () => {
  return (
    <>
      <Header />
      <CommonHero data={banner} />
      <div className="section">
        <div className="container mb-0">
          <h2>
            Transforming Healthcare with SimplAI’s
            <br /> Generative AI Solutions
          </h2>
          <CardInfo data={solution} />
        </div>
      </div>
      <Tabs tabsConfig={healthcare_provider} />
      <Tabs tabsConfig={healthcare_player} />
      <Tabs tabsConfig={healthcare_tech} />
      <CaseStudy />
      <AIPlatformOverview />
      <BannerExpert />
      <Footer />
    </>
  );
};

export default HealthCare;
