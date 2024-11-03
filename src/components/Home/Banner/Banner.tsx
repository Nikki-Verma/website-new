import { FounderHubLogo, RazorpayLogo } from "@/util/images";
import Image from "next/image";
import "./style.css";

const Banner = () => {
  return (
    <div className="banner_container">
      <div className="container mb-0">
        <div className="flex items-center justify-center gap-16">
          <div className="flex flex-col gap-2">
            <div className="banner-heading">Empowering innovators by</div>
            <div className="banner-details">
              SimplAI is now part of Microsoft for Startups Founders Hub &
              Razorpay Rize{" "}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Image src={FounderHubLogo} alt={"founder-hub-logo"} />
            <Image src={RazorpayLogo} alt={"razorpay-rize-logo"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
