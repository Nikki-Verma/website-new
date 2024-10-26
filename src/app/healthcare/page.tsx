import AIPlatformOverview from "@/components/AIPlatformOverview/AIPlatformOverview";
import BannerExpert from "@/components/BannerExpert/BannerExpert";
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
  solution,
} from "@/data/healthcarePageData";

const HealthCare = () => {
  return (
    <>
      <Header />
      <CommonHero data={banner} />
      <section className="section">
        <div className="container">
          <div className="section_heading_container">
            <div className="home_page_heading">
              Transforming Healthcare with SimplAI’s
              <br /> Generative AI Solutions
            </div>
          </div>
          <CardInfo data={solution} />
        </div>
      </section>
      <Tabs tabsConfig={healthcare_provider} />
      <Tabs tabsConfig={healthcare_player} />
      <Tabs tabsConfig={healthcare_tech} />
      <AIPlatformOverview />
      <CaseStudy />
      <BannerExpert />
      <Footer />
    </>
  );
};

export default HealthCare;
