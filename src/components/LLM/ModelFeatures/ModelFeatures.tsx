import Image from "next/image";

import { ModelFeatureImage } from "@/util/images";
import { Collapse, CollapseProps } from "antd";
import { CSSProperties } from "react";
import "./style.css";

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle,
) => [
  {
    key: 1,
    label: "Access to all Global LLMs",
    children: (
      <p>
        Quickly discover and connect with a unified API for the latest and most
        advanced LLMs
      </p>
    ),
    style: panelStyle,
  },
  {
    key: 2,
    label: "Deploy open source models on your own cloud",
    children: (
      <p>
        With SimplAI, you have the flexibility to deploy any open-source LLM
        model directly on your own cloud infrastructure with one-click
        deployment.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: 3,
    label: "LLM playground",
    children: (
      <p>
        Developers can experiment, test, and evaluate prompts and models in a
        dynamic environment, allowing for iterative improvement Experiment,
        test, and iterate on prompts and model configurations in a fully
        interactive environment, enabling real-time adjustments{" "}
      </p>
    ),
    style: panelStyle,
  },
  {
    key: 4,
    label: "Fine tune any open source model",
    children: (
      <p>
        Securely apply advanced fine-tuning techniques on open-source models in
        your virtual private cloud with our SOC-2 compliant platform{" "}
      </p>
    ),
    style: { ...panelStyle, marginBottom: "0" },
  },
];
const ModelFeatures = () => {
  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    borderRadius: "8px",
    border: "0.5px solid var(--Stroke, #A6BCDA)",
    background: "var(--Support, #F8FAFC)",
  };
  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading">
            Connect, Deploy, Experiment and Finetune <br /> any LLM model
          </div>
        </div>

        <div className="card_v2 px-4 py-8">
          <div className="grid grid-cols-2 gap-4 ">
            <div className="col-span-1 collapse-container">
              <Collapse
                bordered={false}
                items={getItems(panelStyle)}
                style={{ background: "var(--white)", width: "100%" }}
                className="accordian_custom"
                expandIconPosition={"end"}
              />
            </div>
            <div className="col-span-1 flex flex-col justify-start">
              <Image
                src={ModelFeatureImage}
                alt="RetrievalImage"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelFeatures;
