import HomeLayout from "../../Layouts/HomeLayout";
import { VStack, HStack, Text, Image, Container, Box } from "@chakra-ui/react";
import FullContainer from "../../Components/FullContainer";
import CTAButton from "../../Components/CTAButton";
import IconList from "../../Components/IconList";
import TestimonialCard from "../../Components/TestimonialCard";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { BiLineChart } from "react-icons/bi";
import {
  BsPeople,
  BsClipboardCheck,
  BsPersonCircle,
  BsShieldCheck,
  BsPhone,
  BsAlarm,
  BsBookmarkPlus,
} from "react-icons/bs";
import { FaPeopleArrows } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";
import IconBox from "../../Components/IconBox";
import BenefitCard from "../../Components/BenefitCard";
import PatnersRow from "../../Components/PartnersRow";
import ReviewSlider from "../../Components/AdvisorProfile/ReviewSlider";
const ForCompanies = () => {
  return (
    <HomeLayout>
      <FullContainer>
        <VStack width={"full"} mt={"50px"} gap={"80px"}>
          <HStack
            width={"full"}
            flexDir={["column", "column", "row"]}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <VStack
              alignItems={["center", "center", "flex-start"]}
              gap={"7"}
              width={"full"}
              position={"relative"}
            >
              <Text
                fontSize={["40px", "40px", "60px", "60px", "70px"]}
                lineHeight={"120%"}
                color={"white.900"}
                textAlign={["center", "center", "left"]}
                fontWeight={"600"}
              >
                Join an advisory <br />
                board today
              </Text>
              <Text
                color={"white.800"}
                fontSize={"18px"}
                textAlign={["center", "center", "left"]}
                maxW={["full", "full", "468px"]}
              >
                We've revolutionized the traditional boardroom, giving all
                professionals the chance to join an advisory board remotely
                through our innovative digital platform
              </Text>
              <HStack
                flexDir={["column", "column", "row", "row", "row"]}
                alignItems={"center"}
                gap={"20px"}
              >
                <CTAButton text={"Explore Advisory boards"} />
              </HStack>
            </VStack>
            <Box width={"full"}>
              <Image src="/assets/images/advisorHero1.png" />
            </Box>
          </HStack>
          <PatnersRow />
        </VStack>
      </FullContainer>

      <FullContainer>
        <VStack width={"full"} gap={20}>
          <Container>
            <Text
              fontSize={["32px", "32px", "40px"]}
              color={"white.800"}
              fontWeight={"800"}
              textAlign={"center"}
              lineHeight={"120%"}
            >
              The all-in-one platform for building an advisory board
            </Text>
            <Text
              fontSize={"lg"}
              fontWeight={"400"}
              color={"white.800"}
              textAlign={"center"}
              mt={"5"}
            >
              Build, collaborate, and meet with your advisory board all on
              AdvisoryCloud
            </Text>
          </Container>

          <VStack width={"full"} gap={"20"}>
            <HStack
              flexDir={["column", "column", "column", "row"]}
              width={"full"}
            >
              <HStack width={"full"} justifyContent={"flex-end"}>
                <Image src="/assets/images/homehero2.png" />
              </HStack>

              <VStack width={"full"} alignItems={"center"} gap={"3"}>
                <Text
                  fontSize={["24px", "24px", "30px"]}
                  color={"brand.400"}
                  fontWeight={"600"}
                  width={["full", "full", "510px"]}
                  textAlign={["center", "center", "left"]}
                >
                  Build your company profile
                </Text>
                <Text
                  fontSize={"large"}
                  color={"white.800"}
                  width={["full", "full", "510px"]}
                  textAlign={["center", "center", "left"]}
                >
                  Work with our team to build and publish your company profile
                  on AdvisoryCloud. List your mission, values, and core goals
                  for your advisory board. When
                </Text>
                <VStack
                  mt={"5"}
                  gap={"5"}
                  width={["full", "full", "510px"]}
                  alignItems={["center", "center", "center"]}
                >
                  <IconList
                    justifyContent={["center", "center", "flex-start"]}
                    text={"Dedicated Account Manager"}
                  />
                  <IconList
                    text={"Featured Company Profile"}
                    justifyContent={["center", "center", "flex-start"]}
                  />
                  <IconList
                    text={"Search and Invite Advisors"}
                    justifyContent={["center", "center", "flex-start"]}
                  />
                </VStack>
              </VStack>
            </HStack>
            <HStack
              width={"full"}
              gap={["20px", "20px", "0"]}
              justifyContent={"space-between"}
              flexDir={["column", "column", "column", "row-reverse"]}
            >
              <HStack width={"full"} justifyContent={"center"}>
                <Image src="/assets/images/homehero3.png" />
              </HStack>

              <VStack width={"full"} gap={"5"} alignItems={"flex-end"}>
                <Text
                  fontSize={["24px", "24px", "30px"]}
                  color={"brand.400"}
                  fontWeight={"600"}
                  width={["full", "full", "510px"]}
                  textAlign={["center", "center", "right"]}
                >
                  Connect with advisors in your secure digital boardroom
                </Text>
                <Text
                  fontSize={"large"}
                  color={"white.800"}
                  width={["full", "full", "510px"]}
                  textAlign={["center", "center", "right"]}
                >
                  Work with our team to build and publish your company profile
                  on AdvisoryCloud. List your mission, values, and core goals
                  for your advisory board. When
                </Text>
                <VStack width={"full"} gap={"5"}>
                  <IconList
                    text={"Digital Boardroom & Forum"}
                    width={[null, null, "510px"]}
                    justifyContent={["center", "center", "flex-end"]}
                  />
                  <IconList
                    text={"Post Questions and Updates"}
                    width={[null, null, "510px"]}
                    justifyContent={["center", "center", "flex-end"]}
                  />
                  <IconList
                    text={"Post Questions and Updates"}
                    width={[null, null, "510px"]}
                    justifyContent={["center", "center", "flex-end"]}
                  />
                </VStack>
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      </FullContainer>
      <FullContainer>
        <div
          style={{ background: "#E7F1FF" }}
          className="flex flex-col lg:flex-row p-4  justify-between  w-full rounded-md"
        >
          <div className="flex p-4 flex-col justify-center gap-6">
            <p className="text-4xl font-semibold  text-[#575859]">
              The all-in-one platform for <br /> building an advisory board
            </p>
            <p className="text-md  text-[#575859]">
              Build, collaborate, and meet with your advisory board all on
              AdvisoryCloud{" "}
            </p>
            <div className="w-sm">
              <CTAButton text={"Try it Out"} />
            </div>
          </div>
          <div
            className="w-[300px] lg:w-[500px]"
            style={{
              backgroundImage: `url(/assets/images/advisorHero2.png)`,
              height: "400px",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </FullContainer>

      <FullContainer>
        <VStack width={"full"} gap={20}>
          <Container>
            <Text
              fontSize={["32px", "32px", "35px"]}
              color={"white.800"}
              fontWeight={"900"}
              textAlign={"center"}
              lineHeight={"120%"}
            >
              Why build an‍ Advisory Board?
            </Text>
            <Text
              fontSize={"lg"}
              mt={"20px"}
              fontWeight={"400"}
              color={"white.800"}
              textAlign={"center"}
            >
              Build a powerful group of advocates and experts for your business.
            </Text>
          </Container>
          <HStack
            width={"full"}
            flexDir={["column", "column", "column", "row"]}
            gap={["20px", "20px", "100px"]}
            justifyContent={"space-between"}
          >
            <HStack width={"full"} justifyContent={"flex-end"}>
              <Image src="/assets/images/homehero5.png" />
            </HStack>

            <VStack width={"full"} gap={"5"}>
              <Text
                color={"brand.400"}
                fontWeight={"600"}
                width={["full", "full", "510px"]}
                textAlign={["center", "center", "left"]}
                fontSize={["24px", "24px", "30px"]}
              >
                Build your company profile
              </Text>

              <VStack
                width={"full"}
                gap={"5"}
                alignItems={["flex-start", "flex-start", "center"]}
              >
                <IconList
                  text={"Highly qualified network of advisors"}
                  width={[null, null, "510px"]}
                  icon={<BsPeople fontSize={"20px"} color="#B4D2FF" />}
                />
                <IconList
                  text={"Build a group of advocates instantly"}
                  width={[null, null, "510px"]}
                  icon={<BsPeople fontSize={"20px"} color="#B4D2FF" />}
                />
                <IconList
                  text={"Collaborate seamlessly online"}
                  width={[null, null, "510px"]}
                  icon={<BsPeople fontSize={"20px"} color="#B4D2FF" />}
                />
                <IconList
                  text={"Quarterly moderated board meetings"}
                  width={[null, null, "510px"]}
                  icon={<BsPeople fontSize={"20px"} color="#B4D2FF" />}
                />
              </VStack>
            </VStack>
          </HStack>
          <HStack
            width={"full"}
            flexDir={["column", "column", "row", "row"]}
            alignItems={"center"}
            justifyContent={"space-between"}
            mt={"20px"}
          >
            <IconBox
              title={"Build your advisory board"}
              description={
                "Tap into over 10,000 senior executives and SMEs on AdvisoryCloud"
              }
              icon={<FaPeopleArrows fontSize={"24px"} color={"#fff"} />}
            />
            <IconBox
              title={"Setup your digital boardroom"}
              description={
                "Get valuable outside perspective from professionals across multiple disciplines"
              }
              icon={<RiUserSettingsFill fontSize={"24px"} color={"#fff"} />}
            />
            <IconBox
              title={"Get value from your advisors"}
              description={
                "Interactive Boardrooms Engage in your own private digital boardroom and forum"
              }
              icon={<BsClipboardCheck fontSize={"24px"} color={"#fff"} />}
            />
          </HStack>
        </VStack>
      </FullContainer>
      <FullContainer>
        <VStack width={"full"} gap={"80px"} alignItems={"center"}>
          <Text
            fontSize={["32px", "32px", "40px"]}
            color={"white.900"}
            fontWeight={"800"}
            textAlign={"center"}
            lineHeight={"120%"}
          >
            Features & Benefits
          </Text>
          <VStack width={"full"} gap={5} alignItems={"center"}>
            <HStack
              width={"full"}
              justifyContent={"center"}
              gap={"20px"}
              flexDir={["column", "column", "row", "row"]}
            >
              <BenefitCard
                title={"Access 10,000+ Advisors"}
                description={
                  "Tap into over 10,000 senior executives and SMEs on AdvisoryCloud"
                }
                icon={<BsPersonCircle fontSize={"50px"} />}
              />
              <BenefitCard
                title={"Access 10,000+ Advisors"}
                description={
                  "Tap into over 10,000 senior executives and SMEs on AdvisoryCloud"
                }
                icon={<BsShieldCheck fontSize={"50px"} />}
              />
              <BenefitCard
                title={"Access 10,000+ Advisors"}
                description={
                  "Tap into over 10,000 senior executives and SMEs on AdvisoryCloud"
                }
                icon={<BsPhone fontSize={"50px"} />}
              />
            </HStack>
            <HStack
              width={"full"}
              gap={"22px"}
              flexDir={["column", "column", "row", "row"]}
              justifyContent={"center"}
            ></HStack>
          </VStack>
        </VStack>
      </FullContainer>
    </HomeLayout>
  );
};

export default ForCompanies;
