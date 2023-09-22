import { useEffect, useState } from "react";
import FullContainer from "../../Components/FullContainer";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";

import "./index.css";
import DashboardLayout from "../../Layouts/DashboardLayout";
import HomeLayout from "../../Layouts/HomeLayout";

const NewGoal = () => {
  // States for input date pickers
  const [selectedStartDate, setSelectedStartDate] = useState(
    new Date(2023, 0, 21)
  );
  const [selectedCompDate, setSelectedCompDate] = useState(
    new Date(2023, 0, 21)
  );
  // state for datepicker visibility
  const [showPicker, setShowPicker] = useState(1);
  //Functions for selected value
  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };
  const handleCompDateChange = (date) => {
    setSelectedCompDate(date);
  };

  useEffect(() => {
    // Function to remove unnecessary content from calender
    const navigationLabels = document.querySelectorAll(
      ".react-calendar__navigation__label__labelText--from"
    );
    navigationLabels.forEach((navigationLabel) => {
      if (navigationLabel) {
        navigationLabel.textContent = navigationLabel.textContent.replace(
          /\d+/g,
          ""
        );
      }
    });

    // Loop to add only first letter from weekdays' names
    const weekdays = document.querySelectorAll(
      ".react-calendar__month-view__weekdays__weekday"
    );

    for (const weekday of weekdays) {
      const firstLetter = weekday.textContent.slice(0, 1);
      weekday.textContent = firstLetter;
    }
  }, []);

  // Function to properly format date fetched from calender
  const formatLongDate = (date) => {
    return format(date, "d MMMM',' yyyy");
  };

  const eventInhibit = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <HomeLayout>
      <br />
      <FullContainer>
        <div className="goals-wrapper py-20">
          <p className="pc:text-5xl lg:text-[40px] md:text-3xl sm:text-3xl text-[26px] leading-tight text-start text-gray-600 font-semibold">
            New Goal
          </p>
          <div className="flex justify-center flex-wrap lg:mt-7 sm:mt-6 mt-4 lg:gap-0 md:gap-6 gap-1">
            {/* className="lg:order-0 lg:w-auto order-1 flex-initial lg:pr-6
            xl:w-7/12 md:w-4/5 w-full pc:space-y-4 md:space-y-3 space-y-10" */}
            <form action="#" className=" w-[50%]" method="POST">
              <div className="flex flex-col gap-2">
                {" "}
                <div className="flex flex-col gap-2 my-2">
                  <label
                    htmlFor="startDate"
                    className="block pc:text-xl md:text-base sm:text-sm text-xs font-normal md:leading-8 leading-5"
                  >
                    Start date
                  </label>
                  <input
                    type="text"
                    id="startDate"
                    onClick={() => setShowPicker(1)}
                    value={formatLongDate(selectedStartDate)}
                    className="lg:max-w-[80%] max-w-full w-full pc:py-4 py-2.5 md:px-3.5 p-3 text-blue-950 border-2 border-primary-100 md:rounded-input rounded-lg pc:text-xl md:text-base sm:text-sm text-xs font-medium sm:leading-8 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2 my-2">
                  <label
                    htmlFor="startDate"
                    className="block pc:text-xl md:text-base sm:text-sm text-xs font-normal md:leading-8 leading-5 "
                  >
                    Completion date
                  </label>
                  <input
                    type="text"
                    id="startDate"
                    onClick={() => setShowPicker(2)}
                    value={formatLongDate(selectedCompDate)}
                    className="lg:max-w-[80%] max-w-full w-full pc:py-4 py-2.5 md:px-3.5 p-3 text-blue-950 border-2 border-primary-100 md:rounded-input rounded-lg pc:text-xl md:text-base sm:text-sm text-xs font-medium sm:leading-8 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2 my-2">
                  <label
                    htmlFor="startDate"
                    className="block pc:text-xl md:text-base sm:text-sm text-xs font-normal md:leading-8 leading-5"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    rows="5"
                    className="lg:max-w-[80%] w-full pc:py-4 py-2.5 md:px-3.5 p-3 resize-none text-blue-900 border-2 border-blue-300 md:rounded-input rounded-lg pc:text-xl md:text-base sm:text-sm text-xs font-medium sm:leading-8 focus:outline-none placeholder:text-blue-900"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  ></textarea>
                </div>
              </div>

              <div className=" h-1"></div>
              <button className="lg:max-w-[70%] max-w-[96%] w-full md:py-2.5 py-2 lg:text-lg  md:text-base text-sm lg:mt-5 md:mx-0 mx-auto block bg-primary-color hover:bg-[#468fff] text-white rounded-pill font-semibold">
                Save
              </button>
            </form>
            {/* className="lg:order-1 order-0 flex-initial xl:w-5/12 lg:w-[auto] md:w-4/5 w-full calender-wrapper md:p-7 sm:p-5 p-4 rounded-xl shadow-[7px_7px_52px_0px_rgba(0,0,0,0.07)] h-fit" */}
            <div className="lg:order-1 order-0 flex-initial xl:w-5/12 lg:w-[40%] md:w-4/5 w-full calender-wrapper md:p-7 sm:p-5 p-4 rounded-xl shadow-[7px_7px_52px_0px_rgba(0,0,0,0.07)] h-fit">
              <Calendar
                onChange={handleStartDateChange}
                value={selectedStartDate}
                className={`react-calendar border-0 bg-transparent w-full  ${
                  showPicker === 1 ? "block" : "hidden"
                }`}
              />
              <Calendar
                onChange={handleCompDateChange}
                value={selectedCompDate}
                className={`react-calendar border-0 bg-transparent w-full  ${
                  showPicker === 2 ? "block" : "hidden"
                }`}
              />
            </div>
          </div>
        </div>
      </FullContainer>
      <br />
    </HomeLayout>
  );
};

export default NewGoal;
