import {
  AutomationImage,
  CustomerImage,
  DiagnosticImage,
  CostReductionImage,
  SelfServicePortalImage,
  CustomerSupportImage,
  NetwokOptimizationImage,
  ContentPersonalizationImage,
  StreamlineOperationsImage,
  AiPoweredContentSearchImage, 
  AutomatedContentManagementImage, 
  ContentCreationImage, 
  GameEngagementImage, 
  VirtualAssistantsInGameImage,
  ContentCreationInGameImage,
  AssestsMetadataAutomationImage,
  PlayerAndTeamInsightsImage,
  ModerationFilteringImage,
  AutomatePostProductionImage, 
  TelecomHeroBanner, 
  EngagementIcon, FastTrackIcon, ScaleIcon, TransformMediaIcon
} from "../util/svgImage";
import { MediaAndBroadcastBannerImage, TelecomBannerImage, EducationBannerImage, GamingAndSportBannerImage } from "@/util/images";

export const banner = {
  title: "Telecom, Media & Entertainment",
  heading: "Build AI-First Solutions for Telecom, Media & Entertainment",
  description:
    "Harness future-ready applications with SimplAI's Agentic AI and process automation platform. From transforming creativity to automating operational workflows to enhancing customer engagement, unlock the full potential of AI-driven innovation.",
  buttonText: "Request Demo",
  buttonLink: "#",
  img: TelecomHeroBanner
};

export const solution = [
  {
    title: "Transform Media Innovation",
    description:
      "Leverage SimplAI's Agentic AI to redefine content creation, personalization, and media production—creating experiences that captivate and engage audiences like never before.",
    icon: TransformMediaIcon,
  },
  {
    title: "Fast-Track AI Innovation",
    description:
      "Build and deploy AI-first solutions quickly with our platform, enabling companies to innovate faster, streamline operations, and stay ahead in a competitive landscape.",
    icon: FastTrackIcon,
  },
  {
    title: "AI-Driven Engagement",
    description:
      "Offer personalized, omnichannel experiences powered by AI—ensuring customer engagement across every platform, anytime.",
    icon: EngagementIcon,
  },
  {
    title: "Scale. Innovate. Monetize",
    description:
      "SimplAI helps you scale AI-driven innovation while accelerating time to market and unlocking new revenue streams through automation and cutting-edge AI technologies",
    icon: ScaleIcon,
  },
];

// import testImage from '../assets/multimedia/telecom_banner.png'

export const telecom = {
  banner: {
    image: TelecomBannerImage,
    title: "Telecom",
    description:
      "Enhance network performance and customer satisfaction with AI-driven automation",
  },

  tabs: {
    tabsName: [
      "Self-Service Portals",
      "Customer Engagement & Support",
      "Network Optimization",
    ],
    tabsContent: {
      "Self-Service Portals": {
        description:
          "Revolutionizing Customer Experiences with AI-Driven Self-Service Portals",
        features: [
          "Automate customer interactions with AI-powered self-service options.",
          "Enable customers to resolve issues and access services independently.",
        ],
        image: SelfServicePortalImage,
      },
      "Customer Engagement & Support": {
        description:
          "Transforming Customer Support & Engagement through AI Automation",
        features: [
          "Provide AI-driven, 24/7 customer support for real-time assistance.",
          "Automate responses and reduce wait times with intelligent support agents.",
          "Deploy AI agents to optimize field service management and task allocation.",
          "Predict maintenance needs and improve response times.",
        ],
        image:CustomerSupportImage,
      },
      "Network Optimization": {
        description:
          "Maximizing Network Efficiency with Intelligent AI-Powered Optimization",
        features: [
          "Use AI for real-time network monitoring and optimization.",
          "Enhance network efficiency and performance with predictive insights.",
        ],
        image: NetwokOptimizationImage,
      },
    },
  },
};

export const multimedia = {
  banner: {
    image: MediaAndBroadcastBannerImage,
    title: "Media, Studio & Broadcast",
    description:
      "Streamline content creation and operations with AI-powered innovation",
  },

  tabs: {
    tabsName: [
      "Asset Metadata Automation",
      "Content Creation",
      "AI-Powered Contextual Moderation & Filtering",
      "Automate Post Production & Operations",
    ],
    tabsContent: {
      "Asset Metadata Automation": {
        description:
          "Transforming Media Management with AI-Powered Asset Metadata Automation",
        features: [
          "Automate metadata tagging for faster content organization.",
          "Improve searchability and accessibility of media assets.",
        ],
        image: AssestsMetadataAutomationImage,
      },
      "Content Creation": {
        description: "Accelerating Content Creation with AI-Driven Innovation",
        features: [
          "Leverage AI for scriptwriting, content generation, and editing workflows.",
          "Accelerate creative processes with AI-driven ideation.",
        ],
        image: ContentCreationImage,
      },
      "AI-Powered Contextual Moderation & Filtering": {
        description:
          "Ensure Content Integrity with AI-Powered Contextual Moderation & Filtering",
        features: [
          "Apply AI for real-time content moderation and filtering.",
          "Ensure compliance with contextual AI to detect and block inappropriate content.",
        ],
        image: ModerationFilteringImage,
      },
      "Automate Post Production & Operations": {
        description:
          "Revolutionizing Post-Production and Broadcast Operations through AI Automation",
        features: [
          "Streamline editing, rendering, and finalization with AI-powered tools.",
          "Enhance video quality and turnaround time with automated processes.",
          "Optimize broadcast scheduling and live control rooms with AI automation.",
          "Use AI to improve resource allocation and reduce operational costs.",
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
    image:GamingAndSportBannerImage ,
    title: "Gaming & E-Sports",
    description:
      "Drive engagement and streamline gaming experiences with AI-powered solutions",
  },

  tabs: {
    tabsName: [
      "Game Engagement",
      "In-Game Virtual Assistants",
      "Content Creation",
      "Player & Team Insights",
    ],
    tabsContent: {
      "Game Engagement": {
        description:
          "Elevating Player Engagement with AI-Driven Game Personalization",
        features: [
          "Personalize in-game experiences with AI-driven recommendations and dynamic content.",
          "Keep players engaged with evolving storylines and Non Playing Character interactions.",
        ],
        image:GameEngagementImage,
      },
      "In-Game Virtual Assistants": {
        description:
          "Enhancing Gameplay with Real-Time AI-Powered Virtual Assistants",
        features: [
          "Provide real-time assistance to players with AI-powered in-game virtual assistants.",
          "Offer help with game mechanics, strategy, and mission guidance.",
        ],
        image: VirtualAssistantsInGameImage,
      },
      "Content Creation": {
        description:
          "Transforming Game Development with AI-Driven Content Creation",
        features: [
          "Automate NPC development, procedural content generation, and player personalization.",
          "Use AI to create unique, immersive game environments and characters.",
        ],
        image: ContentCreationInGameImage,
      },
      "Player & Team Insights": {
        description:
          "Unlocking Performance Insights with AI Analytics for Players & Teams",
        features: [
          "Leverage AI analytics for deep insights into player behavior and team performance.",
          "Detect patterns to optimize gameplay and improve competitive strategies.",
        ],
        image: PlayerAndTeamInsightsImage,
      },
    },
  },
};
