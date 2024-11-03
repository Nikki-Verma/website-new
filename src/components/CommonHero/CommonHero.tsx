import { CommonHeroBgImage } from "@/util/images";
import { Col, Row } from "antd";
const CommonHero = ({ data }: any) => {
  return (
    <div
      className="dark_bg_hero mb-16"
      style={{ backgroundImage: `url(${CommonHeroBgImage?.src})` }}
    >
      {/* hero_content */}
      <div className=" container mb-0">
        <Row gutter={[36, 36]} justify="center" align="middle">
          <Col
            span={20}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="product_page_name_solution text-center">
              {data.title}
            </div>
            <h1 className="text-left color-white text-white mb-4 text-center">
              {data.heading}
            </h1>
            <p className="font-16 text-white mb-8 text-center">
              {data.description}
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CommonHero;
