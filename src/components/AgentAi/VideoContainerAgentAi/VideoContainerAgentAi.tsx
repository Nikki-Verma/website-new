import { VideoContainerAgentAiImage } from "@/util/images";
import Image from "next/image";
import "./style.css";

interface Application {
  icon: any; // Assuming icons might be a component or string path
  heading: string;
  description: string;
}

const VideoContainerAgentAi = () => {
  return (
    <div className=" container relative">
      <Image
        src={VideoContainerAgentAiImage}
        style={{ minWidth: "100%", height: "100%", borderRadius: "20px" }}
        alt="AI-agent-hero-image"
      />
    </div>
  );
};

export default VideoContainerAgentAi;
