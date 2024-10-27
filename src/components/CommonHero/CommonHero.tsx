import Image from "next/image";
import Button from "@/UIComponents/Button";
import { Row, Col } from "antd";
const CommonHero = ({ data }: any) => {
  return (
    <div className="dark_bg_hero mb-120">
      {/* hero_content */}
      <div className=" container mb-0">
        <Row gutter={[36, 36]} justify="center" align="middle">
          <Col md={10}>
            <div>
              <div className="product_page_name mb-24">{data.title}</div>
              <h1 className="text-left color-white text-white mb-4">
                {data.heading}
              </h1>
              <p className="font-18 text-white mb-8">{data.description}</p>
              <Button
                label={data.buttonText}
                url={data.buttonLink}
                color={"button_white"}
              />
            </div>
          </Col>
          <Col md={14}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignSelf: "center",
              }}
            >
              <Image src={data.img} alt={data.title} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CommonHero;
