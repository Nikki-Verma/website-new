import { SimplaiStudioHeroImage } from "@/util/images";
import Image from "next/image";
import "./style.css";

interface Application {
  icon: any; // Assuming icons might be a component or string path
  heading: string;
  description: string;
}

const VideoContainerLlmStudio = () => {
  return (
    <div className=" container relative">
      <Image
        src={SimplaiStudioHeroImage}
        style={{ minWidth: "100%", height: "100%" }}
        alt="simplai studio image"
      />
    </div>
  );
};

export default VideoContainerLlmStudio;
