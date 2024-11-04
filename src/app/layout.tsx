import AntdStyledComponentsRegistry from "@/components/AntDesign/AntdStyledComponentsRegistry";
import { ThemeProvider } from "@/providers/antdThemeProvider";
import { Montserrat } from "@next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Metrics from "./metrics";

const montserrat = Montserrat({
  subsets: ["latin"], // Specify the subset(s) you need
  weight: ["400", "500", "600", "700", "800", "900"], // Choose the desired font weights
  variable: "--font-montserrat", // Optional: CSS variable name
});

export const metadata = {
  title: "SimplAI. Build Production-Ready Gen AI Applications With Ease.",
  description:
    "Simplify AI development for enterprises with our no-code platform. Build, orchestrate, deploy and monitor Gen AI apps—all in one place.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-MMV6VP3N" />
      <body className={`${montserrat.variable}`}>
        <ThemeProvider>
          <AntdStyledComponentsRegistry>
            {children}
          </AntdStyledComponentsRegistry>
        </ThemeProvider>
        <Metrics />
      </body>
    </html>
  );
}
