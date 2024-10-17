import Link from "next/link";
import Image from "next/image";
import Badge1 from "../../assets/png/badge-1.png";
import Badge2 from "../../assets/png/badge-2.png";
import Badge3 from "../../assets/png/badge-3.png";
import Badge4 from "../../assets/png/badge-4.png";
import Badge5 from "../../assets/png/badge-5.png";
import FacebookIcon from "../../assets/svg/icons/facebook.svg";
import InstagramIcon from "../../assets/svg/icons/instagram.svg";
import TwitterIcon from "../../assets/svg/icons/twitter.svg";
import LinkedInIcon from "../../assets/svg/icons/linkedin.svg";
import PinterestIcon from "../../assets/svg/icons/pinterest.svg";
import Logo from "../../assets/svg/icons/color-logo.svg";
import { PiMapPinLineLight } from "react-icons/pi";

{
  /* <PiMapPinLineLight /> */
}

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
        <div className="flex justify-between">
          <div className="address_info" style={{ maxWidth: 400 }}>
            <Image src={Logo} alt="simplAI" />
            <p className="py-4">
              SimplAI is a unified Gen AI development platform to build,
              orchestrate, deploy & monitor LLM-Powered applications with ease
            </p>
            {/* <div className="flex items-start gap-2 mb-4 mt-4">
              <span>
                <PiMapPinLineLight />{" "}
              </span>
              <span>
                Datafuse Technology LLC
                <br />8 The Green, Dover, DE 19901, USA
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span>
                <PiMapPinLineLight />{" "}
              </span>
              <span>
                Datafuse Technology Pvt Ltd
                <br />
                95/D1, Block C, Ardee City, Gurugram, Haryana, India
              </span>
            </div> */}
            <div className="badge_wrapper flex mt-8 gap-4">
              <Image src={Badge1} alt="badge" />
              <Image src={Badge2} alt="badge" />
              {/* <Image src={Badge3} alt="badge" />
              <Image src={Badge4} alt="badge" />
              <Image src={Badge5} alt="badge" /> */}
            </div>
          </div>

          <div className="menu_links_container flex justify-between gap-16">
            {menuList?.map((value: any, index: number) => {
              return (
                <div key={index}>
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
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="borderLine mt-8">
        <div className="container mb-0 flex justify-between py-8">
          <div className="flex gap-16">
            <span>Copyright © 2024 SimplAI</span>
            <div>
              <span>
                <Link href="/privacypolicy">Privacy policy</Link> &emsp;|
              </span>
              <span>
                &emsp;<Link href="/home">Security</Link> &emsp;|
              </span>
              <span>
                &emsp; <Link href="/termservices">Terms of service</Link>
              </span>
            </div>
            {/* termservices */}
          </div>

          <div className="social_media_container flex gap-6">
            <Image src={FacebookIcon} alt="facebook" />
            <Image src={InstagramIcon} alt="instagram" />
            <Image src={TwitterIcon} alt="twitter" />
            <Image src={LinkedInIcon} alt="linkedin" />
            <Image src={PinterestIcon} alt="pinterest" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
