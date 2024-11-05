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
  AiEncryption,
  AlvcImage,
  EvaluationImage,
  FrameworkImage,
  GuardrailsImage,
} from "@/util/images";

const EncryptionDataPoints = [
  {
    heading: "Application-level version control",
    description:
      "Simplify version management with seamless rollbacks and updates, supporting efficient collaborative workflows.",
    imageAlt: "Application-Level-Version-Control-icon",
    image: AlvcImage,
  },
  {
    heading: "Evaluation and fine-tuning",
    description:
      "Continuously improve your agents with prompt fine-tuning and real-time evaluations, ensuring they are optimized for performance and reliability",
    imageAlt: "poc-dev-icon",
    image: EvaluationImage,
  },
  {
    heading: "Guardrails for accuracy",
    description:
      "Built-in safeguards ensure every interaction is accurate, reliable, and fact-based, maintaining the highest standard of trustworthiness",
    imageAlt: "iterate-refine-icon",
    image: GuardrailsImage,
  },
  {
    heading: "Experimentation framework",
    description:
      "Easily test and optimize your AI agents by configuring different prompts, response strategies, and guardrails within a controlled environment.",
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
        title={"Create agents you can trust"}
        subTitle={"Advanced features to build production-ready AI agents"}
        EncryptionDataPoints={EncryptionDataPoints}
        mainImage={AiEncryption}
      />
      <CaseStudy />
      <BannerExpert
        bannerHeading=" Ready to build your AI agents?"
        bannerText="Create intelligent AI agents quickly with SimplAI’s platform. Automate tasks, engage customers, and augment employees with agents designed for security, scalability, and reliability"
      />
      <Footer />
    </section>
  );
};

export default home;
