"use client";
import { BoxesBgImage } from "@/util/images";
import Link from "next/link";
import { useRef, useState } from "react";
import "../../app/globals.css";
import "./style.css";
const Hero = () => {
  const animateText = ["Secure", "Scalable", "Reliable"];
  const textRefs: any = useRef([]);
  const [index, setIndex] = useState(0);

  return (
    <div
      className="hero_section_home"
      style={{ backgroundImage: `url(${BoxesBgImage?.src})` }}
    >
      <div className="content_section">
        <div className="text-center hero_section_heading">
          <span className="hero_h1">
            The <span className="hero_h2">simplest and fastest</span> way to
            build <br /> and deploy Gen AI applications
          </span>
        </div>
        <p className="text-center mx-auto mt-8 hero_text">
          Create AI agents and agentic workflows at scale, with robust security.
          Experience rapid execution, transforming PoC to production in just{" "}
          <a className="hero_text_highlight"> one month.</a>
        </p>
        <div className="flex justify-center items-center mt-8 mb-8">
          <Link prefetch href={"/request-demo"}>
            <button className="button button_white">Book a demo</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
