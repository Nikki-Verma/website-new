import {
  ContentGenerationImage,
  ConversationalAiImage,
  InformationRetrievalImage,
} from "@/util/images";
import { Col, Row } from "antd";
import Image from "next/image";

const Solution = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading_tag">RAG Solutions</div>
          <div className="home_page_heading">
            Building intelligent and factual AI systems
          </div>
        </div>
        <Row gutter={[36, 36]} justify={"space-between"} align={"stretch"}>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className="card_v2_with_hover px-8 py-8 w-full">
              <div className="h-full flex justify-between gap-6 flex-col">
                <div className="mx-auto">
                  <Image
                    src={ConversationalAiImage}
                    alt="ai agent"
                    className="text-center"
                    height={183}
                  />
                </div>

                <div>
                  <h4 className="text-lg text-center">Conversational AI</h4>
                  <p className="mb-4 text-center">
                    Chatbots and AI assistants grounded with truth
                  </p>
                  {/* <button className="link_button link_button_primary flex m-auto items-center gap-3">
                    Learn more{" "}
                    <span className="icon">
                      <IoMdArrowForward />
                    </span>
                  </button> */}
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className="card_v2_with_hover px-8 py-8 w-full">
              <div className="h-full flex justify-between gap-6 flex-col">
                <div className="mx-auto">
                  <Image
                    src={ContentGenerationImage}
                    alt="Content Generation"
                    className="text-center"
                    height={183}
                  />
                </div>

                <div>
                  <h4 className="text-lg text-center text-left">
                    Content generation
                  </h4>
                  <p className="text-center mb-4">
                    Summarizations and question answering with precise citations
                  </p>
                  {/* <button className="link_button link_button_primary flex items-center m-auto gap-3">
                    Learn more{" "}
                    <span className="icon">
                      <IoMdArrowForward />
                    </span>
                  </button> */}
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className="card_v2_with_hover px-8 py-8 w-full">
              <div className="h-full flex justify-between gap-6 flex-col">
                <div className="mx-auto">
                  <Image
                    src={InformationRetrievalImage}
                    alt="Information Retrieval"
                    className="text-center"
                    height={183}
                  />
                </div>

                <div>
                  <h4 className="text-lg text-center text-left">
                    Information retrieval
                  </h4>
                  <p className="text-center mb-4">
                    Power hybrid search and recommendation system
                  </p>
                  {/* <button className="link_button link_button_primary m-auto flex items-center gap-3">
                    Learn more{" "}
                    <span className="icon">
                      <IoMdArrowForward />
                    </span>
                  </button> */}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Solution;
