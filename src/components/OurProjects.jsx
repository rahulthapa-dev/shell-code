import Image from "next/image";
import project1 from "@/assets/img/p1.png";
import project2 from "@/assets/img/p2.png";
import project3 from "@/assets/img/p3.png";
import project4 from "@/assets/img/p4.png";
import project5 from "@/assets/img/p5.png";
import project6 from "@/assets/img/p6.png";
import Link from 'next/link';

const ProjectSection = () => {
    return (
        <section id="ProjectSection" className="bg-gray-950 py-16 project-bg">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 pb-20">
                    <div className="lg:col-span-8">
                        <Link href="/services" className="h2 font-clash-bold text-white/60 text-[38px] lg:text-7xl xl:text-8xl section-title title-project relative pr-0 lg:w-auto inline-block w-full uppercase">Our <br className="lg:hidden inline-block"/>Projects</Link>
                        <div className="flex flex-wrap gap-x-3">
                            <button className="mt-5 text-base lg:text-lg xl:text-2xl text-white font-clash-medium py-2 px-4 lg:px-8 lg:py-3 bg-[#6F0000] border border-white rounded-[79px]">App development</button>
                            <button className="inline-flex items-center gap-x-3 mt-5 text-base lg:text-lg xl:text-2xl text-white font-clash-medium py-2 px-4 lg:px-8 lg:py-3 bg-transparent hover:bg-[#6F0000] border border-white border-solid rounded-[79px]">Website development</button>
                            <button className="inline-flex items-center gap-x-3 mt-5 text-base lg:text-lg xl:text-2xl text-white font-clash-medium py-2 px-4 lg:px-8 lg:py-3 bg-transparent hover:bg-[#6F0000] border border-white border-solid rounded-[79px]">Others</button>
                        </div>
                    </div>
                    <div className="hidden lg:inline-block mt-10 lg:col-span-4 lg:mt-0 pt-3">
                        <p className="text-white text-lg">Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, </p>
                        <button className="inline-flex items-center gap-x-3 mt-5 text-base lg:text-lg xl:text-2xl text-white font-clash-medium py-2 px-4 lg:px-8 lg:py-3 bg-transparent hover:bg-[#6F0000] border border-white border-solid rounded-[79px]"><span>Know more</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 lg:size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </button>
                    </div>
                    
                </div>
            </div>
            <div className="grid grid-cols-12 gap-2 lg:gap-8 marquee__projects__wrap">
                <div className="marquee marquee__projects col-span-12">
                    <div className="marquee__group">
                        <div className="col-span-4">
                            <Image src={project1} alt="project" className="rounded-md lg:rounded-3xl" />
                        </div>
                        <div className="col-span-4">
                            <Image src={project2} alt="project" className="rounded-md lg:rounded-3xl" />
                        </div>
                        <div className="col-span-4">
                            <Image src={project3} alt="project" className="rounded-md lg:rounded-3xl" />
                        </div>
                    </div>
                    <div aria-hidden="true" className="marquee__group">
                        <div className="col-span-4">
                            <Image src={project1} alt="project" className="rounded-md lg:rounded-3xl" />
                        </div>
                        <div className="col-span-4">
                            <Image src={project2} alt="project" className="rounded-md lg:rounded-3xl" />
                        </div>
                        <div className="col-span-4">
                            <Image src={project3} alt="project" className="rounded-md lg:rounded-3xl" />
                        </div>
                    </div>
                </div>
                <div className="marquee marquee--reverse col-span-12">
                    <div className="marquee__group">
                        <div className="col-span-4">
                            <Image src={project4} alt="project" className="rounded-md lg:rounded-3xl" />
                        </div>
                        <div className="col-span-4">
                            <Image src={project5} alt="project" className="rounded-md lg:rounded-3xl" />
                        </div>
                        <div className="col-span-4">
                            <Image src={project6} alt="project" className="rounded-md lg:rounded-3xl" />
                        </div>
                    </div>
                    <div aria-hidden="true" className="marquee__group">
                        <div className="col-span-4">
                            <Image src={project4} alt="project" className="rounded-md lg:rounded-3xl" />
                        </div>
                        <div className="col-span-4">
                            <Image src={project5} alt="project" className="rounded-md lg:rounded-3xl" />
                        </div>
                        <div className="col-span-4">
                            <Image src={project6} alt="project" className="rounded-md lg:rounded-3xl" />
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
export default ProjectSection