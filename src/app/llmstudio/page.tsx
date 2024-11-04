import AgentDeployment from "@/components/AgentAi/AgentDeployment/AgentDeployment";
import BannerExpert from "@/components/BannerExpert/BannerExpert";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import AiFeature from "@/components/LLM/AiFeature/AiFeature";
import DataIntegration from "@/components/LLM/DataIntegration/DataIntegration";
import ModelFeatures from "@/components/LLM/ModelFeatures/ModelFeatures";
import Tools from "@/components/LLM/Tools/Tools";
import VedioContainerLLmStudio from "@/components/LLM/VedioContainer/VedioContainer";
import {
  AdvancedFeatureImage,
  EvaluationImage,
  FrameworkImage,
  GuardrailsImage,
  TrustSecurityImage,
} from "@/util/images";
import Link from "next/link";

const EncryptionDataPoints = [
  {
    heading: "Application-level version control",
    description:
      "Simplify version management with seamless rollbacks and updates, supporting efficient collaborative workflows.",
    imageAlt: "poc-dev-icon",
    image: EvaluationImage,
  },
  {
    heading: "Project-level environments",
    description:
      "Establish isolated environments for prototyping, testing, and development to ensure stability and smooth transitions to production.",
    imageAlt: "iterate-refine-icon",
    image: GuardrailsImage,
  },
  {
    heading: "Experimentation framework",
    description:
      "Experiment with diverse models, prompts, and AI applications, testing responses side-by-side to effectively fine-tune and optimize outcomes.",
    imageAlt: "integrate-agent-icon",
    image: FrameworkImage,
  },
  {
    heading: "Trust and security",
    description:
      "SimplAI Studio provides an end-to-end data vault solution that complies with industry standards, including SOC 2 and ISO 27001.",
    imageAlt: "integrate-agent-icon",
    image: TrustSecurityImage,
  },
];
const LLMStudio = () => {
  return (
    <>
      <Header />

      <div className="hero_background px-4">
        <div style={{ paddingTop: 160 }}>
          <div className="mx-auto text-center">
            <p className="product_page_name">SimplAI Studio</p>
          </div>
          <h1 className="text-white">
            Enterprise platform for experimenting, building,
            <br /> deploying, and monitoring Gen AI applications
          </h1>
          <p className="font-16 text-white text-center mt-6 w-2/3 mx-auto">
            The fastest and simplest path from idea to PoC to production,
            SimplAI Studio empowers technical and product teams with intuitive
            UI/UX tools to build secure, scalable, and reliable AI applications.
          </p>
          <Link prefetch href={"/request-demo"}>
            <button className="button button_white mx-auto mt-6">
              Request Demo
            </button>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: 500 }}>
        <div className="mt-12 mb-16">
          <VedioContainerLLmStudio />
        </div>
        <ModelFeatures />
        <DataIntegration />
        <AiFeature />
        <Tools />
        <AgentDeployment
          title={"Advanced features to build production-ready applications"}
          subTitle={""}
          EncryptionDataPoints={EncryptionDataPoints}
          mainImage={AdvancedFeatureImage}
        />
        <CaseStudy />
        <BannerExpert
          bannerHeading="Ready to unleash the potential of Generative AI?"
          bannerText="Build and deploy powerful AI applications effortlessly with SimplAI Studio. Experiment, integrate, and optimize your applications while enjoying a seamless user experience designed for speed and scalability."
        />
        <Footer />
        {/* drop down */}
        {/* <Accordian /> */}
      </div>
    </>
  );
};

export default LLMStudio;
