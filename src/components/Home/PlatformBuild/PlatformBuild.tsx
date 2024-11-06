"use client";

import ReliableAiIcon from "@/components/Icons/ReliableAi";
import ScalableAiIcon from "@/components/Icons/ScalableAi";
import SecureAiIcon from "@/components/Icons/SecureAiIcon";
import { GenScale, Relaible, SecureAi } from "@/util/images";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./style.css";
const data = [
  {
    heading: "Create safe and secure applications with data privacy",
    description: [
      "Deploy on any cloud — AWS, Azure, GCP, etc.",
      "On-premise deployment for full control over data",
      "End-to-end encryption to safeguard data at every stage",
      "Advanced access controls with MFA, VPNs, RBAC, and ABAC",
      "Global security standards compliant with SOC2 and ISO 27001",
    ],
    buttonName: "Get started",
    buttonLink: "",
    image: SecureAi,
    tabName: "Secure AI",
    tabIcon: <SecureAiIcon style={{ height: 20, width: 20 }} />,
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
    tabName: "Scalable AI",
    tabIcon: <ScalableAiIcon style={{ height: 20, width: 20 }} />,
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
    tabName: "Reliable AI",
    tabIcon: <ReliableAiIcon style={{ height: 20, width: 20 }} />,
  },
];
const PlatformBuild = () => {
  const [currentSelect, setCurrentSelect] = useState(data[0]);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 601);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 601);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
        {!isMobile ? (
          <>
            <div className="button_section">
              <button
                onClick={() => handle(0)}
                className={
                  index === 0 ? "round_button_selected" : "round_button"
                }
              >
                <SecureAiIcon style={{ height: 24, width: 24 }} />
                Secure AI
              </button>
              <button
                onClick={() => handle(1)}
                className={
                  index === 1 ? "round_button_selected" : "round_button"
                }
              >
                <ScalableAiIcon style={{ height: 24, width: 24 }} />
                Scalable AI
              </button>
              <button
                onClick={() => handle(2)}
                className={
                  index === 2 ? "round_button_selected" : "round_button"
                }
              >
                <ReliableAiIcon style={{ height: 24, width: 24 }} />
                Reliable AI
              </button>
            </div>

            <div className="platform_build_box_container ">
              <div className="flex flex-1 flex-col">
                <h4 className=" platform_card_heading">
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
          </>
        ) : (
          <>
            {data?.map((itemDetails: any) => {
              return (
                <div className="mb-4">
                  <div className="button_section">
                    <button
                      style={{ cursor: "auto" }}
                      className={"round_button_selected"}
                    >
                      {itemDetails?.tabIcon}
                      {itemDetails?.tabName}
                    </button>
                  </div>
                  <div className="platform_build_box_container ">
                    <div className="flex flex-1 flex-col">
                      <h4 className="platform_card_heading">
                        {itemDetails.heading}
                      </h4>
                      <ul className="platform_feature_list list-disc">
                        {itemDetails.description.map((value: string) => {
                          return <li>{value}</li>;
                        })}
                      </ul>
                    </div>
                    <div className="flex justify-center m-auto">
                      <Image
                        src={itemDetails.image}
                        alt={"relaible-icon"}
                        height={400}
                        width={360}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
};

export default PlatformBuild;
