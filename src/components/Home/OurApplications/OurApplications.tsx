import Image from "next/image";
import "./style.css";
import { FunctionComponent, SVGProps } from "react";
import AutoMatedProcess from "../../../assets/svg/icons/automated-process.svg";
import Coding from "../../../assets/svg/icons/coding.svg";
import CustomerService from "../../../assets/svg/icons/customer-service-agent.svg";
import Documentation from "../../../assets/svg/icons/documentation.svg";
import Programming from "../../../assets/svg/icons/programming.svg";
import VoiceRecognition from "../../../assets/svg/icons/voice-recognition.svg";

interface Application {
  icon: any; // Assuming icons might be a component or string path
  heading: string;
  description: string;
}

const OurApplications = () => {
  const applicationList: Application[] = [
    {
      icon: Coding,
      heading: "No Code Experience",
      description:
        "Innovative teams can experiment and build production-ready applications with ease and zero coding",
    },
    {
      icon: Programming,
      heading: "Gen AI Stack",
      description:
        "A comprehensive stack that unifies cloud infrastructure, models, data, tools, applications, and observability",
    },
    {
      icon: Documentation,
      heading: "Knowledge AI",
      description:
        "Develop advanced RAG applications powered by data, documents, and extensive knowledge bases",
    },
    {
      icon: CustomerService,
      heading: "Agentic AI",
      description:
        "Intelligent agents that automatically execute tasks and make decisions in real-world scenarios",
    },
    {
      icon: VoiceRecognition,
      heading: "Speech AI",
      description:
        "Advanced speech capabilities including real-time speech-to-speech translations, voice bots, text-to-speech (TTS), and ASR ",
    },
    {
      icon: AutoMatedProcess,
      heading: "AI Automations",
      description:
        "Streamline and accelerate manual workflows with multi-step automation for complex use cases",
    },
  ];

  return (
    <div className="application_container container">
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <div className="col-span-2">
          <div className="our_application_left_side">
            <h3>
              Build powerful Gen AI applications with our advanced generative AI
              solutions
            </h3>
            <button className="button mt-8">Contact us</button>
          </div>
        </div>
        {applicationList?.map((application: Application) => {
          return (
            <div className="cc_card">
              <div className="mb-6">
                <Image src={application.icon} alt={application.heading} />
              </div>
              <div>
                <h5 className="mb-4">{application.heading}</h5>
                <p>{application.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurApplications;
