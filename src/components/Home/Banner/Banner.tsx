import { FounderHubLogo, RazorpayLogo } from "@/util/images";
import Image from "next/image";
import "./style.css";

const Banner = () => {
  return (
    <div className="banner_container">
      <div className="container mb-0">
        <div className="flex items-center justify-between">
          <div>
            <h2>Empowering innovators by</h2>
            <p>
              SimplAI is now part of Microsoft for Startups Founders Hub &
              Razorpay Rize{" "}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Image src={FounderHubLogo} alt={"founder-hub-logo"} />
            <Image src={RazorpayLogo} alt={"razorpay-rize-logo"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
