import { BannerExpertBgImage } from "@/util/images";

const BannerExpert = () => {
  return (
    <div
      className="dark_bg mb-120 py-12"
      style={{
        backgroundImage: `url(${BannerExpertBgImage?.src})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <h3 className="text-white text-center mb-6">
          See the SimplAI platform in action
        </h3>
        <p className="text-center text-white mx-auto mb-4">
          "Request a demo and see how SimplAI empowers your teams to supercharge
          their <br />
          AI-driven applications for seamless business growth."
        </p>
        <div className="mx-auto text-center">
          <button className="button text-center mx-auto">
            Talk with expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerExpert;
