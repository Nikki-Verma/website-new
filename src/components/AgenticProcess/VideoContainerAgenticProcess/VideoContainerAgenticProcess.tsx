import { VideoContainerAgenticProcessImage } from "@/util/images";
import Image from "next/image";
import "./style.css";

interface Application {
  icon: any; // Assuming icons might be a component or string path
  heading: string;
  description: string;
}

const VideoContainerAgenticProcess = () => {
  return (
    <div className=" container relative">
      <Image
        src={VideoContainerAgenticProcessImage}
        style={{ minWidth: "100%", height: "100%" }}
        alt="Agentic-workflow image"
      />
    </div>
  );
};

export default VideoContainerAgenticProcess;
