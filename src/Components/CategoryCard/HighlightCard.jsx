import { Text, VStack } from "@chakra-ui/react";

export const HighlightCard = (props) => {
  return (
    <VStack
      cursor={"pointer"}
      border={props.border || "1px solid #dcdada"}
      color={props.color ? props.color : "#0086ff"}
      padding={props.padding ? props.padding : "30px 14px"}
      gap={"10px"}
      borderRadius={"16px"}
      alignItems={"center"}
      justifyContent={"center"}
      maxW={"400px"}
      onClick={props.action}
      backgroundColor={props.backgroundColor || 'transparent'}
    >
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

      <Text
        fontSize={"xl"}
        fontWeight={"400"}
        maxW={["300px"]}
        mb={props.mbText || "20px"}
        textAlign={"center"}
        color={props.textColor || "white.800"}
      >
        {props.title}
      </Text>
    </VStack>
  );
};
