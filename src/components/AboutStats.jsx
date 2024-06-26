'use client'; 
import { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

const faqs = [
    {
        stat: "04",
        title: "Years of Experience",
        answer:
        "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan",
    },
    {
        stat: "234",
        title: "Project Completed",
        answer:
        "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan",
    },
    {
        stat: "500+",
        title: "Happy Customers",
        answer:
        "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan",
    },
    {
        stat: "69+",
        title: "Web & App",
        answer:
        "Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan",
    },
    // More questions...
];

const AboutStats = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <dl className="mt-0 space-y-6 divide-y divide-white/10">
            {faqs.map((faq, index) => (
              <Disclosure as="div" key={index} className="p-4 lg:p-5 xl:p-8 xl:py-6 bg-[#212121] rounded-[34px]" open={openIndex === index}>
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className="flex w-full items-center justify-between text-left text-white" onClick={() => handleToggle(index)}>
                        <div className="flex items-center ">
                            <span className="font-clash-bold text-3xl lg:text-5xl  2xl:text-[80px] me-3">{faq.stat}</span><span className="font-clash-medium text-lg lg:text-2xl 2xl:text-3xl">{faq.title}</span>
                        </div>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="lg:w-8 lg:h-8 w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="lg:w-8 lg:h-8 w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                          )}
                        </span>
                      </DisclosureButton>
                    </dt>
                    {openIndex === index && (
                      <DisclosurePanel as="dd" className="mt-2 pr-12">
                        <p className="text-lg leading-7 text-white/60 font-clash-regular">{faq.answer}</p>
                      </DisclosurePanel>
                    )}
                  </>
                )}
              </Disclosure>
            ))}
        </dl>
    );
};

export default AboutStats;
