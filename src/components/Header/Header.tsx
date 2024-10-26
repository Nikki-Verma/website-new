"use client";
import { Popover } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoMdArrowForward } from "react-icons/io";
import Logo from "../../assets/svg/icons/color-logo.svg";
import Programming from "../../assets/svg/icons/programming.svg";
import "./style.css";

const Header = () => {
  const [showSubMenu, setshowSubMenu] = useState("");

  const productsSubMenu = [
    {
      title: "SimplAI LLM Studio",
      description:
        "Learn about the SimplAi Products how it can boost your business",
      link: "/llmstudio",
      icon: Programming,
    },
    {
      title: " Production RAG",
      description:
        "Learn about the SimplAi Products how it can boost your business",
      link: "/rag",
      icon: Programming,
    },
  ];

  const UseCaseSubMenu = [
    {
      title: "Mulimedia",
      description:
        "Learn about the SimplAi Products how it can boost your business",
      link: "/multimedia",
      icon: Programming,
    },
    {
      title: "Healthcare",
      description:
        "Learn about the SimplAi Products how it can boost your business",
      link: "/healthcare",
      icon: Programming,
    },
    {
      title: "BFSI",
      description:
        "Learn about the SimplAi Products how it can boost your business",
      link: "/bfsi",
      icon: Programming,
    },
    {
      title: "Legal",
      description:
        "Learn about the SimplAi Products how it can boost your business",
      link: "/legal",
      icon: Programming,
    },
  ];
  const ResourcesSubMenu = [
    {
      title: "Blogs",
      description:
        "Learn about the SimplAi Products how it can boost your business",
      link: "",
      icon: Programming,
    },
    {
      title: "Documentation",
      description:
        "Learn about the SimplAi Products how it can boost your business",
      link: "",
      icon: Programming,
    },
  ];

  const subMenuProduct = (
    <div className="subMenu">
      <div>
        <h4 className="text-left">Platforms</h4>
        <p className="font-14 text-left my-4">
          Learn about the SimplAi Products how it can boost your business
        </p>
        <button className="button">Talk with expert</button>
      </div>
      <div className="subMenu-Item-container">
        {productsSubMenu?.map((value: any) => {
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

  const componentRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: any) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setshowSubMenu(""); // Set state to false if clicked outside
    }
  };

  // Attach event listener to detect outside clicks
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header" ref={componentRef}>
      <nav className="nav_bar flex justify-between items-center w-full">
        <div className="logo_section">
          <Link href={"/"}>
            <Image src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="nav_links">
          <button className="px-4 mx-2">
            <Popover
              content={subMenuProduct}
              trigger={"hover"}
              zIndex={131313131313133}
              autoAdjustOverflow={true}
              placement="bottom"
            >
              <div className="relative ...">
                Platform
                <span className="inline-block align-middle pl-2">
                  <IoIosArrowDown />
                </span>
              </div>
            </Popover>
          </button>
          <button className="px-4 mx-2">
            <Popover
              content={subMenuUseCase}
              trigger={"hover"}
              zIndex={131313131313133}
              autoAdjustOverflow={true}
              placement="bottom"
            >
              <div className="relative ...">
                Use Cases
                <span className="inline-block align-middle pl-2">
                  <IoIosArrowDown />
                </span>
              </div>
            </Popover>
          </button>
          <button className="px-4 mx-2">
            <Popover
              content={subMenuResource}
              trigger={"hover"}
              zIndex={131313131313133}
              autoAdjustOverflow={true}
              placement="bottom"
            >
              <div className="relative ...">
                Resources
                <span className="inline-block align-middle pl-2">
                  <IoIosArrowDown />
                </span>
              </div>
            </Popover>
          </button>
          <button>
            <Link className="px-4 mx-2" href="/pricing">
              Pricing
            </Link>
          </button>
          <button>
            <Link className="px-4 mx-2" href="/">
              FAQ
            </Link>
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
      </nav>
      <div className="product_nav" style={{ background: "#fff" }}></div>
    </header>
  );
};
export default Header;
