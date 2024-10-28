import {
  DataSecureImage,
  EaseUseImage,
  HallucinateImage,
  PlatformImage,
} from "@/util/images";
import { Col, Row } from "antd";
import Image from "next/image";

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

        <Row gutter={[36, 36]} justify={"space-between"} align={"stretch"}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div className="card_v2 px-8 pt-16 pb-12">
              <Row gutter={[36, 36]} justify={"space-between"} align={"middle"}>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={12}
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Image
                    src={PlatformImage}
                    alt="End-to-End Platform"
                    className="w-full"
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <h2 className="heading_24 mb-4 text-left">
                    End-to-End Platform
                  </h2>
                  <p>
                    Experience a seamless workflow from data extraction and
                    parsing to encoding, indexing, and integrating with vector
                    databases. With built-in data loaders, search & filtering,
                    retrieval, and reranking, our platform covers every step
                    needed for a complete RAG application.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div className="card_v2 py-8 px-8">
              <div className="h-full flex justify-between flex-col">
                <div>
                  <h4 className="text-left mb-4 heading_24">
                    Trust, not Hallucinate
                  </h4>
                  <p className="text-left">
                    Ensure your generative systems rely solely on the facts and
                    data you provide. Every generated response is traceable to
                    its source, enhancing trust and credibility by allowing
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
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div className="card_v2 py-8 px-8">
              <div className="h-full flex justify-between flex-col">
                <div>
                  <h4 className="text-left mb-4">Ease of Use</h4>
                  <p className="text-left">
                    Navigate through an intuitive, no-code interface designed
                    for quick experimentation and configuration. Easily test and
                    build the perfect RAG strategy with multiple settings
                    tailored to fit your specific needs.
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
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div className="card_v2 px-8 pt-16 pb-12 ">
              <Row gutter={[36, 36]} justify={"space-between"} align={"middle"}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <h2 className="heading_24 mb-4 text-left">
                    Your Data is Secure
                  </h2>
                  <p>
                    Keep complete control of your data with our privacy-first
                    approach. Deploy your RAG systems on your own cloud, with
                    our SOC 2 and ISO 27001 compliant platform
                  </p>
                </Col>

                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={12}
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Image
                    src={DataSecureImage}
                    alt="Your Data is Secure"
                    //   className="w-full"
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Feature;
