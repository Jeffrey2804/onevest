/* eslint-disable react/prop-types */
import { VStack } from "@chakra-ui/react";
import Header, { AuthHeader } from "../../Components/Header";
import Footer from "../../Components/Footer";

const HomeLayout = (props) => {
  const token = localStorage.getItem("cflToken");
  return (
    <VStack width={"full"} spacing={0}>
      {
        token ? <AuthHeader /> : <Header />
      }
      <VStack width={"full"} gap={props.gap ? props.gap : "60px"} bg={props.bg}>
        {props.children}
      </VStack>
      <Footer />
    </VStack>
  );
};

export default HomeLayout;
