"use client";

import Image from "next/image";

import {
  AccordianImage1,
  AccordianImage2,
  AccordianImage3,
  ModelFeatureImage,
} from "@/util/images";
import { Col, Collapse, CollapseProps, Row } from "antd";
import { CSSProperties, useState } from "react";
import "./style.css";

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle,
) => [
  {
    key: 1,
    label: "Access to all Global LLMs",
    children: (
      <p>
        Discover and integrate with closed-source models using our unified API
        and one-click connectivity.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: 2,
    label: "Deploy open source models on your own cloud",
    children: (
      <p>
        Seamlessly deploy open-source models on SimplAI’s cloud or your own
        cloud, with optimized loading and pre-configured GPU options.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: 3,
    label: "LLM playground",
    children: (
      <p>
        Experiment with prompts and model configurations in a live, interactive
        environment to test, refine and iterate.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: 4,
    label: "Fine tune any open source model",
    children: (
      <p>
        Customize models with advanced techniques like quantization, low-rank
        adaptation, etc. —all with no coding required.
      </p>
    ),
    style: { ...panelStyle, marginBottom: "0" },
  },
];

const data = [
  { image: AccordianImage1 },
  { image: AccordianImage2 },
  {
    image: AccordianImage3,
  },
  {
    image: ModelFeatureImage,
  },
];
const ModelFeatures = () => {
  const [currentSelect, setCurrentSelect] = useState(data[0]);
  const handle = (number: number) => {
    setCurrentSelect(data[number - 1]);
  };
  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    borderRadius: "8px",
    border: "0.5px solid var(--Stroke, #A6BCDA)",
    background: "var(--Support, #F8FAFC)",
  };
  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading">
            Connect, Deploy, Experiment and Finetune <br /> any LLM model
          </div>
        </div>

        <div className="card_v2 px-4 py-8">
          <Row justify={"space-between"} align={"top"} gutter={[16, 16]}>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
              className="collapse-container"
            >
              <Collapse
                bordered={false}
                items={getItems(panelStyle)}
                style={{ background: "var(--white)", width: "100%" }}
                className="accordian_custom"
                expandIconPosition={"end"}
                accordion
                defaultActiveKey={1}
                onChange={(key: any) => {
                  handle(Number(key));
                }}
              />
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <Image
                src={currentSelect?.image}
                alt="RetrievalImage"
                className="w-9/12"
              />
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default ModelFeatures;
