import Image from "next/image";

import { DataConnectorImage, RetrievalImage } from "@/util/images";
import { Col, Row } from "antd";
import BuildProductionImage from "../../../assets/png/build-production-ready-rag.png";
const DataIntegration = () => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="mb-12">
          Bring your own data via our data <br />
          integration engine
        </h2>
        <Row gutter={[16, 16]} justify={"space-between"} align={"stretch"}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div className="card_v2 py-8 px-8 h-full">
              <div className="h-full flex justify-between flex-col ">
                <div>
                  <h4 className="text-left mb-4">Data connectors</h4>
                  <p className="text-left">
                    Directly sync your data from various sources and streamline
                    data ingestion without the need for building custom
                    integration development
                  </p>
                </div>
                <div className="mx-auto text-center w-full">
                  <Image
                    src={DataConnectorImage}
                    alt="data-connector"
                    className="text-center mx-auto"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div className="card_v2 py-8 px-8  h-full">
              <div className="h-full flex justify-between flex-col">
                <div className="mb-4">
                  <h4 className="text-left mb-4">Build Production-Ready RAG</h4>
                  <p className="text-left">
                    Utilize an end-to-end interface for RAG with support for any
                    vector database, embeddings, parsers, and chunking on both
                    structured and unstructured data
                  </p>
                </div>
                <div>
                  <Image
                    src={BuildProductionImage}
                    alt="BuildProductionImage"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col span={24}>
            <div className="card_v2 py-8 px-8 h-full">
              <div className="h-full flex justify-between flex-col">
                <div className="mb-4">
                  <h4 className="text-left mb-4">Build Production-Ready RAG</h4>
                  <p className="text-left ">
                    Utilize an end-to-end interface for RAG with support for any
                    vector database, embeddings, parsers, and chunking on both
                    structured and unstructured data
                  </p>
                </div>
                <div>
                  <Image
                    src={RetrievalImage}
                    alt="RetrievalImage"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DataIntegration;
