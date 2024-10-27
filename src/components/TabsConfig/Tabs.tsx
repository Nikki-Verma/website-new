"use client";
import { useState } from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import "./tabs.css";

const Tabs = ({ tabsConfig }: any) => {
  const [activeTab, setActiveTab] = useState<string>(
    tabsConfig?.tabs?.tabsName[0]
  );

  return (
    <div className="section">
      <div className="container mb-0">
        <div className="card_v2 mb-0">
          <div
            className="tabs_banner"
            style={{
              backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 80%), rgb(0 0 0 / 40%)), url(${tabsConfig?.banner?.image?.src})`,
            }}
          >
            <Row>
              <Col xs={24} md={16}>
                <div className="text_content w-full">
                  <p className="tabs_heading ">
                    {tabsConfig?.banner?.title}
                    <div className="gradient_line" />
                  </p>
                  <h3 className="tabs_description text-white">
                    {tabsConfig?.banner?.description}
                  </h3>
                </div>
              </Col>
            </Row>
          </div>
          {/* tabs list */}
          <div className="tabs_content">
            <div className="tab_name_list">
              {tabsConfig?.tabs?.tabsName?.map((tabName: string) => {
                return (
                  <span
                    className={`tab_name ${
                      activeTab === tabName ? "tab_active" : ""
                    }`}
                    onClick={() => setActiveTab(tabName)}
                  >
                    {tabName}
                  </span>
                );
              })}
            </div>

            {/* active tab details */}
            <div className="active_tab_detail">
              <Row gutter={[36, 36]}>
                <Col xs={24} md={16}>
                  <div className="active_tab_text_content">
                    <p className="active_tab_description">
                      {tabsConfig?.tabs?.tabsContent?.[activeTab]?.description}
                    </p>
                    {tabsConfig?.tabs?.tabsContent?.[activeTab]?.features
                      ?.length ? (
                      <ul className="feature_list list-disc">
                        {tabsConfig?.tabs?.tabsContent?.[
                          activeTab
                        ]?.features?.map((feature: string) => {
                          return <li>{feature}</li>;
                        })}
                      </ul>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>
                <Col xs={24} md={8}>
                  <div className="active_tab_image">
                    <Image
                      src={tabsConfig?.tabs.tabsContent?.[activeTab]?.image}
                      alt={activeTab}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
