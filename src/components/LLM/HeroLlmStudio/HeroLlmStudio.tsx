"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import "../../../app/globals.css";

import VideoContainerLlmStudio from "../VideoContainerLlmStudio/VideoContainerLlmStudio";
import "./style.css";
const HeroLlmStudio = () => {
  const animateText = ["Secure", "Scalable", "Reliable"];
  const textRefs: any = useRef([]);
  const [index, setIndex] = useState(0);

  return (
    <div className="hero_section">
      {/* <Header /> */}
      <div className="content_section">
        <div className="mx-auto text-center">
          <p className="product_page_name">SimplAI Studio</p>
        </div>
        <h1 className="text-center hero_section_heading m-auto flex flex-col gap-8">
          <span className="hero_h1">
            Enterprise platform to experiment,
            <br /> build, deploy, and monitor Agentic AI applications
          </span>
          <span className="hero_h2 w-2/3">
            The fastest and simplest path from idea to PoC to production,
            SimplAI Studio empowers technical and product teams with intuitive
            UI/UX tools to build secure, scalable, and reliable AI applications.
          </span>
        </h1>
        <div className="flex justify-center items-center mt-8 mb-8">
          <Link href={"/request-demo"} prefetch>
            <button className="button button_white">Book a demo</button>
          </Link>
        </div>
      </div>
      <VideoContainerLlmStudio />
    </div>
  );
};

export default HeroLlmStudio;
