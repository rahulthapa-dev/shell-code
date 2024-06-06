'use client';
import Image from "next/image";
import bgFooter from "@/assets/img/bg-contact.png";
import linkedin from "@/assets/img/linkdin.svg";
import twitter from "@/assets/img/x.svg";
import insta from "@/assets/img/insta.svg";


const FooterComponent = () => {
    return (
        <footer className="bg-gray-900 relative" aria-labelledby="footer-heading">
            <div className="mx-auto max-w-7xl relative overflow-hidden">
            <Image src={bgFooter} alt="background" className="absolute -z-0"></Image>
            
            <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32 relative z-10">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                    <div className="sm:col-span-7 bg-gray-700/20 lg:bg-[#171717] rounded-xl p-6 lg:p-11 space-y-32">
                        <div>
                            <h4 className="text-white font-sf-bold text-3xl mb-12">Before you go, <br/> check out these links</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-12 space-y-6 lg:space-y-0  text-base">
                            <div className="sm:col-span-4 text-white">
                                <p className="mb-4">Company</p>
                                <ul className="text-white/50 space-y-2">
                                    <li>
                                        <a href="">Our story</a>
                                    </li>
                                    <li>
                                        <a href="">Support</a>
                                    </li>
                                    <li>
                                        <a href="">Press</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="sm:col-span-4 text-white">
                                <p className="mb-4">Company</p>
                                <ul className="text-white/50 space-y-2">
                                    <li>
                                        <a href="">Our story</a>
                                    </li>
                                    <li>
                                        <a href="">Support</a>
                                    </li>
                                    <li>
                                        <a href="">Press</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="sm:col-span-4 text-white space-y-2">
                                <p className="mb-4">Company</p>
                                <ul className="text-white/50 space-y-2">
                                    <li>
                                        <a href="">Our story</a>
                                    </li>
                                    <li>
                                        <a href="">Support</a>
                                    </li>
                                    <li>
                                        <a href="">Press</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-5">
                        <div className="bg-gray-700/20 lg:bg-[#171717] rounded-xl p-6 lg:p-11 mb-4">
                            <h4 className="text-3xl font-sf-bold text-white mb-20">Let&apos;swork together</h4>
                            <div className="font-sf-medium text-white/50 space-y-2">
                                <p>
                                    <a href="">Sponsor a member deal</a>
                                </p>
                                <p>
                                    <a href="">Apply as mentor</a>
                                </p>
                                <p>
                                    <a href="">Host a workshop</a>
                                </p>
                                <p>
                                    <a href="">Join the team</a>
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="col-span-4 bg-gray-700/20 lg:bg-[#171717] rounded-xl p-6 text-center">
                                <Image src={twitter} alt="Twitter" className="mx-auto"></Image>
                            </div>
                            <div className="col-span-4 bg-gray-700/20 lg:bg-[#171717] rounded-xl p-6 text-center">
                                <Image src={linkedin} alt="Linkdin" className="mx-auto"></Image>
                            </div>
                            <div className="col-span-4 bg-gray-700/20 lg:bg-[#171717] rounded-xl p-6 text-center">
                                <Image src={twitter} alt="twitter" className="mx-auto"></Image>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default FooterComponent
