import Image from "next/image";

import BuildProductionImage from "../../../assets/png/build-production-ready-rag.png";
import DataConnectorImage from "../../../assets/png/data-connectors.png";
import RetrievalImage from "../../../assets/png/retrieval-playground.png";
const DataIntegration = () => {
  return (
    <div className="container">
      <h2 className="mb-12">
        Bring your own data via our data <br />
        integration engine
      </h2>
      <div className="flex gap-16 mb-16">
        <div className="card_v2 py-8 px-8">
          <div className="h-full flex justify-between flex-col">
            <div>
              <h4 className="text-left mb-4">Data connectors</h4>
              <p className="text-left">
                Directly sync your data from various sources and streamline data
                ingestion without the need for building custom integration
                development
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

        <div className="card_v2">
          <div className="h-full flex justify-between flex-col">
            <div className="pt-8 px-8">
              <h4 className="text-left mb-4">Build Production-Ready RAG</h4>
              <p className="text-left">
                Utilize an end-to-end interface for RAG with support for any
                vector database, embeddings, parsers, and chunking on both
                structured and unstructured data
              </p>
            </div>
            <div className="">
              <Image
                src={BuildProductionImage}
                alt="BuildProductionImage"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="card_v2">
        <div className="h-full flex justify-between flex-col">
          <div className="pt-8 px-8">
            <h4 className="text-left mb-4">Build Production-Ready RAG</h4>
            <p className="text-left w-3/5">
              Utilize an end-to-end interface for RAG with support for any
              vector database, embeddings, parsers, and chunking on both
              structured and unstructured data
            </p>
          </div>
          <div className="mt-20">
            <Image
              src={RetrievalImage}
              alt="RetrievalImage"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataIntegration;
