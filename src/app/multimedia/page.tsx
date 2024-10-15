import CommonHero from "@/components/CommonHero/CommonHero";
import CardInfo from "@/components/CardInfo/CardInfo";
import Tabs from "@/components/TabsConfig/Tabs";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import Footer from "@/components/Footer/Footer";
import AIPlatformOverview from "@/components/AIPlatformOverview/AIPlatformOverview";
import BannerExpert from "@/components/BannerExpert/BannerExpert";

import {
  banner,
  solution,
  telecom,
  multimedia,
  education_and_publication,
  gaming_and_esport,
} from "@/data/multimediaPage";
import Header from "@/components/Header/Header";

const Multimedia = () => {
  return (
    <>
      <Header />
      <CommonHero data={banner} />
      <CardInfo data={solution} />
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
