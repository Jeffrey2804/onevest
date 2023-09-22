import { Button, Image, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import FullContainer from "../FullContainer";
const Footer = () => {
  return (
    <>
      <div class="py-[40px] w-full" style={{ background: "linear-gradient(180deg, #0E6EFF1A 10%, #0E6EFF00 100%)" }}>
        <FullContainer>
          <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col w-full justify-between">
            <div className="flex flex-col items-center md:items-start lg:items-start gap-3">
              <p className="text-xl font-semibold">Resources</p>
              <div className="flex flex-col gap-2 items-center md:items-start lg:items-start">
                <p className="text-xl text-[#1E1E1F]">Blog</p>
                <p className="text-xl text-[#1E1E1F]">About</p>
                <p className="text-xl text-[#1E1E1F]">FAQ</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start lg:items-start gap-3">
              <p className="text-xl font-semibold">Social Links</p>
              <div className="flex flex-col gap-2 items-center md:items-start lg:items-start">
                <a href="https://instagram.com/cofounderslab" target="_blank">
                  <VStack display={"flex"} flexDirection={"row"} justifyContent={"center"}>
                    <Button backgroundColor={"#0080FF"} color={"white"} padding={"2px"} borderRadius={"50%"} fontSize={"lg"}>
                      <FaInstagram />
                    </Button>
                    <p className="mb-0 text-lg ml-3">Instagram</p>
                  </VStack>
                </a>

                <a href="https://www.facebook.com/CoFoundersLab/" target="_blank">
                  <VStack display={"flex"} flexDirection={"row"} justifyContent={"center"}>
                    <Button backgroundColor={"#0080FF"} color={"white"} padding={"2px 2px"} borderRadius={"50%"} fontSize={"lg"}>
                      <FaFacebook />
                    </Button>
                    <p className="mb-0 text-lg ml-3">Facebook</p>
                  </VStack>
                </a>
              </div>
            </div>
          </div>
        </FullContainer>
        <FullContainer>
          <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center", paddingTop: "50px", paddingBottom: "30px", flexWrap: "wrap" }}>
            <Image
              src="/assets/images/newLogo.png"
              width={["200px", "200px", "200px", "200px"]}
              height={"30px"}
              onClick={() => {
                navigate("/dashboard");
              }}
            />
            <VStack display={"flex"} flexDirection={"row"}>
              <Text marginLeft={"1rem"}>
                Privacy Policy
              </Text>
              <Text marginLeft={"1rem"}>
                Terms of Service
              </Text>
              <Text marginLeft={"1rem"}>
                Advisor Network © 2023. All Rights Reserved
              </Text>
            </VStack>
          </div>
        </FullContainer>
      </div>
    </>
  );
};

export default Footer;
