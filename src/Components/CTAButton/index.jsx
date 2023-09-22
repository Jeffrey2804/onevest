import { Button } from "@chakra-ui/react";

const CTAButton = (props) => {
  return (
    <Button
      size={props.size ? props.size : "lg"}
      background={props.bg ? props.bg : "brand.300"}
      fontSize={props.fontSize}
      color={props.color ? props.color : "white.50"}
      padding={props.padding ? props.padding : "25px"}
      borderRadius={props.borderRadius ? props.borderRadius : "full"}
      border={props.border ? props.border : "none"}
      _hover={{
        background: props.hoverbg ? props.hoverbg : "brand.400",
        border: "none",
      }}
      onClick={props.action}
      disabled={props.disabled}
      {...props}
    >
      {props.text ? props.text : "Get Started"}
    </Button>
  );
};

export default CTAButton;
