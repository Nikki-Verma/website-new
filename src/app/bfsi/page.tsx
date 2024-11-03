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
  platformData,
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
              The fastest and simplest way to implement <br />
              AI-powered financial solutions
            </div>
          </div>
          <CardInfo data={solutionsList} />
        </div>
      </section>
      <Tabs tabsConfig={retailAndBanking} />
      <Tabs tabsConfig={capital_marketing} />
      {/* <Tabs tabsConfig={insurance} /> */}
      <AIPlatformOverview data={platformData} />
      <CaseStudy />
      <BannerExpert
        bannerHeading="Ready to elevate your financial services?"
        bannerText="Transform your operations with SimplAI’s Generative AI solutions. Enhance efficiency, drive customer engagement, and automate workflows effortlessly."
      />
      <Footer />
    </>
  );
};

export default BFSI;
