import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import AccordionItem from "./AccordionItem";

const Accordian = () => {
    const [activeIndex, setActiveIndex] = useState<any>(null);
    
    const accordionData:any = [
        {
          title: 'Access to all Global LLMs',
          content: 'Quickly discover and connect with a unified API for the latest and most advanced LLMs',
        },
        {
          title: 'Deploy open source models on your own cloud',
          content: 'With SimplAI, you have the flexibility to deploy any open-source LLM model directly on your own cloud infrastructure with one-click deployment.',
        },
        {
          title: 'LLM playground',
          content: 'Developers can experiment, test, and evaluate prompts and models in a dynamic environment, allowing for iterative improvement Experiment, test, and iterate on prompts and model configurations in a fully interactive environment, enabling real-time adjustments ',
        },
        {
            title: 'Fine tune any open source model',
            content: 'Securely apply advanced fine-tuning techniques on open-source models in your virtual private cloud with our SOC-2 compliant platform',
        },
    ];

const handleAccordionClick = (index:number) => {
    // Toggle the clicked item, and close others
    setActiveIndex(activeIndex === index ? null : index);
    };

  return (
    <div>rizwan</div>
    // <div className="container pb-10">
    //    {accordionData.map((item:any, index:any) => (
    //     <AccordionItem
    //       key={index}
    //       title={item.title}
    //       content={item.content}
    //       isOpen={activeIndex === index}
    //       onClick={() => handleAccordionClick(index)}
    //     />
    //   ))}
    // </div>
  );
};

export default Accordian;
