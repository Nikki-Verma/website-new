import { ReliableIcon, ScalableIcon, SecureIcon } from "@/util/icons";
import {
  AutomationImage,
  CareDeliveryImage,
  ClaimManagementImage,
  CostReductionImage,
  CustomerImage,
  DeviceSolututionImage,
  DiagnosticImage,
  GroupImage,
  HealthcareHeroImage,
  IsvImage,
  PatientExperienceImage,
  ProviderManagementImage,
  RevenueCycleManagementImage,
  TeleHealthImage,
} from "../util/svgImage";

// import { HealthcareHeroImage } from "../util/svgImage";
import {
  HealthTechBannerImage,
  HealthcarePlayerBannerImage,
  HeathcareProviderBannerImage,
} from "@/util/images";
export const banner = {
  title: "Healthcare",
  heading:
    "Elevate patient engagement and streamline healthcare operations with Gen AI.",
  description:
    "From enhancing patient interactions, augmenting clinical decision-making and automating administrative tasks, scale your healthcare services with SimplAI platform.",
  buttonText: "Request Demo",
  buttonLink: "#",
  img: HealthcareHeroImage,
};

export const solution = [
  {
    title: "Enhance patient XP",
    description:
      "Utilize agentic AI and intelligent assistants to automate patient interactions, ensuring seamless communication.",
    icon: CustomerImage,
  },
  {
    title: "Boost throughput",
    description:
      "Leverage agentic process automation to optimize workflows, enabling healthcare teams to focus on patient care.",
    icon: AutomationImage,
  },
  {
    title: "Improve care delivery",
    description:
      "Harness Gen AI for real-time diagnostics and insights, empowering clinicians with decision support",
    icon: DiagnosticImage,
  },
  {
    title: "Reduce operational costs",
    description:
      "Automate admin tasks, claims processing, and revenue cycle management to lower expenses with high-quality care",
    icon: CostReductionImage,
  },
];

export const healthcare_provider = {
  banner: {
    image: HeathcareProviderBannerImage,
    title: "Healthcare Providers",
    description:
      "Enhance clinical productivity and patient engagement with tailored Gen AI solutions.",
  },

  tabs: {
    tabsName: [
      "Care Delivery",
      "Revenue Cycle Management",
      "Patient experience",
    ],
    tabsContent: {
      "Care Delivery": {
        description:
          "Streamline clinical workflows and enhance decision-making processes.",
        features: [
          "Automated clinical documentation: Transcribing conversations, summarization, and filling out patient information.",
          "Triage AI agent: LLMs automate triage by analyzing patient data and prioritizing critical cases efficiently.",
          "Diagnostic Interpretation: Automate medical image and diagnostic report interpretation workflows.",
          "Clinical decision support: Provide evidence-based recommendations to aid complex decision-making.",
        ],
        image: CareDeliveryImage,
      },
      "Revenue Cycle Management": {
        description:
          "Optimize financial processes and improve revenue outcomes.",
        features: [
          "Eligibility verification: Real-time verification via agentic AI to accelerate processing of insurance eligibility.",
          "Prior authorization: Agentic process automation for quicker approvals, increasing operational efficiency.",
          "Automated medical coding: Enhance coding accuracy to minimize denials and enhance reimbursement.",
          "Denial management: Leverage LLM-powered analysis to efficiently identify, appeal, and resolve claim denials.",
          "AR Automation: Deploy agentic workflows to extract data and streamline invoicing, claims, payments, and reminders for enhanced cash flow.",
        ],
        image: RevenueCycleManagementImage,
      },
      "Patient experience": {
        description:
          "Transform patient interactions to improve communication and engagement.",
        features: [
          "AI agents: Handle patient inquiries and scheduling, enhancing communication and reducing admin burdens.",
          "Patient portals: AI-driven insights provide tailored health information, fostering greater engagement.",
        ],
        image: PatientExperienceImage,
      },
    },
  },
};

export const healthcare_player: any = {
  banner: {
    image: HealthcarePlayerBannerImage,
    title: "Healthcare Payers",
    description:
      "Optimize claims processes and elevate member experiences with Gen AI solutions",
  },

  tabs: {
    tabsName: ["Claims management", "Member experience", "Provider management"],
    tabsContent: {
      "Claims management": {
        description:
          "Streamline and optimize the claims lifecycle with intelligent automation",
        features: [
          "Virtual AI agent: Streamlines claim filing, verifies details, provides updates, and offers 24/7 support to boost satisfaction.",
          "Claim eligibility: Use LLM-driven verification to assess claim eligibility in real-time, leveraging patient and policy data.",
          "Claim adjudication: GenAI automates claims processing, data extraction, categorization, and fraud detection.",
          "Smart audit: Identify discrepancies, verify claim accuracy, and flag anomalies, helping to ensure regulatory compliance.",
        ],
        image: ClaimManagementImage,
      },
      "Member experience": {
        description:
          "Deliver exceptional support and personalized communication",
        features: [
          "Personalized communication: Providing contextual health information that enhances engagement and builds trust.",
          "Health engagement: Utilize Gen AI to personalize health plans and content based on individual member needs.",
          "Intelligent support agents: Instant responses to inquiries, customer support, and improve member engagement.",
        ],
        image: GroupImage,
      },
      "Provider management": {
        description:
          "Streamline provider interactions to enhance relationships and compliance",
        features: [
          "Automate credentialing: Use agentic workflows to verify provider qualifications and ensure compliance efficiently.",
          "Provider Enrollment: Streamline enrollment processes with Generative AI for faster, accurate data processing and compliance.",
          "Risk management: Automate regulatory compliance checks with Gen AI, minimizing risks and aligning with healthcare standards.",
        ],
        image: ProviderManagementImage,
      },
    },
  },
};

export const healthcare_tech: any = {
  banner: {
    image: HealthTechBannerImage,
    title: "HealthTech",
    description:
      "Drive innovation in patient care and diagnostics with Gen AI-powered solutions.",
  },

  tabs: {
    tabsName: ["Healthcare ISV", "Teleradiology", "Telehealth"],
    tabsContent: {
      "Healthcare ISV": {
        description:
          "Integrate Gen AI to improve patient outcomes and operational efficiencies.",
        features: [
          "Patient engagement platforms: AI-driven tools guide patients through health journeys, improving adherence.",
          "Digital therapeutics: Utilize Gen AI to create adaptive, personalized treatment plans that enhance patient engagement and outcomes.",
          "Gen AI enabled EHR: Integrate AI agents to enable hybrid search for patient info, summarize reports or draft responses.",
        ],
        image: IsvImage,
      },
      Teleradiology: {
        description:
          "Transform radiology practices with automated workflows and enhanced reporting.",
        features: [
          "Automate radiology workflows: Agentic workflows can automate compliance, registration, preparation, image quality, and data management.",
          "Structured reports: Automate report generation by analysing volumetrics, segmentations, quantifications, etc.",
        ],
        image: DeviceSolututionImage,
      },
      Telehealth: {
        description:
          "Enhance remote care capabilities with Gen AI for improved patient management",
        features: [
          "Automated clinical documentation: Transcribing conversations, summarization, and filling out patient information.",
          "Virtual Triaging: LLMs automate triage by analyzing patient data and prioritizing critical cases efficiently.",
          "Clinical decision support: Provide evidence-based recommendations to aid complex decision-making.",
        ],
        image: TeleHealthImage,
      },
    },
  },
};

export const platformData = [
  {
    icon: SecureIcon,
    heading: "Secure",
    description:
      "Deploy AI solutions that meet healthcare regulations, ensuring patient data protection and compliance with HIPAA and other industry standards.",
  },
  {
    icon: ScalableIcon,
    heading: "Scalable",
    description:
      "Easily scale from pilot projects to full deployment across healthcare systems, adapting to the dynamic requirements of providers and payers alike.",
  },
  {
    icon: ReliableIcon,
    heading: "Reliable",
    description:
      "Ensure consistent performance and workflow visibility with AI solutions that provide comprehensive tracing, to meet the demands of the healthcare.",
  },
];
