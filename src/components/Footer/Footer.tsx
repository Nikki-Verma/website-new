import { IsoIcon, SocIcon } from "@/util/images";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/svg/icons/color-logo.svg";
import FacebookIcon from "../../assets/svg/icons/facebook.svg";
import LinkedInIcon from "../../assets/svg/icons/linkedin.svg";
import PinterestIcon from "../../assets/svg/icons/pinterest.svg";
import TwitterIcon from "../../assets/svg/icons/twitter.svg";
import Banner from "../Home/Banner/Banner";
import "./style.css";
const Footer = () => {
  const menuList = [
    {
      heading: "Platform",
      menu: [
        {
          label: "SimplAI Studio",
          link: "/simplai-studio",
        },
        {
          label: "AI Agents",
          link: "/ai-agents",
        },
        {
          link: "/agentic-process-automation",
          label: "Agentic Process Automation",
        },
        {
          label: "Agentic RAG",
          link: "/agentic-rag",
        },
      ],
    },
    {
      heading: "Industries",
      menu: [
        {
          label: "Financial Services",
          link: "/financial-services",
        },
        {
          label: "Insurance",
          link: "/insurance",
        },
        {
          label: "Healthcare",
          link: "/healthcare",
        },
        {
          label: "Legal, Consulting & Research",
          link: "/legal",
        },
        {
          label: "Telecom, Media & Entertainment",
          link: "/multimedia",
        },
      ],
    },
    {
      heading: "Resources",
      menu: [
        {
          label: "Blogs",
          link: "https://simplai.ai/blogs/",
        },
        {
          label: "Documentation",
          link: "https://simplai.ai/docs/",
        },
      ],
    },
  ];
  return (
    <div className="footer_container">
      <div className="container mb-0">
        {/* className="flex justify-between" */}
        <Row gutter={[36, 36]}>
          <Col xs={24} md={8}>
            <div className="address_info" style={{ maxWidth: 400 }}>
              <Image src={Logo} alt="simplAI" />
              <p className="py-4">
                SimplAI is a unified Gen AI development platform to build,
                orchestrate, deploy & monitor LLM-Powered applications with ease
              </p>
              <div className="badge_wrapper flex mt-8 gap-4">
                <Image src={SocIcon} alt="badge" />
                <Image src={IsoIcon} alt="badge" />
              </div>
            </div>
          </Col>
          {/* flex justify-between gap-16 */}
          <Col
            xs={24}
            md={16}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "space-between",
            }}
          >
            <Row
              gutter={[24, 24]}
              style={{ width: "100%" }}
              justify={"space-between"}
            >
              {menuList?.map((value: any, index: number) => {
                return (
                  <Col xs={12} md={8} key={index}>
                    <p className="mb-4">
                      <strong>{value.heading}</strong>
                    </p>
                    {value.menu.map((menu: any) => {
                      return (
                        <ul key={menu?.label}>
                          <li className="mb-4 font-14">
                            <Link className="footer-links" href={menu.link}>
                              {menu.label}
                            </Link>
                          </li>
                        </ul>
                      );
                    })}
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </div>

      <div className="borderLine mt-8">
        <div className="container mb-0 py-8">
          <Row gutter={[12, 36]}>
            <Col xs={24} md={20}>
              <Row gutter={[24, 18]}>
                <Col>
                  <span>Copyright © 2024 SimplAI</span>
                </Col>
                <Col>
                  <div>
                    <span>
                      <Link className="footer-links" href="/privacypolicy">
                        Privacy policy
                      </Link>{" "}
                      &emsp;|
                    </span>
                    <span>
                      &emsp;
                      <Link className="footer-links" href="/refund">
                        Refund policy
                      </Link>{" "}
                      &emsp;|
                    </span>
                    <span>
                      &emsp;{" "}
                      <Link className="footer-links" href="/termservices">
                        Terms of service
                      </Link>
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={24} md={4}>
              <div className="social_media_container flex gap-6">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/SimplAI/"
                  style={{ display: "contents" }}
                >
                  <Image src={FacebookIcon} alt="facebook" />
                </Link>
                <Link
                  href="https://twitter.com/simplai1"
                  target="_blank"
                  style={{ display: "contents" }}
                >
                  <Image
                    src={TwitterIcon}
                    alt="twitter"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/simplai-ai/about/"
                  target="_blank"
                  style={{ display: "contents" }}
                >
                  <Image src={LinkedInIcon} alt="linkedin" />
                </Link>
                <Link
                  href="https://in.pinterest.com/simplaimedia/"
                  target="_blank"
                  style={{ display: "contents" }}
                >
                  <Image src={PinterestIcon} alt="pinterest" />
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default Footer;
