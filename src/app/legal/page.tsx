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
  consulting,
  legal,
  platformData,
  solution,
} from "@/data/legalPage";

const Legal = () => {
  return (
    <>
      <Header />
      <CommonHero data={banner} />
      <section className="section">
        <div className="container">
          <div className="section_heading_container">
            <div className="home_page_heading">
              The fastest and simplest way to innovate legal, <br />
              consulting, and research practices
            </div>
          </div>
          <div>
            <CardInfo data={solution} />
          </div>
        </div>
      </section>
      <Tabs tabsConfig={legal} />
      <Tabs tabsConfig={consulting} />
      {/* <Tabs tabsConfig={research} /> */}
      <CaseStudy />
      <AIPlatformOverview data={platformData} />
      <BannerExpert
        bannerHeading="Ready to Transform Your Legal, Consulting, and Research Solutions?"
        bannerText="Unlock the immense potential of AI to enhance efficiency, drive insights, and automate processes across your organization."
      />
      <Footer />
    </>
  );
};

export default Legal;
