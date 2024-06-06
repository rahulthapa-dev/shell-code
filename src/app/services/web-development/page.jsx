import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ServiceImage from "@/assets/img/service-img.png";
import iPhoneImage from "@/assets/img/iphone.png";

const ServiceDetail = () => {
    return (
        <div>
            <div className="bg-service bg-[#0D0D0D]">
            <Header />
            <section className="pt-48 pb-0 lg:pb-16">
                <div className="mx-auto max-w-7xl px-4 lg:px-8 relative">
                    <p className="subhead lead tracking-normal lg:tracking-[15px] uppercase text-[#E0E0E0] font-sf-medium lg:text-xl text-left lg:text-center mb-5">Our Services</p>
                </div>
            </section>
            <section className="pt-16">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="lg:col-span-6">
                            <h3 className="font-clash-medium text-4xl lg:text-6xl text-white mb-9">Application Development</h3>
                            <p className="font-clash-regular text-lg lg:text-3xl text-white mb-5">
                            Forem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </p>
                            <div className="bg-gray-400/20 border border-gray-500 rounded-[32px] p-5 max-w-[400px]">
                                <p className="font-sf text-xl lg:text-3xl text-white mb-2 lg:mb-0">
                                    <em>“Forem ipsum dolor sit amet, consectetur adipiscing elit.”</em>
                                </p>
                                <p className="font-sf text-xl lg:text-3xl text-white">
                                -Mervin Agera
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-6">
                            <Image src={iPhoneImage} alt="Service Image" className="rounded-[50px]"></Image>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section className="py-16 bg-[#0D0D0D] ux-research">
            <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-8 lg:space-y-16">
                <h3 className="font-clash-bold text-white text-3xl lg:mb-8 text-wrap">UX Research & Strategy</h3>
                <p className="font-sf text-xl text-white/80">
                Our multi-disciplinary team of design & marketing experts are trained to think like brand managers. We discover and analyze data to build a foundation for a winning strategy. Together with your team, we identify solutions that deliver the greatest value and impact on top line growth.
                </p>
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-8">
                    <ul className="lg:col-span-6 text-white ul-custom space-y-1">
                        <li>
                            Audience & Market Research
                        </li>
                        <li>
                        Competitive Benchmarking
                        </li>
                        <li>
                        User Testing
                        </li>
                        <li>
                        Analytics Auditing
                        </li>
                    </ul>
                    <ul className="lg:col-span-6 text-white ul-custom space-y-1">
                        <li>Journey Mapping</li>
                        <li>Information Architecture</li>
                        <li>User Research</li>
                        <li>Stakeholder & Design Thinking Workshops</li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="py-10 lg:py-16 bg-[#0D0D0D] connect-us">
            <div className="mx-auto max-w-5xl sm:px-6 lg:px-8 space-y-16 text-center leading-10 lg:leading-[70px]">
                <p className="text-white text-2xl lg:text-6xl font-clash-medium">Have a <br /> Project in<br /> Mind?</p>
                <button className="inline-flex items-center gap-x-3 text-lg xl:text-2xl text-white font-clash-medium px-8 py-3 bg-transoarent hover:bg-[#6F0000] border border-white border-solid rounded-[79px]"><span>Connect with us</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </button>
            </div>
        </section> 
        <Footer/>
    </div>
    )
}
export default ServiceDetail
