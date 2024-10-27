import { Col, Row } from "antd";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import ContentGenerationImage from "../../../assets/png/content-generation.png";
import ConversationalAiImage from "../../../assets/png/conversational-aI.png";
import InformationRetrievalImage from "../../../assets/png/information-retrieval.png";

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
              <div className="h-full flex justify-between flex-col">
                <div className="mx-auto">
                  <Image
                    src={ConversationalAiImage}
                    alt="ai agent"
                    className="text-center"
                  />
                </div>

                <div>
                  <h4 className="heading_24 text-center">Conversational AI</h4>
                  <p className="mb-4 text-center">
                    Chatbots and AI assistants grounded with truth
                  </p>
                  <button className="link_button link_button_primary flex m-auto items-center gap-3">
                    Learn more{" "}
                    <span className="icon">
                      <IoMdArrowForward />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className="card_v2_with_hover px-8 py-8 w-full">
              <div className="h-full flex justify-between flex-col">
                <div className="mx-auto">
                  <Image
                    src={ContentGenerationImage}
                    alt="Content Generation"
                    className="text-center"
                  />
                </div>

                <div>
                  <h4 className="heading_24 text-center text-left">
                    Content Generation
                  </h4>
                  <p className="text-center mb-4">
                    Summarizations and question answering with precise citations
                  </p>
                  <button className="link_button link_button_primary flex items-center m-auto gap-3">
                    Learn more{" "}
                    <span className="icon">
                      <IoMdArrowForward />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <div className="card_v2_with_hover px-8 py-8 w-full">
              <div className="h-full flex justify-between flex-col">
                <div className="mx-auto">
                  <Image
                    src={InformationRetrievalImage}
                    alt="Information Retrieval"
                    className="text-center"
                  />
                </div>

                <div>
                  <h4 className="heading_24 text-center text-left">
                    Information Retrieval
                  </h4>
                  <p className="text-center mb-4">
                    Power hybrid search and recommendation system
                  </p>
                  <button className="link_button link_button_primary m-auto flex items-center gap-3">
                    Learn more{" "}
                    <span className="icon">
                      <IoMdArrowForward />
                    </span>
                  </button>
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
