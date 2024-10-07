'use client';
import { useState } from "react"; 
import Image from "next/image";
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import './style.css';
import Logo from '../../assets/svg/icons/color-logo.svg'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <header className="header">
            <nav className="nav_bar flex justify-between items-center w-full">

                <div className="logo_section">
                    <Image src={Logo} alt ="logo"/>
                </div>

                <div className="nav_links">
                    <button className="px-4 mx-2">
                        Products
                        <span className="inline-block align-middle pl-2"><IoIosArrowDown /></span>
                    </button>
                    <button className="px-4 mx-2">
                        Use Cases
                        <span className="inline-block align-middle pl-2"><IoIosArrowDown /></span>
                    </button>
                    <button className="px-4 mx-2">
                        Resources
                        <span className="inline-block align-middle pl-2"><IoIosArrowDown /></span>
                    </button>
                    <Link className="px-4 mx-2" href="/">Pricing</Link>
                    <Link className="px-4 mx-2" href="/">FAQ</Link>
                </div>
                <div className="request_button">
                    <button>
                        Request Demo 
                        <span className="header_button_icon"><IoMdArrowForward /></span>
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default Header;