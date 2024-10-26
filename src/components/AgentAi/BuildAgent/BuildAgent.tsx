import Image from "next/image";

import {
  ChatbotFeatureImage,
  CitationImage,
  chatbotImage,
} from "@/util/images";
const BuildAgent = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading">
            Build Smart AI Agents in Minutes
          </div>
        </div>
        <div className="flex gap-16 mb-16">
          <div className="card_v2 h-full flex justify-between flex-col py-8 px-8">
            <div>
              <h4 className="text-left mb-4 w-5/6">
                Conversational AI, Voice AI, Co-pilots, and Assistants
              </h4>
              <p className="text-left">
                From AI-powered chatbots to task-specific AI agents, deploy
                conversational systems that engage users naturally, answer
                complex queries, and perform actions on your behalf
              </p>
            </div>
            <div className="mx-auto text-center w-full">
              <Image
                src={chatbotImage}
                alt="data-connector"
                className="text-center mx-auto"
              />
            </div>
          </div>

          <div className="card_v2 h-full flex justify-between flex-col py-8 px-8">
            <h4 className="text-left mb-4 w-5/6">
              Knowledge-Equipped and Function-Calling Agents
            </h4>
            <p className="text-left">
              Your AI agents go beyond conversation—they can retrieve data,
              perform tasks, and interact with other systems through built-in
              function calling
            </p>
            <div className="">
              <Image
                src={ChatbotFeatureImage}
                alt="BuildProductionImage"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="card_v2 py-8 px-8">
          <div className="grid grid-cols-2 gap-16 ">
            <div className="col-span-1 flex flex-col item-center justify-center">
              <h4 className="text-left mb-4 w-5/6">Citations and Guardrails</h4>
              <p className="text-left pr-4">
                Ensure every response is grounded in verifiable data, with
                citations linked to original sources. Built-in guardrails keep
                your agents safe, reliable, and factual.
              </p>
            </div>
            <div className="col-span-1 flex flex-col justify-start">
              <Image
                src={CitationImage}
                alt="RetrievalImage"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildAgent;
