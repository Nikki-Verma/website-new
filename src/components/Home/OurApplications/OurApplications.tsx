import { HeroImage1, HeroImage2, HeroImage3, HeroImage4 } from "@/util/images";
import { Carousel } from "antd";
import Image from "next/image";
import "./style.css";

interface Application {
  icon: any; // Assuming icons might be a component or string path
  heading: string;
  description: string;
}

const OurApplications = () => {
  return (
    <div className="carousel-container-main container">
      <Carousel
        arrows={true}
        dots
        infinite={true}
        autoplaySpeed={3000}
        autoplay
        // nextArrow={<NextArrowIcon />}
        // prevArrow={<PrevArrowIcon />}
      >
        <div className="carousel-container">
          <Image
            src={HeroImage1}
            style={{ width: "100%", height: "100%" }}
            alt="website-video"
          />
        </div>
        <div className="carousel-container">
          <Image
            src={HeroImage2}
            style={{ width: "100%", height: "100%" }}
            alt="website-video"
          />
        </div>
        <div className="carousel-container">
          <Image
            src={HeroImage3}
            style={{ width: "100%", height: "100%" }}
            alt="website-video"
          />
        </div>
        <div className="carousel-container">
          <Image
            src={HeroImage4}
            style={{ width: "100%", height: "100%" }}
            alt="website-video"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default OurApplications;
