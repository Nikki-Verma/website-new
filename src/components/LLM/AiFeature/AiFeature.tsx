import {
  AiChainingImage,
  DeployImage,
  ReadilyImage,
  intelligentAi,
} from "@/util/images";
import { Col, Row } from "antd";
import Image from "next/image";
const AiFeature = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading">
            Build & Deploy AI systems without <br /> the usual overhead
          </div>
        </div>

        <Row gutter={[36, 36]} justify={"space-between"} align={"stretch"}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="card_v2 px-8 py-8 w-full">
              <div className="gap-2 gap-4 h-full flex justify-between flex-col">
                <div>
                  <h4 className="heading_24 text-left">
                    Intelligent AI Agents
                  </h4>
                  <p className="">
                    Design smart conversational agents capable of handling
                    complex interactions with ease, utilizing caching, chat
                    history, and real-time streaming for optimal performance
                  </p>
                </div>
                <div className="mx-auto">
                  <Image
                    src={intelligentAi}
                    alt="ai agent"
                    className="text-center"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="card_v2 px-8 py-8 w-full">
              <div className="gap-2 gap-4 h-full flex justify-between flex-col">
                <div>
                  <h4 className="heading_24 text-left">AI & LLM Chaining</h4>
                  <p className="">
                    Build multi-agent systems where agents collaborate and
                    independently execute tasks, using adaptive learning and
                    conditional chaining.
                  </p>
                </div>
                <div className="mx-auto">
                  <Image
                    src={AiChainingImage}
                    alt="ai agent"
                    className="text-center"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="card_v2 px-8 py-8 w-full">
              <div className="h-full flex justify-between gap-4 flex-col">
                <div>
                  <h4 className="heading_24 text-left">
                    Automated AI Workflows
                  </h4>
                  <p className="">
                    Automate workflows with multi-step execution, blending
                    traditional process automation with intelligent agents to
                    streamline operations.
                  </p>
                </div>
                <div className="mx-auto">
                  <Image
                    src={DeployImage}
                    alt="DeployImage"
                    className="text-center"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="card_v2 px-8 py-8 w-full">
              <div className="gap-2 gap-4 h-full flex justify-between flex-col">
                <div>
                  <h4 className="heading_24 text-left">
                    Flexible Deployment Options
                  </h4>
                  <p>
                    Deploy AI systems on SimplAI’s cloud, your private cloud, or
                    on-premise for maximum data control and compliance.
                  </p>
                </div>
                <div className="mx-auto">
                  <Image
                    src={ReadilyImage}
                    alt="ReadilyImage"
                    className="text-center"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AiFeature;
