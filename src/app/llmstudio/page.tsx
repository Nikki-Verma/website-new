import Header from "@/components/Header/Header";
import VedioContainer from "@/components/LLM/VedioContainer/VedioContainer";
import DataIntegration from "@/components/LLM/DataIntegration/DataIntegration";
import AiFeature from "@/components/LLM/AiFeature/AiFeature";
import Tools from "@/components/LLM/Tools/Tools";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import BannerExpert from "@/components/BannerExpert/BannerExpert";
import Footer from "@/components/Footer/Footer";

const LLMStudio = () => {
  return (
    <>
      <Header />

      <div className="hero_background">
        <div style={{ paddingTop: 160 }}>
          <div className="mx-auto text-center">
            <p className="product_page_name">LLM Studio</p>
          </div>
          <h1 className="text-white">
            A comprehensive AI platform for experimentation, <br /> deployment,
            and monitoring
          </h1>
          <p className="font-18 text-white text-center mt-6 w-1/2 mx-auto">
            Simplify AI Integration and Accelerate Deployment—LLM Studio
            empowers developers and product teams to build secure, scalable, and
            reliable AI applications with unmatched observability.
          </p>
          <button className="button button_white mx-auto mt-6">
            Request Demo
          </button>
        </div>
      </div>
      <div style={{ marginTop: 500 }}>
        <div className="mt-12 mb-120">
          <VedioContainer />
        </div>
        <DataIntegration />
        <AiFeature />
        <Tools />
        <CaseStudy />
        <BannerExpert />
        <Footer />
        {/* drop down */}
        {/* <Accordian /> */}
      </div>
    </>
  );
};

export default LLMStudio;
