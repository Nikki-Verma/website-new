import './style.css'

import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import UserImage from '../../../assets/png/user_image.png';
import UserCompany from '../../../assets/png/user_company_logo.png';
import QuoteIcon from '../../../assets/svg/icons/quote.svg';


const Testimonial = () => {
    return (
        <div className="container">
            <h2>What our customers think</h2>
            <div className="testimonial_card">
                <div>
                    <div className="user_details">
                        <div className='flex items-center gap-2'>
                            <Image src = {UserImage} alt = "user_image" />
                            <div>
                                <div className="user_name">Himanshu</div>
                                <div className="user_designation">Founder & CEO</div>
                            </div>
                        </div>
                            <Image src={UserCompany} alt="user_company" />
                    </div>
                    <div className='py-6'>
                        <Image src={QuoteIcon} alt="quote-icon" />
                    </div>
                    <div className="user_say">
                        With SimplAI, Lawyered isn't just embracing AI, we're redefining the legal landscape. By seamlessly integrating cutting-edge technology with our mission to democratize legal access, we're not only streamlining processes but also ensuring data security and privacy. SimplAI isn't just a platform; it's a catalyst for innovation, empowering Lawyered to deliver impactful solutions while safeguarding the trust of our customers."
                    </div>
                    {/* <button>Hello</button> */}
                    <button className='link_button flex items-center gap-3 link_button_primary mt-6'>View case study <span className='icon'><IoMdArrowForward /></span></button>
                </div>
            </div>
        </div>
    )
}   

export default Testimonial;