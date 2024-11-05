import { ProductionRagHeroImage } from "@/util/images";
import Image from "next/image";
import "./style.css";
const VedioContainerProductionRag = () => {
  return (
    <div className="relative ... vedio_container_parent">
      <Image
        src={ProductionRagHeroImage}
        style={{ minWidth: "100%", height: "100%" }}
        alt="production rag image"
      />
    </div>
  );
};

export default VedioContainerProductionRag;
