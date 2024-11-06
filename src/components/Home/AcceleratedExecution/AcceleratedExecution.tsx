"use client";

import {
  IntegrateAgent,
  IterateRefine,
  PocDev,
  ProductiseAi,
} from "@/util/icons";
import { Col, Row } from "antd";
import Image from "next/image";
import { useState } from "react";
import "./style.css";
const data = [
  {
    heading: "PoC Development",
    description: "(2-5 Days)",
    imageAlt: "poc-dev-icon",
    image: PocDev,
  },
  {
    heading: "Iterate & Refine",
    description: "(5-10 Days)",
    imageAlt: "iterate-refine-icon",
    image: IterateRefine,
  },
  {
    heading: "Integrate Agentic AI",
    description: "(2-5 Days)",
    imageAlt: "integrate-agent-icon",
    image: IntegrateAgent,
  },
  {
    heading: "Productize AI System ",
    description: "(2-5 Days)",
    imageAlt: "productise-ai-icon",
    image: ProductiseAi,
  },
];
const AcceleratedExecution = () => {
  const [currentSelect, setCurrentSelect] = useState(data[0]);
  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading_tag">Accelerated Execution</div>
          <div className="home_page_heading">
            Build complex use cases fast – from <br /> experimentation to
            production in
            <span className="heading_highlighter"> just a month</span>
          </div>
        </div>
        <Row align={"stretch"} justify={"space-evenly"} gutter={[16, 16]}>
          {data?.map((cardDetail) => {
            return (
              <Col
                xs={18}
                sm={12}
                md={12}
                lg={8}
                xl={6}
                style={{ alignSelf: "stretch" }}
              >
                <div className="accelerated_exec_box_container">
                  <Image
                    alt={cardDetail.imageAlt}
                    src={cardDetail?.image}
                    height={94}
                    width={95}
                  />
                  <div className="flex flex-col items-center">
                    <div className="accelerated_exec_box_heading">
                      {cardDetail?.heading}
                    </div>
                    <div className="accelerated_exec_box_description">
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

export default AcceleratedExecution;
