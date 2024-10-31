import Image from "next/image";

import {
  DataConnectorImage,
  DocPEImage,
  IntelligentDMImage,
  workflowAutomationImage,
} from "@/util/images";
import { Col, Row } from "antd";
const BuildAgenticProcess = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading">
            Build Intelligent Workflows in Minutes
          </div>
          <p className="section_subheading w-2/3">
            SimplAI’s platform provides a seamless way for technical and product
            teams to automate complex processes—without the complexity.
          </p>
        </div>
        <Row gutter={[36, 36]} justify={"space-between"} align={"stretch"}>
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
                    Document Processing & Extraction
                  </h4>
                  <p className="text-left pr-4">
                    Automatically extract, analyze, and organize data from
                    structured and unstructured documents, streamlining your
                    data flow
                  </p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={10} xl={8}>
                  <Image
                    src={DocPEImage}
                    alt="Document-process-extraction-image"
                    height={300}
                    width={300}
                  />
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div className="card_v2 h-full flex justify-between flex-col py-8 px-8">
              <div>
                <h4 className="text-left mb-4 w-5/6">Workflow Automation</h4>
                <p className="text-left">
                  Create automated workflows that handle repetitive tasks,
                  improving efficiency and reducing manual errors
                </p>
              </div>
              <div className="mx-auto text-center w-full">
                <Image
                  src={workflowAutomationImage}
                  alt="data-connector"
                  className="text-center mx-auto"
                />
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div className="card_v2 h-full flex justify-between flex-col py-8 px-8">
              <div>
                <h4 className="text-left mb-4 w-5/6">
                  Intelligent Decision Making
                </h4>
                <p className="text-left">
                  Equip your processes with AI-driven decision-making that
                  reacts to real-time data and adjusts workflows dynamically
                </p>
              </div>
              <div className="">
                <Image
                  src={IntelligentDMImage}
                  alt="BuildProductionImage"
                  className="text-center mx-auto"
                />
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div className="card_v2 h-full flex justify-between flex-col py-8 px-8">
              <div>
                <h4 className="text-left mb-4 w-5/6">Guardrails</h4>
                <p className="text-left">
                  Leverage built-in safety checks and verifiable data to
                  maintain reliability and compliance, configurable within
                  minutes
                </p>
              </div>
              <div className="">
                <Image
                  src={workflowAutomationImage}
                  alt="BuildProductionImage"
                  className="text-center mx-auto"
                />
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div className="card_v2 py-8 px-8 h-full">
              <div className="h-full flex justify-between flex-col ">
                <div>
                  <h4 className="text-left mb-4">Data connectors</h4>
                  <p className="text-left">
                    Seamlessly sync data from over 300 sources, enabling smooth
                    and rapid data integration across platforms.
                  </p>
                </div>
                <div className="mx-auto text-center w-full">
                  <Image
                    src={DataConnectorImage}
                    alt="data-connector"
                    className="text-center mx-auto"
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

export default BuildAgenticProcess;
