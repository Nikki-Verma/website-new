import { WebsiteVideo } from "@/util/images";
import Image from "next/image";
import "./style.css";

interface Application {
  icon: any; // Assuming icons might be a component or string path
  heading: string;
  description: string;
}

const OurApplications = () => {
  return (
    <div className="application_container container">
      <Image
        src={WebsiteVideo}
        style={{ width: "100%", height: "100%" }}
        alt="website-video"
      />
    </div>
  );
};

export default OurApplications;
