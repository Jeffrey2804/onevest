/* eslint-disable react/prop-types */
import { Text, VStack } from "@chakra-ui/react";

const BenefitCard = (props) => {
  return (
    <VStack
      border={"1px solid #dcdada"}
      padding={props.padding ? props.padding : "18px 14px"}
      gap={"8px"}
      borderRadius={"16px"}
      alignItems={"center"}
      justifyContent={"center"}
      maxW={"400px"}
    >
      <VStack
        alignItems={"center"}
        color={"brand.400"}
        justifyContent={"center"}
        padding={"20px"}
      >
        {props.icon}
      </VStack>
      <Text
        fontSize={"24px"}
        color={"white.900"}
        textAlign={"center"}
        fontWeight={"600"}
      >
        {props.title}
      </Text>
      <Text
        fontSize={"md"}
        fontWeight={"400"}
        maxW={["300px"]}
        mb={"20px"}
        color={"white.800"}
        textAlign={"center"}
      >
        {props.description}
      </Text>
    </VStack>
  );
};

export default BenefitCard;
