"use client";
import { BannerExpertBgImage, BannerExpertBgMobileImage } from "@/util/images";
import Link from "next/link";
import { useEffect, useState } from "react";

const BannerExpert = ({
  bannerHeading = "Ready to transform your enterprise with Agentic AI?",
  bannerText = "Explore the potential of AI agents and agentic automation solutions tailored for your business. Book a demo today to see how SimplAI can help you drive innovation in the AI-native world.",
  ctaText = "Request a Demo",
}: {
  bannerHeading?: string;
  bannerText?: string;
  ctaText?: string;
}) => {
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
  return (
    <div
      className="dark_bg mb-120 py-4"
      style={{
        backgroundImage: !isMobile
          ? `url(${BannerExpertBgImage?.src})`
          : `url(${BannerExpertBgMobileImage?.src})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <h3 className="text-white banner_expert_heading">{bannerHeading}</h3>
        <p className="text-white banner_expert_description">{bannerText}</p>
        <div className="mx-auto text-center">
          <Link prefetch href={"/request-demo"}>
            <button className="button text-center mx-auto">{ctaText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerExpert;
