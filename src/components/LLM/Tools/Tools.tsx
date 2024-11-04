import Image from "next/image";

import {
  AutomacticImage,
  ImproveImage,
  TraceVisibilityImage,
} from "@/util/images";
import { Col, Row } from "antd";

const Tools = () => {
  return (
    <section className="section" id="observability">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading">
            Observe, refine, iterate and optimize with confidence
          </div>
        </div>
        <Row gutter={[36, 36]} justify={"space-between"} align={"stretch"}>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className="card_v2_with_hover w-full px-8 pb-8 pt-10">
              <div className="mx-auto flex flex-col justify-center">
                <Image
                  src={TraceVisibilityImage}
                  alt={"TraceVisibilityImage"}
                  className="tex-center mx-auto"
                  height={150}
                />

                <h4 className="heading_24 text-center mb-4 mt-8">
                  Granular visibility with traces
                </h4>
                <p className="text-center">
                  Get a clear view of every sequence of calls, allowing you to
                  fine-tune performance with precision and detail
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className="card_v2_with_hover w-full px-8 pb-8 pt-10">
              <div className="mx-auto flex flex-col justify-center">
                <Image
                  src={AutomacticImage}
                  alt={"AutomacticImage"}
                  className="tex-center mx-auto"
                  height={150}
                />

                <h4 className="heading_24 text-center mb-4 mt-8">
                  Automatic evaluation metrics
                </h4>
                <p className="text-center">
                  Gain insights into the robustness and reliability of your LLM
                  applications through built-in metrics, ensuring consistent
                  performance
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className="card_v2_with_hover w-full px-8 pb-8 pt-10">
              <div className="mx-auto flex flex-col justify-center">
                <Image
                  src={ImproveImage}
                  alt={"ImproveImage"}
                  className="tex-center mx-auto"
                  height={150}
                />

                <h4 className="heading_24 text-center mb-4 mt-8">
                  Evaluate and improve applications
                </h4>
                <p className="text-center">
                  Continually enhance your LLM models with actionable insights,
                  keeping you ahead of the curve in AI development
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Tools;
