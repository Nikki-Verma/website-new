"use client";

import AgenticWorkflowIcon from "@/components/Icons/AgenticWorkflowIcon";
import AiAgentIcon from "@/components/Icons/AiAgentIcon";
import DataStorageIcon from "@/components/Icons/DataStorageIcon";
import DeploymentIcon from "@/components/Icons/DeploymentIcon";
import ObservabilityIcon from "@/components/Icons/ObservabilityIcon";
import SecureAiIcon from "@/components/Icons/SecureAiIcon";
import {
  AgenticWorkflowsImage,
  AiAgentsImage,
  BoxesBgImage1,
  DataKnowledgeImage,
  DeploymentImage,
  ObservabilityImage,
  SimplaiStudioImage,
} from "@/util/images";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./style.css";
const data = [
  {
    heading:
      "Enterprise Platform for experimenting, building, deploying, and monitoring Gen AI applications",
    link: "/llmstudio",
    image: (
      <Image src={SimplaiStudioImage} alt={"simplai-studio-dashboard-image"} />
    ),
  },
  {
    heading:
      "Develop intelligent conversational AI,  assistants, co-pilots, and AI employees",
    image: <Image src={AiAgentsImage} alt={"ai-agents-dashboard-image"} />,
    link: "/ai-agents",
  },
  {
    heading:
      "Automate complex workflows by using AI chaining to handle multi-step tasks",
    image: (
      <Image
        src={AgenticWorkflowsImage}
        alt={"agentic-workflows-dashboard-image"}
      />
    ),
    link: "/agentic-process-automation",
  },
  {
    heading:
      "Leverage your data to ground AI, ensuring high accuracy and relevance",
    image: (
      <Image
        src={DataKnowledgeImage}
        alt={"dataset-knowledgebase-workflows-dashboard-image"}
      />
    ),
    link: "/rag",
  },
  {
    heading:
      "Build and deploy AI applications rapidly, without needing extensive coding skills",
    image: <Image src={DeploymentImage} alt={"deployment-dashboard-image"} />,
    link: "/llmstudio#deployment",
  },
  {
    heading:
      "Monitor AI performance with granular tracing and evaluation metrics",
    image: (
      <Image src={ObservabilityImage} alt={"observability-dashboard-image"} />
    ),
    link: "/llmstudio#observability",
  },
];
const Features = () => {
  const [currentSelect, setCurrentSelect] = useState(data[0]);
  const [index, setIndex] = useState(0);
  const handle = (number: number) => {
    setIndex(number);
    setCurrentSelect(data[number]);
  };

  return (
    <section
      className="section"
      style={{
        backgroundImage: `url(${BoxesBgImage1?.src}) , linear-gradient(180deg, #fcfbff 0%, #f1f1ff 100%)`,
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
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
        <div className="button_section_home">
          <button
            onClick={() => handle(0)}
            className={index === 0 ? "round_button_selected" : "round_button"}
          >
            <SecureAiIcon style={{ height: 24, width: 24 }} />
            SimplAI Studio
          </button>
          <button
            onClick={() => handle(1)}
            className={index === 1 ? "round_button_selected" : "round_button"}
          >
            <AiAgentIcon style={{ height: 24, width: 24 }} />
            AI Agents
          </button>
          <button
            onClick={() => handle(2)}
            className={index === 2 ? "round_button_selected" : "round_button"}
          >
            <AgenticWorkflowIcon style={{ height: 24, width: 24 }} />
            Agentic Workflows
          </button>
          <button
            onClick={() => handle(3)}
            className={index === 3 ? "round_button_selected" : "round_button"}
          >
            <DataStorageIcon style={{ height: 24, width: 24 }} />
            Data & Knowledge
          </button>
          <button
            onClick={() => handle(4)}
            className={index === 4 ? "round_button_selected" : "round_button"}
          >
            <DeploymentIcon style={{ height: 24, width: 24 }} />
            Deployment
          </button>
          <button
            onClick={() => handle(5)}
            className={index === 5 ? "round_button_selected" : "round_button"}
          >
            <ObservabilityIcon style={{ height: 24, width: 24 }} />
            Observability
          </button>
        </div>
        <Row
          justify={"center"}
          gutter={[20, 20]}
          style={{ textAlign: "center" }}
        >
          <Col
            xs={24}
            sm={24}
            md={18}
            lg={12}
            xl={12}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="home-feature-tab-heading"
          >
            {currentSelect?.heading}
          </Col>
          <Col
            xs={24}
            sm={24}
            md={18}
            lg={16}
            xl={16}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link href={currentSelect?.link} prefetch>
              <button className="button">Know more</button>
            </Link>
          </Col>
          <Col
            span={24}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {currentSelect?.image}
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Features;
