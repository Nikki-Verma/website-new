import AgentDeployment from "@/components/AgentAi/AgentDeployment/AgentDeployment";
import AgentFeatures from "@/components/AgentAi/AgentFeatures/AgentFeatures";
import BuildAgent from "@/components/AgentAi/BuildAgent/BuildAgent";
import HeroAgentAi from "@/components/AgentAi/HeroAgentAi";
import SimplaiAgentFeatures from "@/components/AgentAi/SimplaiAgentFeatures/SimplaiAgentFeatures";
import BannerExpert from "@/components/BannerExpert/BannerExpert";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import {
  AlvcImage,
  EvaluationImage,
  FrameworkImage,
  GuardrailsImage,
} from "@/util/images";

const EncryptionDataPoints = [
  {
    heading: "Application-Level Version Control",
    description:
      "Simplify version management with seamless rollbacks and updates, supporting efficient collaborative workflows",
    imageAlt: "Application-Level-Version-Control-icon",
    image: AlvcImage,
  },
  {
    heading: "Evaluation and Fine-Tuning",
    description:
      "Continuously improve your agents with prompt finetuning and real-time evaluations, ensuring they are optimized for performance and reliability",
    imageAlt: "poc-dev-icon",
    image: EvaluationImage,
  },
  {
    heading: "Guardrails for Accuracy",
    description:
      "Every agent is deployed with built-in safeguards to ensure that only factual, reliable, and verifiable information is delivered, giving you confidence in every interaction",
    imageAlt: "iterate-refine-icon",
    image: GuardrailsImage,
  },
  {
    heading: "Experimentation Framework",
    description:
      "Easily test and optimize your AI agents by configuring different prompts, response strategies, and guardrails within a controlled environment",
    imageAlt: "integrate-agent-icon",
    image: FrameworkImage,
  },
];
const home = () => {
  return (
    <section>
      <Header />
      <HeroAgentAi />
      <BuildAgent />
      <SimplaiAgentFeatures />
      <AgentFeatures />
      <AgentDeployment
        title={"Advanced features to build production-ready AI agents"}
        subTitle={" With SimplAI, trust and security are foundational."}
        EncryptionDataPoints={EncryptionDataPoints}
      />
      <CaseStudy />
      <BannerExpert />
      <Footer />
    </section>
  );
};

export default home;
