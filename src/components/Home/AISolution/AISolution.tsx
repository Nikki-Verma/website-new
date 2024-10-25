import "./style.css";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

import AI_SYSTEM_ORG from "../../../assets/png/ai-system-org.png";
import LLM from "../../../assets/png/llm.png";
import Integration from "../../../assets/png/integration.png";
import { IoMdArrowForward } from "react-icons/io";

// padding: 40px 50px;
const AISoltion = () => {
  return (
    <div className="mb-120">
      <div className="heading_section">
        <h2>
          Everything you need to build & deploy
          <br /> Gen AI applications
        </h2>
        <p className="section_subheading">
          Everything you need to build & deploy Gen AI applications
          <br />
          Sub-Heading - A unified Gen AI Stack Solution
        </p>
      </div>

      <div className="container card_v2 py-10 px-12">
        <div className="flex items-center gap-8">
          <div className="left_side w-full">
            <h4 className="mb-6">
              Build accurate AI systems for <br /> your organization
            </h4>
            <p className="ai_system_org_text">
              Orchestrate scalable AI systems by seamlessly integrating LLMs,
              data, tools, APIs, and more
            </p>
            <div className="mt-6 mb-10">
              <div className="ai_system_org_text flex items-center mb-5 gap-2">
                <FaCheck />
                AI Agents, Chains & Workflows
              </div>
              <div className="ai_system_org_text flex items-center mb-5 gap-2">
                <FaCheck />
                AI Agents, Chains & Workflows
              </div>
              <div className="ai_system_org_text flex items-center mb-5 gap-2">
                <FaCheck />
                AI Agents, Chains & Workflows
              </div>
            </div>
            <div className="button_container">
              <button className="button">Request Demo</button>
              <button className="link_button flex items-center gap-1 link_button_primary">
                Learn More{" "}
                <span className="icon">
                  <IoMdArrowForward />
                </span>
              </button>
            </div>
          </div>
          <div className="right_side w-full">
            <Image src={AI_SYSTEM_ORG} alt={"AI_SYSTEM_ORG"} />
          </div>
        </div>
      </div>
      <div className="container mb-0">
        <div className="flex gap-8">
          <div
            className="card_v2 text-center px-6 py-12"
            style={{ height: 800 }}
          >
            <div className="h-full flex justify-between flex-col">
              <div className="mb-4">
                <h4 className="mb-6">
                  Experiment, deploy and finetune any LLM model and on any cloud
                </h4>
                <p className="mb-6">
                  Effortlessly access all global LLMs with one-click deployment,
                  supported by a cloud-agnostic infrastructure—whether it's
                  managed cloud, self-hosted, VPC, or on-premise
                </p>
                <div className="button_container justify-center">
                  <button className="button">Request Demo</button>
                  <button className="link_button flex items-center gap-1 link_button_primary">
                    Learn More{" "}
                    <span className="icon">
                      <IoMdArrowForward />
                    </span>
                  </button>
                </div>
              </div>
              <div className="text-center">
                <Image className="mx-auto text-center" src={LLM} alt={"LLM"} />
              </div>
            </div>
          </div>
          <div
            className="card_v2 text-center px-6 py-12"
            style={{ height: 800 }}
          >
            <div className="h-full flex justify-between flex-col">
              <div className="mb-4">
                <h4 className="mb-6">
                  Seamlessly integrate your data to power AI applications
                </h4>
                <p className="mb-6">
                  Harness your structured or unstructured data from anywhere in
                  your organization, seamlessly integrating and ingesting it to
                  power AI applications
                </p>
                <div className="button_container justify-center">
                  <button className="button">Request Demo</button>
                  <button className="link_button flex items-center gap-1 link_button_primary">
                    Learn More{" "}
                    <span className="icon">
                      <IoMdArrowForward />
                    </span>
                  </button>
                </div>
              </div>
              <div className="text-center">
                <Image
                  className="mx-auto text-center"
                  src={Integration}
                  alt={"Integration"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container card_v2 py-10 px-12">
        <div className="flex items-center gap-8">
          <div className="left_side w-full">
            <h4 className="mb-6">
              Monitor your applications in <br />
              production
            </h4>
            <p className="ai_system_org_text">
              Ensure consistent performance and reliability of LLM applications
              in production
            </p>
            <div className="mt-6 mb-10">
              <div className="ai_system_org_text flex items-center mb-5 gap-2">
                <FaCheck />
                Comprehensive Tracing
              </div>
              <div className="ai_system_org_text flex items-center mb-5 gap-2">
                <FaCheck />
                Robust Evaluations Framework
              </div>
              <div className="ai_system_org_text flex items-center mb-5 gap-2">
                <FaCheck />
                Detailed Logs
              </div>
            </div>
            <div className="button_container">
              <button className="button">Request Demo</button>
              <button className="link_button flex items-center gap-1 link_button_primary">
                Learn More{" "}
                <span className="icon">
                  <IoMdArrowForward />
                </span>
              </button>
            </div>
          </div>
          <div className="right_side w-full">
            <Image src={AI_SYSTEM_ORG} alt={"AI_SYSTEM_ORG"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISoltion;
