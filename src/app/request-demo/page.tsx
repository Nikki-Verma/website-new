import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import RequestDemoCalender from "@/components/RequestDemoCalender";
import "./request-demo.css";

const RequestDemo = () => {
  return (
    <>
      <Header />
      <section className="section mt-28">
        <div className="container">
          <div className="section_heading_container">
            <div className="home_page_heading">
              Schedule a Demo with Our Team
            </div>
          </div>
          <RequestDemoCalender />
        </div>
      </section>
      <CaseStudy />
      <Footer />
    </>
  );
};

export default RequestDemo;
