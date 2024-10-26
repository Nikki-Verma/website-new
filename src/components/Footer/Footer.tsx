import { Row, Col } from "antd";
import { IsoIcon, SocIcon } from "@/util/images";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/svg/icons/color-logo.svg";
import FacebookIcon from "../../assets/svg/icons/facebook.svg";
import InstagramIcon from "../../assets/svg/icons/instagram.svg";
import LinkedInIcon from "../../assets/svg/icons/linkedin.svg";
import PinterestIcon from "../../assets/svg/icons/pinterest.svg";
import TwitterIcon from "../../assets/svg/icons/twitter.svg";

const Footer = () => {
  const menuList = [
    {
      heading: "Products",
      menu: [
        {
          label: "Gen AI Platform",
          link: "",
        },
        {
          label: "SimlAI DocGen",
          link: "",
        },
        {
          label: "Simplai Aeon (Voice AI)",
          link: "",
        },
        {
          label: "Customer Support",
          link: "",
        },
        {
          label: "Pricing",
          link: "/pricing",
        },
      ],
    },
    {
      heading: "Solutions",
      menu: [
        {
          label: "Capabilities",
          link: "",
        },
        {
          label: "Industry Solutions",
          link: "",
        },
        {
          label: "Simplai Aeon (Voice AI)",
          link: "",
        },
        {
          label: "Customer Support",
          link: "",
        },
      ],
    },
    {
      heading: "Resources",
      menu: [
        {
          label: "Blogs",
          link: "",
        },
        {
          label: "Reports",
          link: "",
        },
        {
          label: "Articles",
          link: "",
        },
        {
          label: "Customer Support",
          link: "",
        },
      ],
    },
    {
      heading: "Support",
      menu: [
        {
          label: "Help Center",
          link: "",
        },
        {
          label: "Compliance",
          link: "",
        },
        {
          label: "Contact us",
          link: "",
        },
        {
          label: "System Status",
          link: "",
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
          <Col xs={24} md={16}>
            <Row gutter={[24, 24]}>
              {menuList?.map((value: any, index: number) => {
                return (
                  <Col xs={24} md={6} key={index}>
                    <p className="mb-4">
                      <strong>{value.heading}</strong>
                    </p>
                    {value.menu.map((menu: any) => {
                      return (
                        <ul key={menu?.label}>
                          <li
                            className="mb-4 font-14"
                            style={{ cursor: "pointer" }}
                          >
                            <Link href={menu.link}>{menu.label}</Link>
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
                      <Link href="/privacypolicy">Privacy policy</Link> &emsp;|
                    </span>
                    <span>
                      &emsp;<Link href="/refund">Refund policy</Link> &emsp;|
                    </span>
                    <span>
                      &emsp; <Link href="/termservices">Terms of service</Link>
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={24} md={4}>
              <div className="social_media_container flex gap-6">
                <Image src={FacebookIcon} alt="facebook" />
                <Image src={InstagramIcon} alt="instagram" />
                <Image src={TwitterIcon} alt="twitter" />
                <Image src={LinkedInIcon} alt="linkedin" />
                <Image src={PinterestIcon} alt="pinterest" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Footer;
