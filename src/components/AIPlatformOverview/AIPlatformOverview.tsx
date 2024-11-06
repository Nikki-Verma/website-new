import { Col, Row } from "antd";
import Image from "next/image";

const AIPlatformOverview = ({
  data,
  heading1 = "",
  heading2 = "",
}: {
  data: any;
  heading1?: string;
  heading2?: string;
}) => {
  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading_tag">{heading1}</div>
          <div className="home_page_heading">{heading2}</div>
        </div>
        <Row gutter={[36, 36]}>
          {data.map((value: any) => {
            return (
              <Col xs={24} md={8} style={{ display: "flex" }}>
                <div className="card_v2_with_hover py-6 px-4 flex justify-start flex-col items-center">
                  <Image
                    src={value.icon}
                    alt={value.heading}
                    className="mb-4"
                  />
                  <h4 className="heading_card_v2_with_hover">
                    {value.heading}
                  </h4>
                  <p className="description_card_v2_with_hover">
                    {value.description}
                  </p>
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
