"use client";
import { useEffect, useState, useRef, MutableRefObject } from "react";
import "../../app/globals.css";
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
      textRefs.current.forEach((txt: any) => {
        if (txt) {
          txt.classList.remove("text-in", "text-out");
        }
      });

      if (textRefs.current[index]) {
        textRefs.current[index].classList.add("text-in");
      }

      setTimeout(() => {
        if (textRefs.current[index]) {
          textRefs.current[index].classList.add("text-out");
        }
      }, textOutTimer);

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
      <div className="content_section">
        <h1 className="text-center hero_section_heading">
          <span className="text_gray_gadient">Build </span>
          <span className="animate-text">
            {animateText?.map((text: string, index: number) => {
              return (
                <span
                  key={index}
                  ref={(el: any) => (textRefs.current[index] = el)}
                  className="text_gadient_primary"
                >
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
