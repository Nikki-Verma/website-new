import { Col, Row } from "antd";
import Image from "next/image";

const CardInfo = ({ data }: any) => {
  return (
    <div className="container mb-0">
      <Row gutter={[36, 36]} justify={"center"}>
        {data?.map((value: any) => {
          return (
            <Col md={6} xs={20} style={{ display: "flex" }}>
              <div className="w-full flex justify-start flex-col items-center card_v2_with_hover px-4 py-8">
                <Image src={value.icon} alt={value.title} />
                <h5 className="text-lg text-center mt-4 mb-2">{value.title}</h5>
                <p className="font-16 text-center">{value.description}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CardInfo;
