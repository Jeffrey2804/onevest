/* eslint-disable react/prop-types */
import { Avatar, HStack, Image, Text, VStack } from "@chakra-ui/react";

const TestimonialCard = (props) => {
  const { role } = props;
  return (
    <VStack
      justifyContent={"center"}
      alignItems={"center"}
      gap={role === "main" ? "40px" : "22px"}
      minW={
        role === "main"
          ? ["300px", "300px", "600px"]
          : ["300px", "300px", "600px"]
      }
      padding={
        role === "main" ? ["24px", "24px", "64px"] : ["15px", "15px", "50px"]
      }
      bg={"#fff"}
      borderRadius={"16px"}
      boxShadow={
        role === "main"
          ? "7px 7px 52px 0px rgba(0, 0, 0, 0.07)"
          : "5px 5px 50px 0px rgba(0, 0, 0, 0.05)"
      }
    >
      <Image
        src="/assets/images/5starlarge.png"
        width={role === "main" ? "auto" : "155px"}
      />
      <Text
        fontSize={
          role === "main"
            ? ["sm", "sm", "md", "md", "lg"]
            : ["xs", "xs", "sm", "sm", "md"]
        }
        fontWeight={"400"}
        color={role === "main" ? "brand.300" : "brand.200"}
        textAlign={"center"}
        lineHeight={"161%"}
      >
        We joined AdvisoryCloud to get insight from people with different
        experiences from all different backgrounds. AdvisoryCloud was the only
        solution that gave us access to high quality, talented professionals
        from around the globe.
      </Text>
      <HStack alignItems={"center"} gap={"5"}>
        <Avatar
          src={"https://bit.ly/ryan-florence"}
          size={role === "main" ? ["lg", "lg", "xl"] : ["sm", "sm", "lg"]}
        />
        <VStack alignItems={"flex-start"}>
          <Text
            color={role === "main" ? "brand.300" : "brand.200"}
            fontSize={role === "main" ? "18px" : "13px"}
            fontWeight={"600"}
          >
            Linton Johnson
          </Text>
          <Text
            color={"brand.300"}
            fontSize={role === "main" ? "15px" : "10px"}
            fontWeight={"400"}
          >
            CEO, Ovis
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default TestimonialCard;
