import "./style.css";

import Image from "next/image";
import UserCompany from "../../../assets/png/user_company_logo.png";
import UserImage from "../../../assets/png/user_image.png";

const Testimonial = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section_heading_container">
          <div className="home_page_heading_tag">Our Customers</div>
          <div className="home_page_heading">
            SimplAI is trusted by organizations to <br /> drive Gen AI
            innovation
          </div>
        </div>
        <div className=" flex flex-wrap mb-0 justify-center">
          <div className="testimonial_card  mx-4">
            <div className=" flex flex-col gap-4">
              <div className="user_details">
                <div className="flex items-center gap-2">
                  <Image src={UserImage} alt="user_image" />
                  <div>
                    <div className="user_name">Himanshu</div>
                    <div className="user_designation">Founder & CEO</div>
                  </div>
                </div>
                <Image
                  src={UserCompany}
                  alt="user_company"
                  style={{ maxWidth: "80px" }}
                />
              </div>
              <div className="user_say">
                With SimplAI, Lawyered isn't just embracing AI, we're redefining
                the legal landscape. By seamlessly integrating cutting-edge
                technology with our mission to democratize legal access, we're
                not only streamlining processes but also ensuring data security
                and privacy. SimplAI isn't just a platform; it's a catalyst for
                innovation, empowering Lawyered to deliver impactful solutions
                while safeguarding the trust of our customers."
              </div>
              {/* <button>Hello</button> */}
              {/* <button className="link_button flex items-center gap-3 link_button_primary mt-6">
              View case study{" "}
              <span className="icon">
                <IoMdArrowForward />
              </span>
            </button> */}
            </div>
          </div>
          <div className="testimonial_card  mx-4">
            <div className=" flex flex-col gap-4">
              <div className="user_details">
                <div className="flex items-center gap-2">
                  <Image src={UserImage} alt="user_image" />
                  <div>
                    <div className="user_name">Himanshu</div>
                    <div className="user_designation">Founder & CEO</div>
                  </div>
                </div>
                <Image
                  src={UserCompany}
                  alt="user_company"
                  style={{ maxWidth: "80px" }}
                />
              </div>
              <div className="user_say">
                With SimplAI, Lawyered isn't just embracing AI, we're redefining
                the legal landscape. By seamlessly integrating cutting-edge
                technology with our mission to democratize legal access, we're
                not only streamlining processes but also ensuring data security
                and privacy. SimplAI isn't just a platform; it's a catalyst for
                innovation, empowering Lawyered to deliver impactful solutions
                while safeguarding the trust of our customers."
              </div>
              {/* <button>Hello</button> */}
              {/* <button className="link_button flex items-center gap-3 link_button_primary mt-6">
              View case study{" "}
              <span className="icon">
                <IoMdArrowForward />
              </span>
            </button> */}
            </div>
          </div>
          <div className="testimonial_card  mx-4">
            <div className=" flex flex-col gap-4">
              <div className="user_details">
                <div className="flex items-center gap-2">
                  <Image src={UserImage} alt="user_image" />
                  <div>
                    <div className="user_name">Himanshu</div>
                    <div className="user_designation">Founder & CEO</div>
                  </div>
                </div>
                <Image
                  src={UserCompany}
                  alt="user_company"
                  style={{ maxWidth: "80px" }}
                />
              </div>
              <div className="user_say">
                With SimplAI, Lawyered isn't just embracing AI, we're redefining
                the legal landscape. By seamlessly integrating cutting-edge
                technology with our mission to democratize legal access, we're
                not only streamlining processes but also ensuring data security
                and privacy. SimplAI isn't just a platform; it's a catalyst for
                innovation, empowering Lawyered to deliver impactful solutions
                while safeguarding the trust of our customers."
              </div>
              {/* <button>Hello</button> */}
              {/* <button className="link_button flex items-center gap-3 link_button_primary mt-6">
              View case study{" "}
              <span className="icon">
                <IoMdArrowForward />
              </span>
            </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
