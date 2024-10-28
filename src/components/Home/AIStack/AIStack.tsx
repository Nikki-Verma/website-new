import "./style.css";
const AIStack = () => {
  const badges_list = [
    "AI Assistants",
    "Chatbots",
    "Co-Pilots",
    "AI Chains",
    "Workflow Automation",
    "Business Process Automation",
    "RAG Applications",
    "Summarizations",
    "AI Assistants",
    "Chatbots",
    "Co-Pilots",
    "AI Chains",
  ];

  const badges_list2 = [
    "Self-Hosted",
    "Fine Tuning",
    "Conversational AI",
    "Voice AI",
    "Vision AI",
    "Agentic RAG",
    "Knowledge AI",
    "Data Connectors",
    "Responsible AI",
    "Self-Hosted",
    "Fine Tuning",
    "Conversational AI",
  ];

  return (
    <div className="text-center mb-12">
      <div className="container">
        <span className="home_page_heading ">
          One Platform, Unlimited Possibilities
        </span>
        <div className="marquee">
          <div className="badges_wrapper">
            {badges_list?.map((badge: string) => {
              return <div className="badges">{badge}</div>;
            })}
          </div>
        </div>
        <div className="marquee1">
          <div className="badges_wrapper badges_wrapper1">
            {badges_list2?.map((badge: string) => {
              return <div className="badges">{badge}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIStack;
