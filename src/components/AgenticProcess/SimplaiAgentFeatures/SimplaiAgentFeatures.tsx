"use client";

import { ScalabilityIcon, SecurityIcon, SpeedIcon } from "@/util/images";
import { Col, Row } from "antd";
import Image from "next/image";
import { useState } from "react";
import "./style.css";
const data = [
  {
    heading: "Speed and Simplicity",
    description:
      "Build agents faster with an intuitive interface and no-code tools that simplify agent creation, configuration, and deployment",
    imageAlt: "poc-dev-icon",
    image: SpeedIcon,
  },
  {
    heading: "Scalability",
    description:
      "From small teams to enterprise-scale applications, our platform grows with you",
    imageAlt: "iterate-refine-icon",
    image: ScalabilityIcon,
  },
  {
    heading: "Security",
    description:
      "Industry-leading SOC 2 and ISO 27001 compliance with secure encryption keep data protected and ensure enterprise-level security.",
    imageAlt: "integrate-agent-icon",
    image: SecurityIcon,
  },
];
const SimplaiAgentFeatures = () => {
  const [currentSelect, setCurrentSelect] = useState(data[0]);
  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading">Why Choose SimplAI?</div>
        </div>
        <Row gutter={[12, 12]} justify={"space-around"}>
          {data?.map((cardDetail) => {
            return (
              <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                <div className="Simplai_features_box_container">
                  <Image
                    alt={cardDetail.imageAlt}
                    src={cardDetail?.image}
                    height={54}
                    width={54}
                  />
                  <div className="flex flex-col items-center gap-2">
                    <div className="Simplai_features_box_heading">
                      {cardDetail?.heading}
                    </div>
                    <div className="Simplai_features_box_description">
                      {cardDetail?.description}
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

export default SimplaiAgentFeatures;
