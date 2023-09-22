import React from "react";
import FullContainer from "../FullContainer";
import Form from "./Form";
import ImageProfile from "./ImageProfile";
import DashboardLayout from "../../Layouts/DashboardLayout";
import { Box, Button, Text } from "@chakra-ui/react";
import CTAButton from "../CTAButton";
import { BsTrash3 } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { FiCalendar } from 'react-icons/fi'
import Modal from 'react-modal';
import CalendarPicker from "./CalendarPicker";
import TimePicker from "./TimePicker";
import "./index.css";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '40%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    'border-radius': '30px',
    'padding': '30px',
    'border-color': 'rgb(180 210 255)'
  },
};
const EditAdvisorProfile = () => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    console.log("Modal Opened");
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <DashboardLayout>
      <Box bg={"#F5F9FF;"} width={"full"} py={"40px"}>
        <FullContainer>
          <div className="flex items-center justify-between w-[100%]">
            <Text className="text-3xl text-black text-center font-semibold mb-0">
              My Profile
            </Text>
            <Button backgroundColor={"white"} border={"1px solid #CEE0FF"} borderRadius={"30px"} padding={"0 23px"} fontSize={"14px"} onClick={() => navigate("/edit-profile")}>
              Edit Profile
            </Button>
          </div>
          <div className="lg:mt-7 sm:mt-6">
            <div style={{ border: "1px solid #CEE0FF" }} className="w-full bg-[white] p-4 rounded-lg flex lg:flex-row  flex-col items-start justify-normal">
              <div className="flex flex-col lg:w-5/6 w-full">
                <Form />
              </div>
              <div className="flex flex-col  lg:justify-center items-center justify-center w-full lg:w-full">

                <img
                  className="profilePicture"

                  src={"/assets/images/user-item-image.png"} />



                <div className="flex flex-row  lg:justify-end items-center justify-center  gap-2 pt-4">
                  <CTAButton
                    text={<BsTrash3 />}
                    bg={"white"}
                    border={"1px solid #E2E8f0"}
                    fontSize={"1rem"}
                    padding={".5px"}
                    color={"black"}
                    borderRadius={"10px"}
                    fontWeight={"100"}
                    hoverbg={"#E2E8f0"}
                  />
                  <CTAButton
                    text={<FiEdit2 />}
                    bg={"white"}
                    border={"1px solid #E2E8f0"}
                    fontSize={"1rem"}
                    padding={".5px"}
                    color={"black"}
                    borderRadius={"10px"}
                    fontWeight={"100"}
                    hoverbg={"#E2E8f0"}
                  />
                </div>
                <div className="col-span-1 ">
                  <button
                    onClick={event => openModal()}
                    type="submit"
                    className="bg-blue-600 duration-500 focus:outline-none w-[30%] py-[10px] px-[10px] 
                    rounded-[50px] text-white text-[20px] font-semibold border-[1px] 
                    border-solid border-blue-600 mt-4 flex flex-row items-center justify-center"
                  >
                    Calendar Settings {" "}
                    {/* <FiCalendar className="text-lg text-white mx-1" /> */}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </FullContainer>
      </Box>


      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      // contentLabel=""
      >
        {/* <div className="font-semibold pb-4 w-full text-3xl">
          Get a Schedule</div> */}
        <div className="flex flex-row gap-3">

          <div className="w-[50%]">
            <CalendarPicker />
          </div>
          <div className="w-[50%]">
            <TimePicker />
          </div>
        </div>

        <div
          className="cursor-pointer border border-blue-700 text-lg w-[100%] text-center p-3 my-2 rounded-md font-semibold"
        // onClick={event => bookAdvisor()}

        >Save Schedule</div>
      </Modal>
    </DashboardLayout>
  );
};

export default EditAdvisorProfile;
