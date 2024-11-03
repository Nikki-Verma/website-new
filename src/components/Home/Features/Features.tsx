"use client";

import Image from "next/image";
import AgenticWorkflows from "../../../assets/svg/icons/AgenticWorkflows.svg";
import AiAgents from "../../../assets/svg/icons/AiAgents.svg";
import DataIntegrationEngine from "../../../assets/svg/icons/DataIntegrationEngine.svg";
import EmbedAi from "../../../assets/svg/icons/EmbedAi.svg";
import EnterpriseKnowledgebase from "../../../assets/svg/icons/EnterpriseKnowledgebase.svg";
import Observability from "../../../assets/svg/icons/Observability.svg";
import Coding from "../../../assets/svg/icons/coding.svg";

import { Col, Row } from "antd";
import Link from "next/link";
import "./style.css";
const data = [
  {
    heading: "Build Intelligent Agents",
    description:
      "Develop intelligent conversational AI, including assistants, co-pilots, and AI employees.",
    image: AiAgents,
    imageAlt: "ai-agent-icon",
    link: "/ai-agents",
  },
  {
    heading: "Automate with Agentic Workflows",
    description:
      "Automate complex workflows by using AI chaining to handle multi-step tasks.",
    image: AgenticWorkflows,
    imageAlt: "agentic workflow-icon",
    link: "/agentic-process-automation",
  },
  {
    heading: " Leverage Enterprise Knowledge",
    description:
      "Leverage your data to ground AI, ensuring high accuracy and relevance.",
    image: EnterpriseKnowledgebase,
    imageAlt: "enterprise-knowledgebase",
    link: "/rag",
  },
  {
    heading: "Seamlessly Embed AI",
    description:
      "Integrate AI into your system through APIs, webhooks, SDKs, and embedded UIs.",
    image: EmbedAi,
    imageAlt: "embed-ai-icon",
    link: "",
  },
  {
    heading: "Effortless Data Integration Engine",
    description:
      "Bring your data pipelines to your AI applications with our 300+ readily available connectors.",
    image: DataIntegrationEngine,
    imageAlt: "data-integration-engine-icon",
    link: "",
  },
  {
    heading: "Build with No Code / Low Code",
    description:
      "Build and deploy AI applications rapidly, without needing extensive coding skills.",
    image: Coding,
    imageAlt: "no-code-icon",
    link: "",
  },

  {
    heading: "Experiment with Models",
    description:
      "Experiment, finetune, and deploy any of the popular open source and closed source models.",
    image: EnterpriseKnowledgebase,
    imageAlt: "mod-icon",
    link: "",
  },
  {
    heading: "Ensure Observability",
    description:
      "Monitor AI performance with granular tracing and evaluation metrics.",
    image: Observability,
    imageAlt: "Observability-icon",
    link: "",
  },
];
const Features = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading_tag">
            For Technology & Product Teams
          </div>
          <div className="home_page_heading">
            Gen AI platform that helps to{" "}
            <a className="heading_highlighter"> build, deploy and monitor </a>{" "}
            <br />
            AI solutions - without technical complexity
          </div>
        </div>
        <Row align={"stretch"} justify={"start"} gutter={[12, 12]}>
          {data?.map((cardDetails) => {
            return (
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={6}
                xl={6}
                style={{ alignSelf: "stretch" }}
              >
                <Link href={cardDetails?.link} prefetch>
                  <div className="features_box_container">
                    <Image
                      alt={cardDetails?.imageAlt ?? "icon"}
                      src={cardDetails?.image}
                      height={32}
                      width={32}
                    />
                    <div className="flex flex-col items-start gap-2">
                      <div className="features_box_heading">
                        {cardDetails?.heading}
                      </div>
                      <div className="features_box_description">
                        {cardDetails.description}
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
};

export default Features;
