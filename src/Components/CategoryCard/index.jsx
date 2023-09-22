import { Text, VStack } from "@chakra-ui/react";

const CategoryCard = (props) => {
  return (
    <VStack
      background={props.background ? props.background : "#E7F1FF"}
      cursor={"pointer"}
      color={props.color ? props.color : "white.800"}
      padding={props.padding ? props.padding : "30px 14px"}
      gap={"10px"}
      borderRadius={"16px"}
      alignItems={"center"}
      justifyContent={"center"}
      maxW={"400px"}
      _hover={props.nohover ? "" : { background: "brand.400", color: "#fff" }}
      onClick={props.action}
    >
      <VStack
        alignItems={"center"}
        justifyContent={"center"}
        padding={["5px 20px", "5px 20px", "20px"]}
        fontSize={"40px"}
      >
        {props.icon}
      </VStack>

      <Text
        fontSize={"xl"}
        fontWeight={"400"}
        maxW={["300px"]}
        mb={"20px"}
        textAlign={"center"}
      >
        {props.title}
      </Text>
    </VStack>
  );
};

export default CategoryCard;
