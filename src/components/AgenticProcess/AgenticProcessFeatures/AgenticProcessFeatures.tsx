"use client";

import Image from "next/image";

import {
  InsuranceAgentIcon,
  InternetIcon,
  MediaIcon,
  financialServiceIcon,
  healthcareAgentIcon,
  lawScaleIcon,
} from "@/util/images";
import { Col, Row } from "antd";
import Link from "next/link";
import "./style.css";
const data = [
  {
    heading: "Healthcare",
    description:
      "Automate patient record management, claims processing, and clinical data extraction.",
    image: healthcareAgentIcon,
    imageAlt: "no-code-icon",
    url: "/healthcare",
  },
  {
    heading: "Financial Services",
    description:
      "Streamline regulatory compliance, fraud detection, and financial reporting workflows.",
    image: financialServiceIcon,
    imageAlt: "embed-ai-icon",
    url: "/bfsi",
  },
  {
    heading: "Insurance",
    description:
      "Automate claims processing, underwriting, and risk analysis for faster and more accurate operations.",
    image: InsuranceAgentIcon,
    imageAlt: "ai-agent-icon",
    url: "/insurance",
  },
  {
    heading: "Media & Entertainment",
    description:
      "Automate content review, licensing, and distribution processes across platforms.",
    image: MediaIcon,
    imageAlt: "agentic workflow-icon",
    url: "/multimedia",
  },
  {
    heading: "Legal Consulting & Research",
    description:
      "Speed up legal document analysis, case management, and compliance tracking.",
    image: lawScaleIcon,
    imageAlt: "enterprise-knowledgebase",
    url: "/legal",
  },
  {
    heading: "Online & Internet",
    description:
      "Manage large-scale data processing, content moderation, and service automation for better user experiences.",
    image: InternetIcon,
    imageAlt: "mod-icon",
    url: "",
  },
];
const AgenticProcessFeatures = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading">
            One platform. Agentic automation.
          </div>
        </div>
        <Row gutter={[12, 12]} justify={"start"}>
          {data?.map((cardDetails) => {
            return (
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Link href={cardDetails.url} prefetch>
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

export default AgenticProcessFeatures;
