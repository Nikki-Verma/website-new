import Image from "next/image";
import { ReliableIcon, SecureIcon, ScalableIcon } from "@/util/icons";

const AIPlatformOverview = () => {
  const data = [
    {
      icon: SecureIcon,
      heading: "Secure",
      description:
        "Deploy on private cloud or on-premises for maximum data security. SOC 2 and ISO compliance ensure strict security standards are met.",
    },
    {
      icon: ScalableIcon,
      heading: "Scalable",
      description:
        "Easily scale from PoC to full production with auto-scaling that adapts to changing workloads, ensuring seamless performance.",
    },
    {
      icon: ReliableIcon,
      heading: "Reliable",
      description:
        "Achieve high availability with continuous monitoring and fast issue resolution. Full decision traceability and optimized AI workflows ensure reliability.",
    },
  ];

  return (
    <div className="section">
      <div className="container mb-0">
        <h2 className="mb-12">
          SimplAI Enterprise-Grade AI Platform:
          <br /> Scale Beyond PoC to Capture Value
        </h2>
        <div className="flex justify-between gap-8">
          {data.map((value: any) => {
            return (
              <div className="card_v2 py-6 px-4 w-full flex justify-center flex-col items-center">
                <Image src={value.icon} alt={value.heading} />
                <h4 className="heading_24 text-center">{value.heading}</h4>
                <p className="font-18 text-center">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AIPlatformOverview;
