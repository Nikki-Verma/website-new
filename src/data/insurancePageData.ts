import { ReliableIcon, ScalableIcon, SecureIcon } from "@/util/icons";
import { InsuranceBanner } from "@/util/images";
import {
  BfsiHeroBanner,
  ClaimManagement,
  CostReductionImage,
  CustomerEngagementIcon,
  CustomerService,
  DecisionIcon,
  ProductivityIcon,
  Sales,
  UnderWriting,
} from "../util/svgImage";

export const banner = {
  title: "Insurance",
  heading: "Revolutionize your insurance operations with Generative AI",
  description:
    "Empower your organization to streamline processes, enhance risk management, and elevate customer experiences with AI-driven solutions. SimplAI offers innovative tools designed specifically for the insurance industry.",
  buttonText: "Request Demo",
  buttonLink: "#",
  img: BfsiHeroBanner,
};

export const solutionsList = [
  {
    title: "Streamline claims processing",
    description:
      "Automate and enhance claims workflows, reducing processing time and improving accuracy.",
    icon: ProductivityIcon,
  },
  {
    title: "Enhance underwriting efficiency",
    description:
      "Leverage AI to make more informed underwriting decisions and manage risk effectively.",
    icon: DecisionIcon,
  },
  {
    title: "Elevate customer engagement",
    description:
      "Deliver personalized and responsive customer experiences across all touchpoints in the insurance lifecycle.",
    icon: CustomerEngagementIcon,
  },
  {
    title: "Reduce operational costs",
    description:
      "Cut expenses by automating routine tasks and improving overall process efficiency.",
    icon: CostReductionImage,
  },
];

export const insurance: any = {
  banner: {
    image: InsuranceBanner,
    title: "Insurance",
    description:
      "Streamline operations and enhance risk management with generative AI-driven solutions.",
  },

  tabs: {
    tabsName: [
      "Claims management",
      "Underwriting",
      "Customer service",
      "Sales & distribution",
    ],
    tabsContent: {
      "Claims management": {
        description:
          "Transform the claims experience with intelligent automation and enhanced communication.",
        features: [
          "Automated FNOL process: Streamline the First Notice of Loss process to enable faster claim initiation while minimizing errors.",
          "Smart claims adjudication: Implement intelligent workflows that reduce fraud through automated validation and decision-making.",
          "Real-time customer communication: Use AI-powered chatbots for 24/7 support, providing immediate updates on claim statuses and resolving inquiries.",
        ],
        image: ClaimManagement,
      },
      Underwriting: {
        description:
          "Improve underwriting processes with AI-powered insights and automation.",
        features: [
          "Risk assessment automation: Quickly analyze applicant risks by leveraging AI-driven data analysis, facilitating more efficient decision-making.",
          "Comprehensive data integration: Extract relevant information from diverse sources to create a holistic view of applicant risk profiles.",
          "Enhanced decision-making: Utilize advanced analytics to refine underwriting quality and speed up approvals.",
        ],
        image: UnderWriting,
      },
      "Customer service": {
        description:
          "Enhance customer service interactions with generative AI technologies.",
        features: [
          "24/7 virtual assistants: Provide immediate assistance through AI-driven chat, voice, and email solutions for policyholders.",
          "Self-service capabilities: Enable customers to manage their policies and inquiries through intuitive AI interfaces.",
          "Sentiment analysis: Monitor customer feedback using AI tools to adapt services and improve overall satisfaction.",
        ],
        image: CustomerService,
      },
      "Sales & distribution": {
        description:
          "Optimize the sales journey and distribution channels in insurance.",
        features: [
          "Digital policy sales: Facilitate self-service purchases and renewals through engaging AI interfaces that simplify the customer journey.",
          "AI-powered sales assistants: Deploy virtual agents to guide customers through the insurance buying process, enhancing user experience.",
          "Data-driven marketing insights: Utilize AI analytics to identify target customers and tailor marketing strategies for higher conversion rates.",
        ],
        image: Sales,
      },
    },
  },
};

export const platformData = [
  {
    icon: SecureIcon,
    heading: "Secure",
    description:
      " Deploy on secure, private clouds or on-premises, ensuring compliance with insurance industry standards and regulations.",
  },
  {
    icon: ScalableIcon,
    heading: "Scalable",
    description:
      "Transition seamlessly from proof of concept to full production, adapting to the evolving demands of the insurance market.",
  },
  {
    icon: ReliableIcon,
    heading: "Reliable",
    description:
      " Maintain operational transparency with comprehensive workflow tracking to meet regulatory requirements effectively.",
  },
];
