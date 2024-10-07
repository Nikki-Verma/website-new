import { BsChevronDown } from "react-icons/bs";

const AccordionItem = ({ title, content, isOpen, onClick }:any) => {
    return (
        <>
        {/* <h2>
        Connect, Deploy, Experiment and <br />
        Finetune any LLM model
      </h2> */}
      <div className="accordian_container" onClick={onClick}>
        <div className="accordian accordian_open">
          <div className="accordian_label flex justify-between">
            {title}
            <span>
              <BsChevronDown />
            </span>
          </div>
          <div className="accordian_content accordian_content_show">
            {content}
          </div>
        </div>

        <div className="accordian_image"></div>
      </div>
      </>
    )
}

export default AccordionItem;