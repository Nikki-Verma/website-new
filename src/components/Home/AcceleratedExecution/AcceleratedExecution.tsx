"use client";

import { ReliableIcon } from "@/util/icons";
import Image from "next/image";
import { useState } from "react";
import GenScale from "../../../assets/png/scale-gen-ai.png";
import "./style.css";
const data = [
  {
    heading: "Secure the Generative AI in your enterprise",
    description: [
      "Robust data encryption and access controls at both application and infrastructure layers",
      "Deploy on your own cloud for the highest data security",
      "Strong compliance measures in place, including SOC2 & ISO 27001",
    ],
    buttonName: "Get started",
    buttonLink: "",
    image: GenScale,
  },
  {
    heading: "Scale your Gen AI to production with ease",
    description: [
      "Highest interoperability to connect complex data sources with our data connector engine",
      "Built-in autoscaling of infrastructure to handle varying workloads seamlessly",
      "Flexible deployment options across multiple cloud environments or on-premise solutions",
    ],
    buttonName: "Get started",
    buttonLink: "",
    image: GenScale,
  },
  {
    heading: "Reliably run Gen AI for your enterprise",
    description: [
      "Experience low latency with real-time streaming and parallel processing for optimal performance",
      "Enhance LLM reliability with guardrails, RAG, finetuning, and memory features",
      "Full transparency over applications with comprehensive LLM observability",
    ],
    buttonName: "Get started",
    buttonLink: "",
    image: ReliableIcon,
  },
];
const AcceleratedExecution = () => {
  const [currentSelect, setCurrentSelect] = useState(data[0]);
  return (
    <section className="home_page_container">
      <div className="mx-auto mt-8 mb-16 items-center flex flex-col gap-8">
        <div className="home_page_heading_tag">Accelerated Execution</div>
        <div className="home_page_heading">
          Quickly build your experiments, iterate & <br /> productionize with in
          a month
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10 w-full">
        <div className="accelerated_exec_box_container w-1/5">
          <Image
            alt="POC-development-icon"
            src={ReliableIcon}
            height={94}
            width={95}
          />
          <div className="flex flex-col items-center">
            <div className="accelerated_exec_box_heading">PoC Development</div>
            <div className="accelerated_exec_box_description">(2-5 Days)</div>
          </div>
        </div>
        <div className="accelerated_exec_box_container w-1/5">
          <Image
            alt="POC-development-icon"
            src={ReliableIcon}
            height={94}
            width={95}
          />
          <div className="flex flex-col items-center">
            <div className="accelerated_exec_box_heading">PoC Development</div>
            <div className="accelerated_exec_box_description">(2-5 Days)</div>
          </div>
        </div>
        <div className="accelerated_exec_box_container w-1/5">
          <Image
            alt="POC-development-icon"
            src={ReliableIcon}
            height={94}
            width={95}
          />
          <div className="flex flex-col items-center">
            <div className="accelerated_exec_box_heading">PoC Development</div>
            <div className="accelerated_exec_box_description">(2-5 Days)</div>
          </div>
        </div>
        <div className="accelerated_exec_box_container w-1/5">
          <Image
            alt="POC-development-icon"
            src={ReliableIcon}
            height={94}
            width={95}
          />
          <div className="flex flex-col items-center">
            <div className="accelerated_exec_box_heading">PoC Development</div>
            <div className="accelerated_exec_box_description">(2-5 Days)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcceleratedExecution;
