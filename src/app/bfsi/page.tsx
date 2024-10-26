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
  capital_marketing,
  insurance,
  retailAndBanking,
  solutionsList,
} from "@/data/bfsiPageData";

const BFSI = () => {
  return (
    <>
      <Header />
      <CommonHero data={banner} />
      <section className="section">
        <div className="container">
          <div className="section_heading_container">
            <div className="home_page_heading">
              Comprehensive AI-Powered Financial
              <br /> Solutions with SimplAI
            </div>
          </div>
          <CardInfo data={solutionsList} />
        </div>
      </section>
      <Tabs tabsConfig={retailAndBanking} />
      <Tabs tabsConfig={insurance} />
      <Tabs tabsConfig={capital_marketing} />
      <AIPlatformOverview />
      <CaseStudy />
      <BannerExpert />
      <Footer />
    </>
  );
};

export default BFSI;
