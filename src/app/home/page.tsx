import Hero from "@/components/Home/Hero";
import OurApplications from "@/components/Home/OurApplications/OurApplications";
import AISoltion from "@/components/Home/AISolution/AISolution";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import PlatformBuild from "@/components/Home/PlatformBuild/PlatformBuild";
import AIStack from "@/components/Home/AIStack/AIStack";
import DataSync from "@/components/Home/DataSync/DataSync";
import Testimonial from "@/components/Home/Testimonial/Testimonial";
import Banner from "@/components/Home/Banner/Banner";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const home = () => {
    return (
        <section>
            <Header />
            <Hero />
            <div style={{marginTop:"40%", position:'relative', zIndex:1211212121}}>
                <OurApplications />
                <AIStack />
                <AISoltion />
                <PlatformBuild />
                <DataSync />
                <CaseStudy />
                <Testimonial />
                <Banner />
                <Footer />
            </div>
        </section>
    )
}

export default home;