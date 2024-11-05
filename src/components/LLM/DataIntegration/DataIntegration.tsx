import Image from "next/image";

import {
  BuildProductionImage,
  DataConnectorImage,
  RetrievalImage,
} from "@/util/images";
import { Col, Row } from "antd";
const DataIntegration = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading">
            Bring your own data via our <br />
            data integration engine
          </div>
        </div>

        <Row gutter={[16, 16]} justify={"space-between"} align={"stretch"}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div className="card_v2 py-8 px-8 h-full">
              <div className="h-full flex justify-between flex-col ">
                <div>
                  <h4 className="heading_24 text-left mb-4">Data connectors</h4>
                  <p className="text-left">
                    Seamlessly sync data from over 300 sources, enabling smooth
                    and rapid data integration across platforms.
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
                  <h4 className="heading_24 text-left mb-4">
                    Build production-ready RAG
                  </h4>
                  <p className="text-left">
                    Use a powerful RAG interface supporting any vector database,
                    embeddings, and chunking for structured and unstructured
                    data.
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
                  <h4 className="heading_24 text-left mb-4">
                    Retrieval playground
                  </h4>
                  <p className="text-left ">
                    Experiment, iterate, and refine in the simplest and fastest
                    way to maximize accuracy and performance.
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
