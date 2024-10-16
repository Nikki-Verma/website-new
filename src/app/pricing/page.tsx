import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Button from "@/UIComponents/Button";
import "./PricingPlans.css";

const pricingPlans: any = [
  {
    title: "Free",
    price: "$0 /month",
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
  },
  {
    title: "Pro",
    price: "$0 /month",
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
  },
  {
    title: "Team",
    price: "$0 /month",
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
  },
  {
    title: "Enterprise",
    price: "Custom",
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
  },
];

const Pricing = () => {
  return (
    <>
      <Header />
      <div className="container mt-120 flex justify-between gap-6">
        {pricingPlans.map((plan: any, index: any) => (
          <div
            key={index}
            className={`plan-card card_v2 ${
              plan.mostPopular ? "most-popular" : ""
            }`}
          >
            <h3 className="heading_24">{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature: any, idx: any) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="request-button">{plan.buttonLabel}</button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
