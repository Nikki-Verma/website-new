"use client";
import { useRef, useState } from "react";
import "../../../app/globals.css";
import VideoContainerAgenticProcess from "../VideoContainerAgenticProcess/VideoContainerAgenticProcess";
import "./style.css";
const HeroAgenticProcess = () => {
  const animateText = ["Secure", "Scalable", "Reliable"];
  const textRefs: any = useRef([]);
  const [index, setIndex] = useState(0);

  return (
    <div className="hero_section">
      {/* <Header /> */}
      <div className="content_section">
        <div className="mx-auto text-center">
          <p className="product_page_name">Agentic Process Automation</p>
        </div>
        <h1 className="text-center hero_section_heading w-2/3 m-auto flex flex-col gap-8">
          <span className="hero_h1">
            The fastest way to automate complex workflows
          </span>
          <span className="hero_h2">
            SimplAI empowers your teams to automate document processing,
            workflow execution, and decision-making with ease. Streamline
            operations across industries with reliable, scalable automation.
          </span>
        </h1>
        <div className="flex justify-center items-center mt-8 mb-8">
          <button className="button button_white">Book a demo</button>
        </div>
      </div>
      <VideoContainerAgenticProcess />
    </div>
  );
};

export default HeroAgenticProcess;
