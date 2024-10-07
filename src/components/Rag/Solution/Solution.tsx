import Image from "next/image";
import ConversationalAiImage from "../../../assets/png/conversational-aI.png";
import ContentGenerationImage from "../../../assets/png/content-generation.png";
import InformationRetrievalImage from "../../../assets/png/information-retrieval.png";
import { IoMdArrowForward } from "react-icons/io";

const Solution = () => {
  return (
    <div className="dark_bg mb-120">
      <div className="container mb-0">
        <h2 className="text-white mb-16">
          RAG Solutions <br />
          Building intelligent and factual AI systems
        </h2>
        <div className="flex justify-between gap-12">
          <div className="dark_card px-8 py-8 w-full">
            <div className="h-full flex justify-between flex-col">
              <div className="mx-auto">
                <Image
                  src={ConversationalAiImage}
                  alt="ai agent"
                  className="text-center"
                />
              </div>

              <div>
                <h4 className="heading_24 text-white text-left">
                  Conversational AI
                </h4>
                <p className="text-white mb-4">
                  Chatbots and AI assistants grounded with truth
                </p>
                <button className="link_button flex items-center gap-3">
                  Learn more{" "}
                  <span className="icon">
                    <IoMdArrowForward />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="dark_card px-8 py-8 w-full">
            <div className="h-full flex justify-between flex-col">
              <div className="mx-auto">
                <Image
                  src={ContentGenerationImage}
                  alt="Content Generation"
                  className="text-center"
                />
              </div>

              <div>
                <h4 className="heading_24 text-white text-left">
                  Content Generation
                </h4>
                <p className="text-white mb-4">
                  Summarizations and question answering with precise citations
                </p>
                <button className="link_button flex items-center gap-3">
                  Learn more{" "}
                  <span className="icon">
                    <IoMdArrowForward />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="dark_card px-8 py-8 w-full">
            <div className="h-full flex justify-between flex-col">
              <div className="mx-auto">
                <Image
                  src={InformationRetrievalImage}
                  alt="Information Retrieval"
                  className="text-center"
                />
              </div>

              <div>
                <h4 className="heading_24 text-white text-left">
                  Information Retrieval
                </h4>
                <p className="text-white mb-4">
                  Power hybrid search and recommendation system
                </p>
                <button className="link_button flex items-center gap-3">
                  Learn more{" "}
                  <span className="icon">
                    <IoMdArrowForward />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
