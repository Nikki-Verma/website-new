import Image from "next/image";

import TraceVisibilityImage from "../../../assets/png/Granular-visibility-with-Traces.png";
import AutomacticImage from "../../../assets/png/Automatic-Evaluation-Metrics.png";
import ImproveImage from "../../../assets/png/Evaluate-and-Improve.png";

const Tools = () => {
  return (
    <div className="container">
      <div className="flex justify-between gap-10">
        <div className="card_v2 w-full px-8 pb-8 pt-10">
          <div className="mx-auto flex flex-col justify-center">
            <Image
              src={TraceVisibilityImage}
              alt={"TraceVisibilityImage"}
              className="tex-center mx-auto"
            />

            <h4 className="heading_24 text-center mb-4 mt-20">
              Granular visibility with Traces
            </h4>
            <p className="text-center">
              Get a clear view of every sequence of calls, allowing you to
              fine-tune performance with precision and detail
            </p>
          </div>
        </div>
        <div className="card_v2 w-full px-8 pb-8 pt-10">
          <div className="mx-auto flex flex-col justify-center">
            <Image
              src={AutomacticImage}
              alt={"AutomacticImage"}
              className="tex-center mx-auto"
            />

            <h4 className="heading_24 text-center mb-4 mt-20">
            Automatic Evaluation Metrics
            </h4>
            <p className="text-center">
            Gain insights into the robustness and reliability of your LLM applications through built-in metrics, ensuring consistent performance
            </p>
          </div>
        </div>
        <div className="card_v2 w-full px-8 pb-8 pt-10">
          <div className="mx-auto flex flex-col justify-center">
            <Image
              src={ImproveImage}
              alt={"ImproveImage"}
              className="tex-center mx-auto"
            />

            <h4 className="heading_24 text-center mb-4 mt-20">
            Evaluate and Improve
            </h4>
            <p className="text-center">
                Continually enhance your LLM models with actionable insights, keeping you ahead of the curve in AI development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
