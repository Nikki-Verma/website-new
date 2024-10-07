import Image from "next/image";
import AiAgentImage from "../../../assets/png/intelligent-aI-agents.png";
import AiChainingImage from "../../../assets/png/AI-and-LLM-chaining.png";
import DeployImage from "../../../assets/png/deploy-aI-systems-on-your-own-cloud.png";
import ReadilyImage from "../../../assets/png/readily-available-Integrations.png";
const AiFeature = () => {
  return (
    <div className="dark_bg mb-120">
      <div className="container">
        <h2 className="text-white">
          Build & Deploy AI systems without the
          <br /> usual overhead
        </h2>

        <div className="flex gap-20 mb-12 mt-12">
          <div className="dark_card px-8 py-8 w-full">
            <div className="h-full flex justify-between flex-col">
              <div>
                <h4 className="heading_24 text-white text-left">
                  Intelligent AI Agents
                </h4>
                <p className="text-white">
                  Design smart conversational agents capable of handling complex
                  interactions with ease, utilizing caching, chat history, and
                  real-time streaming for optimal performance
                </p>
              </div>
              <div className="mx-auto">
                <Image
                  src={AiAgentImage}
                  alt="ai agent"
                  className="text-center"
                />
              </div>
            </div>
          </div>
          <div className="dark_card px-8 py-8 w-full">
            <div className="h-full flex justify-between flex-col">
              <div>
                <h4 className="heading_24 text-white text-left">
                  AI & LLM Chaining
                </h4>
                <p className="text-white">
                  Execute dynamic tasks and automate multi-step processes,
                  enhancing efficiency and reducing manual effort. Configure
                  retries, guardrails, API limits, and caching for robust
                  performance.
                </p>
              </div>
              <div className="mx-auto">
                <Image
                  src={AiChainingImage}
                  alt="ai agent"
                  className="text-center"
                />
              </div>
            </div>
          </div>
        </div>


        <div className="flex gap-20">
          <div className="dark_card px-8 py-8 w-full">
            <div className="h-full flex justify-between flex-col">
              <div>
                <h4 className="heading_24 text-white text-left">
                Deploy AI Systems on Your Own Cloud
                </h4>
                <p className="text-white">
                Maintain control over your deployment environment, ensuring compliance and performance
                </p>
              </div>
              <div className="mx-auto">
                <Image
                  src={DeployImage}
                  alt="DeployImage"
                  className="text-center"
                />
              </div>
            </div>
          </div>
          <div className="dark_card px-8 py-8 w-full">
            <div className="h-full flex justify-between flex-col">
              <div>
                <h4 className="heading_24 text-white text-left">
                Readily available Integrations
                </h4>
                <p className="text-white">
                Seamlessly integrate AI systems into your existing tech stack using our APIs, webhooks, mobile SDKs, app integrations, and embed code

                </p>
              </div>
              <div className="mx-auto">
                <Image
                  src={ReadilyImage}
                  alt="ReadilyImage"
                  className="text-center"
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AiFeature;
