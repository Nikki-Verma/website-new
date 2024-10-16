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
      <CardInfo data={solutionsList} />
      <Tabs tabsConfig={retailAndBanking} />
      <Tabs tabsConfig={insurance} />
      <Tabs tabsConfig={capital_marketing} />
      <CaseStudy />
      <AIPlatformOverview />
      <Footer />
      {/* <div className="dark_bg_hero">
        <div className="hero_content container">
          <div className="w-2/3">
            <div className="product_page_name mb-24">BFSI</div>
            <h1 className="text-left color-white text-white mb-4">
              Boost Productivity, <br />
              Engagement, and Efficiency <br />
              with Gen AI
            </h1>
            <p className="font-18 text-white mb-8">
              Empower your organization with intelligent process automation,
              operational assistance, and human-like decision-making. From
              enhancing productivity to driving customer engagement, scale your
              financial services with Generative AI solutions built for
              efficiency and growth.
            </p>
            <Button label={"Request Demo"} url={"#"} color={"button_white"} />
          </div>
          <div>
            <Image src={BfsiHeroImage} alt={"BFRS"} />
          </div>
        </div>
      </div> */}
      {/* <div className="container">
        <h2>
          Comprehensive AI-Powered Financial <br />
          Solutions with SimplAI
        </h2>
        <div className="flex gap-6 justify-between mt-16">
          {solutionsList?.map((solution: any) => {
            return (
              <div className="w-full flex justify-center flex-col items-center">
                <Image src={solution.icon} alt={solution.title} />
                <h5 className="text-center mt-6 mb-4">{solution.title}</h5>
                <p className="font-18 text-center">{solution.description}</p>
              </div>
            );
          })}
        </div>
      </div> */}
      {/* <Tabs /> */}
    </>
  );
};

export default BFSI;
