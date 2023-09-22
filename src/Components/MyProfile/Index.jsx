import FullContainer from "../FullContainer";
import Form from "./Form";
import DashboardLayout from "../../Layouts/DashboardLayout";
import { Box, Button, Text } from "@chakra-ui/react";
import CTAButton from "../CTAButton";
import { BsTrash3 } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";

const MyProfile = () => {
  return (
    <DashboardLayout>
      <Box bg={"#F5F9FF;"} width={"full"} py={"40px"}>
        <FullContainer>
          <div className="flex items-center justify-between w-[100%]">
            <Text className="text-3xl text-black text-center font-semibold mb-0">
              My Profile
            </Text>
          </div>
          <div className="lg:mt-7 sm:mt-6">
            <div style={{border: "1px solid #CEE0FF"}} className="w-full bg-[white] p-4 rounded-lg flex lg:flex-row  flex-col items-start justify-normal">
              <div className="flex flex-col lg:w-4/6 w-full">
                <Form />
              </div>
              <div className="flex flex-col lg:items-end lg:justify-end items-center justify-center w-full lg:w-2/6">
                <img src={"/assets/images/user-item-image.png"} />
                <div className="flex flex-row lg:items-end lg:justify-end items-center justify-center  gap-2 pt-4">
                  <CTAButton
                    text={<BsTrash3/>}
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
                    text={<FiEdit2/>}
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
              </div>
             
            </div>
          </div>
        </FullContainer>
      </Box>
    </DashboardLayout>
  );
};

export default MyProfile;
