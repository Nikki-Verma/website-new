"use client";
import { useRef, useState } from "react";
import "../../../app/globals.css";
import VideoContainerAgentAi from "../VideoContainerAgentAi/VideoContainerAgentAi";
import "./style.css";
const HeroAgentAi = () => {
  const animateText = ["Secure", "Scalable", "Reliable"];
  const textRefs: any = useRef([]);
  const [index, setIndex] = useState(0);

  return (
    <div className="hero_section" style={{ marginTop: -82 }}>
      {/* <Header /> */}
      <div className="content_section">
        <div className="mx-auto text-center">
          <p className="product_page_name">Ai Agents</p>
        </div>
        <h1 className="text-center hero_section_heading w-2/3 m-auto flex flex-col gap-8">
          <span className="hero_h1">
            The Fastest Way to Build Intelligent AI Agents and Employees
          </span>
          <span className="hero_h2">
            Empower your teams with Conversational AI, Voice AI, Co-pilots, and
            AI Assistants that transform workflows, automate processes, and
            deliver precise, trustworthy responses.
          </span>
        </h1>
        <div className="flex justify-center items-center mt-8 mb-8">
          <button className="button button_white">Book a demo</button>
        </div>
      </div>
      <VideoContainerAgentAi />
    </div>
  );
};

export default HeroAgentAi;
