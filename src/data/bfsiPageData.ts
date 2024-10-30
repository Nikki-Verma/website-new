import {
  CapitalMarketing,
  InsuranceBanner,
  RetailAndCommercial,
} from "@/util/images";
import {
  BfsiHeroBanner,
  ClaimManagement,
  CostReductionImage,
  CustomerEngagementIcon,
  CustomerExp,
  CustomerExpV2,
  CustomerService,
  CustomerSupport,
  DecisionIcon,
  FinancialAdvisor,
  FraudDetection,
  LoanProcessing,
  ProductivityIcon,
  RegulatoryCompliance,
  Sales,
  UnderWriting,
} from "../util/svgImage";

export const banner = {
  title: "BFSI",
  heading:
    "Accelerate growth and unlock efficiency with Gen AI powered financial services",
  description:
    "Empower your organization with intelligent agents and AI-driven automation to enhance productivity and drive customer engagement. SimplAI delivers fast, effective solutions tailored for financial industry.",
  buttonText: "Request Demo",
  buttonLink: "#",
  img: BfsiHeroBanner,
};

export const solutionsList = [
  {
    title: "Boost Productivity & Efficiency",
    description:
      "Leverage intelligent AI agents to enhance knowledge workers, reducing manual tasks and accelerate outcomes",
    icon: ProductivityIcon,
  },
  {
    title: "Enhance Decision-Making",
    description:
      "Utilize agentic process automation (APA) to strengthen decision-making and facilitate real-time insights",
    icon: DecisionIcon,
  },
  {
    title: "Elevate Customer Engagement",
    description:
      "Provide personalized experiences through agentic AI, optimizing customer journeys powered by LLMs",
    icon: CustomerEngagementIcon,
  },
  {
    title: "Cut Operational Costs",
    description:
      "Streamline operations with AI-driven automation, significantly reducing costs while optimizing resources.",
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
        image: CustomerExp,
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

export const insurance: any = {
  banner: {
    image: InsuranceBanner,
    title: "Insurance",
    description:
      "Streamline operations and enhance risk management with AI-powered solutions.",
  },

  tabs: {
    tabsName: [
      "Claims Management",
      "Underwriting",
      "Customer Service",
      "Sales & Distribution",
    ],
    tabsContent: {
      "Claims Management": {
        description:
          "Automate FNOL (First Notice of Loss), claims validation, and fraud detection using AI-driven workflows.",
        features: [
          "Automate FNOL (First Notice of Loss) with AI-Driven Workflows",
          "Streamline Claims Validation and Fraud Detection",
          "Hyper-Personalized Recommendations",
          "Enhance Efficiency in Claims Processing Through Automation",
        ],
        image: ClaimManagement,
      },
      Underwriting: {
        description:
          "Implement risk profiling with automated data extraction and analysis for personalized pricing.",
        features: [
          "Implement Risk Profiling with Automated Data Extraction",
          "Utilize AI for In-Depth Analysis and Personalized Pricing",
          "Improve Underwriting Accuracy with Intelligent Automation",
        ],
        image: UnderWriting,
      },
      "Customer Service": {
        description:
          "Enhance support with AI-driven email, chat, and voice assistance to provide 24/7 service",
        features: [
          "Enhance Support with AI-Driven Email, Chat, and Voice Assistance",
          "Provide 24/7 Service to Customers with Intelligent Automation",
          "Improve Customer Satisfaction Through Prompt, Accurate Responses",
        ],
        image: CustomerService,
      },
      "Sales & Distribution": {
        description:
          "Enable self-service experiences and digital sales agents powered by conversational AI.",
        features: [
          "Enable Self-Service Experiences for Policyholders",
          "Leverage Conversational AI for Digital Sales Agents",
          "Enhance Sales Efficiency with AI-Powered Automation",
        ],
        image: Sales,
      },
    },
  },
};

export const capital_marketing: any = {
  banner: {
    image: CapitalMarketing,
    title: "Capital Markets",
    description:
      "Optimize financial advisory and customer support with AI-enhanced insights.",
  },

  tabs: {
    tabsName: ["Financial Advisors", "Customer Experience"],
    tabsContent: {
      "Financial Advisors": {
        description:
          "Automate research and analysis from complex datasets, generating actionable insights using LLMs.",
        features: [
          "Automate Research and Analysis from Complex Datasets",
          "Generate Actionable Insights Using LLMs (Large Language Models)",
          "Enhance Decision-Making for Financial Advisors with AI",
        ],
        image: FinancialAdvisor,
      },
      "Customer Experience": {
        description:
          "Implement AI agents for NLP-based insights and support automation, enhancing engagement and satisfaction.",
        features: [
          "Implement AI Agents for NLP-Based Insights",
          "Automate Support Processes to Improve Engagement",
          "Enhance Customer Satisfaction with Intelligent AI Solutions",
        ],
        image: CustomerExpV2,
      },
    },
  },
};
