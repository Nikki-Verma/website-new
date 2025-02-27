import Header from "@/components/Header/Header";
import VedioContainer from "@/components/LLM/VedioContainer/VedioContainer";
import Feature from "@/components/Rag/Feature/Feature";
import Solution from "@/components/Rag/Solution/Solution";
import Footer from "@/components/Footer/Footer";
import Securitystandards from "@/components/Rag/Securitystandards/Securitystandards";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import BannerExpert from "@/components/BannerExpert/BannerExpert";

const Rag = () => {
  return (
    <div className="hero_background">
      <Header />
      <div className="mt-120">
      <div className="mx-auto text-center">
        <p className="product_page_name">Production RAG</p>
        </div>
        <h1 className="text-white">
          Advanced RAG Platform for Building
          <br /> Trustworthy AI Systems
        </h1>
        <p className="font-18 text-white text-center mt-6 w-1/2 mx-auto">
          Transform and ingest both structured and unstructured data, converting
          it into factual insights with every response grounded in truth and
          delivered with precision.
        </p>
        <button className="button button_white mx-auto mt-6">
          Request Demo
        </button>
      </div>
      <div className="mt-12 mb-120">
        <VedioContainer />
      </div>
      <Feature />
      <Solution />
      <Securitystandards />
      <CaseStudy />
      <BannerExpert />
      <Footer />
    </div>
  );
};

export default Rag;
