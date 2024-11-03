import Image from "next/image";

import {
  ChatbotFeatureImage,
  CitationImage,
  chatbotImage,
} from "@/util/images";
import { Col, Row } from "antd";
const BuildAgent = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading">
            Build smart AI agents in minutes
          </div>
          <p className="section_subheading w-2/3">
            SimplAI’s platform provides a no-fuss way for technical and product
            teams to create intelligent AI agents and employees—without the
            hassle.
          </p>
        </div>
        <Row gutter={[36, 36]} justify={"space-between"} align={"stretch"}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div className="card_v2 h-full flex justify-between flex-col py-8 px-8">
              <div>
                <h4 className="text-left mb-4 w-5/6">
                  Conversational AI, voice AI, co-pilots, and assistants
                </h4>
                <p className="text-left">
                  From AI-powered chatbots to task-specific AI agents, deploy
                  conversational systems that engage users naturally, answer
                  complex queries, and perform actions on your behalf.
                </p>
              </div>
              <div className="mx-auto text-center w-full">
                <Image
                  src={chatbotImage}
                  alt="data-connector"
                  className="text-center mx-auto"
                />
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div className="card_v2 h-full flex justify-between flex-col py-8 px-8 gap-4">
              <div>
                <h4 className="text-left mb-4 w-5/6">
                  Knowledge-equipped and function-calling sub-agents
                </h4>
                <p className="text-left">
                  Your multi-agent AI system goes beyond conversation—each
                  sub-agent can retrieve data, perform tasks, or interact with
                  other systems through function calling, enabling specialized
                  roles within a larger process
                </p>
              </div>
              <div className="">
                <Image
                  src={ChatbotFeatureImage}
                  alt="BuildProductionImage"
                  className="w-full"
                />
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div className="card_v2 py-8 px-8">
              <Row
                gutter={[16, 16]}
                justify={"space-between"}
                align={"stretch"}
              >
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={12}
                  xl={12}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h4 className="text-left mb-4 w-5/6">
                    Citations and guardrails
                  </h4>
                  <p className="text-left pr-4">
                    Ensure every response is grounded in verifiable data, with
                    citations linked to original sources. Built-in guardrails
                    keep your agents safe, reliable, and factual.
                  </p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                  <Image
                    src={CitationImage}
                    alt="RetrievalImage"
                    className="w-full"
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default BuildAgent;
