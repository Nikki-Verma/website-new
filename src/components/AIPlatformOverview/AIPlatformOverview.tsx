import { ReliableIcon, ScalableIcon, SecureIcon } from "@/util/icons";
import { Row, Col } from "antd";
import Image from "next/image";

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
                  <p className="font-18 text-center">{value.description}</p>
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
