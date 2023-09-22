import FullContainer from "../../Components/FullContainer";
import userProfilePic from "../../assets/images/user.png";
import { useEffect, useState } from "react";
import DashboardLayout from "../../Layouts/DashboardLayout";
import { authAxiosHelper } from "../../Helpers/axiosHelper";
import HomeLayout from "../../Layouts/HomeLayout";
import { Button, Text } from "@chakra-ui/react";
import NotificationCard from "./NotificationCard";

const requestsData = [
  {
    userProfile: userProfilePic,
    user: "Roger Smith",
    message: "Sent you a session request",
    time: "30 min. ago",
  },
  {
    userProfile: userProfilePic,
    user: "Roger Smith",
    message: "Sent you a session request",
    time: "30 min. ago",
  },
  {
    userProfile: userProfilePic,
    user: "Roger Smith",
    message: "Sent you a session request",
    time: "30 min. ago",
  },
  {
    userProfile: userProfilePic,
    user: "Roger Smith",
    message: "Sent you a session request",
    time: "30 min. ago",
  },
  {
    userProfile: userProfilePic,
    user: "Roger Smith",
    message: "Sent you a session request",
    time: "30 min. ago",
  },
  {
    userProfile: userProfilePic,
    user: "Roger Smith",
    message: "Sent you a session request",
    time: "30 min. ago",
  },
];

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [toggleStates, setToggleStates] = useState(
    Array(requestsData.length).fill(false)
  );

  console.log(notifications);

  const fetchNotifications = async () => {
    authAxiosHelper
      .get("notification/list")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchNotifications()
  }, [])

  const toggleAcc = (index) => {
    setToggleStates((prevState) => {
      const newToggleStates = [...prevState];
      newToggleStates[index] = !newToggleStates[index];
      return newToggleStates;
    });
  };

  return (
    <>
      <DashboardLayout bg="#F5F9FF" gap="30px">
        <FullContainer>
          <div className="notifications-wrapper pt-10 w-[100%]">
            <div className="flex justify-between w-[100%]">
              <Text className="text-3xl text-black text-center font-semibold">
                Notifications
              </Text>
              <Button backgroundColor={"white"} border={"1px solid #CEE0FF"} borderRadius={"30px"} padding={"0 23px"} fontSize={"14px"}>
                Mark all as Read
              </Button>
            </div>
            <div className="lg:mt-7 sm:mt-6 mt-4">
              <div className="tabs w-full sm:pb-0 pb-1 sm:overflow-visible touch-pan-x overflow-x-auto snap-x">
                <div className="flex gap-1">
                  <Text color={"#0080FF"} fontWeight={"500"} marginLeft={"0.8rem"} marginRight={"0.8rem"} style={{ borderBottom: "2px solid #0080FF" }} padding={"6px"}>
                    Session requests
                  </Text>
                  <Text color={"black"} fontWeight={"500"} marginLeft={"0.8rem"} marginRight={"0.8rem"} padding={"6px"}>
                    General
                  </Text>
                </div>
              </div>
              <div className="w-full bg-[white] px-5 rounded-lg pb-5">
                {requestsData.map((requests, index) => {
                  return (
                    <NotificationCard />
                  );
                })}
              </div>
            </div>
          </div>
        </FullContainer>
        <br />
      </DashboardLayout >
    </>
  );
};

export default Notification;
