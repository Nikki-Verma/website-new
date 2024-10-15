import Image from "next/image";
import Button from "@/UIComponents/Button";
const CommonHero = ({ data }: any) => {
  return (
    <div className="dark_bg_hero mb-120">
      <div className="hero_content container mb-0">
        <div className="w-2/3">
          <div className="product_page_name mb-24">{data.title}</div>
          <h1 className="text-left color-white text-white mb-4">
            {data.heading}
          </h1>
          <p className="font-18 text-white mb-8">{data.description}</p>
          <Button
            label={data.buttonText}
            url={data.buttonLink}
            color={"button_white"}
          />
        </div>
        <div>
          <Image src={data.img} alt={data.title} />
        </div>
      </div>
    </div>
  );
};

export default CommonHero;
