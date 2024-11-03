import AgentDeployment from "@/components/AgentAi/AgentDeployment/AgentDeployment";
import BannerExpert from "@/components/BannerExpert/BannerExpert";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import Feature from "@/components/Rag/Feature/Feature";
import Solution from "@/components/Rag/Solution/Solution";
import VedioContainerProductionRag from "@/components/Rag/VedioContainer/VedioContainer";
import {
  AdvancedFeatureImage,
  EvaluationImage,
  FrameworkImage,
  GuardrailsImage,
  TrustSecurityImage,
} from "@/util/images";

const EncryptionDataPoints = [
  {
    heading: "Application-Level Version Control",
    description:
      "Simplify version management with seamless rollbacks and updates, supporting efficient collaborative workflows.",
    imageAlt: "poc-dev-icon",
    image: EvaluationImage,
  },
  {
    heading: "Project-Level Environments",
    description:
      "Establish isolated environments for prototyping, testing, and development to ensure stability and smooth transitions to production.",
    imageAlt: "iterate-refine-icon",
    image: GuardrailsImage,
  },
  {
    heading: "Experimentation Framework",
    description:
      "Experiment with diverse models, prompts, and AI applications, testing responses side-by-side to effectively fine-tune and optimize outcomes.",
    imageAlt: "integrate-agent-icon",
    image: FrameworkImage,
  },
  {
    heading: "Trust and Security",
    description:
      "SimplAI Studio complies with industry standards such as SOC 2 and ISO2701, ensuring robust data protection and compliance",
    imageAlt: "integrate-agent-icon",
    image: TrustSecurityImage,
  },
];

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
            Advanced RAG platform for building <br />
            trustworthy AI systems
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
        <div className="mt-12 mb-16">
          <VedioContainerProductionRag />
        </div>
        <Feature />
        <Solution />
        {/* <Securitystandards /> */}
        <AgentDeployment
          title={"Advanced features to build production-ready applications"}
          subTitle={""}
          EncryptionDataPoints={EncryptionDataPoints}
          mainImage={AdvancedFeatureImage}
        />
        <CaseStudy />
        <BannerExpert
          bannerHeading="Ready to build trustworthy AI systems?"
          bannerText="Transform your data into reliable insights with SimplAI’s multi-modal RAG platform. Experience seamless integration, enhanced factuality, and user-friendly design, empowering you to deploy AI solutions with confidence."
        />
        <Footer />
      </div>
    </>
  );
};

export default Rag;
