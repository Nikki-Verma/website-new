"use client";
import { useEffect, useState, useRef } from "react";
import "../../app/globals.css";
import "./style.css";
import Header from "../Header/Header";
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
    <div className="hero_section" style={{ paddingTop: 70 }}>
      {/* <Header /> */}
      <div className="content_section">
        <h1 className="text-center hero_section_heading">
          <span className="text_gray_gadient">Build </span>
          <span className="animate-text">
            {animateText?.map((text: string, index: number) => {
              return (
                <span
                  key={index}
                  ref={(el: any) => (textRefs.current[index] = el)}
                >
                  {" "}
                  {text}
                </span>
              );
            })}
          </span>
          <br />
          <span className="text_gray_gadient">Enterprise-Ready AI Faster</span>
        </h1>
        <p className="text-center text-[color:--off-white] w-1/2 mx-auto mt-8 hero_text">
          SimplAI is a unified Gen AI development platform to build,
          orchestrate, deploy & monitor LLM-Powered applications with ease
        </p>
        <div className="flex justify-center items-center mt-8">
          <button className="button button_white">Request Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
