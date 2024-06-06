import Header from "@/components/Header";
import Image from "next/image";
import ServiceImage from "@/assets/img/service-img.png";


const ServicePage = () => {
    return (
        <div className="bg-service bg-[#0D0D0D]">
            <Header />
            <section className="pt-48 pb-0 lg:pb-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                    <p className="subhead lead tracking-normal lg:tracking-[15px] uppercase text-[#E0E0E0] font-sf-medium lg:text-xl text-left lg:text-center mb-5">Our Services</p>
                    <div className="h-8 hidden lg:flex items-center justify-start w-full">
                        <div className="bg-white shadow-sm h-1 w-full">
                            <div className="relative h-2 flex items-center justify-end w-[60%] top-[-2px]">
                                <div className="absolute top-0 bottom-0 left-0 w-full bg-progress-custom"></div>
                                <div className="relative bg-white font-medium text-sm size-6 rounded-full right-[-3px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-16">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="lg:col-span-6">
                            <h3 className="font-clash-medium text-4xl leading-[3rem] lg:text-6xl text-white">Application <br className="lg:hidden inline-block"/> Development</h3>
                        </div>
                        <div className="lg:col-span-6">
                            <div className="justify-end flex">
                            <button className="hidden lg:inline-flex items-center gap-x-3 text-lg xl:text-2xl text-black font-clash-medium px-8 py-3 bg-white hover:bg-[#6F0000] border border-white border-solid rounded-[79px]"><span>Know more</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-5">
                        <div className="lg:col-span-12">
                            <div className="relative overflow-hidden service-car">
                                <div className="service-desc lg:bg-white/90 py-6 lg:px-12 rounded-full lg:h-[525px] lg:w-[525px] flex items-center lg:justify-center lg:text-center lg:absolute lg:top-[25%] lg:right-0">
                                    <p className="font-clash-medium text-2xl lg:text-black text-white/80">
                                    Corem ipsum dolor sit amet, consectetur adipiscing elit.Corem ipsum dolor sit amet, consectetur adipiscing elit.Corem ipsum dolor sit amet, consectetur adipiscing elit.Corem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                                <Image src={ServiceImage} alt="Service Image" className="rounded-lg lg:rounded-[50px]"></Image>
                                
                            </div>
                            <button className="lg:hidden inline-flex items-center gap-x-3 mt-5 text-base lg:text-lg xl:text-2xl text-black font-clash-medium py-2 px-4 lg:px-8 lg:py-3 bg-white hover:bg-[#6F0000] border border-white border-solid rounded-[79px]"><span>Know more</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ServicePage