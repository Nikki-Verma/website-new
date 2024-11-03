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
            Build and deploy AI solutions — without <br />
            technical complexity
          </div>
        </div>

        <Row gutter={[36, 36]} justify={"space-between"} align={"stretch"}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="card_v2 px-8 py-8 w-full">
              <div className="gap-2 gap-4 h-full flex justify-between flex-col">
                <div>
                  <h4 className="heading_24 text-left">
                    Intelligent AI agents
                  </h4>
                  <p className="">
                    Design conversational agents that manage complex
                    interactions with ease, utilizing chat history, guardrails,
                    and real-time streaming.
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
                  <h4 className="heading_24 text-left">AI & LLM chaining</h4>
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
                    Automated AI workflows
                  </h4>
                  <p className="">
                    Automate workflows with multi-step sequencing, blending
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
                    Flexible deployment options
                  </h4>
                  <p>
                    Deploy AI systems in the SimplAI cloud, on your private
                    cloud, or on-premise for maximum data control and
                    compliance.
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
