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
  // const tabsConfig: any = {
  //   banner: {
  //     image: RetailBankingImage,
  //     title: "Retail & Commercial Banking",
  //     description:
  //       "Maximize efficiency and enhance customer experience with AI-driven automation.",
  //   },

  //   tabs: {
  //     tabsName: [
  //       "Customer Experience",
  //       "Fraud Detection",
  //       "Loan Processing",
  //       "Regulatory Compliance",
  //       "Customer Support",
  //     ],
  //     tabsContent: {
  //       "Customer Experience": {
  //         description:
  //           "Deploy conversational AI assistants for customer queries, onboarding, and hyper-personalized product recommendations.",
  //         features: [
  //           "Instant Customer Support",
  //           "Seamless Onboarding",
  //           "Hyper-Personalized Recommendations",
  //           "Multilingual Support",
  //           "Data-Driven Insights",
  //         ],
  //         image: CustomerExperienceImage,
  //       },
  //       "Fraud Detection": {
  //         description:
  //           "Utilize AI co-pilots for fraud prevention, synthetic data generation for model training, and adaptive learning techniques.",
  //         features: [
  //           "AI Co-pilots for Real-Time Fraud Prevention",
  //           "Synthetic Data for Enhanced Model Training",
  //           "Adaptive Learning to Counter Evolving Fraud",
  //         ],
  //         image: FraudDeductionImage,
  //       },
  //       "Loan Processing": {
  //         description:
  //           "Automate loan workflows from origination to credit risk assessment using AI-driven document processing.",
  //         features: [
  //           "Automate Loan Workflows from Origination to Risk Assessment",
  //           "AI-Powered Document Processing for Faster Decisions",
  //           "Streamline Loan Approval with Intelligent Automation",
  //         ],
  //         image: LoanProcessingImage,
  //       },
  //       "Regulatory Compliance": {
  //         description:
  //           "Streamline KYC and regulatory reporting processes through intelligent automation.",
  //         features: [
  //           "Automate KYC and Regulatory Reporting",
  //           "Ensure Real-Time Compliance with AI",
  //           "Minimize Errors in Compliance Processes",
  //         ],
  //         image: RegulatoryComplianceImage,
  //       },
  //       "Customer Support": {
  //         description:
  //           "Leverage AI-generated responses and voice AI for enhanced call center automation",
  //         features: [
  //           "AI-Driven Responses for Call Center Automation",
  //           "Virtual Assistants for Customer Inquiries",
  //           "Improve Response Time and Accuracy with AI",
  //         ],
  //         image: CustomerSupportImage,
  //       },
  //     },
  //   },
  // };

  const [activeTab, setActiveTab] = useState<string>(
    tabsConfig.tabs.tabsName[0]
  );

  console.log(tabsConfig.banner?.image, "checking url");
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
            style={{ backgroundImage: `url(${tabsConfig.banner?.image?.src})` }}
          >
            <div className="text_content w-full">
              <p className="tabs_heading ">
                {tabsConfig.banner.title}
                <div className="gradient_line" />
              </p>
              <h3 className="tabs_description text-white">
                {tabsConfig.banner.description}
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
              {tabsConfig.tabs.tabsName?.map((tabName: string) => {
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
                  {tabsConfig.tabs.tabsContent?.[activeTab]?.description}
                </p>
                <ul className="feature_list list-disc">
                  {tabsConfig.tabs.tabsContent?.[activeTab]?.features.map(
                    (feature: string) => {
                      return <li>{feature}</li>;
                    }
                  )}
                </ul>
              </div>
              <div className="active_tab_image">
                <Image
                  src={tabsConfig.tabs.tabsContent?.[activeTab]?.image}
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
