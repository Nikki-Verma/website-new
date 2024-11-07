import { Metadata } from "next";

export const metadata: Metadata = {
  title: "This is new meta data for specific page.",
  description: "This is the description.",
  openGraph: {
    title: "SimplAI: Unified AI Platform for Building Gen AI applications",
    description:
      " Build LLM-powered apps with SimplAI. Choose from 100+ foundational models, integrate them with RAG and APIs to create agentic workflows and tools with LLM observability.",
    url: "https://simplai.ai",
    images: [
      {
        url: "https://media-simplai.s3.ap-south-1.amazonaws.com/2024-06-04T23:42:54.584387513-Build_LLM-Powered_Apps_with_Ease2.jpg", // Must be an absolute URL
      },
    ],
  },
};

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return <Layout>{children}</Layout>;
};
