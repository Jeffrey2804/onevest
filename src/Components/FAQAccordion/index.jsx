import React from "react";
import { Accordion } from "flowbite-react";

const FAQAccordionItem = () => {
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

export default FAQAccordionItem;
