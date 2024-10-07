import './style.css';
const AIStack = () =>{
    const badges_list = [
        'AI Assistants', 
        'Chatbots', 
        'Co-Pilots', 
        'AI Chains', 
        'Workflow Automation', 
        'Business Process Automation', 
        'RAG Applications', 
        'Summarizations', 
        'Self-Hosted', 
        'Fine Tuning', 
        'Conversational AI', 
        'Voice AI', 
        'Vision AI', 
        'Agentic RAG', 
        'Knowledge AI', 
        'Data Connectors', 
        'Responsible AI'
    ]



    return (
        <h2 className="text-center container">
            One Platform, Unified Gen AI Stack<br /> Unlimited Possibilities
            <div className="badges_wrapper">
                {
                    badges_list?.map((badge:string) => {
                        return (
                            <div className="badges">
                                {badge}
                            </div>
                        )
                    })
                }
                
            </div>
        </h2>
    )
}

export default AIStack;