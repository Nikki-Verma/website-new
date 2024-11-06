import { CommonHeroBgImage } from "@/util/images";
import { Col, Flex, Row, Space } from "antd";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
const CommonHero = ({ data }: any) => {
  return (
    <div
      className="dark_bg_hero"
      style={{ backgroundImage: `url(${CommonHeroBgImage?.src})` }}
    >
      {/* hero_content */}
      <div className=" container mb-0">
        <Row gutter={[36, 20]} justify="center" align="middle">
          <Col
            xs={24}
            sm={24}
            md={22}
            lg={20}
            xl={20}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="product_page_name_solution text-center">
              {data.title}
            </div>
            <h1 className="hero_h1_industry mb-4">{data.heading}</h1>
            <p className="font-16 text-white mb-8 text-center">
              {data.description}
            </p>
          </Col>
          <Col
            span={24}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Space
              className="industry_hero_button_container"
              style={{ gap: 24 }}
            >
              <Link href={"/request-demo"} prefetch>
                <button className="button button_white">Let's Talk</button>
              </Link>
              <Link
                className="solution-pages-hero-links"
                href={"https://app.simplai.ai/login"}
                prefetch
              >
                <Flex className="solution-pages-hero-links">
                  <span>Try Agents & Automations</span>
                  <span className="arrow">
                    <IoMdArrowForward />
                  </span>
                </Flex>
              </Link>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CommonHero;
