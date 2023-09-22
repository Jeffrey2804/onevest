import { useEffect, useState } from "react";

import { authAxiosHelper } from "../../Helpers/axiosHelper";
import { color } from "framer-motion";

import Multiselect from 'multiselect-react-dropdown';
export default function TimePicker(props) {

    const [availableTime, setAvailableTime] = useState({});
    const [selectedTime, setSelectedTime] = useState();
    const timeSlots = [
        '01:00',
        '02:00',
        '03:00',
        '04:00',
        '05:00',
        '06:00',
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00',
        '24:00'

    ]

    const fetchTimeAvailable = async () => {
        const auth = localStorage.getItem("cflToken");
        try {
            const response = await authAxiosHelper.get("/session?advisor_id=6f87c5eae9444b4985f0dd151ed7ce11", {
                headers: { token: auth },
            });
            const timeSlots = response.data.body || [];
            setAvailableTime(timeSlots[0].session_slots[0].time_slots);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTimeAvailable();
    }, []);



    const displayTimeSlots = () => {

        return (
            Object.keys(availableTime).map((e, i) => {
                console.log(e);
                console.log(availableTime[e]);

                <div

                    onClick={event => handleSelectedTime(availableTime[e])}
                    className="p-2 border-2 border-primary-100 text-center rounded-3xl text-xl cursor-pointer">

                    {availableTime[e]}
                </div>


            })
        )
    }
    const handleSelectedTime = (selectedTime) => {
        props.selectedTime(selectedTime);

    }


    const onSelect = (selectedList, selectedItem) => {
       setSelectedTime(selectedList);
    }
    return (
        <div className="">
            <div className="text-center text-lg font-bold p-2 border mb-3">Select your availability</div>


            <Multiselect
                isObject={false}
                onKeyPressFn={function noRefCheck() { }}
                onRemove={function noRefCheck() { }}
                onSearch={function noRefCheck() { }}
                onSelect={onSelect}
                options={timeSlots}
                placeholder="Select Time Slots"
                selectionLimit={8}
                showCheckbox={true}
                
                style={{
                   
                    multiselectContainer: {
                        color: 'black'
                    },
                    searchBox: {
                        'width' : '100%',
                        border: 'solid',
                        'border-color' : 'gray',
                        'border-width' : '1px',
                        // 'border-bottom': '1px solid blue',
                        'border-radius': '20px'
                    }
                }}
            />



        </div>
    )
}