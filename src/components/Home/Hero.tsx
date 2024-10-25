"use client";
import { useEffect, useRef, useState } from "react";
import "../../app/globals.css";
import OurApplications from "./OurApplications/OurApplications";
import "./style.css";
const Hero = () => {
  const animateText = ["Secure", "Scalable", "Reliable"];
  const textRefs: any = useRef([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const txtsLen = textRefs.current.length;
    const textInTimer = 3000;
    const textOutTimer = 2800;

    const animateText = () => {
      // Remove the classes from all elements
      textRefs.current.forEach((txt: any) => {
        if (txt) {
          txt.classList.remove("text-in", "text-out");
        }
      });

      // Add text-in class to the current index
      if (textRefs.current[index]) {
        textRefs.current[index].classList.add("text-in");
      }

      // Add text-out class just before the text transitions out
      setTimeout(() => {
        if (textRefs.current[index]) {
          textRefs.current[index].classList.add("text-out");
        }
      }, textOutTimer);

      // Update the index for the next animation
      setTimeout(() => {
        if (index === txtsLen - 1) {
          setIndex(0);
        } else {
          setIndex(index + 1);
        }
      }, textInTimer);
    };

    animateText();
  }, [index]);

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
