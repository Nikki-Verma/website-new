"use client";

import AgenticWorkflowIcon from "@/components/Icons/AgenticWorkflowIcon";
import AiAgentIcon from "@/components/Icons/AiAgentIcon";
import DataStorageIcon from "@/components/Icons/DataStorageIcon";
import DeploymentIcon from "@/components/Icons/DeploymentIcon";
import ObservabilityIcon from "@/components/Icons/ObservabilityIcon";
import SecureAiIcon from "@/components/Icons/SecureAiIcon";
import {
  AiAgentsImage,
  BoxesBgImage1,
  DataKnowledgeImage,
  DeploymentImage,
  ObservabilityImage,
  SimplaiStudioImage,
  VideoContainerAgenticProcessImage,
} from "@/util/images";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./style.css";
const data = [
  {
    heading:
      "An enterprise-grade platform for experimenting, building, deploying, and monitoring agentic AI applications, featuring an intuitive UI/UX",
    link: "/simplai-studio",
    image: (
      <Image
        src={SimplaiStudioImage}
        alt={"simplai-studio-dashboard-image"}
        // style={{
        //   borderRadius: "10px",
        //   /* DP for website */
        //   boxShadow:
        //     "0px 20.039px 40.078px -9.619px rgba(0, 0, 0, 0.25), 0px 0px 12.024px 0px rgba(0, 0, 0, 0.07)",
        // }}
      />
    ),
    tabName: "SimplAI Studio",
    tabIcon: <SecureAiIcon style={{ height: 24, width: 24 }} />,
  },
  {
    heading:
      "Develop advanced multi-agent systems and intelligent conversational AI, including virtual assistants, co-pilots, and AI employees",
    image: <Image src={AiAgentsImage} alt={"ai-agents-dashboard-image"} />,
    link: "/ai-agents",
    tabName: "AI Agents",
    tabIcon: <AiAgentIcon style={{ height: 24, width: 24 }} />,
  },
  {
    heading:
      "Automate complex workflows and processes with intelligent decision-making, using AI chaining to streamline multi-step processes",
    image: (
      <Image
        src={VideoContainerAgenticProcessImage}
        alt={"agentic-workflows-dashboard-image"}
      />
    ),
    link: "/agentic-process-automation",
    tabName: "Agentic Automations",
    tabIcon: <AgenticWorkflowIcon style={{ height: 24, width: 24 }} />,
  },
  {
    heading:
      "Leverage your enterprise data to ground AI applications, ensuring accuracy, trustworthiness, and relevance in all interactions",
    image: (
      <Image
        src={DataKnowledgeImage}
        alt={"dataset-knowledgebase-workflows-dashboard-image"}
      />
    ),
    link: "/agentic-rag",
    tabName: "Data & Knowledge",
    tabIcon: <DataStorageIcon style={{ height: 24, width: 24 }} />,
  },
  {
    heading:
      "Rapidly deploy AI applications, integrating them easily into existing systems for immediate functionality and value",
    image: <Image src={DeploymentImage} alt={"deployment-dashboard-image"} />,
    link: "/simplai-studio#deployment",
    tabName: "Deployment",
    tabIcon: <DeploymentIcon style={{ height: 24, width: 24 }} />,
  },
  {
    heading:
      "Monitor AI performance through granular tracing and evaluation metrics, ensuring transparency and ongoing optimization",
    image: (
      <Image src={ObservabilityImage} alt={"observability-dashboard-image"} />
    ),
    link: "/simplai-studio#observability",
    tabName: "Observability",
    tabIcon: <ObservabilityIcon style={{ height: 24, width: 24 }} />,
  },
];
const Features = () => {
  const [currentSelect, setCurrentSelect] = useState(data[0]);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 596);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 595);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
            Agentic AI platform that helps to{" "}
            <a className="heading_highlighter"> build, deploy and monitor </a>{" "}
            <br />
            AI solutions - without technical complexity
          </div>
        </div>
        {!isMobile ? (
          <>
            <div className="button_section_home">
              <button
                onClick={() => handle(0)}
                className={
                  index === 0 ? "round_button_selected" : "round_button"
                }
              >
                <SecureAiIcon style={{ height: 24, width: 24 }} />
                SimplAI Studio
              </button>
              <button
                onClick={() => handle(1)}
                className={
                  index === 1 ? "round_button_selected" : "round_button"
                }
              >
                <AiAgentIcon style={{ height: 24, width: 24 }} />
                AI Agents
              </button>
              <button
                onClick={() => handle(2)}
                className={
                  index === 2 ? "round_button_selected" : "round_button"
                }
              >
                <AgenticWorkflowIcon style={{ height: 24, width: 24 }} />
                Agentic Automations
              </button>
              <button
                onClick={() => handle(3)}
                className={
                  index === 3 ? "round_button_selected" : "round_button"
                }
              >
                <DataStorageIcon style={{ height: 24, width: 24 }} />
                Data & Knowledge
              </button>
              <button
                onClick={() => handle(4)}
                className={
                  index === 4 ? "round_button_selected" : "round_button"
                }
              >
                <DeploymentIcon style={{ height: 24, width: 24 }} />
                Deployment
              </button>
              <button
                onClick={() => handle(5)}
                className={
                  index === 5 ? "round_button_selected" : "round_button"
                }
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
                lg={16}
                xl={16}
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
          </>
        ) : (
          <>
            {data?.map((itemDetail: any) => {
              return (
                <div className="mb-4">
                  <div className="button_section_home">
                    <button
                      style={{ cursor: "auto" }}
                      className={"round_button_selected"}
                    >
                      {itemDetail?.tabIcon ?? ""}
                      {itemDetail?.tabName ?? ""}
                    </button>
                  </div>
                  <Row
                    justify={"center"}
                    gutter={[20, 20]}
                    style={{ textAlign: "center" }}
                  >
                    <Col
                      span={24}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                      className="home-feature-tab-heading"
                    >
                      {itemDetail?.heading}
                    </Col>
                    <Col
                      span={24}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Link href={itemDetail?.link} prefetch>
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
                      {itemDetail?.image}
                    </Col>
                  </Row>
                </div>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
};

export default Features;
