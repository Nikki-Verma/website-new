"use client";

import {
  IntegrateAgent,
  IterateRefine,
  PocDev,
  ProductiseAi,
} from "@/util/icons";
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
    description: "(2-5 Days)",
    imageAlt: "iterate-refine-icon",
    image: IterateRefine,
  },
  {
    heading: "Integrate Agentic AI",
    description: "(5-10 Days)",
    imageAlt: "integrate-agent-icon",
    image: IntegrateAgent,
  },
  {
    heading: "Productize AI System ",
    description: "(5-10 Days)",
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
            Quickly build your experiments, iterate & <br /> productionize with
            in a month
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 w-full">
          {data?.map((cardDetail) => {
            return (
              <div className="accelerated_exec_box_container w-1/5">
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AcceleratedExecution;
