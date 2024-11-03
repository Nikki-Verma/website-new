"use client";

import {
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
    heading: "API & webhooks",
    description:
      "Integrate your AI applications seamlessly into any workflow or system.",
    imageAlt: "poc-dev-icon",
    image: ApiIcon,
  },
  {
    heading: "Embed code",
    description: "Easily add to your application with a simple embed code.",
    imageAlt: "iterate-refine-icon",
    image: EmbedIcon,
  },
  {
    heading: "Mobile SDK",
    description: "Deploy on mobile apps with our SDK for iOS and Android.",
    imageAlt: "integrate-agent-icon",
    image: MobileSdkIcon,
  },
  {
    heading: "Connect with popular apps",
    description: "Directly integrate with WhatsApp, Slack, Telegram, and more.",
    imageAlt: "productise-ai-icon",
    image: ConnectionIcon,
  },
];

const AgentDeployment = ({
  EncryptionDataPoints,
  title,
  subTitle,
  mainImage,
}: {
  EncryptionDataPoints: any[];
  title: string | null | undefined;
  subTitle: string | null | undefined;
  mainImage: any;
}) => {
  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading">{title}</div>
          <p className="text-center text-lg">{subTitle}</p>
        </div>
        <div className="card_v2 flex w-full px-8 py-8 mb-12">
          <Row gutter={[36, 36]} justify={"space-between"} align={"stretch"}>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image src={mainImage} alt="features-image" />
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
            Deployment & integration made simple
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
