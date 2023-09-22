import React, { useState } from "react";
import FullContainer from "../../Components/FullContainer";
import HomeLayout from "../../Layouts/HomeLayout";
import { Accordion } from "flowbite-react";
// import FAQAccordionItem from "../../Components/FAQaccordion/index";

export const FAQAccordionItem = () => {
  return (
    <Accordion
      collapseAll
      className="bg-white border border-[#ededed] md:rounded-[20px] rounded-xl lg:py-10 md:py-9 sm:py-7 py-6 lg:px-16 md:px-12 sm:px-8 px-5 transition duration-[350ms] shadow-[0_2px_12px_rgba(3,3,3,.08)] hover:shadow-[0_1px_1px_rgba(3,3,3,.06)]"
    >
      <Accordion.Panel>
        <Accordion.Title className="flex text-start md:gap-5 gap-3 items-center justify-between w-full p-0 lg:text-2xl md:text-xl sm:text-lg text-base font-bold focus:outline-0 border-0 hover:border-0 text-gray-900">
          Lorem ipsum dolor sit amet consectetur adipisicing?
        </Accordion.Title>
        <Accordion.Content className="p-0 mb-2 lg:mt-5 md:mt-4 mt-3.5 w-full max-w-[767px]">
          <p className="p-0 md:text-base text-sm mb-2 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            recusandae tempore praesentium ab voluptates officia.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};


const FAQ = () => {
  const [isAdvisorFAQSelected, setAdvisorFAQSelected] = useState(true);
  const [isCompanyFAQSelected, setCompanyFAQSelected] = useState(false);

  const handleAdvisorClick = () => {
    setAdvisorFAQSelected(true);
    setCompanyFAQSelected(false);
  };

  const handleCompanyClick = () => {
    setAdvisorFAQSelected(false);
    setCompanyFAQSelected(true);
  };

  return (
    <HomeLayout>
      <FullContainer>
        <div className="headings text-center md:mb-8 mb-6 mt-2.5">
          <p className="xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold leading-tight">
            <span className="text-gray-900">Frequently</span> <br />
            <span className="text-primary-color">Asked Questions</span>
          </p>
        </div>

        <div className="tabs-container w-full flex flex-col justify-center items-center gap-4 max-w-[1000px] mx-auto lg:p-5">
          <ul
            className="flex md:flex-row flex-col flex-wrap justify-center md:items-center items-stretch max-w-none md:w-auto w-3/4 md:mb-10 mb-7 mt-2.5 bg-[#f9f9f9] md:rounded-full rounded-xl mx-auto md:p-2.5 p-2 text-center shadow-[7px_7px_20px_rgba(14,110,255,.12)]"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li role="presentation">
              <button
                className={`flex justify-center align-top lg:text-lg md:text-[16px] text-base md:py-[18px] sm:py-4 py-3.5 md:px-[90px] px-9 rounded-pill shadow-[0_2px_12px_rgba(3,3,3,.06)] font-normal md:mx-[5px] mr-0 md:mb-0 mb-2 md:w-auto w-full text-center focus:outline-0 border-0 hover:border-0 ${isAdvisorFAQSelected ? "bg-primary-color transition-color duration-350 ease-in-out text-white" : "transition-color duration-350 ease-in-out bg-white text-gray-900"
                  }`}
                id="advisor-faq"
                data-tabs-target="#AdvisorFAQs"
                type="button"
                role="tab"
                aria-controls="AdvisorFAQs"
                aria-selected={isAdvisorFAQSelected}
                onClick={handleAdvisorClick}
              >
                Advisor FAQs
              </button>
            </li>
            <li role="presentation">
              <button
                className={`flex justify-center align-top lg:text-lg md:text-[16px] text-base md:py-[18px] sm:py-4 py-3.5 md:px-[90px] px-9 rounded-pill shadow-[0_2px_12px_rgba(3,3,3,.06)] font-normal md:mx-[5px] m-0 md:w-auto w-full text-center focus:outline-0 border-0 hover:border-0 ${isCompanyFAQSelected ? "bg-primary-color transition-color duration-350 ease-in-out text-white" : "transition-color duration-350 ease-in-out bg-white text-gray-900"
                  }`}
                id="company-faq"
                data-tabs-target="#CompanyFAQs"
                type="button"
                role="tab"
                aria-controls="CompanyFAQs"
                aria-selected={isCompanyFAQSelected}
                onClick={handleCompanyClick}
              >
                Company FAQs
              </button>
            </li>
          </ul>
          <div id="myTabContent" className="w-full">
            <div
              className="hidden w-full"
              id="AdvisorFAQs"
              role="tabpanel"
              aria-labelledby="advisor-faq"
            >
              <div className="flex flex-col gap-6">
                <FAQAccordionItem />
                <FAQAccordionItem />
                <FAQAccordionItem />
                <FAQAccordionItem />
                <FAQAccordionItem />

                <div className="text-center mt-16">
                  <h2 className="lg:text-2xl text-xl font-bold text-gray-900 md:mb-2.5 mb-1.5">
                    Ready to get started?
                  </h2>
                  <p className="md:text-base text-sm mt-md-[5px] text-gray-900 font-normal">
                    See how rewarding it is to serve on on advisory board
                  </p>
                  <a
                    className="w-3/4 md:mt-5 mt-4 mx-auto text-white bg-primary-color lg:text-xl md:text-lg text-base font-bold no-underline inline-block lg:py-4  sm:py-3.5 py-3 rounded-pill"
                    href=""
                  >
                    Get Started for Free
                  </a>
                </div>
              </div>
            </div>
            <div
              className="hidden w-full"
              id="CompanyFAQs"
              role="tabpanel"
              aria-labelledby="company-faq"
            >
              <div className="flex flex-col gap-6">
                <FAQAccordionItem />
                <FAQAccordionItem />
                <FAQAccordionItem />
                <FAQAccordionItem />
                <FAQAccordionItem />
                <div className="text-center mt-16">
                  <h2 className="lg:text-2xl text-xl font-bold text-gray-900 md:mb-2.5 mb-1.5">
                    Still have questions?
                  </h2>
                  <p className="md:text-base text-sm mt-md-[5px] text-gray-900 font-normal">
                    Please contact us at{" "}
                    <a href="" className="text-primary-color">
                      customerservice@abc.com
                    </a>{" "}
                    and we’ll help you get set up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FullContainer>
    </HomeLayout>
  );
};

export default FAQ;
