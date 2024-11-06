import { BannerExpertBgImage } from "@/util/images";
import Link from "next/link";

const BannerExpert = ({
  bannerHeading = "Ready to transform your enterprise with Agentic AI?",
  bannerText = "Explore the potential of AI agents and agentic automation solutions tailored for your business. Book a demo today to see how SimplAI can help you drive innovation in the AI-native world.",
  ctaText = "Request a Demo",
}: {
  bannerHeading?: string;
  bannerText?: string;
  ctaText?: string;
}) => {
  return (
    <div
      className="dark_bg mb-120 py-4"
      style={{
        backgroundImage: `url(${BannerExpertBgImage?.src})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <h3 className="text-white text-center mb-4 ">{bannerHeading}</h3>
        <p className="text-center text-white mx-auto mb-6 w-2/3">
          {bannerText}
        </p>
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
