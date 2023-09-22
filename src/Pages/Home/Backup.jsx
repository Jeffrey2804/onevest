import { useNavigate } from "react-router-dom";
import {
    VStack,
    HStack,
    Text,
    Button,
    Image,
    Container,
    Box,
} from "@chakra-ui/react";
import HomeLayout from "../../Layouts/HomeLayout";
import FullContainer from "../../Components/FullContainer";
import CTAButton from "../../Components/CTAButton";
import IconList from "../../Components/IconList";
import TestimonialCard from "../../Components/TestimonialCard";
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
import { Roll, Slide, Fade, Rotate } from "react-awesome-reveal";

const Home = () => {
    const navigate = useNavigate();
    return (
        <HomeLayout>
            <FullContainer>
                <VStack mt={"50px"} width={"full"} gap={"100px"} ms={"auto"} pt={"35px"}>
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
                            <Slide left>
                                <Fade left delay={500}>
                                    <Text
                                        fontSize={["40px", "40px", "60px", "60px", "70px"]}
                                        lineHeight={"120%"}
                                        color={"white.900"}
                                        textAlign={["center", "center", "left"]}
                                        fontWeight={"600"}
                                    >
                                        Build your Startup <br /> Advisory Board
                                    </Text>
                                </Fade>
                            </Slide>
                            <Slide left>
                                <Fade top left delay={500}>
                                    <Text
                                        color={"white.800"}
                                        fontSize={"xl"}
                                        textAlign={["center", "center", "left"]}
                                        maxW={["full", "full", "468px"]}
                                    >
                                        Build your company profile, get matched to advisors, and reach
                                        your goals faster with help from experienced professionals.
                                    </Text>
                                    <br />
                                    <HStack
                                        flexDir={["column", "column", "row", "row", "row"]}
                                        alignItems={"center"}
                                        gap={"20px"}
                                    >
                                        <CTAButton
                                            text={"Start your 14 days FREE Trial"}
                                            action={() => {
                                                navigate("/register");
                                            }}
                                        />
                                    </HStack>
                                </Fade>
                            </Slide>
                        </VStack>
                        <Slide right>
                            <Fade right delay={500}>
                                <Box width={"full"}>
                                    <Image src="/assets/images/homehero5.png" />
                                </Box>
                            </Fade>
                        </Slide>
                    </HStack>
                    <Fade delay={600}>
                        <PatnersRow />
                    </Fade>
                </VStack>
            </FullContainer>

            {/* Section 2 Start */}
            <FullContainer bg={"#ddecf936"} pad={"50px 0 100px 0"}>
                <VStack width={"full"} gap={20}>
                    <Container>
                        <Fade delay={600}>
                            <Text
                                fontSize={["32px", "32px", "40px"]}
                                color={"white.800"}
                                fontWeight={"800"}
                                textAlign={"center"}
                                lineHeight={"120%"}
                            >
                                The all-in-one platform for building an advisory board
                            </Text>
                        </Fade>
                        <Fade delay={500}>
                            <Text
                                fontSize={"xl"}
                                fontWeight={"400"}
                                color={"white.800"}
                                textAlign={"center"}
                                mt={"5"}
                            >
                                Build, collaborate, and meet with your advisory board all on
                                AdvisoryCloud
                            </Text>
                        </Fade>
                    </Container>

                    <VStack width={"full"} gap={"20"}>
                        <HStack
                            flexDir={["column", "column", "column", "row"]}
                            width={"full"}
                        >
                            <HStack width={"full"} justifyContent={"flex-end"}>
                                <Slide left>
                                    <Fade left duration={1000}>
                                        <Image src="/assets/images/homehero2.png" />
                                    </Fade>
                                </Slide>
                            </HStack>

                            <VStack width={"full"} alignItems={"center"} gap={"3"} m={"auto"}>
                                <Slide right>
                                    <Fade right delay={300}>
                                        <Text
                                            fontSize={["24px", "24px", "30px"]}
                                            color={"brand.400"}
                                            fontWeight={"600"}
                                            width={["full", "full", "450px"]}
                                            textAlign={["center", "center", "left"]}
                                        >
                                            Build your company profile
                                        </Text>
                                        <Text
                                            fontSize={"large"}
                                            color={"white.800"}
                                            width={["full", "full", "450px"]}
                                            textAlign={["center", "center", "left"]}
                                        >
                                            Work with our team to build and publish your company profile
                                            on AdvisoryCloud. List your mission, values, and core goals
                                            for your advisory board. When
                                        </Text>
                                    </Fade>
                                </Slide>
                                <Slide right>
                                    <Fade right delay={300}>
                                        <VStack
                                            mt={"5"}
                                            gap={"5"}
                                            width={["full", "full", "450px"]}
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
                                    </Fade>
                                </Slide>
                            </VStack>
                        </HStack>
                        <HStack
                            width={"full"}
                            gap={["20px", "20px", "0"]}
                            justifyContent={"space-between"}
                            flexDir={["column", "column", "column", "row-reverse"]}
                        >
                            <HStack width={"full"} justifyContent={"center"}>
                                <Slide right>
                                    <Fade delay={200}>
                                        <Image src="/assets/images/homehero3.png" />
                                    </Fade>
                                </Slide>
                            </HStack>
                            <VStack width={"full"} gap={"5"} alignItems={"flex-start"}>
                                <Slide>
                                    <Fade left delay={200}>
                                        <Text
                                            fontSize={["24px", "24px", "30px"]}
                                            color={"brand.400"}
                                            fontWeight={"600"}
                                            width={["full", "full", "450px"]}
                                            textAlign={["center", "center", "right"]}
                                        >
                                            Connect with advisors in your secure digital boardroom
                                        </Text>
                                        <Text
                                            fontSize={"large"}
                                            color={"white.800"}
                                            width={["full", "full", "450px"]}
                                            textAlign={["center", "center", "right"]}
                                        >
                                            Work with our team to build and publish your company profile
                                            on AdvisoryCloud. List your mission, values, and core goals
                                            for your advisory board. When
                                        </Text>
                                    </Fade>
                                </Slide>
                                <VStack width={"450px"} gap={"5"} alignItems={"flex-end"}>
                                    <Slide left>
                                        <Fade left>
                                            <IconList
                                                text={"Digital Boardroom & Forum"}
                                                width={[null, null, "450px"]}
                                                justifyContent={["center", "center", "flex-end"]}
                                            />
                                            <IconList
                                                text={"Post Questions and Updates"}
                                                width={[null, null, "450px"]}
                                                justifyContent={["center", "center", "flex-end"]}
                                            />
                                            <IconList
                                                text={"Post Questions and Updates"}
                                                width={[null, null, "450px"]}
                                                justifyContent={["center", "center", "flex-end"]}
                                            />
                                        </Fade>
                                    </Slide>
                                </VStack>
                            </VStack>
                        </HStack>
                        <HStack
                            flexDir={["column", "column", "column", "row"]}
                            width={"full"}
                        >
                            <HStack width={"full"} justifyContent={"flex-end"}>
                                <Slide left>
                                    <Fade left delay={200}>
                                        <Image src="/assets/images/homehero2.png" />
                                    </Fade>
                                </Slide>

                            </HStack>
                            <VStack width={"full"} gap={"3"}>
                                <Slide right>
                                    <Text
                                        fontSize={["24px", "24px", "30px"]}
                                        color={"brand.400"}
                                        fontWeight={"600"}
                                        width={["full", "full", "450px"]}
                                        textAlign={["center", "center", "left"]}
                                    >
                                        Hold moderated meetings with your advisory board
                                    </Text>
                                    <Text
                                        fontSize={"large"}
                                        color={"white.800"}
                                        width={["full", "full", "450px"]}
                                    >
                                        Work with our team to build and publish your company profile
                                        on AdvisoryCloud. List your mission, values, and core goals
                                        for your advisory board. When
                                    </Text>
                                    <VStack
                                        mt={"5"}
                                        gap={"5"}
                                        width={["full", "full", "450px"]}
                                        alignItems={["center", "center", "center"]}
                                    >
                                        <IconList
                                            text={"Moderated by AdvisoryCloud"}
                                            justifyContent={["center", "center", "flex-start"]}
                                        />
                                        <IconList
                                            text={"Meet Remotely With Your Board"}
                                            justifyContent={["center", "center", "flex-start"]}
                                        />
                                        <IconList
                                            text={"Get Deeper Insights"}
                                            justifyContent={["center", "center", "flex-start"]}
                                        />
                                    </VStack>
                                </Slide>
                            </VStack>
                        </HStack>
                        <HStack
                            width={"full"}
                            gap={["20px", "20px", "0"]}
                            justifyContent={"space-between"}
                            flexDir={["column", "column", "column", "row-reverse"]}
                        >
                            <HStack width={"full"} justifyContent={"center"}>
                                <Slide left>
                                    <Fade delay={300}>
                                        <Image src="/assets/images/homehero3.png" />
                                    </Fade>
                                </Slide>
                            </HStack>

                            <VStack width={"full"} gap={"5"} alignItems={"flex-start"}>
                                <Slide left>
                                    <Fade left delay={300}>
                                        <Text
                                            fontSize={["24px", "24px", "30px"]}
                                            color={"brand.400"}
                                            fontWeight={"600"}
                                            width={["full", "full", "450px"]}
                                            textAlign={["center", "center", "right"]}
                                        >
                                            Hire advisors for key projects, jobs, and more
                                        </Text>
                                        <Text
                                            fontSize={"large"}
                                            color={"white.800"}
                                            width={["full", "full", "450px"]}
                                            textAlign={["center", "center", "right"]}
                                        >
                                            Work with our team to build and publish your company profile
                                            on AdvisoryCloud. List your mission, values, and core goals
                                            for your advisory board. When
                                        </Text>
                                        <VStack width={["full", "full", "450px"]}
                                            gap={"5"}>
                                            <IconList
                                                text={"Hire Advisors Directly"}
                                                width={[null, null, "450px"]}
                                                justifyContent={["center", "center", "flex-end"]}
                                            />
                                            <IconList
                                                text={"10,000+ Advisors On-Demand"}
                                                width={[null, null, "450px"]}
                                                justifyContent={["center", "center", "flex-end"]}
                                            />
                                            <IconList
                                                text={"Highly Qualified Talent Pool"}
                                                width={[null, null, "450px"]}
                                                justifyContent={["center", "center", "flex-end"]}
                                            />
                                        </VStack>
                                    </Fade>
                                </Slide>
                            </VStack>
                        </HStack>
                    </VStack>
                </VStack>
            </FullContainer>
            {/* Section 2 End */}

            <Box width={"full"}>
                <VStack width={"full"} gap={20}>
                    <Container>
                        <Text
                            fontSize={["32px", "32px", "40px"]}
                            color={"white.800"}
                            fontWeight={"900"}
                            textAlign={"center"}
                            lineHeight={"70%"}
                        >
                            Success Stories
                        </Text>
                        <Text
                            mt={"20px"}
                            fontSize={"xl"}
                            fontWeight={"400"}
                            color={"white.800"}
                            textAlign={"center"}
                        >
                            Build a powerful group of advocates and experts for your business
                        </Text>
                    </Container>
                    <ReviewSlider />
                </VStack>
            </Box>

            <FullContainer bg={"#ddecf936"} pad={"50px 0 100px 0"}>
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
                            fontSize={"xl"}
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
                        gap={["20px", "20px", "0px"]}
                        justifyContent={"space-between"}
                    >
                        <HStack width={"full"} justifyContent={"flex-end"}>
                            <Slide left>
                                <Fade left delay={300}>
                                    <Image src="/assets/images/homehero5.png" />
                                </Fade>
                            </Slide>
                        </HStack>

                        <VStack width={"full"} gap={"1"}>
                            <Slide right>
                                <Fade right delay={300}>
                                    <Text
                                        color={"brand.400"}
                                        fontWeight={"600"}
                                        width={["full", "full"]}
                                        textAlign={["center", "center", "left"]}
                                        fontSize={["24px", "24px", "30px"]}
                                    >
                                        Build your company profile
                                    </Text>
                                </Fade>
                            </Slide>
                            <Slide right>
                                <Fade right delay={300}>
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
                                </Fade>
                            </Slide>
                        </VStack>
                    </HStack>
                    <HStack
                        flexDir={["column", "column", "row", "row"]}
                        alignItems={"center"}
                        gap={"54px"}
                        mt={"20px"}
                    >
                        {/* <IconBox
              title={"Build your advisory board"}
              description={
                "Tap into over 10,000 senior executives and SMEs on AdvisoryCloud"
              }
              icon={<FaPeopleArrows fontSize={"24px"} color={"#fff"} />}
            /> */}
                        <IconBox
                            title={"Build your advisory board"}
                            description={
                                "Tap into over 10,000 senior executives and SMEs on AdvisoryCloud. "
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
                <VStack width={"full"} gap={"80px"} alignItems={"center"} mb={"5rem"}>
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
                            pb={"80px"}
                        >
                            <BenefitCard
                                title={"Access 10,000+ Advisors"}
                                description={
                                    "Tap into over 10,000 senior executives and SMEs on AdvisoryCloud"
                                }
                                icon={<BsAlarm fontSize={"50px"} />}
                            />
                            <BenefitCard
                                title={"Access 10,000+ Advisors"}
                                description={
                                    "Tap into over 10,000 senior executives and SMEs on AdvisoryCloud"
                                }
                                icon={<BiLineChart fontSize={"50px"} />}
                            />
                            <BenefitCard
                                title={"Access 10,000+ Advisors"}
                                description={
                                    "Tap into over 10,000 senior executives and SMEs on AdvisoryCloud"
                                }
                                icon={<BsBookmarkPlus fontSize={"50px"} />}
                            />
                        </HStack>
                    </VStack>
                </VStack>
            </FullContainer>
        </HomeLayout>
    );
};

export default Home;
