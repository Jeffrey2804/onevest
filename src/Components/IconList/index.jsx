/* eslint-disable react/prop-types */
import { HStack, Image, Text } from "@chakra-ui/react";

const IconList = (props) => {
  return (
    <HStack
      alignItems={"center"}
      gap={"12px"}
      width={"full"}
      justifyContent={props.justifyContent}
    >
      {props.icon ? props.icon : <Image src={"/assets/images/add_task.png"} />}

      <Text fontSize={"20px"} fontWeight={"medium"} color={"white.800"} textAlign={"right"}>
        {props.text}
      </Text>
    </HStack>
  );
};

export default IconList;
