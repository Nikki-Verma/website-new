'use client';
import { useEffect, useState } from 'react';
import '../../app/globals.css'
import './style.css';
import Header from '../Header/Header';
const Hero = () => {
    const animateText = ['Secure', 'Scalable', 'Reliable'];
    const [index, setIndex] = useState(0);
    // let index = 0;
    // useEffect(() => {
        
    //     const IntervalId = setInterval(() => {
    //         if(index === animateText.length){
    //         setIndex(0)
    //         } else {
    //             setIndex(index + 1);
    //         }
    //     }, 1200)

    //     return () => {
    //         clearInterval(IntervalId)
    //     }

    // }, [index])




    return (
        <div className='hero_section'>
            <Header />
            <div className='content_section'>
                <h1 className='text-center hero_section_heading'>
                    <span className='text_gray_gadient'>Build</span>  
                     <span className=''> {animateText[index]}</span>
                     {/* <span className='animate_text_wapper'>
                        <span className='animate_text transform_text'>Secure <br/>Scalable <br/>Reliable</span>
                     </span> */}
                    <br/>
                    <span className='text_gray_gadient'>
                        Enterprise-Ready AI Faster
                    </span>
                </h1>
                <p className='text-center text-[color:--off-white] w-1/2 mx-auto mt-8 hero_text'>SimplAI is a unified Gen AI development platform to build, orchestrate, deploy &
                monitor LLM-Powered applications with ease</p>
                <div className='flex justify-center items-center mt-8'>
                    <button className='button button_white'>Request Demo</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;

