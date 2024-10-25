import Image from "next/image";
import DataSecureImage from "../../../assets/png/Data-Secure.png";
import EaseUseImage from "../../../assets/png/Ease-Of-Use.png";
import PlatformImage from "../../../assets/png/End-to-End-Platform.png";
import HallucinateImage from "../../../assets/png/Hallucinate.png";

const Feature = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading">
            Go from Prototype to Production-Ready <br />
            RAG with Ease
          </div>
        </div>

        <div className="card_v2 px-8 pt-16 pb-12 mb-12">
          <div className="flex items-center gap-24">
            <div className="w-2/5">
              <Image
                src={PlatformImage}
                alt="End-to-End Platform"
                className="w-full"
              />
            </div>
            <div className="w-3/5">
              <h2 className="heading_24 mb-4 text-left">End-to-End Platform</h2>
              <p>
                Experience a seamless workflow from data extraction and parsing
                to encoding, indexing, and integrating with vector databases.
                With built-in data loaders, search & filtering, retrieval, and
                reranking, our platform covers every step needed for a complete
                RAG application.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-12 mb-16">
          <div className="card_v2 py-8 px-8">
            <div className="h-full flex justify-between flex-col">
              <div>
                <h4 className="text-left mb-4 heading_24">
                  Trust, not Hallucinate
                </h4>
                <p className="text-left">
                  Ensure your generative systems rely solely on the facts and
                  data you provide. Every generated response is traceable to its
                  source, enhancing trust and credibility by allowing
                  verification of factuality.
                </p>
              </div>
              <div className="mx-auto text-center w-full mt-8">
                <Image
                  src={HallucinateImage}
                  alt="Trust, not Hallucinate"
                  className="text-center mx-auto"
                />
              </div>
            </div>
          </div>

          <div className="card_v2 py-8 px-8">
            <div className="h-full flex justify-between flex-col">
              <div>
                <h4 className="text-left mb-4">Ease of Use</h4>
                <p className="text-left">
                  Navigate through an intuitive, no-code interface designed for
                  quick experimentation and configuration. Easily test and build
                  the perfect RAG strategy with multiple settings tailored to
                  fit your specific needs.
                </p>
              </div>
              <div className="mx-auto text-center w-full mt-8">
                <Image
                  src={EaseUseImage}
                  alt="Ease of Use"
                  className="text-center mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card_v2 px-8 pt-16 pb-12 ">
          <div className="flex items-center gap-24 justify-between">
            <div className="w-1/2">
              <h2 className="heading_24 mb-4 text-left">Your Data is Secure</h2>
              <p>
                Keep complete control of your data with our privacy-first
                approach. Deploy your RAG systems on your own cloud, with our
                SOC 2 and ISO 27001 compliant platform
              </p>
            </div>

            <div>
              <Image
                src={DataSecureImage}
                alt="Your Data is Secure"
                //   className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
