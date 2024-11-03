"use client";

import { useState } from "react";

import FinancialServiceIcon from "@/components/Icons/FinancialServiceIcon";
import FinancialServiceSelectedIcon from "@/components/Icons/FinancialServiceSelectedIcon";
import HealthcareIcon from "@/components/Icons/HealthcareIcon";
import HealthcareSelectedIcon from "@/components/Icons/HealthcareSelectedIcon";
import InsuranceSelectedIcon from "@/components/Icons/InsuranceSelectedIcon";
import InsuranceIcon from "@/components/Icons/InsureanceIcon";
import LegalIcon from "@/components/Icons/LegalIcon";
import LegalSelectedIcon from "@/components/Icons/LegalSelectedIcon";
import TelecomIcon from "@/components/Icons/TelecomIcon";
import TelecomSelectedIcon from "@/components/Icons/TelecomSelectedIcon";
import {
  CoinHourglass,
  HealthcareImage,
  InsuranceImage,
  LegalImage,
  TelecomImage,
} from "@/util/images";
import { Col, Row } from "antd";
import Link from "next/link";
import "./style.css";

const data = [
  {
    heading: "Financial service",
    description: [
      "Transform financial services with SimplAI's secure Gen AI solutions that drive automation, enhance compliance, and accelerate digital innovation.",
    ],
    buttonName: "Get started",
    buttonLink: "",
    image: CoinHourglass,
    url: "/bfsi",
  },
  {
    heading: "Insurance",
    description: [
      "Simplify and scale insurance workflows with SimplAI's secure Gen AI solutions, enabling insurers to enhance customer relationships and risk profiles.",
    ],
    buttonName: "Get started",
    buttonLink: "",
    image: InsuranceImage,
    url: "/insurance",
  },
  {
    heading: "healthcare",
    description: [
      "Transform healthcare operations by streamlining patient care, enhancing compliance, and accelerating clinical outcomes with SimplAI's generative AI solutions.",
    ],
    buttonName: "Get started",
    buttonLink: "",
    image: HealthcareImage,
    url: "/healthcare",
  },
  {
    heading: "Legal",
    description: [
      "Swiftly automate complex document analysis, data synthesis, and compliance with SimplAI’s secure Gen AI platform, empowering legal and research teams while ensuring security.",
    ],
    buttonName: "Get started",
    buttonLink: "",
    image: LegalImage,
    url: "/legal",
  },
  {
    heading: "Telecom",
    description: [
      "Elevate network management and customer engagement with SimplAI’s Gen AI solutions, enabling seamless service delivery, automated processes, and enhanced satisfaction.",
    ],
    buttonName: "Get started",
    buttonLink: "",
    image: TelecomImage,
    url: "/multimedia",
  },
  // {
  //   heading: "Internet",
  //   description: [
  //     "Deliver scalable, reliable Gen AI applications with SimplAI, enhancing user experiences and enabling intelligent personalization while ensuring robust data privacy.",
  //   ],
  //   buttonName: "Get started",
  //   buttonLink: "",
  //   image: InternetImage,
  // },
];
const Industries = () => {
  const [currentSelect, setCurrentSelect] = useState(data[0]);
  const [index, setIndex] = useState(0);
  const handle = (number: number) => {
    setIndex(number);
    setCurrentSelect(data[number]);
  };
  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading_tag">Industries</div>
          <div className="home_page_heading">
            SimplAI empowers organizations across diverse sectors to build
            production-ready Gen AI applications
          </div>
        </div>
        <Row
          className="industries_box_container"
          gutter={[0, 0]}
          align={"stretch"}
        >
          <Col className="industries_box_left_container" span={6}>
            <button
              onClick={() => handle(0)}
              className={
                index === 0
                  ? "industries_box_button_selected"
                  : "industries_box_button"
              }
            >
              {index === 0 ? (
                <FinancialServiceSelectedIcon />
              ) : (
                <FinancialServiceIcon />
              )}
              Financial Services
            </button>
            <button
              onClick={() => handle(1)}
              className={
                index === 1
                  ? "industries_box_button_selected"
                  : "industries_box_button"
              }
            >
              {index === 1 ? <InsuranceSelectedIcon /> : <InsuranceIcon />}
              Insurance
            </button>
            <button
              onClick={() => handle(2)}
              className={
                index === 2
                  ? "industries_box_button_selected"
                  : "industries_box_button"
              }
            >
              {index === 2 ? <HealthcareSelectedIcon /> : <HealthcareIcon />}
              Healthcare
            </button>
            <button
              onClick={() => handle(3)}
              className={
                index === 3
                  ? "industries_box_button_selected"
                  : "industries_box_button"
              }
            >
              {index === 3 ? <LegalSelectedIcon /> : <LegalIcon />}
              Legal, Research & Consulting
            </button>
            <button
              onClick={() => handle(4)}
              className={
                index === 4
                  ? "industries_box_button_selected"
                  : "industries_box_button"
              }
            >
              {index === 4 ? <TelecomSelectedIcon /> : <TelecomIcon />}
              Media & Telecom
            </button>

            {/* <button
              onClick={() => handle(5)}
              className={
                index === 5
                  ? "industries_box_button_selected"
                  : "industries_box_button"
              }
            >
              {index === 5 ? <InternetSelectedIcon /> : <InternetIcon />}
              Online & Internet
            </button> */}
          </Col>
          <Col
            span={18}
            className="flex flex-1 col-span-2"
            style={{
              backgroundImage: `url(${currentSelect?.image?.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "60px 0px 30px 30px",
              display: "flex",
              flexDirection: "column",
              gap: 24,
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <span className="industries_description">
              {currentSelect?.description}
            </span>
            <Link href={currentSelect?.url} prefetch>
              <button className="button">Know more</button>
            </Link>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Industries;
