import { Col, Row } from "antd";
import Image from "next/image";

const AIPlatformOverview = ({ data }: { data: any }) => {
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
                <div className="card_v2_with_hover py-6 px-4 flex justify-start flex-col items-center">
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
