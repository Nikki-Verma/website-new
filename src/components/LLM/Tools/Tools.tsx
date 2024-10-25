import Image from "next/image";

import {
  AutomacticImage,
  ImproveImage,
  TraceVisibilityImage,
} from "@/util/images";

const Tools = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading">
            Observe, Optimize, and Iterate <br /> with Confidence
          </div>
        </div>
        <div className="flex justify-start gap-10">
          <div className="card_v2_with_hover w-full px-8 pb-8 pt-10">
            <div className="mx-auto flex flex-col justify-center">
              <Image
                src={TraceVisibilityImage}
                alt={"TraceVisibilityImage"}
                className="tex-center mx-auto"
              />

              <h4 className="heading_24 text-center mb-4 mt-8">
                Granular visibility with Traces
              </h4>
              <p className="text-center">
                Get a clear view of every sequence of calls, allowing you to
                fine-tune performance with precision and detail
              </p>
            </div>
          </div>
          <div className="card_v2_with_hover w-full px-8 pb-8 pt-10">
            <div className="mx-auto flex flex-col justify-center">
              <Image
                src={AutomacticImage}
                alt={"AutomacticImage"}
                className="tex-center mx-auto"
              />

              <h4 className="heading_24 text-center mb-4 mt-8">
                Automatic Evaluation Metrics
              </h4>
              <p className="text-center">
                Gain insights into the robustness and reliability of your LLM
                applications through built-in metrics, ensuring consistent
                performance
              </p>
            </div>
          </div>
          <div className="card_v2_with_hover w-full px-8 pb-8 pt-10">
            <div className="mx-auto flex flex-col justify-center">
              <Image
                src={ImproveImage}
                alt={"ImproveImage"}
                className="tex-center mx-auto"
              />

              <h4 className="heading_24 text-center mb-4 mt-8">
                Evaluate and Improve
              </h4>
              <p className="text-center">
                Continually enhance your LLM models with actionable insights,
                keeping you ahead of the curve in AI development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
