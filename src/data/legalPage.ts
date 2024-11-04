import { ReliableIcon, ScalableIcon, SecureIcon } from "@/util/icons";
import { ConsultingBanner, LegalBanner, ResearchBanner } from "@/util/images";
import {
  AgilityIcon,
  ComplianceIcon,
  ConsultingAiWorkforce,
  ConsultingInsightGeneration,
  FasterIcon,
  LegalAiWorkforce,
  LegalDataAnalysis,
  LegalHeroBanner,
  ResearchDataAnalysis,
  ResearchInsightGeneration,
  StreamlineIcon,
} from "@/util/svgImage";

export const banner = {
  title: "Legal, Consulting & Research",
  heading:
    "Build your AI workforce and deploy agentic process automation today!",
  description:
    "Empower your teams to navigate complexity with SimplAI. Harness the power of AI to automate mundane tasks, extract deep insights, and elevate your organization’s efficiency and accuracy.",
  buttonText: "Request Demo",
  buttonLink: "/request-demo",
  img: LegalHeroBanner,
};

export const solution = [
  {
    title: "Accelerate productivity",
    description:
      "Harness intelligent automation to streamline repetitive tasks, focussing on strategic insights and high-value work.",
    icon: StreamlineIcon,
  },
  {
    title: "Intelligent decision-making",
    description:
      "Real-time data analysis and insights, empowering professionals to make informed, data-driven decisions.",
    icon: FasterIcon,
  },
  {
    title: "Enhance client engagement",
    description:
      "Utilize agentic AI to personalize interactions, providing tailored experiences to elevate client satisfaction.",
    icon: AgilityIcon,
  },
  {
    title: "Optimize operational efficiency",
    description:
      "Agentic workflows to handle administrative tasks and document processing, reducing overhead costs.",
    icon: ComplianceIcon,
  },
];

export const legal: any = {
  banner: {
    image: LegalBanner,
    title: "Legal",
    description:
      "Transform legal operations with intelligent AI workforce and automation.",
  },

  tabs: {
    tabsName: ["AI workforce", "Document automation"],
    tabsContent: {
      "AI workforce": {
        description:
          "Transform legal operations with intelligent automation that enhances efficiency and productivity.",
        features: [
          "Legal Assistant: Delegate complex tasks with your AI-powered domain-specific personal assistant.",
          "AI-powered search: Retrieves specific contract clauses quickly, providing instant insights into your agreements.",
          "E-Discovery: LLMs streamline e-discovery through efficient data collection, extraction, and categorization, enhancing accuracy",
        ],
        image: LegalAiWorkforce,
      },
      "Document automation": {
        description:
          "Enhance document generation and processing to reduce turnaround times.",
        features: [
          "Legal reports generation: Automate the creation of various legal reports, ensuring consistency and compliance.",
          "Summarization of documents: Summarize lengthy legal documents quickly, providing concise insights.",
          "Legal drafting: Utilize Gen AI tools to draft legal documents such as contracts, agreements, and pleadings.",
        ],
        image: LegalDataAnalysis,
      },
    },
  },
};

export const consulting: any = {
  banner: {
    image: ConsultingBanner,
    title: "Consulting & research",
    description:
      "Empower consulting and research teams with Gen AI to streamline insights.",
  },

  tabs: {
    tabsName: ["AI workforce", "Insight generation"],
    tabsContent: {
      "AI workforce": {
        description:
          "Boost efficiency and accuracy with specialized AI agents to handle complex tasks.",
        features: [
          "Virtual data analysts: AI-powered agents automate the analysis of complex datasets, extracting actionable insights.",
          "Research assistant: Answer questions using insights from past reports, industry research, and data intelligence tools.",
        ],
        image: ConsultingAiWorkforce,
      },
      "Insight generation": {
        description:
          "Transform data into meaningful insights, driving strategic decision-making.",
        features: [
          "Data structuring: Utilize AI for organizing unstructured data sources, for easier access and analysis.",
          "Report automation: Streamline report creation, automatically compiling data and insights with minimal manual intervention.",
        ],
        image: ConsultingInsightGeneration,
      },
    },
  },
};

export const research: any = {
  banner: {
    image: ResearchBanner,
    title: "Research",
    description:
      "Accelerate research projects with AI-driven analysis and automation",
  },

  tabs: {
    tabsName: [
      "Data Analysis & Enterprise Intelligence",
      "Data Structuring & Pre-processing",
      "Insight Generation",
    ],
    tabsContent: {
      "Data Analysis & Enterprise Intelligence": {
        description:
          "Automate large-scale data analysis, generating actionable insights across research initiatives.",
        image: ResearchDataAnalysis,
      },
      "Data Structuring & Pre-processing": {
        description:
          "Streamline data cleansing and preparation for quicker, more accurate research outcomes.",
        image: ResearchDataAnalysis,
      },
      "Insight Generation": {
        description:
          "Enhance research accuracy with AI models that uncover new patterns and insights from complex data sets.",
        image: ResearchInsightGeneration,
      },
    },
  },
};

export const platformData = [
  {
    icon: SecureIcon,
    heading: "Secure",
    description:
      "Deploy AI solutions tailored for the legal and consulting landscapes, ensuring compliance with industry regulations while safeguarding sensitive data.",
  },
  {
    icon: ScalableIcon,
    heading: "Scalable",
    description:
      "Effortlessly transition from pilot projects to full-scale implementations, adapting to the unique demands of your legal and consulting practices.",
  },
  {
    icon: ReliableIcon,
    heading: "Reliable",
    description:
      "Deliver grounded, factual insights with rapid, accurate answers backed by verified citations enabling confidence in decision-making.",
  },
];
