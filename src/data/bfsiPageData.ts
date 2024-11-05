import { ReliableIcon, ScalableIcon, SecureIcon } from "@/util/icons";
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
  title: " Financial Services",
  heading:
    "Accelerate growth and unlock efficiency with Gen AI powered financial services",
  description:
    "Empower your organization with intelligent agents and AI-driven automation to enhance productivity and drive customer engagement. SimplAI delivers fast, effective solutions tailored for financial industry.",
  buttonText: "Request Demo",
  buttonLink: "/request-demo",
  img: BfsiHeroBanner,
};

export const solutionsList = [
  {
    title: "Boost productivity",
    description:
      "Leverage intelligent agents to automate tasks, enhancing knowledge workers and accelerating outcomes.",
    icon: CustomerEngagementIcon,
  },
  {
    title: "Enable smarter decisions",
    description:
      "Harness AI for real-time insights and agentic process automation, refining decision-making",
    icon: DecisionIcon,
  },
  {
    title: " customer engagement",
    description:
      "Provide personalized experiences through agentic AI and LLM-powered journeys",
    icon: ProductivityIcon,
  },
  {
    title: "Cut costs",
    description:
      "Streamline operations with AI employees, driving efficiency and lowering expenses.",
    icon: CostReductionImage,
  },
];

export const retailAndBanking: any = {
  banner: {
    image: RetailAndCommercial,
    title: "Retail & commercial banking",
    description:
      "Optimize customer interactions and streamline core banking operations with Gen AI.",
  },

  tabs: {
    tabsName: [
      "Customer engagement",
      "Loan processing & assessment",
      "Application modernization",
      "Risk & compliance",
    ],
    tabsContent: {
      "Customer engagement": {
        description:
          "Drive personalized experiences that enhance customer loyalty and satisfaction",
        features: [
          "Product recommendations: Hyper-personalized recommendations tailored to each customer.",
          "Conversational AI assistants: 24/7 intelligent support for account management, inquiries, etc.",
          "Sentimental analysis: Gain real-time insights on customer feedback to enhance responsiveness.",
          "Agent assist: Equip agents with contextual insights to expedite customer interactions.",
        ],
        image: CustomerExp,
      },
      "Loan processing & assessment": {
        description:
          "Accelerate and automate loan processing while improving credit assessment",
        features: [
          "Loan origination: Automate end-to-end loan process, from document validation to engagement.",
          "Borrowers risk & credit assessment: Accelerate financial spreading and covenant testing for accurate analysis.",
          "Data extraction: Quickly synthesize information from financial documents to support decision-making.",
          "Personalized loan offerings: Customize loan terms based on borrower risk profiles.",
        ],
        image: FraudDetection,
      },
      "Application modernization": {
        description:
          "Modernize legacy systems & enhance developer productivity with Gen AI.",
        features: [
          "Legacy applications: Utilize AI-driven code summarization and generation to streamline modernization",
          "Test automation assistant: Automate test case creation, speeding up quality assurance",
          "Coding co-pilot: Boost developer efficiency with AI-suggested improvements and code generation",
        ],
        image: RegulatoryCompliance,
      },
      "Risk & compliance": {
        description: "Simplify compliance and strengthen risk management.",
        features: [
          "Risk evaluation: Extract & evaluate key risks from vendors, third parties etc.",
          "Customer onboarding optimization: Automate KYC and AML workflows to streamline compliance.",
          "Automated regulatory reports: Generate reports automatically to meet regulatory requirements.",
        ],
        image: LoanProcessing,
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
      "Empower advisors and enhance client experiences with AI-driven insights and automation.",
  },

  tabs: {
    tabsName: [
      "Financial advisory",
      "Customer experience",
      "Risk & compliance",
    ],
    tabsContent: {
      "Financial advisory": {
        description:
          "Unlock smarter, faster insights to inform investment decisions.",
        features: [
          "Wealth manager assistant: Guide clients with proactive advice using real-time data and tailored recommendations.",
          "Advisor co-pilots: Augment financial analysts with automating repetitive tasks like data collection and report generation.",
          "Insights & recommendations: Process large datasets to reveal actionable insights, helping advisors deliver personalized, data-backed strategies.",
        ],
        image: FinancialAdvisor,
      },
      "Customer experience": {
        description:
          "Deliver personalized experiences that drive client satisfaction.",
        features: [
          "Customer service advisor: Provide real-time support, portfolio insights, and account updates with AI-powered chatbots.",
          "Personalized communication: Identify unique client profiles, sentiments and tailor investment options accordingly.",
        ],
        image: CustomerExpV2,
      },
      "Risk & compliance": {
        description:
          "Enhance risk management and streamline compliance processes.",
        features: [
          "Automated compliance: Maintain regulatory standards with automated KYC, AML, and ID verifications.",
          "Regulatory data processing: Integrate regulatory data from various sources and flag potential compliance issues automatically.",
        ],
        image: CustomerExpV2,
      },
    },
  },
};

export const platformData = [
  {
    icon: SecureIcon,
    heading: "Secure",
    description:
      "Deploy on private clouds or on-premises, meeting SOC 2 and ISO standards. SimplAI empowers you to navigate financial regulations with confidence.",
  },
  {
    icon: ScalableIcon,
    heading: "Scalable",
    description:
      "Seamlessly scale from PoC to production, adapting to the dynamic needs of financial services with auto-scaling that handles fluctuating workloads.",
  },
  {
    icon: ReliableIcon,
    heading: "Reliable",
    description:
      "Experience workflow transparency with comprehensive tracing that meets regulatory demands.",
  },
];
