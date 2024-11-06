import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import AiFeature from "@/components/LLM/AiFeature/AiFeature";
import DataIntegration from "@/components/LLM/DataIntegration/DataIntegration";
import HeroLlmStudio from "@/components/LLM/HeroLlmStudio/HeroLlmStudio";
import ModelFeatures from "@/components/LLM/ModelFeatures/ModelFeatures";
import Tools from "@/components/LLM/Tools/Tools";
import {
  AdvancedFeatureImage,
  EvaluationImage,
  FrameworkImage,
  GuardrailsImage,
  TrustSecurityImage,
} from "@/util/images";
import dynamic from "next/dynamic";
const AgentDeployment = dynamic(
  () => import("@/components/AgentAi/AgentDeployment/AgentDeployment"),
  {
    ssr: false,
  },
);
const BannerExpert = dynamic(
  () => import("@/components/BannerExpert/BannerExpert"),
  {
    ssr: false,
  },
);
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
    <section>
      <Header />

      <HeroLlmStudio />
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
        bannerHeading="Ready to unleash the potential of Agentic AI?"
        bannerText="Build and deploy powerful AI applications effortlessly with SimplAI Studio. Experiment, integrate, and optimize your applications while enjoying a seamless user experience designed for speed and scalability"
      />
      <Footer />
      {/* drop down */}
      {/* <Accordian /> */}
    </section>
  );
};

export default LLMStudio;
