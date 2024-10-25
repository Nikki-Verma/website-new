"use client";

import Image from "next/image";
import { useState } from "react";
import Relaible from "../../../assets/png/reliable.png";
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
    image: Relaible,
  },
];
const PlatformBuild = () => {
  const [currentSelect, setCurrentSelect] = useState(data[0]);
  const [index, setIndex] = useState(0);
  const handle = (number: number) => {
    setIndex(number);
    setCurrentSelect(data[number]);
  };
  return (
    <section className="home_page_container">
      <div className="mx-auto mt-8 mb-16 items-center flex flex-col gap-8">
        <div className="home_page_heading_tag">Why SimplAI?</div>
        <div className="home_page_heading">
          Platform built with enterprise <br />
          success in mind
        </div>
      </div>

      {/* buttons */}
      <div className="button_section">
        <button
          onClick={() => handle(0)}
          className={index === 0 ? "round_button_selected" : "round_button"}
        >
          Secure AI
        </button>
        <button
          onClick={() => handle(1)}
          className={index === 1 ? "round_button_selected" : "round_button"}
        >
          Scalable AI
        </button>
        <button
          onClick={() => handle(2)}
          className={index === 2 ? "round_button_selected" : "round_button"}
        >
          Reliable AI
        </button>
      </div>

      <div className="platform_build_box_container mb-0 py-10 px-12 flex-wrap justify-between gap-x-56">
        <div className="flex flex-1 flex-col">
          <h4 className="text-[color:--black-v2] mb-6">
            {currentSelect.heading}
          </h4>
          <ul className="platform_feature_list list-disc pl-4">
            {currentSelect.description.map((value: string) => {
              return <li>{value}</li>;
            })}
          </ul>
        </div>
        <div className="flex justify-center m-auto">
          <Image src={currentSelect.image} alt={"relaible-icon"} />
        </div>
      </div>
    </section>
  );
};

export default PlatformBuild;
