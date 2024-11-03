import { SimplaiStudioHeroImage } from "@/util/images";
import Image from "next/image";
import "./style.css";
const VedioContainerLLmStudio = () => {
  return (
    <div className="relative ... vedio_container_parent ">
      <Image
        src={SimplaiStudioHeroImage}
        style={{ width: "100%", height: "100%" }}
        alt="Simplai-llm-studio-image"
      />
    </div>
  );
};

export default VedioContainerLLmStudio;
