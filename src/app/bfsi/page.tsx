import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import AIPlatformOverview from "@/components/AIPlatformOverview/AIPlatformOverview";
import CardInfo from "@/components/CardInfo/CardInfo";
import {
  solutionsList,
  retailAndBanking,
  banner,
  insurance,
  capital_marketing,
} from "@/data/bfsiPageData";
import CommonHero from "@/components/CommonHero/CommonHero";
import Tabs from "@/components/TabsConfig/Tabs";

const BFSI = () => {
  return (
    <>
      <Header />
      <CommonHero data={banner} />
      <div className="section">
        <div className="container mb-0">
          <h2>
            Comprehensive AI-Powered Financial
            <br /> Solutions with SimplAI
          </h2>
          <CardInfo data={solutionsList} />
        </div>
      </div>
      <Tabs tabsConfig={retailAndBanking} />
      <Tabs tabsConfig={insurance} />
      <Tabs tabsConfig={capital_marketing} />
      <CaseStudy />
      <AIPlatformOverview />
      <Footer />
    </>
  );
};

export default BFSI;
