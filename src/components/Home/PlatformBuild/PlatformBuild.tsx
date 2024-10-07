'use client';

import { useState } from 'react';
import './style.css';
import Image from 'next/image';
import Relaible from '../../../assets/png/reliable.png'; 
import ProductionScale from '../../../assets/png/production-scale.png';
import GenScale from '../../../assets/png/scale-gen-ai.png';
const data = [
    {
        heading: 'Secure the Generative AI in your enterprise', 
        description:[
            'Robust data encryption and access controls at both application and infrastructure layers', 
            'Deploy on your own cloud for the highest data security', 
            'Strong compliance measures in place, including SOC2 & ISO 27001'
        ], 
        buttonName: 'Get started', 
        buttonLink:'', 
        image: GenScale
    },
    {
        heading: 'Scale your Gen AI to production with ease', 
        description:[
            'Highest interoperability to connect complex data sources with our data connector engine', 
            'Built-in autoscaling of infrastructure to handle varying workloads seamlessly', 
            'Flexible deployment options across multiple cloud environments or on-premise solutions'
        ], 
        buttonName: 'Get started', 
        buttonLink:'', 
        image: GenScale
    },
    {
        heading: 'Reliably run Gen AI for your enterprise', 
        description:[
            'Experience low latency with real-time streaming and parallel processing for optimal performance', 
            'Enhance LLM reliability with guardrails, RAG, finetuning, and memory features', 
            'Full transparency over applications with comprehensive LLM observability'
        ], 
        buttonName: 'Get started', 
        buttonLink:'', 
        image: Relaible
    }, 
    
]
const PlatformBuild = () => {
    const [currentSelect, setCurrentSelect] = useState(data[0]);
    return (
        <section className='platform_section mb-120'>
            <div className='heading_section'>
                <h2 className='text-white'>
                Platform built with enterprise <br />success in mind
                </h2>
                <p className='text-white section_subheading'>Lorem ipsum dolor sit amet consectetur. Amet odio gravida elit nunc interdum sed. Sit euismod at <br />diam ut amet laoreet dolor. Odio platea id praesent orci. Neque cursus blandit egestas sodales.</p>
            </div>
            
            {/* buttons */}
            <div className='button_section'>
                <button className='round_button primary_button'>Secure AI</button>
                <button className='round_button outline_button'>Scalable AI</button>
                <button className='round_button outline_button'>Reliable AI</button>
            </div>

            <div className='container mb-0'>
                <div className='dark_card py-20 px-12'>
                    <div className='grid grid-cols-12 gap-20'>
                        <div className='col-span-6'>
                            <h3 className='text-[color:--pure-white] mb-6'>Reliably run Gen AI for your enterprise</h3>
                            <ul className='platform_feature_list list-disc pl-4'>
                                <li>Experience low latency with real-time streaming and parallel processing for optimal performance</li>
                                <li>Enhance LLM reliability with guardrails, RAG, finetuning, and memory features</li>
                                <li>Full transparency over applications with comprehensive LLM observability</li>
                            </ul>
                            <button className='button'>Get started</button>
                        </div>
                        <div className='col-span-6'>
                            <Image src={Relaible} alt = {'relaible'}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PlatformBuild;