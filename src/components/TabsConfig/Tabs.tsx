"use client";
import Image from "next/image";
// import {
//   RetailBankingImage,
//   CustomerExperienceImage,
//   FraudDeductionImage,
//   LoanProcessingImage,
//   RegulatoryComplianceImage,
//   CustomerSupportImage,
// } from "@/util/images";
import "./tabs.css";
import { useState } from "react";

const Tabs = ({ tabsConfig }: any) => {
  const [activeTab, setActiveTab] = useState<string>(
    tabsConfig?.tabs?.tabsName[0]
  );

  // console.log(tabsConfig.banner?.image, "checking url");
  //   const [selectedTabData, setSelectedTabData] = useState()

  return (
    <>
      {/* <style>{`
        .banner {
          background-image: url(${tabsConfig.banner?.image?.src});
          height: 300px;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
        }
      `}</style> */}
      <div className="container">
        <div className="card_v2 mb-0">
          <div
            className="tabs_banner"
            style={{
              backgroundImage: `url(${tabsConfig?.banner?.image?.src})`,
            }}
          >
            <div className="text_content w-full">
              <p className="tabs_heading ">
                {tabsConfig?.banner?.title}
                <div className="gradient_line" />
              </p>
              <h3 className="tabs_description text-white">
                {tabsConfig?.banner?.description}
              </h3>
            </div>
            {/* <div className="tabs_banner_img w-full">
              <Image
                src={tabsConfig.banner.image}
                alt={tabsConfig.banner.title}
              />
            </div> */}
          </div>
          {/* tabs lis */}
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
              <div className="active_tab_text_content">
                <p className="active_tab_description">
                  {tabsConfig?.tabs?.tabsContent?.[activeTab]?.description}
                </p>
                <ul className="feature_list list-disc">
                  {tabsConfig?.tabs?.tabsContent?.[activeTab]?.features.map(
                    (feature: string) => {
                      return <li>{feature}</li>;
                    }
                  )}
                </ul>
              </div>
              <div className="active_tab_image">
                <Image
                  src={tabsConfig?.tabs.tabsContent?.[activeTab]?.image}
                  alt={activeTab}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
