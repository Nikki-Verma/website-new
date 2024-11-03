"use client";

import Image from "next/image";

import {
  AnalysisAgentIcon,
  CustomerSupportIcon,
  DomainAgent,
  EmployeeAssistantIcon,
  KnowledgeAssistantIcon,
  MarketingIcon,
  ResearchIcon,
  TaskIcon,
} from "@/util/images";
import { Col, Row } from "antd";
import "./style.css";
const data = [
  {
    heading: "Customer support agents",
    description:
      "Handle inquiries, resolve issues, and provide real-time assistance.",
    image: CustomerSupportIcon,
    imageAlt: "no-code-icon",
  },
  {
    heading: "Employee assistants",
    description:
      "Manage schedules, automate tasks, and support internal workflows.",
    image: EmployeeAssistantIcon,
    imageAlt: "embed-ai-icon",
  },
  {
    heading: "Data analysis agents",
    description:
      "Analyze data, generate reports, and provide actionable insights.",
    image: AnalysisAgentIcon,
    imageAlt: "ai-agent-icon",
  },
  {
    heading: "Task execution co-pilots",
    description: "Assist with multi-step tasks and workflow automation.",
    image: TaskIcon,
    imageAlt: "agentic workflow-icon",
  },
  {
    heading: "Research & analyst agents",
    description: "Gather, organize, and synthesize data for precise insights.",
    image: ResearchIcon,
    imageAlt: "enterprise-knowledgebase",
  },
  {
    heading: "Sales & marketing agents",
    description:
      "Automate lead generation, customer outreach, and market analysis.",
    image: MarketingIcon,
    imageAlt: "mod-icon",
  },
  {
    heading: "Knowledge assistants",
    description:
      "Retrieve information and answer complex questions from your knowledge base.",
    image: KnowledgeAssistantIcon,
    imageAlt: "data-integration-engine-icon",
  },
  {
    heading: "Domain-specific agents",
    description:
      "Tailored AI for industry-specific tasks, be it finance, healthcare, to Supply chain, HR etc.",
    image: DomainAgent,
    imageAlt: "Observability-icon",
  },
];
const AgentFeatures = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading">
            One agentic platform. Unlimited possibilities.
          </div>
        </div>
        <Row gutter={[12, 12]} justify={"start"}>
          {data?.map((cardDetails) => {
            return (
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
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
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
};

export default AgentFeatures;
