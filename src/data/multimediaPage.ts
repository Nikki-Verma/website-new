import { ReliableIcon, ScalableIcon, SecureIcon } from "@/util/icons";
import {
  EducationBannerImage,
  GamingAndSportBannerImage,
  MediaAndBroadcastBannerImage,
  TelecomBannerImage,
} from "@/util/images";
import {
  AiPoweredContentSearchImage,
  AutomatePostProductionImage,
  AutomatedContentManagementImage,
  ContentCreationImage,
  ContentPersonalizationImage,
  CustomerSupportImage,
  EngagementIcon,
  FastTrackIcon,
  GameEngagementImage,
  NetwokOptimizationImage,
  ScaleIcon,
  StreamlineOperationsImage,
  TelecomHeroBanner,
  TransformMediaIcon,
} from "../util/svgImage";

export const banner = {
  title: "Telecom, Media & Entertainment",
  heading: "Build AI-first solutions!",
  description:
    "Unlock the power of Gen AI with SimplAI's Agentic AI platform. Transform creativity, automate workflows, and elevate customer engagement—future-ready solutions for a competitive edge.",
  buttonText: "Request Demo",
  buttonLink: "#",
  img: TelecomHeroBanner,
};

export const solution = [
  {
    title: "Unmatched creative XP",
    description:
      "Leverage SimplAI's Agentic AI to redefine content creation, personalization, and media production.",
    icon: TransformMediaIcon,
  },
  {
    title: "Accelerate launches",
    description:
      "Build and deploy AI-first solutions quickly with our platform, enabling companies to innovate faster.",
    icon: FastTrackIcon,
  },
  {
    title: "Empower your customers ",
    description:
      "Offer personalized, omnichannel experiences powered by AI—ensuring customer engagement, anytime.",
    icon: EngagementIcon,
  },
  {
    title: "Monetize and scale fast",
    description:
      "SimplAI helps you scale AI-driven innovation, accelerating time to market and unlocking new revenue streams.",
    icon: ScaleIcon,
  },
];

// import testImage from '../assets/multimedia/telecom_banner.png'

export const telecom = {
  banner: {
    image: TelecomBannerImage,
    title: "Telecom",
    description:
      "Enhance network performance and customer satisfaction with tailored Gen AI solutions.",
  },

  tabs: {
    tabsName: ["Customer engagement", "Network operations"],
    tabsContent: {
      "Customer engagement": {
        description:
          "Streamline customer interactions and improve service delivery.",
        features: [
          "Automated self-service portals: Enable customers to resolve issues and access services independently.",
          "AI-driven 24/7 support: Provide round-the-clock customer support using intelligent agents, automating responses .",
          "Field service optimization: Deploy AI agents to manage field service tasks, predicting maintenance needs.",
        ],
        image: CustomerSupportImage,
      },
      "Network operations": {
        description:
          "Leverage AI to enhance network efficiency and performance through real-time monitoring and predictive analytics.",
        features: [
          "Real-time network monitoring: Utilize AI for continuous analysis of network performance.",
          "Automated incident response: Use AI to automatically detect and respond to network anomalies, ensuring swift resolution of issues.",
        ],
        image: NetwokOptimizationImage,
      },
    },
  },
};

export const multimedia = {
  banner: {
    image: MediaAndBroadcastBannerImage,
    title: "Broadcast & Media",
    description:
      "Streamline content creation and operations with AI-powered innovation.",
  },

  tabs: {
    tabsName: ["Content creation", "Post-production"],
    tabsContent: {
      "Content creation": {
        description:
          "Enhance creative workflows and production efficiency through AI-driven tools.",
        features: [
          "Automated scriptwriting: Leverage AI for generating scripts based on input parameters, accelerating the creative process.",
          "Content generation and editing: Use AI to assist in content generation and editing workflows.",
          "Dynamic metadata tagging: Automate the tagging of media assets, improving discoverability and searchability.",
          "Localized content generation: Implement AI for real-time translation and localization, making them accessible.",
        ],
        image: ContentCreationImage,
      },
      "Post-production": {
        description:
          "Optimize post-production workflows and enhance the quality of media outputs through AI applications.",
        features: [
          "AI-powered video editing: Streamline editing and rendering processes with AI tools that automate repetitive tasks and suggest creative edits.",
          "Contextual moderation & filtering: Apply AI for real-time content moderation and filtering, ensuring compliance.",
          "Live control room automation: Apply AI to optimize scheduling and resource management in live broadcasting.",
        ],
        image: AutomatePostProductionImage,
      },
    },
  },
};

export const education_and_publication = {
  banner: {
    image: EducationBannerImage,
    title: "Education & Publishing",
    description:
      "Revolutionize educational experiences and publishing workflows with AI.",
  },

  tabs: {
    tabsName: [
      "Content Personalization & Localization",
      "AI-Powered Content Discovery & Search",
      "Automated Content Management",
      "Streamline Operations",
    ],
    tabsContent: {
      "Content Personalization & Localization": {
        description:
          "Enhancing Global Reach with AI-Driven Content Personalization & Localization",
        features: [
          "Deliver tailored content for global audiences using AI-driven personalization.",
          "Localize educational materials and media content with AI-based translation.",
        ],
        image: ContentPersonalizationImage,
      },
      "AI-Powered Content Discovery & Search": {
        description:
          "Unlocking Knowledge with AI-Powered Content Discovery & Search",
        features: [
          "Improve content discovery with AI-optimized search algorithms.",
          "Make educational resources more accessible and relevant.",
        ],
        image: AiPoweredContentSearchImage,
      },
      "Automated Content Management": {
        description:
          "Automating Content Management for Seamless Publishing Workflows",
        features: [
          "Automate content updates and workflows for seamless publishing.",
          "Streamline editorial processes with AI-driven tools for managing large volumes of content.",
        ],
        image: AutomatedContentManagementImage,
      },
      "Streamline Operations": {
        description: "Boosting Efficiency by Streamlining Operations with AI",
        features: [
          "Use AI to optimize administrative workflows and reduce manual tasks.",
          "Increase operational efficiency across educational and publishing systems.",
        ],
        image: StreamlineOperationsImage,
      },
    },
  },
};

export const gaming_and_esport = {
  banner: {
    image: GamingAndSportBannerImage,
    title: "Gaming & E-Sports",
    description:
      "Drive engagement and streamline gaming experiences with AI-powered solutions.",
  },

  tabs: {
    tabsName: ["Game development"],
    tabsContent: {
      "Game development": {
        description:
          "Enhance game design and development processes through innovative AI solutions.",
        features: [
          "Procedural content generation: Use LLMs to create unique game levels and scenarios, increasing replayability.",
          "Dynamic NPC: Implement Gen AI to develop non-player characters (NPCs) that adapt their behavior based on player interactions.",
          "Player personalization: Leverage AI to tailor in-game experiences, adjusting challenges and rewards.",
        ],
        image: GameEngagementImage,
      },
    },
  },
};

export const platformData = [
  {
    icon: SecureIcon,
    heading: "Secure",
    description:
      "Maintain compliance with industry standards while protecting user data through robust security measures tailored for telecom and media sectors.",
  },
  {
    icon: ScalableIcon,
    heading: "Scalable",
    description:
      "Seamlessly scale AI solutions from initial pilots to full production, adapting to the demands of high-volume environments within telecom and media.",
  },
  {
    icon: ReliableIcon,
    heading: "Reliable",
    description:
      "Deploy AI solutions that provide real-time, accurate insights, ensuring consistency and quality across all applications to meet business needs.",
  },
];
