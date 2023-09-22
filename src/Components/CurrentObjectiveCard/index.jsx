import { HStack, Button, Box, Text, VStack} from "@chakra-ui/react";
import {
  BsCalendar2Date,
  BsClock,
} from "react-icons/bs";

const CurrentObjectiveCard = (props) => {
  return (
    <HStack display={"flex"} justifyContent={"space-between"} borderBottom={props.isLast ? "none":"1px solid #CEE0FF"}>
      <VStack display={"flex"} flexDirection={"row"} gap={"30px"} padding={"2rem 0"} color={props.color ? props.color : "#0086ff"}>
        <VStack
          alignItems={"center"}
          justifyContent={"center"}
          padding={["5px 20px", "5px 20px", "20px"]}
          fontSize={"40px"}
          backgroundColor={props.iconBackgrounColor}
          minHeight={76}
          minWidth={76}
          borderRadius={"50%"}
        >
          {props.icon}
        </VStack>
        <Box>
          <Box display={"flex"} marginBottom={"0.5rem"} gap={"20px"} color={"#000"}>
            <Text margin={"0px"} fontWeight={"bold"} fontSize={'24px'}>We are building out our Pitch Deck</Text>
          </Box>
          <div className="flex gap-8 flex-row items-center justify-start">
            <div className="flex flex-row justify-center items-center">
              <VStack
                alignItems={"center"}
                justifyContent={"center"}
                fontSize={"24px"}
              >
                <BsClock color={'#444'}/>
              </VStack>
              <p className="text-lg text-gray-800 mb-0 pb-0 mx-2">64% Completed</p>
            </div>

            <div className="flex items-center flex-row justify-center">
              <VStack
                alignItems={"center"}
                justifyContent={"center"}
                fontSize={"24px"}
              >
                <BsCalendar2Date color={'#444'}/>
              </VStack>
              <p className="text-lg text-gray-800 mb-0 pb-0 mx-2">
                Finish in 17 days
              </p>
            </div>
          </div>
        </Box>
      </VStack>
      <Button backgroundColor={"white"} border={"1px solid #CEE0FF"} borderRadius={"10px"} padding={"0 13px"} fontSize={"14px"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='mr-1'>
          <g clip-path="url(#clip0_30_21939)">
            <path d="M4.6665 8.00008L7.99984 11.3334L14.6665 4.66675" stroke="#1E1E1F" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1.3335 8.00008L4.66683 11.3334M8.00016 8.00008L11.3335 4.66675" stroke="#1E1E1F" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_30_21939">
                <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg> Mark as Done
      </Button>
    </HStack>
  )
};

export default CurrentObjectiveCard;