import FullContainer from "../../Components/FullContainer";
import DashboardLayout from "../../Layouts/DashboardLayout";
import CurrentObjectiveCard from "../../Components/CurrentObjectiveCard";

import { HiLightBulb } from 'react-icons/hi';
import { Box, Button, Text, VStack } from "@chakra-ui/react";

const highlightCardStyles = {
  border: '1px solid #CEE0FF',
  backgroundColor: '#FFF',
  textColor: "#000",
  iconBackgrounColor: "#E7F0FF",
  mbText: "0px"
}

const Objectives = () => {
  const data = [
    {
      title: '3',
      label: 'Active Goals'
    }, {
      title: '64%',
      label: 'Progress'
    }, {
      title: '5',
      label: 'Complete'
    }, {
      title: '1',
      label: 'Abandoned Targets'
    }
  ];

  return (
    <DashboardLayout>
      <Box bg={"#F5F9FF;"} width={"full"} py={"40px"}>
      <FullContainer>
          <div className="notifications-wrapper pt-10 w-[100%]">
            <div className="flex items-center justify-between w-[100%] pb-10">
              <Text className="text-3xl text-black text-center font-semibold">
                Your Objectives
              </Text>
              <Button backgroundColor={"white"} border={"1px solid #CEE0FF"} borderRadius={"30px"} padding={"0 23px"} fontSize={"14px"}>
                New Goal
              </Button>
            </div>
            <VStack
              style={{
                background: "#E7F0FF",
                padding: "50px 40px",
                borderRadius: "20px",
                alignItems: "flex-start",
                gap: "40px",
                width: "100%",
                border: "1px solid #0080FF"
              }}
            >
              <div className="flex flex-row items-center justify-between w-full">
                {data.map((d, index) => <ProgressCaard {...d}/>)}
              </div>
            </VStack>
          </div>
        </FullContainer>
        <FullContainer>
          <div className="notifications-wrapper pt-10 w-[100%]">
            <div className="flex justify-between w-[100%]">
              <Text className="text-3xl text-black text-center font-semibold">
                Current Objectives
              </Text>
            </div>
            <div className="lg:mt-7 sm:mt-6 mt-4">
              <div className="w-full bg-[white] px-4 rounded-lg pb-5">
                {[1,2,3,4].map((_, index) => 
                  <CurrentObjectiveCard key={index} {...highlightCardStyles} icon={<HiLightBulb />}  isLast={index === 3}/>
                )}
              </div>
            </div>
          </div>
        </FullContainer>
      </Box>
    </DashboardLayout>
  );
};

const ProgressCaard = (props) => {
  return (
    <div
      style={{boxShadow: '0px 0px 20px 0px #0E6EFF1C'}}
      className="flex flex-col rounded-2xl bg-white p-4 lg:w-1/5 w-full my-2"
    >
      <p className="text-gray-800 text-4xl font-semibold pt-1 mb-1">
        {props.title}
      </p>
      <p className="text-gray-800 text-md mb-0">{props.label}</p>
    </div>
  );
};

export default Objectives;
