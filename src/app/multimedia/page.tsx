import AIPlatformOverview from "@/components/AIPlatformOverview/AIPlatformOverview";
import BannerExpert from "@/components/BannerExpert/BannerExpert";
import CardInfo from "@/components/CardInfo/CardInfo";
import CommonHero from "@/components/CommonHero/CommonHero";
import Footer from "@/components/Footer/Footer";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import Tabs from "@/components/TabsConfig/Tabs";

import Header from "@/components/Header/Header";
import {
  banner,
  gaming_and_esport,
  multimedia,
  platformData,
  solution,
  telecom,
} from "@/data/multimediaPage";

const Multimedia = () => {
  return (
    <>
      <Header />
      <CommonHero data={banner} />
      <section className="section">
        <div className="container">
          <div className="section_heading_container">
            <div className="home_page_heading_tag">Why SimplAI?</div>
            <div className="home_page_heading">
              Unlock innovation with SimplAI’s Generative AI Solutions
            </div>
          </div>
          <CardInfo data={solution} />
        </div>
      </section>
      <Tabs tabsConfig={telecom} />
      <Tabs tabsConfig={multimedia} />
      {/* <Tabs tabsConfig={education_and_publication} /> */}
      <Tabs tabsConfig={gaming_and_esport} />
      <AIPlatformOverview
        data={platformData}
        heading1="Telecom, Media & Entertainment teams"
        heading2="Your strategic partner for AI innovation"
      />
      <CaseStudy />
      <BannerExpert
        bannerHeading="Ready to transform your Telecom, Media & Entertainment operations?"
        bannerText="Unlock the immense potential of Gen AI to enhance customer experiences, streamline operations, and drive innovation throughout your organization"
      />
      <Footer />
    </>
  );
};

export default Multimedia;
