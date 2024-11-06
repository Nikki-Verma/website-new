"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import "../../../app/globals.css";

import VedioContainerProductionRag from "../VedioContainer/VedioContainer";
import "./style.css";
const HeroRag = () => {
  const animateText = ["Secure", "Scalable", "Reliable"];
  const textRefs: any = useRef([]);
  const [index, setIndex] = useState(0);

  return (
    <div className="hero_section">
      {/* <Header /> */}
      <div className="content_section">
        <div className="mx-auto text-center">
          <p className="product_page_name">Multi-modal Agentic RAG</p>
        </div>
        <h1 className="text-center hero_section_heading m-auto flex flex-col gap-8">
          <span className="hero_h1">
            Advanced RAG platform for building <br />
            trustworthy AI systems
          </span>
          <span className="hero_h2 w-2/3">
            Transform and ingest both structured and unstructured data,
            converting it into factual insights with every response grounded in
            truth and delivered with precision.
          </span>
        </h1>
        <div className="flex justify-center items-center mt-8 mb-8">
          <Link href={"/request-demo"} prefetch>
            <button className="button button_white">Book a demo</button>
          </Link>
        </div>
      </div>
      <VedioContainerProductionRag />
    </div>
  );
};

export default HeroRag;
