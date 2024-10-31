import { ConsultingBanner, LegalBanner, ResearchBanner } from "@/util/images";
import {
  AgilityIcon,
  ComplianceIcon,
  ConsultingAiWorkforce,
  ConsultingDataStructuring,
  ConsultingInsightGeneration,
  FasterIcon,
  LegalAiWorkforce,
  LegalDataAnalysis,
  LegalDocumentation,
  LegalHeroBanner,
  ResearchDataAnalysis,
  ResearchInsightGeneration,
  StreamlineIcon,
} from "@/util/svgImage";

export const banner = {
  title: "Legal, Consulting & Research",
  heading:
    "AI Workforce & Process Automation for Legal, Consulting, and Research",
  description:
    "Transform knowledge-driven industries with SimplAI. Automate complex tasks, generate actionable insights, and supercharge your team with AI-powered tools designed for efficiency, accuracy, and innovation.",
  buttonText: "Request Demo",
  buttonLink: "#",
  img: LegalHeroBanner,
};

export const solution = [
  {
    title: "Streamline Workflows",
    description:
      "Automate routine tasks like data structuring, document drafting, and reporting, allowing your team to focus on strategic work.",
    icon: StreamlineIcon,
  },
  {
    title: "Faster, Smarter Insights",
    description:
      "Leverage AI to uncover insights from vast datasets, driving faster and more informed decisions across your organization.",
    icon: FasterIcon,
  },
  {
    title: "Increase Agility & Precision",
    description:
      "Optimize processes and reduce errors with AI-powered tools, enabling you to respond faster and more accurately to business demands.",
    icon: AgilityIcon,
  },
  {
    title: "Ensure Compliance & Accuracy",
    description:
      "Maintain high standards in legal documentation, research accuracy, and consulting analysis with automated compliance checks and enhanced data validation.",
    icon: ComplianceIcon,
  },
];

export const legal: any = {
  banner: {
    image: LegalBanner,
    title: "Legal",
    description:
      "Maximize efficiency and precision in legal operations with AI-driven automation.",
  },

  tabs: {
    tabsName: [
      "AI Workforce",
      "Data Analysis & Insights",
      "Legal Documentation",
    ],
    tabsContent: {
      "AI Workforce": {
        description:
          "Automate legal research, contract drafting, and compliance review for increased productivity.",
        image: LegalAiWorkforce,
      },
      "Data Analysis & Insights": {
        description:
          "Analyze case law, regulations, and contracts faster with AI-powered data analysis.",
        image: LegalDataAnalysis,
      },
      "Legal Documentation": {
        description:
          "Automate document preparation and review for faster, more accurate legal processes.",
        image: LegalDocumentation,
      },
    },
  },
};

export const consulting: any = {
  banner: {
    image: ConsultingBanner,
    title: "Consulting",
    description:
      "Enhance consulting services with AI-powered insights and automation.",
  },

  tabs: {
    tabsName: [
      "AI Workforce",
      "Data Structuring & Pre-processing",
      "Insight Generation",
    ],
    tabsContent: {
      "AI Workforce": {
        description:
          "Automate client reporting, data analysis, and process optimization for faster turnarounds.",
        image: ConsultingAiWorkforce,
      },
      "Data Structuring & Pre-processing": {
        description:
          "Organize unstructured client data efficiently to drive actionable insights",
        image: ConsultingDataStructuring,
      },
      "Insight Generation": {
        description:
          "Use AI to deliver predictive insights, helping clients make informed, data-driven decisions.",
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
