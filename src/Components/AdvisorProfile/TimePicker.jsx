import { useEffect, useState } from "react";
import { authAxiosHelper } from "../../Helpers/axiosHelper";
import { Box, Button, HStack, Spinner, Text, VStack, useToast } from "@chakra-ui/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import { fetchTimeAvailable } from "../../Helpers/apis";
import { useParams } from "react-router-dom";

const TimePicker = () => {
    const [availableTime, setAvailableTime] = useState([]); // Initialize as an empty array
    const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize with today's date
    const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const auth = localStorage.getItem("cflToken");
    const toast = useToast();
    const navigate = useNavigate();
    const { id } = useParams();

    console.log(id);
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        advisor_id: ""
    })

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        const selectedData = availableTime.find((item) => {
            const sessionSlots = item.session_slots;
            if (sessionSlots && sessionSlots.length > 0) {
                const sessionDate = new Date(sessionSlots[0].date);
                const sessionDateISOString = sessionDate.toISOString().split("T")[0];
                return sessionDateISOString === date.toISOString().split("T")[0];
            }
            return false;
        });

        if (selectedData) {
            setFormData((prevData) => ({
                ...prevData,
                date: date.toISOString(),
                advisor_id: selectedData.advisor_id
            }));
            setSelectedTimeSlots(selectedData.session_slots[0].time_slots);
        } else {
            setFormData((prevData) => ({
                ...prevData,
                date: "",
                advisor_id: ""
            }));
            setSelectedTimeSlots([]);
        }
    };

    const fetchTIme = async () => {
        const data = await fetchTimeAvailable(id);
        setAvailableTime(data)
        console.log(data);
    }

    useEffect(() => {
        fetchTIme()
    }, [])

    const handleSelectedTime = (time) => {
        setFormData((prevData) => ({
            ...prevData,
            time: time,
        }));
    };

    const handleAdvisorBooking = async () => {
        setIsLoading(true)
        try {
            const response = await authAxiosHelper.post("/book-session", formData, {
                headers: {
                    token: auth,
                    "Content-Type": "application/json", // Set the content type for JSON data
                },
            });
            toast({ title: response.data.msg, status: "success" });
            setIsLoading(false);
            navigate("/dashboard");
            console.log(response);
        } catch (error) {
            setIsLoading(false);
            toast({ title: "Failed to booked", status: "warning" });
            console.log(error);
        }
    };

    return (
        <HStack flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
            <div className="text-center text-lg font-bold p-2 mb-3">Choose Date</div>
            <VStack display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
                <Calendar className="border-0" onClickDay={handleDateSelect} value={selectedDate} />
                {selectedDate && (
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        margin="auto"
                        width="200px"
                    >
                        <div className="text-center text-lg font-bold p-2">
                            Available Time Slots
                        </div>
                        {selectedTimeSlots.length > 0 ? (
                            <ul className="flex flex-col items-center w-130 m-auto">
                                {selectedTimeSlots.map((time, index) => (
                                    <li key={index}>
                                        <Button
                                            marginY={"10px"}
                                            onClick={() => handleSelectedTime(time)}
                                            backgroundColor={formData.time === time ? "#0080FF" : ""}
                                            color={formData.time === time ? "white" : ""}
                                        >
                                            {time}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <Text width={"100%"} marginLeft={"1rem"}>No available time slots for {selectedDate.toDateString()}.</Text>
                        )}
                        {
                            selectedTimeSlots.length > 0 && <Button
                                width="130px"
                                margin="auto"
                                backgroundColor={"#0080FF"}
                                marginTop={"10px"}
                                marginLeft={"50px"}
                                color={"white"}
                                _hover={{ color: "black", backgroundColor: "white" }}
                                onClick={handleAdvisorBooking}
                            >
                                {
                                    isLoading ? <Spinner /> : " Book Advisor"
                                }
                            </Button>
                        }

                    </Box>
                )}
            </VStack>
        </HStack>
    );
};

export default TimePicker;
