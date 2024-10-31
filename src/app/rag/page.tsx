import BannerExpert from "@/components/BannerExpert/BannerExpert";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import Feature from "@/components/Rag/Feature/Feature";
import Securitystandards from "@/components/Rag/Securitystandards/Securitystandards";
import Solution from "@/components/Rag/Solution/Solution";
import VedioContainerProductionRag from "@/components/Rag/VedioContainer/VedioContainer";

const Rag = () => {
  return (
    <>
      <Header />
      <div className="hero_background">
        <div style={{ paddingTop: 160 }}>
          <div className="mx-auto text-center">
            <p className="product_page_name">Multi-modal Production RAG</p>
          </div>
          <h1 className="text-white">
            Advanced RAG Platform for Building <br />
            Trustworthy AI Systems
          </h1>
          <p className="font-16 text-white text-center mt-6 w-2/3 mx-auto">
            Transform and ingest both structured and unstructured data,
            converting it into factual insights with every response grounded in
            truth and delivered with precision.
          </p>
          <button className="button button_white mx-auto mt-6">
            Request Demo
          </button>
        </div>
      </div>
      <div style={{ marginTop: 500 }}>
        <div className="mt-12 mb-120">
          <VedioContainerProductionRag />
        </div>
        <Feature />
        <Solution />
        <Securitystandards />
        <CaseStudy />
        <BannerExpert />
        <Footer />
      </div>
    </>
  );
};

export default Rag;
