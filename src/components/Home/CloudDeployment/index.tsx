"use client";

import ScalableAiIcon from "@/components/Icons/ScalableAi";
import SecureAiIcon from "@/components/Icons/SecureAiIcon";
import { CustomerCloudDeploy, SimplaiCloudDeploy } from "@/util/images";
import Image from "next/image";
import { useState } from "react";
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
          <Image src={currentSelect?.image} alt={"cloud-deploy-icon"} />
        </div>
      </div>
    </section>
  );
};

export default CloudDeployment;
