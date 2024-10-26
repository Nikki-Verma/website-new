"use client";

import {
  AiEncryption,
  ApiIcon,
  ConnectionIcon,
  EmbedIcon,
  EvaluationImage,
  FrameworkImage,
  GuardrailsImage,
  MobileSdkIcon,
} from "@/util/images";
import Image from "next/image";
import { useState } from "react";
import "./style.css";
const data = [
  {
    heading: "API & Webhooks",
    description:
      "Integrate your AI agents seamlessly into any workflow or system",
    imageAlt: "poc-dev-icon",
    image: ApiIcon,
  },
  {
    heading: "Embed Code",
    description:
      "Easily add AI agents to your website with a simple embed code",
    imageAlt: "iterate-refine-icon",
    image: EmbedIcon,
  },
  {
    heading: "Mobile SDK",
    description:
      "Deploy AI agents on mobile apps with our SDK for iOS and Android",
    imageAlt: "integrate-agent-icon",
    image: MobileSdkIcon,
  },
  {
    heading: "Connect with Popular Apps",
    description: "Directly integrate with WhatsApp, Slack, Telegram, and more",
    imageAlt: "productise-ai-icon",
    image: ConnectionIcon,
  },
];

const EncryptionDataPoints = [
  {
    heading: "Evaluation and Fine-Tuning",
    description:
      "Continuously improve your agents with prompt finetuning and real-time evaluations, ensuring they are optimized for performance and reliability",
    imageAlt: "poc-dev-icon",
    image: EvaluationImage,
  },
  {
    heading: "Guardrails for Accuracy",
    description:
      "Every agent is deployed with built-in safeguards to ensure that only factual, reliable, and verifiable information is delivered, giving you confidence in every interaction",
    imageAlt: "iterate-refine-icon",
    image: GuardrailsImage,
  },
  {
    heading: "Experimentation Framework",
    description:
      "Easily test and optimize your AI agents by configuring different prompts, response strategies, and guardrails within a controlled environment",
    imageAlt: "integrate-agent-icon",
    image: FrameworkImage,
  },
];
const AgentDeployment = () => {
  const [currentSelect, setCurrentSelect] = useState(data[0]);
  return (
    <section className="section">
      <div className="container">
        <div className="card_v2 flex w-full px-8 py-8 mb-12">
          <div className=" grid grid-cols-2 gap-16 w-full">
            <div className="col-span-1 flex flex-col  justify-center">
              <h4 className="text-left mb-4 w-5/6">
                Trust, Security, and Control
              </h4>
              <p className="text-left pr-4 mb-8">
                With SimplAI, trust and security are foundational.
              </p>
              <Image src={AiEncryption} alt="Ai-encryption-image" />
            </div>
            <div className="col-span-1 flex flex-col gap-8 justify-center">
              {EncryptionDataPoints?.map((data) => {
                return (
                  <div className="card_points_container">
                    <Image
                      alt={data?.imageAlt ?? "icon"}
                      src={data?.image}
                      height={70}
                      width={70}
                    />
                    <div className="flex flex-col items-start gap-2">
                      <div className="features_box_heading">
                        {data?.heading}
                      </div>
                      <div className="features_box_description">
                        {data.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="section_heading_container">
          <div className="home_page_heading">
            Deployment & Integration Made Simple
          </div>
        </div>

        <div className="flex flex-wrap justify-between w-full gap-y-8">
          {data?.map((cardDetails) => {
            return (
              <div className="features_box_container">
                <Image
                  alt={cardDetails?.imageAlt ?? "icon"}
                  src={cardDetails?.image}
                  height={32}
                  width={32}
                />
                <div className="flex flex-col items-start gap-2">
                  <div className="features_box_heading">
                    {cardDetails?.heading}
                  </div>
                  <div className="features_box_description">
                    {cardDetails.description}
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

export default AgentDeployment;
