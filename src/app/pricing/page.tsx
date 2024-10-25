import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Button from "@/UIComponents/Button";
import "./PricingPlans.css";
import { FaCheck } from "react-icons/fa6";
import BannerExpert from "@/components/BannerExpert/BannerExpert";

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
  {
    title: "Pro",
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
  {
    title: "Team",
    description: "Build and deploy AI apps and automations.",
    price: "$0",
    basis: "/month",
    mostPopular: true,
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

const Pricing = () => {
  return (
    <>
      <Header />
      <div className="mt-120">
        <h2>
          Discover boundless creativity
          <br /> with one plan
        </h2>
        <p className="font-18 text-center mb-12">
          Volume-based pricing with transparency in mind. Only pay for what you
          use.
        </p>
        <div className="container flex justify-between gap-6">
          {pricingPlans.map((plan: any, index: number) => {
            return (
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
            );
          })}
        </div>
      </div>
      <BannerExpert />
      <Footer />
    </>
  );
};

export default Pricing;
