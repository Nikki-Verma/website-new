"use client";
import { Tabs as AntdTabs, Col, Row, TabsProps } from "antd";
import { useState } from "react";
import "./tabs.css";
const Tabs = ({ tabsConfig }: any) => {
  const [activeTab, setActiveTab] = useState<string>(
    tabsConfig?.tabs?.tabsName[0],
  );

  const tabItems: TabsProps["items"] = tabsConfig?.tabs?.tabsName?.map(
    (tabName: string, index: any) => {
      return {
        key: index,
        label: tabName,
        children: (
          <Row gutter={[36, 36]}>
            <Col span={24}>
              <div className="active_tab_text_content">
                <p className="active_tab_description mb-6">
                  {tabsConfig?.tabs?.tabsContent?.[tabName]?.description}
                </p>
                {tabsConfig?.tabs?.tabsContent?.[tabName]?.features?.length ? (
                  <ul className="platform_feature_list list-disc">
                    {tabsConfig?.tabs?.tabsContent?.[tabName]?.features?.map(
                      (feature: string) => {
                        return <li>{feature}</li>;
                      },
                    )}
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </Col>
          </Row>
        ),
      };
    },
  );

  console.log(`tab item`, tabItems);

  return (
    <div className="section">
      <div className="container mb-0">
        <div className="card_v2 mb-0">
          <div
            className="tabs_banner"
            style={{
              backgroundImage: `url(${tabsConfig?.banner?.image?.src})`,
            }}
          >
            <Row>
              <Col xs={24} md={16}>
                <div className="text_content w-full">
                  <div className="tabs_heading ">
                    {tabsConfig?.banner?.title}
                    <div className="gradient_line" />
                  </div>
                  <h3 className="tabs_description text-white">
                    {tabsConfig?.banner?.description}
                  </h3>
                </div>
              </Col>
            </Row>
          </div>
          <div className="my-9 mx-8">
            <AntdTabs defaultActiveKey="1" items={tabItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
