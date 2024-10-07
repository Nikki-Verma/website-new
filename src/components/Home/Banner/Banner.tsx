import './style.css';
import Image from 'next/image';
import BannerLogo from '../../../assets/png/banner_logo.png'

const Banner = () => {
    return (
        <div className='banner_container'>
            <div className='container mb-0'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className='text-white'>Empowering innovators by</h2>
                        <p className='text-white'>SimplAI is now part of Microsoft for Startups Founders Hub & Razorpay Rize </p>
                    </div>
                    <div>
                        <Image src={BannerLogo} alt = {'banner-logo'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;