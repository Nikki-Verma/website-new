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

const getItems: (
  panelStyle: CSSProperties,
  headerStyle: CSSProperties,
) => CollapseProps["items"] = (panelStyle, headerStyle) => [
  {
    key: 1,
    label: "What is SimplAI used for?",
    children: (
      <p>
        SimplAI streamlines AI development, empowering teams to quickly create,
        deploy, and refine generative AI applications. It enhances productivity,
        accelerates revenue generation, and fosters rapid experimentation for
        continuous improvement.
      </p>
    ),
    style: panelStyle,
    styles: {
      header: headerStyle,
    },
  },
  {
    key: 2,
    label: "Who can use SimplAI?",
    children: (
      <p>
        SimplAI is for all innovative teams – offering an enterprise-grade
        solution to streamline processes, enhance productivity, and foster
        innovation. Our vision is to democratize AI for everyone.
      </p>
    ),
    style: panelStyle,
    styles: {
      header: headerStyle,
    },
  },
  {
    key: 3,
    label: "Which LLMs SimplAI support?",
    children: (
      <p>
        SimplAI support a wide range of Large language models (LLM), including
        both open-source and closed-source models, and continually integrate new
        models to meet your needs.
      </p>
    ),
    style: panelStyle,
    styles: {
      header: headerStyle,
    },
  },
  {
    key: 4,
    label: "What is a SimplAI Credit?",
    children: (
      <>
        <p>
          A SimplAI Credit serves as the unit of currency within the SimplAI
          platform, facilitating access to its features and services. It enables
          users to deploy models, conduct experiments, and efficiently manage
          their AI projects.
        </p>
        <br />
        <p>
          When executing tasks within SimplAI, credits are deducted based on the
          complexity and duration of the operation. The cost of an execution
          comprises two main components: Fixed and Variable.
        </p>
        <br />
        <p>
          Fixed Costs: These are the standard charges associated with each
          execution, regardless of the specific tasks performed. The fixed cost
          varies depending on your subscription tier:
          <br />
          - 8 credits for Free accounts
          <br />
          - 6 credits for Team accounts
          <br />- 4 credits for Business accounts
        </p>
        <br />
        <p>
          Variable Costs: Variable charges encompass tasks involving compute
          time and third-party services, notably Large Language Models (LLMs).
          If you provide your own API key for third-party services, no
          additional credits are deducted for that step. However, if an API key
          is not provided, the cost will be subject to a 20% surcharge.
        </p>
      </>
    ),
    style: panelStyle,
    styles: {
      header: headerStyle,
    },
  },
  {
    key: 5,
    label: "Do I need to enter a credit card to try SimplAI?",
    children: (
      <p>
        No, we offer a waitlist for interested users to join and explore the
        platform firsthand. Once you're off the waitlist, you can access
        SimplAI's capabilities without requiring a credit card.
      </p>
    ),
    style: panelStyle,
    styles: {
      header: headerStyle,
    },
  },
  {
    key: 6,
    label: "How does SimplAI protect my privacy?",
    children: (
      <p>
        We prioritize confidentiality and maintain rigorous data security
        measures. Your privacy is paramount, upheld through industry best
        practices.
      </p>
    ),
    style: { ...panelStyle, marginBottom: "0" },
    styles: {
      header: headerStyle,
    },
  },
];

const Pricing = () => {
  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    borderRadius: "8px",
    border: "0.5px solid var(--Stroke, #A6BCDA)",
    background: "var(--Support, #F8FAFC)",
  };
  const headerStyle: React.CSSProperties = {
    color: "var(--Text-Color-900, #171717)",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
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
          <p className="font-16 text-center mb-12">
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
              lg={18}
              xl={18}
              className="collapse-container"
            >
              <Collapse
                bordered={false}
                items={getItems(panelStyle, headerStyle)}
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
