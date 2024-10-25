import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Tabs from "@/components/TabsConfig/Tabs";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import AIPlatformOverview from "@/components/AIPlatformOverview/AIPlatformOverview";
import BannerExpert from "@/components/BannerExpert/BannerExpert";
import {
  banner,
  solution,
  legal,
  consulting,
  research,
} from "@/data/legalPage";
import CardInfo from "@/components/CardInfo/CardInfo";
import CommonHero from "@/components/CommonHero/CommonHero";

const Legal = () => {
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
      <Tabs tabsConfig={legal} />
      <Tabs tabsConfig={consulting} />
      <Tabs tabsConfig={research} />
      <CaseStudy />
      <AIPlatformOverview />
      <BannerExpert />
      <Footer />
    </>
  );
};

export default Legal;
