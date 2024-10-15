import { RetailAndCommercial } from "@/util/images";
import {
  AutomationImage,
  CustomerImage,
  DiagnosticImage,
  CostReductionImage,
  BfsiHeroBanner,
  CustomerService,
  FraudDetection,
  LoanProcessing,
  RegulatoryCompliance,
  CustomerSupport,
} from "../util/svgImage";

export const banner = {
  title: "BFSI",
  heading: "Boost Productivity, Engagement, and Efficiency with Gen AI",
  description:
    "Empower your organization with intelligent process automation, operational assistance, and human-like decision-making. From enhancing productivity to driving customer engagement, scale your financial services with Generative AI solutions built for efficiency and growth.",
  buttonText: "Request Demo",
  buttonLink: "#",
  img: BfsiHeroBanner
};


export  const solutionsList = [
  {
    title: "Boost Productivity & Efficiency",
    description:
      "Automate workflows to reduce manual tasks and accelerate results",
    icon: AutomationImage,
  },
  {
    title: "Enhance Decision-Making",
    description:
      "Empower decision-making and automate compliance for stronger governance",
    icon: CustomerImage,
  },
  {
    title: "Elevate Customer Engagement",
    description:
      "Deliver personalized experiences and optimize customer journeys",
    icon: DiagnosticImage,
  },
  {
    title: "Cut Operational Costs",
    description: "Streamline operations and automate tasks to reduce costs.",
    icon: CostReductionImage,
  },
];


export const retailAndBanking: any = {
    banner: {
      image: RetailAndCommercial,
      title: "Retail & Commercial Banking",
      description:
        "Maximize efficiency and enhance customer experience with AI-driven automation.",
    },

    tabs: {
      tabsName: [
        "Customer Experience",
        "Fraud Detection",
        "Loan Processing",
        "Regulatory Compliance",
        "Customer Support",
      ],
      tabsContent: {
        "Customer Experience": {
          description:
            "Deploy conversational AI assistants for customer queries, onboarding, and hyper-personalized product recommendations.",
          features: [
            "Instant Customer Support",
            "Seamless Onboarding",
            "Hyper-Personalized Recommendations",
            "Multilingual Support",
            "Data-Driven Insights",
          ],
          image: CustomerService,
        },
        "Fraud Detection": {
          description:
            "Utilize AI co-pilots for fraud prevention, synthetic data generation for model training, and adaptive learning techniques.",
          features: [
            "AI Co-pilots for Real-Time Fraud Prevention",
            "Synthetic Data for Enhanced Model Training",
            "Adaptive Learning to Counter Evolving Fraud",
          ],
          image: FraudDetection,
        },
        "Loan Processing": {
          description:
            "Automate loan workflows from origination to credit risk assessment using AI-driven document processing.",
          features: [
            "Automate Loan Workflows from Origination to Risk Assessment",
            "AI-Powered Document Processing for Faster Decisions",
            "Streamline Loan Approval with Intelligent Automation",
          ],
          image: LoanProcessing,
        },
        "Regulatory Compliance": {
          description:
            "Streamline KYC and regulatory reporting processes through intelligent automation.",
          features: [
            "Automate KYC and Regulatory Reporting",
            "Ensure Real-Time Compliance with AI",
            "Minimize Errors in Compliance Processes",
          ],
          image: RegulatoryCompliance,
        },
        "Customer Support": {
          description:
            "Leverage AI-generated responses and voice AI for enhanced call center automation",
          features: [
            "AI-Driven Responses for Call Center Automation",
            "Virtual Assistants for Customer Inquiries",
            "Improve Response Time and Accuracy with AI",
          ],
          image: CustomerSupport,
        },
      },
    },
  };
