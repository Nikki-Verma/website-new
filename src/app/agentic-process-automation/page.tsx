import AgentDeployment from "@/components/AgentAi/AgentDeployment/AgentDeployment";
import AgenticProcessFeatures from "@/components/AgenticProcess/AgenticProcessFeatures/AgenticProcessFeatures";
import BuildAgenticProcess from "@/components/AgenticProcess/BuildAgenticProcess/BuildAgenticProcess";
import HeroAgenticProcess from "@/components/AgenticProcess/HeroAgenticProcess";
import SimplaiAgentFeatures from "@/components/AgenticProcess/SimplaiAgentFeatures/SimplaiAgentFeatures";
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
    heading: "Granular level Tracing",
    description:
      "Keep track of every step in your automated processes, ensuring visibility and auditability at every stage",
    imageAlt: "poc-dev-icon",
    image: EvaluationImage,
  },
  {
    heading: "Guardrails for Accuracy",
    description:
      "Built-in safeguards ensure every interaction is accurate, reliable, and fact-based, maintaining the highest standard of trustworthiness",
    imageAlt: "iterate-refine-icon",
    image: GuardrailsImage,
  },
  {
    heading: "Experimentation Framework",
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
      <HeroAgenticProcess />
      <BuildAgenticProcess />
      <SimplaiAgentFeatures />
      <AgenticProcessFeatures />
      <AgentDeployment
        title={"Create workflows you can automate"}
        subTitle={
          "Advanced features to build production-ready agentic automation."
        }
        EncryptionDataPoints={EncryptionDataPoints}
      />
      <CaseStudy />
      <BannerExpert />
      <Footer />
    </section>
  );
};

export default home;
