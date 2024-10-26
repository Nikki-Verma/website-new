import Image from "next/image";
import { Row, Col } from "antd";

const CardInfo = ({ data }: any) => {
  return (
    <div className="container mb-0">
      <Row gutter={[20, 20]}>
        {data?.map((value: any) => {
          return (
            <Col md={6} xs={24} style={{ display: "flex" }}>
              <div className="w-full flex justify-center flex-col items-center card_v2_with_hover px-4 py-8">
                <Image src={value.icon} alt={value.title} />
                <h5 className="text-center mt-6 mb-4">{value.title}</h5>
                <p className="font-18 text-center">{value.description}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CardInfo;
