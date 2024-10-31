"use client";

import {
  AiEncryption,
  ApiIcon,
  ConnectionIcon,
  EmbedIcon,
  MobileSdkIcon,
} from "@/util/images";
import { Col, Row } from "antd";
import Image from "next/image";
import "./style.css";
const data = [
  {
    heading: "API & Webhooks",
    description:
      "Integrate your AI agents seamlessly into any workflow or system",
    imageAlt: "poc-dev-icon",
    image: ApiIcon,
  },
  {
    heading: "Embed Code",
    description:
      "Easily add AI agents to your website with a simple embed code",
    imageAlt: "iterate-refine-icon",
    image: EmbedIcon,
  },
  {
    heading: "Mobile SDK",
    description:
      "Deploy AI agents on mobile apps with our SDK for iOS and Android",
    imageAlt: "integrate-agent-icon",
    image: MobileSdkIcon,
  },
  {
    heading: "Connect with Popular Apps",
    description: "Directly integrate with WhatsApp, Slack, Telegram, and more",
    imageAlt: "productise-ai-icon",
    image: ConnectionIcon,
  },
];

const AgentDeployment = ({
  EncryptionDataPoints,
  title,
  subTitle,
}: {
  EncryptionDataPoints: any[];
  title: string | null | undefined;
  subTitle: string | null | undefined;
}) => {
  return (
    <section className="section">
      <div className="container">
        <div className="card_v2 flex w-full px-8 py-8 mb-12">
          <Row gutter={[36, 36]} justify={"space-between"} align={"stretch"}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <h4 className="text-left mb-4 w-5/6">{title}</h4>
              <p className="text-left pr-4 mb-8">{subTitle}</p>
              <Image src={AiEncryption} alt="Ai-encryption-image" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              {EncryptionDataPoints?.map((data) => {
                return (
                  <div className="card_points_container">
                    <Image
                      alt={data?.imageAlt ?? "icon"}
                      src={data?.image}
                      height={70}
                      width={70}
                      style={{ margin: "0px auto" }}
                    />
                    <div className="flex flex-col items-start gap-2">
                      <div className="features_box_heading">
                        {data?.heading}
                      </div>
                      <div className="features_box_description">
                        {data.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Col>
          </Row>
        </div>
        <div className="section_heading_container">
          <div className="home_page_heading">
            Deployment & Integration Made Simple
          </div>
        </div>

        <Row gutter={[12, 12]} justify={"space-between"}>
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

export default AgentDeployment;
