"use client";

import SecureAiIcon from "@/components/Icons/SecureAiIcon";
import ScalableAiIcon from "@/components/Icons/scalableAi";
import { cloudDeploy } from "@/util/images";
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
const CloudDeployment = () => {
  const [currentSelect, setCurrentSelect] = useState(data[0]);
  const [index, setIndex] = useState(0);
  const handle = (number: number) => {
    setIndex(number);
    setCurrentSelect(data[number]);
  };
  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading_tag">Cloud Deployments</div>
          <div className="home_page_heading">
            Deploy fully managed, dedicated Conductor <br /> instances on your
            preferred cloud provider
          </div>
        </div>

        {/* buttons */}
        <div className="button_section">
          <button
            onClick={() => handle(0)}
            className={index === 0 ? "round_button_selected" : "round_button"}
          >
            <SecureAiIcon />
            SimplAI Cloud
          </button>
          <button
            onClick={() => handle(1)}
            className={index === 1 ? "round_button_selected" : "round_button"}
          >
            <ScalableAiIcon />
            On Premise
          </button>
        </div>

        <div className="flex justify-center m-auto">
          <Image src={cloudDeploy} alt={"cloud-deploy-icon"} />
        </div>
      </div>
    </section>
  );
};

export default CloudDeployment;
