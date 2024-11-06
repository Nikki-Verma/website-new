"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import "../../../app/globals.css";
import VideoContainerAgentAi from "../VideoContainerAgentAi/VideoContainerAgentAi";
import "./style.css";
const HeroAgentAi = () => {
  const animateText = ["Secure", "Scalable", "Reliable"];
  const textRefs: any = useRef([]);
  const [index, setIndex] = useState(0);

  return (
    <div className="hero_section">
      {/* <Header /> */}
      <div className="content_section">
        <div className="mx-auto text-center">
          <p className="product_page_name">AI Agents</p>
        </div>
        <h1 className="text-center hero_section_heading m-auto flex flex-col gap-8">
          <span className="hero_h1">
            The fastest way to build intelligent <br /> AI agents and employees
          </span>
          <span className="hero_h2 w-2/3">
            Empower your teams with conversational AI, voice AI, co-pilots,
            assistants and multi-agent systems that transform workflows,
            automate processes, and deliver precise, trustworthy responses.
          </span>
        </h1>
        <div className="flex justify-center items-center mt-8 mb-8">
          <Link href={"/request-demo"} prefetch>
            <button className="button button_white">Book a demo</button>
          </Link>
        </div>
      </div>
      <VideoContainerAgentAi />
    </div>
  );
};

export default HeroAgentAi;
