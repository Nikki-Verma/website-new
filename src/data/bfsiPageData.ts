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
      "Customer Engagement",
      "Fraud Detection",
      "Regulatory Compliance",
      "Loan Processing & Borrower Risk Analysis",
      "Customer Support",
    ],
    tabsContent: {
      "Customer Engagement": {
        description:
          "Gen AI can significantly enhance customer service and engagement in banking",
        features: [
          "Provide hyper-personalized product recommendations tailored to individual customers",
          "Deploy virtual financial assistants for 24/7 customer support, onboarding, and transactional guidance",
          "Use sentiment analysis tools to assess customer feedback in real time for responsive service.",
          "Enable agents with contextual insights during customer interactions for quicker resolutions.",
        ],
        image: CustomerExp,
      },
      "Fraud Detection": {
        description: "Generative AI can improve fraud prevention efforts",
        features: [
          "Detect transaction anomalies instantly to proactively prevent fraud.",
          "Use biometric authentication to secure customer access and prevent identity fraud.",
          "Validate documents for identity verification to enhance fraud prevention.",
          "Map and analyze connections to detect complex fraud networks in real time.",
        ],
        image: FraudDetection,
      },
      "Regulatory Compliance": {
        description: "Generative AI can streamline compliance.",
        features: [
          "Automate document verification to maintain compliance standards",
          "Classify KYC and AML risks quickly for accurate customer screening",
          "Generate regulatory reports automatically to meet compliance requirements",
        ],
        image: RegulatoryCompliance,
      },
      "Loan Processing & Borrower Risk Analysis": {
        description:
          "Gen AI can optimize loan processing and credit risk assessment.",
        features: [
          "Conduct automated financial spreading and covenant testing for quicker loan assessments.",
          "Search and synthesize data from financial documents to automate loan processes.",
          "Segment customers by risk profile to offer tailored loan products.",
        ],
        image: LoanProcessing,
      },
      "Application Modernization": {
        description: "Modernizing legacy banking systems with Gen AI",
        features: [
          "Use AI for automated code summarization, explanation and generation to modernize legacy applications faster",
          "Automate test case creation to expedite quality assurance processes",
          "Assist developers with productivity-enhancing AI suggestions during coding",
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
      "Streamline operations and enhance risk management with generative AI-driven solutions.",
  },

  tabs: {
    tabsName: [
      "Claims Management",
      "Underwriting",
      "Customer Service",
      "Sales & Distribution",
      "Risk Management",
    ],
    tabsContent: {
      "Claims Management": {
        description: "Generative AI can revolutionize claims management",
        features: [
          "Automating the First Notice of Loss (FNOL) process through LLMs to facilitate faster claim initiation and reduce human error.",
          "Implementing intelligent workflows for claims adjudication, validation, utilizing agentic AI to minimize fraud and processing errors",
          "Enhancing customer communication with AI-powered chatbots capable of providing real-time updates on claim status and inquiries.",
        ],
        image: ClaimManagement,
      },
      Underwriting: {
        description:
          "Generative AI can enhance underwriting efficiency and precision.",
        features: [
          "Leveraging AI-driven risk profiling to swiftly assess applicant risks and streamline decision-making.",
          "Automating data extraction from diverse sources using LLMs to expedite risk assessment and improve accuracy.",
          "Integrating external data sources to create a comprehensive risk profile for applicants, enhancing underwriting quality.",
        ],
        image: UnderWriting,
      },
      "Customer Service": {
        description:
          "Generative AI can significantly elevate customer service experiences",
        features: [
          "Providing 24/7 support through AI-driven email, chat, and voice assistants, ensuring seamless customer interactions.",
          "Enhancing self-service capabilities with conversational AI for efficient policy inquiries and modifications.",
          "Utilizing sentiment analysis tools powered by generative AI to gauge customer satisfaction and enhance service responsiveness.",
        ],
        image: CustomerService,
      },
      "Sales & Distribution": {
        description:
          "Generative AI can optimize sales and improve distribution channels.",
        features: [
          "Enabling self-service experiences for policy purchases and renewals via intuitive AI interfaces that leverage agentic process automation.",
          "Deploying digital sales agents powered by generative AI to assist customers in real-time, enhancing the sales process.",
          "Utilizing AI-driven insights to tailor marketing strategies, thereby improving lead conversion rates and customer targeting.",
        ],
        image: Sales,
      },
      "Risk Management": {
        description: "Generative AI can bolster risk management strategies.",
        features: [
          "Conducting real-time risk assessments through continuous data analysis powered by LLMs, facilitating proactive risk management.",
          "Utilizing AI for trend analysis and future risk predictions, improving strategic planning within the insurance domain.",
          "Implementing AI solutions for disaster recovery and business continuity, ensuring readiness against potential disruptions.",
          "Enhancing compliance monitoring through agentic AI that automatically tracks regulatory changes and requirements.",
        ],
        image: Sales,
      },
    },
  },
};

export const capital_marketing: any = {
  banner: {
    image: CapitalMarketing,
    title: "Wealth Management",
    description:
      "Optimize financial advisory and enhance customer support with generative AI-driven insights.",
  },

  tabs: {
    tabsName: ["Financial Advisors", "Customer Experience", "Risk Management"],
    tabsContent: {
      "Financial Advisors": {
        description: "Generative AI can transform financial advisory services.",
        features: [
          "Automating research and analysis of complex datasets to generate actionable investment insights for advisors.",
          "Implementing LLMs for personalized portfolio recommendations based on individual client profiles and market trends.",
          "Leveraging AI-driven predictive analytics to assess market conditions and optimize asset allocation strategies.",
        ],
        image: FinancialAdvisor,
      },
      "Customer Experience": {
        description:
          "Generative AI can significantly enhance customer experiences in wealth management.",
        features: [
          "Deploying AI agents for NLP-based insights to streamline client interactions and improve satisfaction.",
          "Providing virtual financial assistants for real-time portfolio tracking and performance updates, enhancing client engagement.",
          "Utilizing sentiment analysis tools to gauge client sentiment regarding investments and tailor communication accordingly.",
        ],
        image: CustomerExpV2,
      },
      "Risk Management": {
        description: "Generative AI can strengthen risk management strategies.",
        features: [
          "Conducting real-time risk assessments of portfolios through continuous monitoring and AI-driven analysis.",
          "Utilizing LLMs to identify emerging market risks and opportunities, enhancing proactive decision-making for wealth managers.",
          "Automating compliance checks to ensure adherence to regulatory standards in investment practices.",
        ],
        image: CustomerExpV2,
      },
    },
  },
};
