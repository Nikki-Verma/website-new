import Image from "next/image";
import Header from "@/components/Header/Header";
import Button from "@/UIComponents/Button";
import { BfsiHeroImage } from "@/util/images";
import Tabs from "@/components/TabsConfig/Tabs";
import {
  ProductivityEfficiencyIcon,
  DecisionMakingIcon,
  CustomerEngagementIcon,
  CostCutIcon,
} from "@/util/icons";

const solutionsList = [
  {
    title: "Boost Productivity & Efficiency",
    description:
      "Automate workflows to reduce manual tasks and accelerate results",
    icon: ProductivityEfficiencyIcon,
  },
  {
    title: "Enhance Decision-Making",
    description:
      "Empower decision-making and automate compliance for stronger governance",
    icon: DecisionMakingIcon,
  },
  {
    title: "Elevate Customer Engagement",
    description:
      "Deliver personalized experiences and optimize customer journeys",
    icon: CustomerEngagementIcon,
  },
  {
    title: "Cut Operational Costs",
    description: "Streamline operations and automate tasks to reduce costs.",
    icon: CostCutIcon,
  },
];

const BFSI = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <div className="dark_bg_hero">
        <div className="hero_content container">
          <div className="w-2/3">
            <div className="product_page_name mb-24">BFSI</div>
            <h1 className="text-left color-white text-white mb-4">
              Boost Productivity, <br />
              Engagement, and Efficiency <br />
              with Gen AI
            </h1>
            <p className="font-18 text-white mb-8">
              Empower your organization with intelligent process automation,
              operational assistance, and human-like decision-making. From
              enhancing productivity to driving customer engagement, scale your
              financial services with Generative AI solutions built for
              efficiency and growth.
            </p>
            <Button label={"Request Demo"} url={"#"} color={"button_white"} />
          </div>
          <div>
            <Image src={BfsiHeroImage} alt={"BFRS"} />
          </div>
        </div>
      </div> */}
      {/* <div className="container">
        <h2>
          Comprehensive AI-Powered Financial <br />
          Solutions with SimplAI
        </h2>
        <div className="flex gap-6 justify-between mt-16">
          {solutionsList?.map((solution: any) => {
            return (
              <div className="w-full flex justify-center flex-col items-center">
                <Image src={solution.icon} alt={solution.title} />
                <h5 className="text-center mt-6 mb-4">{solution.title}</h5>
                <p className="font-18 text-center">{solution.description}</p>
              </div>
            );
          })}
        </div>
      </div> */}
      <Tabs />
    </>
  );
};

export default BFSI;
