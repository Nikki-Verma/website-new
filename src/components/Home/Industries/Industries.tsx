"use client";

import { ReliableIcon } from "@/util/icons";
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
const Industries = () => {
  const [currentSelect, setCurrentSelect] = useState(data[0]);
  return (
    <section className="home_page_container">
      <div className="mx-auto mt-8 items-center flex flex-col gap-8">
        <div className="home_page_heading_tag">Industries</div>
        <div className="home_page_heading">
          We’ve built an AI-driven platform for launching business <br />
          transformation. Ready for takeoff?
        </div>
      </div>
      <div className="industries_box_container grid grid-cols-3  mb-0 mt-8 flex">
        <div className="industries_box_left_container flex flex-col col-span-1 gap-4">
          <button className="industries_box_button_selected">Secure AI</button>
          <button className="industries_box_button">Scalable AI</button>
          <button className="industries_box_button">Reliable AI</button>
        </div>
        <div
          className="flex flex-1 col-span-2"
          style={{
            backgroundImage: `url("@/assets/svg/Images/coinHourglass.svg")`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default Industries;
