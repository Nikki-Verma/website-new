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
  insurance,
  platformData,
  solutionsList,
} from "@/data/insurancePageData";

const Insurance = () => {
  return (
    <>
      <Header />
      <CommonHero data={banner} />
      <section className="section">
        <div className="container">
          <div className="section_heading_container">
            <div className="home_page_heading_tag">Why SimplAI?</div>
            <div className="home_page_heading">
              The fastest and most effective way to implement <br /> AI-powered
              solutions for insurance
            </div>
          </div>
          <CardInfo data={solutionsList} />
        </div>
      </section>
      <Tabs tabsConfig={insurance} />
      <AIPlatformOverview
        data={platformData}
        heading1="Empowering insurance leaders"
        heading2="Your trusted partner in Gen AI innovation"
      />
      <CaseStudy />
      <BannerExpert
        bannerHeading="Ready to transform your insurance business?"
        bannerText="Enhance your operations, improve customer engagement, and streamline workflows effortlessly with SimplAI’s Generative AI solutions"
      />
      <Footer />
    </>
  );
};

export default Insurance;
