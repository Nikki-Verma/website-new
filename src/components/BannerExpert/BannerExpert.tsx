import { BannerExpertBgImage } from "@/util/images";
import Link from "next/link";

const BannerExpert = ({
  bannerHeading = "See the SimplAI platform in action",
  bannerText = "Request a demo and see how SimplAI empowers your teams to supercharge their AI-driven applications for seamless business growth",
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
