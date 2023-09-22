import { Box } from "@chakra-ui/react";
import { createContext, useState } from "react";
import UserInfo from "./UserInfo";
import Onboarding from "./Onboarding";

export const OnboardingContext = createContext();
const UserOnboarding = () => {
  const [screen, setScreen] = useState("userinfo");
  const [userInfo, setUserInfo] = useState({
    name: localStorage.getItem("onboardName"),
    user_id: localStorage.getItem("cfl_id"),
  });
  return (
    <OnboardingContext.Provider
      value={{ screen, setScreen, userInfo, setUserInfo }}
    >
      <Box width={"full"}>
        {screen === "userinfo" && <UserInfo />}
        {screen === "onboarding" && <Onboarding />}
      </Box>
      ;
    </OnboardingContext.Provider>
  );
};

export default UserOnboarding;
