/* eslint-disable react/prop-types */
import { Text, VStack } from "@chakra-ui/react";

const IconBox = (props) => {
  return (
    <VStack gap={"10px"} width={"full"} >
      <VStack
        background={"brand.400"}
        borderRadius={"full"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={"20px"}
        mb={"10px"}
      >
        {props.icon}
      </VStack>
      <Text fontSize={"24px"} color={"brand.400"}>
        {props.title}
      </Text>
      <Text
        fontSize={"lg"}
        fontWeight={"400"}
        color={"white.800"}
        textAlign={"center"}
        height={"100px"}
      >
        {props.description}
      </Text>
    </VStack>
  );
};

export default IconBox;
