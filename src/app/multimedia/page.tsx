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
  education_and_publication,
  gaming_and_esport,
  multimedia,
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
            <div className="home_page_heading">
              Unlock innovation with SimplAI’s Generative AI Solutions
            </div>
          </div>
          <CardInfo data={solution} />
        </div>
      </section>
      <Tabs tabsConfig={telecom} />
      <Tabs tabsConfig={multimedia} />
      <Tabs tabsConfig={education_and_publication} />
      <Tabs tabsConfig={gaming_and_esport} />
      <AIPlatformOverview />
      <CaseStudy />
      <BannerExpert />
      <Footer />
    </>
  );
};

export default Multimedia;
