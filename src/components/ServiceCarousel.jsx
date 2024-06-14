'use client'; 
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/assets/css/app.css'; // Import your CSS file
import Image from "next/image";
import ServiceImage from "@/assets/img/service-img.png";
import Link from 'next/link';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ServiceCarousel = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".wrapper section");
    let maxWidth = 0;

    const getMaxWidth = () => {
      maxWidth = 0;
      sections.forEach((section) => {
        maxWidth += section.offsetWidth;
      });
    };

    getMaxWidth();
    ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

    gsap.to(sections, {
      x: () => `-${maxWidth - window.innerWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: wrapperRef.current,
        pin: true,
        scrub: true,
        end: () => `+=${maxWidth}`,
        invalidateOnRefresh: true
      }
    });

    sections.forEach((sct, i) => {
      ScrollTrigger.create({
        trigger: sct,
        start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth / 2) * (maxWidth / (maxWidth - window.innerWidth)),
        end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
        toggleClass: { targets: sct, className: "active" }
      });
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      gsap.killTweensOf(sections);
    };
  }, []);

  return (
    <div className="wrapper overflow-y-auto pb-32 lg:pb-0" ref={wrapperRef}>
      <section className='pt-5 lg:pt-12'>
            <div className="pb-16">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="lg:col-span-8">
                            <h3 className="font-clash-medium text-4xl leading-[3rem] lg:text-5xl text-white">Application Development</h3>
                        </div>
                        <div className="lg:col-span-4">
                            <div className="justify-end flex">
                            <Link href="/services/web-development" className="hidden lg:inline-flex items-center gap-x-3 text-lg xl:text-2xl text-black font-clash-medium px-8 py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px] "><span>Know more</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-5">
                        <div className="lg:col-span-12">
                            <div className="relative overflow-hidden service-car">
                                <div className="service-div-wrap lg:absolute lg:top-[15%] lg:right-[-68px]">
                                <div className="service-desc lg:bg-white/90 py-6 lg:px-12 rounded-full lg:h-[525px] lg:w-[525px] flex items-center lg:justify-center lg:text-center ">
                                    <p className="font-clash-medium text-2xl lg:text-black text-white/80">
                                    Corem ipsum dolor sit amet, consectetur adipiscing elit.Corem ipsum dolor sit amet, consectetur adipiscing elit.Corem ipsum dolor sit amet, consectetur adipiscing elit.Corem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                                </div>
                                <Image src={ServiceImage} alt="Service Image" className="rounded-lg lg:rounded-[50px]"></Image>
                                
                            </div>
                            <Link href="/services/web-development" className="lg:hidden inline-flex items-center gap-x-3 mt-5 text-base lg:text-lg xl:text-2xl text-black font-clash-medium py-2 px-4 lg:px-8 lg:py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]"><span>Know more</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
      </section>
      <section className='pt-5 lg:pt-12'>
            <div className="pb-16">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="lg:col-span-8">
                            <h3 className="font-clash-medium text-4xl leading-[3rem] lg:text-5xl text-white">SCO <br className="lg:hidden inline-block"/></h3>
                        </div>
                        <div className="lg:col-span-4">
                            <div className="justify-end flex">
                            <Link href="/services/web-development" className="hidden lg:inline-flex items-center gap-x-3 text-lg xl:text-2xl text-black font-clash-medium px-8 py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]"><span>Know more</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-5">
                        <div className="lg:col-span-12">
                            <div className="relative overflow-hidden service-car">
                                <div className="service-div-wrap lg:absolute lg:top-[15%] lg:right-[-68px]">
                                <div className="service-desc lg:bg-white/90 py-6 lg:px-12 rounded-full lg:h-[525px] lg:w-[525px] flex items-center lg:justify-center lg:text-center ">
                                    <p className="font-clash-medium text-2xl lg:text-black text-white/80">
                                    Corem ipsum dolor sit amet, consectetur adipiscing elit.Corem ipsum dolor sit amet, consectetur adipiscing elit.Corem ipsum dolor sit amet, consectetur adipiscing elit.Corem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                                </div>
                                <Image src={ServiceImage} alt="Service Image" className="rounded-lg lg:rounded-[50px]"></Image>
                                
                            </div>
                            <button className="lg:hidden inline-flex items-center gap-x-3 mt-5 text-base lg:text-lg xl:text-2xl text-black font-clash-medium py-2 px-4 lg:px-8 lg:py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]"><span>Know more</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
      </section>
      <section className='pt-5 lg:pt-12'>
            <div className="pb-16">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="lg:col-span-8">
                            <h3 className="font-clash-medium text-4xl leading-[3rem] lg:text-5xl text-white">DevOps <br className="lg:hidden inline-block"/></h3>
                        </div>
                        <div className="lg:col-span-4">
                            <div className="justify-end flex">
                            <Link href="/services/web-development" className="hidden lg:inline-flex items-center gap-x-3 text-lg xl:text-2xl text-black font-clash-medium px-8 py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]"><span>Know more</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-5">
                        <div className="lg:col-span-12">
                            <div className="relative overflow-hidden service-car">
                            <div className="service-div-wrap lg:absolute lg:top-[15%] lg:right-[-68px]">
                                <div className="service-desc lg:bg-white/90 py-6 lg:px-12 rounded-full lg:h-[525px] lg:w-[525px] flex items-center lg:justify-center lg:text-center ">
                                    <p className="font-clash-medium text-2xl lg:text-black text-white/80">
                                    Corem ipsum dolor sit amet, consectetur adipiscing elit.Corem ipsum dolor sit amet, consectetur adipiscing elit.Corem ipsum dolor sit amet, consectetur adipiscing elit.Corem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                                </div>
                                <Image src={ServiceImage} alt="Service Image" className="rounded-lg lg:rounded-[50px]"></Image>
                                
                            </div>
                            <button className="lg:hidden inline-flex items-center gap-x-3 mt-5 text-base lg:text-lg xl:text-2xl text-black font-clash-medium py-2 px-4 lg:px-8 lg:py-3 bg-white hover:bg-[#6F0000] hover:text-white border border-white border-solid rounded-[79px]"><span>Know more</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
      </section>
      {/* Add more sections as needed */}
    </div>
  );
};

export default ServiceCarousel;
