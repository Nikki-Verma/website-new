import { ReliableIcon, ScalableIcon, SecureIcon } from "@/util/icons";
import { Col, Row } from "antd";
import Image from "next/image";

const AIPlatformOverview = () => {
  const data = [
    {
      icon: SecureIcon,
      heading: "Secure",
      description:
        "Deploy on private clouds or on-premises, ensuring optimal security with SOC 2 and ISO compliance​ . Navigate complex regulations with confidence through our robust compliance framework",
    },
    {
      icon: ScalableIcon,
      heading: "Scalable",
      description:
        "Transition from PoC to Production - effortlessly scale AI initiatives, ensuring operational agility​. Auto-scaling capabilities efficiently manage fluctuating workloads​.",
    },
    {
      icon: ReliableIcon,
      heading: "Reliable",
      description:
        "Build trusted AI systems with guardrails, retrieval-augmented generation (RAG), and fine-tuning to ensure AI outputs are accurate and reliable. Transparency in workflows with comprehensive tracing and evaluation capabilities that meet regulatory standard.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading">
            SimplAI Enterprise-Grade AI Platform: Scale Beyond
            <br /> PoC to Capture Value
          </div>
        </div>
        <Row gutter={[36, 36]}>
          {data.map((value: any) => {
            return (
              <Col xs={24} md={8} style={{ display: "flex" }}>
                <div className="card_v2_with_hover py-6 px-4 flex justify-center flex-col items-center">
                  <Image src={value.icon} alt={value.heading} />
                  <h4 className="heading_24 text-center">{value.heading}</h4>
                  <p className="font-16 text-center">{value.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
};

export default AIPlatformOverview;
