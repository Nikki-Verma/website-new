"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Dropdown, Menu, MenuProps, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoMdArrowForward } from "react-icons/io";
import Logo from "../../assets/svg/icons/color-logo.svg";
import ExperienceCenterIcon from "../Icons/ExperienceCenterIcon";
import "./style.css";

const Header = () => {
  const [showSubMenu, setshowSubMenu] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: any) => {
    if (
      componentRef.current &&
      !componentRef.current.contains(event.target) &&
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setshowSubMenu(false); // Set state to false if clicked outside
    }
  };

  const productsSubMenu: MenuProps["items"] = [
    {
      key: 2,
      label: <Link href={"/llmstudio"}>SimplAI Studio</Link>,
      // title: "SimplAI Studio",
      // description:
      //   "Learn about the SimplAi Products how it can boost your business",
      // link: "/llmstudio",
      // icon: Programming,
    },
    {
      key: 3,
      label: <Link href={"/ai-agents"}>AI Agents</Link>,
      // title: "AI Agents",
      // description:
      //   "Learn about the SimplAi Products how it can boost your business",
      // link: "/ai-agents",
      // icon: Programming,
    },
    {
      key: 4,
      label: (
        <Link href={"/agentic-process-automation"}>
          Agentic Process Automation
        </Link>
      ),
      // title: "AI Optimization",
      // description:}
    },
    {
      key: 5,
      label: <Link href={"/rag"}>Production RAG</Link>,
      // title: "Production RAG",
      // description:
      //   "Learn about the SimplAi Products how it can boost your business",
      // link: "/rag",
      // icon: Programming,
    },
  ];

  const UseCaseSubMenu: MenuProps["items"] = [
    {
      key: 7,
      label: <Link href={"/bfsi"}>Financial Services</Link>,
      // title: "BFSI",
      // description:
      //   "Learn about the SimplAi Products how it can boost your business",
      // link: "/bfsi",
      // icon: Programming,
    },
    {
      key: 8,
      label: <Link href={"/insurance"}>Insurance</Link>,
      // title: "BFSI",
      // description:
      //   "Learn about the SimplAi Products how it can boost your business",
      // link: "/bfsi",
      // icon: Programming,
    },
    {
      key: 9,
      label: <Link href={"/healthcare"}>Healthcare</Link>,
      // title: "Healthcare",
      // description:
      //   "Learn about the SimplAi Products how it can boost your business",
      // link: "/healthcare",
      // icon: Programming,
    },
    {
      key: 10,
      label: <Link href={"/legal"}>Legal</Link>,
      // title: "Legal",
      // description:
      //   "Learn about the SimplAi Products how it can boost your business",
      // link: "/legal",
      // icon: Programming,
    },
    {
      key: 11,
      label: <Link href={"/multimedia"}>Telecom, Media & Entertainment</Link>,
      // title: "Mulimedia",
      // description:
      //   "Learn about the SimplAi Products how it can boost your business",
      // link: "/multimedia",
      // icon: Programming,
    },
  ];
  const ResourcesSubMenu: MenuProps["items"] = [
    {
      key: 13,
      label: <Link href={"https://simplai.ai/blogs/"}>Blogs</Link>,
      // title: "Blogs",
      // description:
      //   "Learn about the SimplAi Products how it can boost your business",
      // link: "",
      // icon: Programming,
    },
    {
      key: 14,
      label: <Link href={"https://simplai.ai/docs/"}>Documentation</Link>,
      // title: "Documentation",
      // description:
      //   "Learn about the SimplAi Products how it can boost your business",
      // link: "",
      // icon: Programming,
    },
  ];

  const mainSubMenu: MenuProps["items"] = [
    {
      key: 1,
      label: "Platform",
      children: productsSubMenu,
      // title: "SimplAI Studio",
      // description:
      //   "Learn about the SimplAi Products how it can boost your business",
      // link: "/llmstudio",
      // icon: Programming,
    },
    {
      key: 6,
      label: "Industries",
      children: UseCaseSubMenu,
      // title: "AI Agents",
      // description:
      //   "Learn about the SimplAi Products how it can boost your business",
      // link: "/ai-agents",
      // icon: Programming,
    },
    {
      key: 12,
      label: "Resources",
      children: ResourcesSubMenu,
      // title: "AI Optimization",
      // description:}
    },
    {
      key: 14,
      label: (
        <Link href={"/pricing"} prefetch>
          Platform
        </Link>
      ),
      // title: "Production RAG",
      // description:
      //   "Learn about the SimplAi Products how it can boost your business",
      // link: "/rag",
      // icon: Programming,
    },
  ];

  const subMenuProduct = (
    <div className="subMenu" ref={menuRef}>
      <Menu
        style={{
          width: "100%",
        }}
        mode="inline"
        items={mainSubMenu}
        onClick={() => {
          setshowSubMenu(false);
        }}
      />
      <Divider
        style={{
          margin: "6px 4px",
          width: "calc(100% - 8px)",
          minWidth: "calc(100% - 8px)",
        }}
      />
      <Space direction="vertical" align="center">
        <div className="experience_center_button">
          <button>
            <ExperienceCenterIcon />
            <span>Experience SimplAI </span>
          </button>
        </div>
        <div className="request_button">
          <button>
            <span>Request Demo</span>
            <span className="header_button_icon">
              <IoMdArrowForward />
            </span>
          </button>
        </div>
      </Space>
    </div>
  );

  const subMenuUseCase = (
    <div className="subMenu">
      <div>
        <h4 className="text-left">Products</h4>
        <p className="font-14 text-left my-4">
          Learn about the SimplAi Products how it can boost your business
        </p>
        <button className="button">Talk with expert</button>
      </div>
      <div>
        {UseCaseSubMenu?.map((value: any) => {
          return (
            <Link href={value.link}>
              <div className="subMenu_link_wrapper">
                <div>
                  <Image src={value.icon} alt="icon" />
                </div>
                <div>
                  <h5>{value.title}</h5>
                  <p className="font-14 text-left">
                    Learn about the SimplAi Products how it can boost your
                    business
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );

  const subMenuResource = (
    <div className="subMenu">
      <div>
        <h4 className="text-left">Resources</h4>
        <p className="font-14 text-left my-4">
          Learn about the SimplAi Products how it can boost your business
        </p>
        <button className="button">Talk with expert</button>
      </div>
      <div>
        {ResourcesSubMenu?.map((value: any) => {
          return (
            <Link href={value.link}>
              <div className="subMenu_link_wrapper">
                <div>
                  <Image src={value.icon} alt="icon" />
                </div>
                <div>
                  <h5>{value.title}</h5>
                  <p className="font-14 text-left">
                    Learn about the SimplAi Products how it can boost your
                    business
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );

  // Attach event listener to detect outside clicks
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header id="header-nav" className="header">
        <div className="logo_section">
          <Link href={"/"}>
            <Image src={Logo} alt="logo" />
          </Link>
          <div ref={componentRef} className="iconShow">
            <FontAwesomeIcon
              onClick={() => {
                setshowSubMenu(true);
              }}
              icon={faBars}
            />
          </div>
        </div>
        <div className="nav_links">
          <button className="px-4 mx-2">
            <Dropdown
              menu={{ items: productsSubMenu }}
              // menu={ {productsSubMenu} }
              trigger={["hover"]}
              placement="bottom"
              dropdownRender={(menu) => (
                <div style={{ zIndex: "131313131313133" }}>{menu}</div>
              )}
              getPopupContainer={() =>
                document.getElementById("header-nav") || document.body
              }
            >
              <div className="relative ...">
                Platform
                <span className="inline-block align-middle pl-2">
                  <IoIosArrowDown />
                </span>
              </div>
            </Dropdown>
          </button>
          <button className="px-4 mx-2">
            <Dropdown
              menu={{ items: UseCaseSubMenu }}
              // menu={ {productsSubMenu} }
              trigger={["hover"]}
              placement="bottom"
              dropdownRender={(menu) => (
                <div style={{ zIndex: "131313131313133" }}>{menu}</div>
              )}
              getPopupContainer={() =>
                document.getElementById("header-nav") || document.body
              }
            >
              <div className="relative ...">
                Industries
                <span className="inline-block align-middle pl-2">
                  <IoIosArrowDown />
                </span>
              </div>
            </Dropdown>
          </button>
          <button className="px-4 mx-2">
            <Dropdown
              menu={{ items: ResourcesSubMenu }}
              // menu={ {productsSubMenu} }
              trigger={["hover"]}
              placement="bottom"
              dropdownRender={(menu) => (
                <div style={{ zIndex: "131313131313133" }}>{menu}</div>
              )}
              getPopupContainer={() =>
                document.getElementById("header-nav") || document.body
              }
            >
              <div className="relative ...">
                Resources
                <span className="inline-block align-middle pl-2">
                  <IoIosArrowDown />
                </span>
              </div>
            </Dropdown>
          </button>
          <button>
            <Link className="px-4 mx-2" href="/pricing">
              Pricing
            </Link>
          </button>
        </div>
        <div className="button-container-header">
          <div className="experience_center_button">
            <button>
              <ExperienceCenterIcon />
              <span>Experience SimplAI </span>
            </button>
          </div>
          <div className="request_button">
            <button>
              <span>Request Demo</span>
              <span className="header_button_icon">
                <IoMdArrowForward />
              </span>
            </button>
          </div>
        </div>
      </header>

      {showSubMenu && subMenuProduct}
    </>
  );
};
export default Header;
