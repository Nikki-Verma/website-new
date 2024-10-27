import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import { Row, Col } from "antd";
import "./style.css";

import CaseStudyImage from "../../../assets/png/caseStudyImage.png";

const CaseStudy = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading">Get Latest Insights on GenAI</div>
        </div>
        <Row gutter={[36, 36]}>
          <Col xs={24} md={8}>
            <div className="blog_card">
              <Image src={CaseStudyImage} alt={"case-study"} />
              <div className="blog_content">
                <div className="flex justify-between items-center mb-4">
                  <div className="artical_badge">Article</div>
                  <div className="blog_date">May 18 2024</div>
                </div>
                <h5 className="mb-4">
                  Drive alignment, prioritization, and quality with Scorecards
                </h5>
                <p className="mb-4">
                  Scorecards can convert complex objectives into clear,
                  measurable outcomes which help align the entire team around a
                  common goal.
                </p>
                <button className="link_button link_button_primary flex items-center gap-2">
                  Read more{" "}
                  <span className="icon">
                    <IoMdArrowForward />
                  </span>
                </button>
              </div>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="blog_card">
              <Image src={CaseStudyImage} alt={"case-study"} />
              <div className="blog_content">
                <div className="flex justify-between items-center mb-4">
                  <div className="artical_badge">Article</div>
                  <div className="blog_date">May 18 2024</div>
                </div>
                <h5 className="mb-4">
                  Drive alignment, prioritization, and quality with Scorecards
                </h5>
                <p className="mb-4">
                  Scorecards can convert complex objectives into clear,
                  measurable outcomes which help align the entire team around a
                  common goal.
                </p>
                <button className="link_button link_button_primary flex items-center gap-2">
                  Read more{" "}
                  <span className="icon">
                    <IoMdArrowForward />
                  </span>
                </button>
              </div>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="blog_card">
              <Image src={CaseStudyImage} alt={"case-study"} />
              <div className="blog_content">
                <div className="flex justify-between items-center mb-4">
                  <div className="artical_badge">Article</div>
                  <div className="blog_date">May 18 2024</div>
                </div>
                <h5 className="mb-4">
                  Drive alignment, prioritization, and quality with Scorecards
                </h5>
                <p className="mb-4">
                  Scorecards can convert complex objectives into clear,
                  measurable outcomes which help align the entire team around a
                  common goal.
                </p>
                <button className="link_button link_button_primary flex items-center gap-2">
                  Read more{" "}
                  <span className="icon">
                    <IoMdArrowForward />
                  </span>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CaseStudy;

// <section className="section">
//   <div className="container">
//     <div className="section_heading_container">
//       <div className="home_page_heading">Get Latest Insights on GenAI</div>
//     </div>
//     <div className="grid grid-cols-12 gap-10">
//       <div className="blog_card col-span-4">
//         <Image src={CaseStudyImage} alt={"case-study"} />
//         <div className="blog_content">
//           <div className="flex justify-between items-center mb-4">
//             <div className="artical_badge">Article</div>
//             <div className="blog_date">May 18 2024</div>
//           </div>
//           <h5 className="mb-4">
//             Drive alignment, prioritization, and quality with Scorecards
//           </h5>
//           <p className="mb-4">
//             Scorecards can convert complex objectives into clear, measurable
//             outcomes which help align the entire team around a common goal.
//           </p>
//           <button className="link_button link_button_primary flex items-center gap-2">
//             Read more{" "}
//             <span className="icon">
//               <IoMdArrowForward />
//             </span>
//           </button>
//         </div>
//       </div>
//       <div className="blog_card col-span-4">
//         <Image src={CaseStudyImage} alt={"case-study"} />
//         <div className="blog_content">
//           <div className="flex justify-between items-center mb-4">
//             <div className="artical_badge">Article</div>
//             <div className="blog_date">May 18 2024</div>
//           </div>
//           <h5 className="mb-4">
//             Drive alignment, prioritization, and quality with Scorecards
//           </h5>
//           <p className="mb-4">
//             Scorecards can convert complex objectives into clear, measurable
//             outcomes which help align the entire team around a common goal.
//           </p>
//           <button className="link_button link_button_primary flex items-center gap-2">
//             Read more{" "}
//             <span className="icon">
//               <IoMdArrowForward />
//             </span>
//           </button>
//         </div>
//       </div>
//       <div className="blog_card col-span-4">
//         <Image src={CaseStudyImage} alt={"case-study"} />
//         <div className="blog_content">
//           <div className="flex justify-between items-center mb-4">
//             <div className="artical_badge">Article</div>
//             <div className="blog_date">May 18 2024</div>
//           </div>
//           <h5 className="mb-4">
//             Drive alignment, prioritization, and quality with Scorecards
//           </h5>
//           <p className="mb-4">
//             Scorecards can convert complex objectives into clear, measurable
//             outcomes which help align the entire team around a common goal.
//           </p>
//           <button className="link_button link_button_primary flex items-center gap-2">
//             Read more{" "}
//             <span className="icon">
//               <IoMdArrowForward />
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>;
