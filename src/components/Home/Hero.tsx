"use client";
import { useRef, useState } from "react";
import "../../app/globals.css";
import OurApplications from "./OurApplications/OurApplications";
import "./style.css";
const Hero = () => {
  const animateText = ["Secure", "Scalable", "Reliable"];
  const textRefs: any = useRef([]);
  const [index, setIndex] = useState(0);

  return (
    <div className="hero_section" style={{ marginTop: -82 }}>
      {/* <Header /> */}
      <div className="content_section">
        <h1 className="text-center hero_section_heading">
          <span className="hero_h2">Build and Scale Gen AI Applications </span>
          <br />
          <span className="hero_h1">Fast, Simple, and Secure</span>
        </h1>
        <p className="text-center w-2/3 mx-auto mt-8 hero_text">
          Create AI agents and agentic workflows with rapid execution from PoC
          to production <a className="hero_text_highlight"> in a month </a> -
          delivering secure and reliable systems.
        </p>
        <div className="flex justify-center items-center mt-8 mb-8">
          <button className="button button_white">Book a demo</button>
        </div>
      </div>
      <OurApplications />
    </div>
  );
};

export default Hero;
