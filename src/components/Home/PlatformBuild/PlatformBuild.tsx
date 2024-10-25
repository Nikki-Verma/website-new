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
const PlatformBuild = () => {
  const [currentSelect, setCurrentSelect] = useState(data[0]);
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
        <button className="round_button_selected">Secure AI</button>
        <button className="round_button">Scalable AI</button>
        <button className="round_button">Reliable AI</button>
      </div>

      <div className="platform_build_box_container mb-0 py-10 px-12 flex-wrap justify-between gap-x-56">
        <div className="flex flex-1 flex-col">
          <h4 className="text-[color:--black-v2] mb-6">
            Create safe and secure applications with data privacy
          </h4>
          <ul className="platform_feature_list list-disc pl-4">
            <li>
              Experience low latency with real-time streaming and parallel
              processing for optimal performance
            </li>
            <li>
              Enhance LLM reliability with guardrails, RAG, finetuning, and
              memory features
            </li>
            <li>
              Full transparency over applications with comprehensive LLM
              observability
            </li>
          </ul>
        </div>
        <div className="flex justify-center m-auto">
          <Image src={ReliableIcon} alt={"relaible-icon"} />
        </div>
      </div>
    </section>
  );
};

export default PlatformBuild;
