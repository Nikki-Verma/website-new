"use client";

import ScalableAiIcon from "@/components/Icons/ScalableAi";
import SecureAiIcon from "@/components/Icons/SecureAiIcon";
import {
  CustomerCloudDeploy,
  OnPremiseMobile,
  SimplaiCloudDeploy,
  SimplaiCloudMobile,
} from "@/util/images";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./style.css";
const data = [
  {
    image: SimplaiCloudDeploy,
  },
  {
    image: CustomerCloudDeploy,
  },
];
const CloudDeployment = () => {
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
          <div className="home_page_heading_tag">Cloud Deployments</div>
          <div className="home_page_heading">
            Deploy your way <br />
            SimplAI cloud, your cloud, or on-premises
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
                <SecureAiIcon />
                SimplAI cloud
              </button>
              <button
                onClick={() => handle(1)}
                className={
                  index === 1 ? "round_button_selected" : "round_button"
                }
              >
                <ScalableAiIcon />
                On-premise
              </button>
            </div>

            <div className="flex justify-center m-auto">
              <Image src={currentSelect?.image} alt={"cloud-deploy-icon"} />
            </div>
          </>
        ) : (
          <>
            <div className="button_section">
              <button
                style={{ cursor: "auto" }}
                className="round_button_selected"
              >
                <SecureAiIcon style={{ height: 20, width: 20 }} />
                SimplAI cloud
              </button>
            </div>
            <div className="flex justify-center m-auto mb-4">
              <Image src={SimplaiCloudMobile} alt={"cloud-deploy-icon"} />
            </div>
            <div className="button_section">
              <button
                style={{ cursor: "auto" }}
                className="round_button_selected"
              >
                <ScalableAiIcon style={{ height: 20, width: 20 }} />
                On-premise
              </button>
            </div>
            <div className="flex justify-center m-auto">
              <Image src={OnPremiseMobile} alt={"cloud-deploy-icon"} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CloudDeployment;
