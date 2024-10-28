import Button from "@/UIComponents/Button";
import BannerExpert from "@/components/BannerExpert/BannerExpert";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import { Col, Collapse, CollapseProps, Row } from "antd";
import { CSSProperties } from "react";
import { FaCheck } from "react-icons/fa6";
import "./PricingPlans.css";

const pricingPlans: any = [
  {
    title: "Free",
    description: "Build and deploy AI apps and automations.",
    price: "$0",
    basis: "/month",
    features: [
      "100 credits/day + pay for additional runs",
      "Connecting closed source APIs",
      "20 MB of storage for datasets (knowledge base creation)",
      "Knowledge base creation (additional charge)",
      "Create pipelines and agents",
      "Pipeline/agent API",
      "Chat history storage",
      "1 User",
    ],
    buttonLabel: "Request Demo",
    buttonLink: "#",
  },
  // {
  //   title: "Pro",
  //   description: "Build and deploy AI apps and automations.",
  //   price: "$0",
  //   basis: "/month",
  //   features: [
  //     "100 credits/day + pay for additional runs",
  //     "Connecting closed source APIs",
  //     "20 MB of storage for datasets (knowledge base creation)",
  //     "Knowledge base creation (additional charge)",
  //     "Create pipelines and agents",
  //     "Pipeline/agent API",
  //     "Chat history storage",
  //     "1 User",
  //   ],
  //   buttonLabel: "Request Demo",
  //   buttonLink: "#",
  // },
  // {
  //   title: "Team",
  //   description: "Build and deploy AI apps and automations.",
  //   price: "$0",
  //   basis: "/month",
  //   mostPopular: true,
  //   features: [
  //     "100 credits/day + pay for additional runs",
  //     "Connecting closed source APIs",
  //     "20 MB of storage for datasets (knowledge base creation)",
  //     "Knowledge base creation (additional charge)",
  //     "Create pipelines and agents",
  //     "Pipeline/agent API",
  //     "Chat history storage",
  //     "1 User",
  //   ],
  //   buttonLabel: "Request Demo",
  //   buttonLink: "#",
  // },
  {
    title: "Enterprise",
    price: "Custom",
    description: "Build and deploy AI apps and automations.",
    features: [
      "100 credits/day + pay for additional runs",
      "Connecting closed source APIs",
      "20 MB of storage for datasets (knowledge base creation)",
      "Knowledge base creation (additional charge)",
      "Create pipelines and agents",
      "Pipeline/agent API",
      "Chat history storage",
      "1 User",
    ],
    buttonLabel: "Request Demo",
    buttonLink: "#",
  },
];

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle,
) => [
  {
    key: 1,
    label: "Access to all Global LLMs",
    children: (
      <p>
        Quickly discover and connect with a unified API for the latest and most
        advanced LLMs
      </p>
    ),
    style: panelStyle,
  },
  {
    key: 2,
    label: "Deploy open source models on your own cloud",
    children: (
      <p>
        With SimplAI, you have the flexibility to deploy any open-source LLM
        model directly on your own cloud infrastructure with one-click
        deployment.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: 3,
    label: "LLM playground",
    children: (
      <p>
        Developers can experiment, test, and evaluate prompts and models in a
        dynamic environment, allowing for iterative improvement Experiment,
        test, and iterate on prompts and model configurations in a fully
        interactive environment, enabling real-time adjustments{" "}
      </p>
    ),
    style: panelStyle,
  },
  {
    key: 4,
    label: "Fine tune any open source model",
    children: (
      <p>
        Securely apply advanced fine-tuning techniques on open-source models in
        your virtual private cloud with our SOC-2 compliant platform{" "}
      </p>
    ),
    style: { ...panelStyle, marginBottom: "0" },
  },
];

const Pricing = () => {
  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    borderRadius: "8px",
    border: "0.5px solid var(--Stroke, #A6BCDA)",
    background: "var(--Support, #F8FAFC)",
  };

  return (
    <>
      <Header />
      <section className="section mt-12">
        <div className="container">
          <div className="section_heading_container">
            <div className="home_page_heading">
              Discover boundless creativity
              <br />
              with one plan
            </div>
          </div>
          <p className="font-18 text-center mb-12">
            Volume-based pricing with transparency in mind. Only pay for what
            you use.
          </p>
          <Row gutter={[36, 36]} justify={"space-evenly"} align={"stretch"}>
            {pricingPlans.map((plan: any, index: number) => {
              return (
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                  <div
                    className={`card_v2 px-4 py-4 plan-card ${
                      plan.mostPopular ? "most_popular" : ""
                    }`}
                  >
                    {plan.mostPopular && (
                      <div className="plan_tag">MOST POPULAR</div>
                    )}
                    <h3 className="plan_heading">{plan.title}</h3>
                    <p className="plan_description">{plan.description}</p>
                    <h4 className="price">
                      {plan.price} <span>{plan.basis}</span>
                    </h4>
                    <div className="my-6 flex justify-center">
                      <Button
                        url={plan.buttonLink}
                        label={plan.buttonLabel}
                        color={plan.mostPopular ? "button_white" : ""}
                      />
                    </div>
                    <div>
                      {plan.features.map((feature: string, index: number) => {
                        return (
                          <div className="flex items-center gap-2 feature">
                            <span>
                              <FaCheck />
                            </span>
                            {feature}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>
      <section className="section mt-12">
        <div className="container">
          <Row gutter={[36, 36]} justify={"center"} align={"top"}>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={16}
              xl={14}
              className="collapse-container"
            >
              <Collapse
                bordered={false}
                items={getItems(panelStyle)}
                style={{ background: "transparent", width: "100%" }}
                className="accordian_custom"
                expandIconPosition={"end"}
              />
            </Col>
          </Row>
        </div>
      </section>
      <CaseStudy />
      <BannerExpert />
      <Footer />
    </>
  );
};

export default Pricing;
