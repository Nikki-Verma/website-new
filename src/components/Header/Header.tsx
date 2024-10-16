"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import "./style.css";
import Logo from "../../assets/svg/icons/color-logo.svg";
import { describe } from "node:test";
import Programming from "../../assets/svg/icons/programming.svg";

const Header = () => {
  const [showSubMenu, setshowSubMenu] = useState(false);

  const productsSubMenu = [
    {
      title: "SimplAI LLM Studio",
      description:
        "Learn about the SimplAi Products how it can boost your business",
      link: "/llmstudio",
    },
    {
      title: "Mulimedia",
      description:
        "Learn about the SimplAi Products how it can boost your business",
      link: "/multimedia",
    },
    {
      title: "Healthcare",
      description:
        "Learn about the SimplAi Products how it can boost your business",
      link: "/healthcare",
    },
    {
      title: "BFSI",
      description:
        "Learn about the SimplAi Products how it can boost your business",
      link: "/bfsi",
    },
    // {
    //   title: "SimplAI LLM Studio",
    //   description:
    //     "Learn about the SimplAi Products how it can boost your business",
    //   link: "/home",
    // },
    // {
    //   title: "SimplAI LLM Studio",
    //   description:
    //     "Learn about the SimplAi Products how it can boost your business",
    //   link: "/home",
    // },
  ];

  const subMenuProduct = (
    <div className="subMenu">
      <div>
        <h4 className="text-left">Products</h4>
        <p className="font-14 text-left my-4">
          Learn about the SimplAi Products how it can boost your business
        </p>
        <button className="button">Talk with expert</button>
      </div>
      <div>
        {productsSubMenu?.map((value: any) => {
          return (
            <Link href={value.link}>
              <div className="subMenu_link_wrapper">
                <h5>{value.title}</h5>
                <p className="font-14 text-left mt-4">
                  Learn about the SimplAi Products how it can boost your
                  business
                </p>
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
      setshowSubMenu(false); // Set state to false if clicked outside
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
            <div
              className="relative ..."
              onClick={() => setshowSubMenu(!showSubMenu)}
            >
              Products
              <span className="inline-block align-middle pl-2">
                <IoIosArrowDown />
              </span>
              {showSubMenu && subMenuProduct}
            </div>
          </button>
          <button className="px-4 mx-2">
            Use Cases
            <span className="inline-block align-middle pl-2">
              <IoIosArrowDown />
            </span>
          </button>
          <button className="px-4 mx-2">
            Resources
            <span className="inline-block align-middle pl-2">
              <IoIosArrowDown />
            </span>
          </button>
          <Link className="px-4 mx-2" href="/">
            Pricing
          </Link>
          <Link className="px-4 mx-2" href="/">
            FAQ
          </Link>
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
