"use client";

import { ReliableIcon } from "@/util/icons";
import { useState } from "react";

import FinancialServiceIcon from "@/components/Icons/FinancialServiceIcon";
import FinancialServiceSelectedIcon from "@/components/Icons/FinancialServiceSelectedIcon";
import HealthcareIcon from "@/components/Icons/HealthcareIcon";
import HealthcareSelectedIcon from "@/components/Icons/HealthcareSelectedIcon";
import InsuranceSelectedIcon from "@/components/Icons/InsuranceSelectedIcon";
import InsuranceIcon from "@/components/Icons/InsureanceIcon";
import InternetIcon from "@/components/Icons/InternetIcon";
import InternetSelectedIcon from "@/components/Icons/InternetSelectedIcon";
import LegalIcon from "@/components/Icons/LegalIcon";
import LegalSelectedIcon from "@/components/Icons/LegalSelectedIcon";
import TelecomIcon from "@/components/Icons/TelecomIcon";
import TelecomSelectedIcon from "@/components/Icons/TelecomSelectedIcon";
import { CoinHourglass } from "@/util/images";
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
  const [index, setIndex] = useState(0);
  const handle = (number: number) => {
    setIndex(number);
    setCurrentSelect(data[number]);
  };
  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading_tag">Industries</div>
          <div className="home_page_heading">
            We’ve built an AI-driven platform for launching business <br />
            transformation. Ready for takeoff?
          </div>
        </div>
        <div className="industries_box_container grid grid-cols-3  mb-0 mt-8 flex">
          <div className="industries_box_left_container flex flex-col col-span-1 gap-4">
            <button
              onClick={() => handle(0)}
              className={
                index === 0
                  ? "industries_box_button_selected"
                  : "industries_box_button"
              }
            >
              {index === 0 ? (
                <FinancialServiceSelectedIcon />
              ) : (
                <FinancialServiceIcon />
              )}
              Financial Services
            </button>
            <button
              onClick={() => handle(1)}
              className={
                index === 1
                  ? "industries_box_button_selected"
                  : "industries_box_button"
              }
            >
              {index === 1 ? <InsuranceSelectedIcon /> : <InsuranceIcon />}
              Insurance
            </button>
            <button
              onClick={() => handle(2)}
              className={
                index === 2
                  ? "industries_box_button_selected"
                  : "industries_box_button"
              }
            >
              {index === 2 ? <HealthcareSelectedIcon /> : <HealthcareIcon />}
              Healthcare
            </button>
            <button
              onClick={() => handle(3)}
              className={
                index === 3
                  ? "industries_box_button_selected"
                  : "industries_box_button"
              }
            >
              {index === 3 ? <TelecomSelectedIcon /> : <TelecomIcon />}
              Media & Telecom
            </button>
            <button
              onClick={() => handle(4)}
              className={
                index === 4
                  ? "industries_box_button_selected"
                  : "industries_box_button"
              }
            >
              {index === 4 ? <InternetSelectedIcon /> : <InternetIcon />}
              Online & Internet
            </button>
            <button
              onClick={() => handle(5)}
              className={
                index === 5
                  ? "industries_box_button_selected"
                  : "industries_box_button"
              }
            >
              {index === 5 ? <LegalSelectedIcon /> : <LegalIcon />}
              Legal, Research & Consulting
            </button>
          </div>
          <div
            className="flex flex-1 col-span-2"
            style={{
              backgroundImage: `url(${CoinHourglass?.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "60px 0px 30px 30px",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <span className="industries_description">
              Transform financial services by driving automation, enhancing
              compliance, and accelerating innovation in your digital
              operations.
            </span>
            <button className="button">Know more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
