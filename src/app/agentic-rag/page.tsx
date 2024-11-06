import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import Feature from "@/components/Rag/Feature/Feature";
import HeroRag from "@/components/Rag/HeroRag/HeroRag";
import Solution from "@/components/Rag/Solution/Solution";
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
    <section>
      <Header />
      <HeroRag />
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
        bannerText="Transform your data into reliable insights with SimplAI’s multi-modal RAG platform. Experience seamless integration, enhanced factuality, and user-friendly design, empowering you to deploy AI solutions with confidence"
      />
      <Footer />
    </section>
  );
};

export default Rag;
