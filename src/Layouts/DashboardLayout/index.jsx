/* eslint-disable react/prop-types */
import { VStack } from "@chakra-ui/react";
import Header, { AuthHeader } from "../../Components/Header";
import Footer from "../../Components/Footer";
import { createContext, useEffect, useState } from "react";
import { authAxiosHelper } from "../../Helpers/axiosHelper";

export const DashboardContext = createContext();
const DashboardLayout = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const [advisorInfo, setAdvisorInfo] = useState({ hi: "hello" });
  const token = localStorage.getItem("cflToken");

  const fetchUserInfo = async () => {
    await authAxiosHelper
      .get("/users/profile", {
        headers: { token: localStorage.getItem("cflToken") },
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("username", response.data.body[0].name)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <DashboardContext.Provider value={{ userInfo, advisorInfo }}>
      <VStack width={"full"} spacing={0}>
        {
          token ? <AuthHeader /> : <Header />
        }
        <VStack width={"full"} bg={props.bg && props.bg} gap={props.gap ? props.gap : "60px"}>
          {props.children}
        </VStack>
        <Footer />
      </VStack>
    </DashboardContext.Provider>
  );
};

export default DashboardLayout;
