"use client";

import ReliableAiIcon from "@/components/Icons/ReliableAi";
import ScalableAiIcon from "@/components/Icons/ScalableAi";
import SecureAiIcon from "@/components/Icons/SecureAiIcon";
import { GenScale, Relaible, SecureAi } from "@/util/images";
import Image from "next/image";
import { useState } from "react";
import "./style.css";
const data = [
  {
    heading: "Create safe and secure applications with data privacy",
    description: [
      "Deploy on any cloud — AWS, Azure, or GCP",
      "On-premise deployment for full control over data",
      "End-to-end encryption to safeguard data at every stage",
      "Advanced access controls with MFA, VPNs, Cloudflare, and RBAC",
      "Global security standards compliant with SOC2 and ISO 27001",
    ],
    buttonName: "Get started",
    buttonLink: "",
    image: SecureAi,
  },
  {
    heading:
      "Build complex, scalable systems that handle high workloads with ease",
    description: [
      "Horizontal cluster scaling for seamless expansion",
      "Efficiently handle millions of requests",
      "Achieve low-latency performance with real-time streaming",
      "Parallelization for faster processing",
      "Optimized memory and caching for quicker response times",
    ],
    buttonName: "Get started",
    buttonLink: "",
    image: GenScale,
  },
  {
    heading:
      "Deliver accurate and dependable results, every time-no hallucinations",
    description: [
      "Application-level version control for stability and consistency",
      "Input and output guardrails to ensure trustworthy AI",
      "Granular tracing for detailed debugging",
      "Experimentation framework to iterate and refine applications",
      "Grounding mechanisms like RAG and fine-tuning for accuracy",
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
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading_tag">Why SimplAI?</div>
          <div className="home_page_heading">
            Platform built for enterprise success
          </div>
        </div>

        {/* buttons */}
        <div className="button_section">
          <button
            onClick={() => handle(0)}
            className={index === 0 ? "round_button_selected" : "round_button"}
          >
            <SecureAiIcon style={{ height: 24, width: 24 }} />
            Secure AI
          </button>
          <button
            onClick={() => handle(1)}
            className={index === 1 ? "round_button_selected" : "round_button"}
          >
            <ScalableAiIcon style={{ height: 24, width: 24 }} />
            Scalable AI
          </button>
          <button
            onClick={() => handle(2)}
            className={index === 2 ? "round_button_selected" : "round_button"}
          >
            <ReliableAiIcon style={{ height: 24, width: 24 }} />
            Reliable AI
          </button>
        </div>

        <div className="platform_build_box_container mb-0 py-10 px-12 flex-wrap justify-between gap-x-56">
          <div className="flex flex-1 flex-col">
            <h4 className="text-[color:--black-v2] mb-6">
              {currentSelect.heading}
            </h4>
            <ul className="platform_feature_list list-disc">
              {currentSelect.description.map((value: string) => {
                return <li>{value}</li>;
              })}
            </ul>
          </div>
          <div className="flex justify-center m-auto">
            <Image
              src={currentSelect.image}
              alt={"relaible-icon"}
              height={400}
              width={360}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformBuild;
