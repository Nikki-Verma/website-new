"use client";

import { useEffect, useState } from "react";

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
  CoinHourglassMobile,
  HealthcareImage,
  HealthcareImageMobile,
  InsuranceImage,
  InsuranceImageMobile,
  LegalImage,
  LegalImageMobile,
  TelecomImage,
  TelecomImageMobile,
} from "@/util/images";
import { Carousel, Col, Row } from "antd";
import Link from "next/link";
import "./style.css";

const data = [
  {
    heading: " Financial Services",
    description: [
      "Transform financial services with SimplAI's secure Gen AI solutions that drive automation, enhance compliance, and accelerate digital innovation.",
    ],
    buttonName: "Get started",
    buttonLink: "",
    image: CoinHourglass,
    carouselImage: CoinHourglassMobile,
    url: "/financial-services",
    icon: <FinancialServiceIcon style={{ width: "18px", height: "18px" }} />,
  },
  {
    heading: "Insurance",
    description: [
      "Simplify and scale insurance workflows with SimplAI's secure Gen AI solutions, enabling insurers to enhance customer relationships and risk profiles.",
    ],
    buttonName: "Get started",
    buttonLink: "",
    image: InsuranceImage,
    carouselImage: InsuranceImageMobile,
    url: "/insurance",
    icon: <InsuranceIcon style={{ width: "18px", height: "18px" }} />,
  },
  {
    heading: "Healthcare",
    description: [
      "Transform healthcare operations by streamlining patient care, enhancing compliance, and accelerating clinical outcomes with SimplAI's generative AI solutions.",
    ],
    buttonName: "Get started",
    buttonLink: "",
    image: HealthcareImage,
    carouselImage: HealthcareImageMobile,
    url: "/healthcare",
    icon: <HealthcareIcon style={{ width: "16px", height: "16px" }} />,
  },
  {
    heading: "Legal, Research & Consulting",
    description: [
      "Swiftly automate complex document analysis, data synthesis, and compliance with SimplAI’s secure Gen AI platform, empowering legal and research teams while ensuring security.",
    ],
    buttonName: "Get started",
    buttonLink: "",
    image: LegalImage,
    carouselImage: LegalImageMobile,
    url: "/legal",
    icon: <LegalIcon style={{ width: "16px", height: "16px" }} />,
  },
  {
    heading: "Media & Telecom",
    description: [
      "Elevate network management and customer engagement with SimplAI’s Gen AI solutions, enabling seamless service delivery, automated processes, and enhanced satisfaction.",
    ],
    buttonName: "Get started",
    buttonLink: "",
    image: TelecomImage,
    carouselImage: TelecomImageMobile,
    url: "/multimedia",
    icon: <TelecomIcon style={{ width: "16px", height: "16px" }} />,
  },
  // {
  //   heading: "Internet",
  //   description: [
  //     "Deliver scalable, reliable Gen AI applications with SimplAI, enhancing user experiences and enabling intelligent personalization while ensuring robust data privacy.",
  //   ],
  //   buttonName: "Get started",
  //   buttonLink: "",
  //   image: InternetImage,
  //   carouselImage: InternetImageMobile
  // },
];
const Industries = () => {
  const [currentSelect, setCurrentSelect] = useState(data[0]);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 601);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 601);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
            enterprise-ready AI applications
          </div>
        </div>
        {!isMobile ? (
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
        ) : (
          <Carousel
            adaptiveHeight
            draggable
            waitForAnimate
            autoplay
            style={{ marginBottom: "16px" }}
          >
            {data?.map((industryDetail: any) => {
              return (
                <div className="industry_carousel_container">
                  <div className="industry_carousel_heading">
                    {industryDetail?.icon}
                    {industryDetail?.heading}
                  </div>
                  <div
                    className="industry_carousel_card"
                    style={{
                      backgroundImage: `url(${industryDetail?.carouselImage?.src})`,
                    }}
                  >
                    <span className="industries_description">
                      {currentSelect?.description}
                    </span>
                    <Link href={currentSelect?.url} prefetch>
                      <button className="button">Know more</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default Industries;
