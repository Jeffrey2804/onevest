import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";

import "./index.css";
export default function CalendarPicker(props) {
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
        props.selectedDate(date);
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

    const formatLongDate = (date) => {
        
        return format(date, "d MMMM',' yyyy");
    };

    return (
        <>
            <Calendar
                onChange={handleStartDateChange}
                value={selectedStartDate}
                className={`react-calendar border-0 bg-transparent w-full  ${showPicker === 1 ? "block" : "hidden"
                    }`}
            >
            </Calendar >
        </>
    )
}

