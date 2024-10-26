import AgentDeployment from "@/components/AgentAi/AgentDeployment/AgentDeployment";
import AgentFeatures from "@/components/AgentAi/AgentFeatures/AgentFeatures";
import BuildAgent from "@/components/AgentAi/BuildAgent/BuildAgent";
import HeroAgentAi from "@/components/AgentAi/HeroAgentAi";
import SimplaiAgentFeatures from "@/components/AgentAi/SimplaiAgentFeatures/SimplaiAgentFeatures";
import BannerExpert from "@/components/BannerExpert/BannerExpert";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";

const home = () => {
  return (
    <section>
      <Header />
      <HeroAgentAi />
      <BuildAgent />
      <SimplaiAgentFeatures />
      <AgentFeatures />
      <AgentDeployment />
      <CaseStudy />
      <BannerExpert />
      <Footer />
    </section>
  );
};

export default home;
