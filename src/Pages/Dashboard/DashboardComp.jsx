import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import FullContainer from "../../Components/FullContainer";
import { BsArrowLeft, BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import {
  GoArrowUpRight,
  GoTriangleLeft,
  GoTriangleRight,
} from "react-icons/go";
import { useNavigate } from "react-router-dom";
import CTAButton from "../../Components/CTAButton";
import DashboardLayout from "../../Layouts/DashboardLayout";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import AdvisorCard from "../Home/AdvisorCard";

import DashboardBackgroundImage from "../../assets/images/dashboard-image.jpg";
import { fetchAdvisorList } from "../../Helpers/apis";
import AdvisorSlide from "./AdvisorSlide";
import DashboardBlog from "./DashboardBlog";

const DashboardComp = () => {
  const bio =
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex e commodo consequat.";

  return (
    <DashboardLayout>
      <Box bg={"#F5F9FF;"} width={"full"} py={"40px"}>
        <FullContainer>
          <VStack alignItems={"flex-start"} width={"full"} gap={"20px"}>
            <Box className="flex justify-between w-[100%]">
              <Text className="text-3xl text-black text-center font-semibold">
                Find An Advisor
              </Text>
              <Button
                backgroundColor={"white"}
                border={"1px solid #CEE0FF"}
                borderRadius={"30px"}
                padding={"0 23px"}
                fontSize={"14px"}
              >
                Find Your Perfect Advisor
              </Button>
            </Box>

            <AdvisorSlide />


            <section
              className="my-10 flex-col flex items-center justify-center w-full p-1 bg-white rounded-3xl"
              style={{ border: "1px solid #CEE0FF" }}
            >
              <HStack
                className="flex flex-col items-center justify-center"
                backgroundImage={DashboardBackgroundImage}
                height={"508px"}
                style={{
                  padding: "40px 50px",
                  borderRadius: "20px",
                  gap: "20px",
                  width: "100%",
                  margin: 0,
                }}
              >
                <div className="flex items-center justify-center flex-col">
                  <div className="w-full flex flex-col items-center justify-center pb-4">
                    <Image
                      src="/assets/images/newLogo.png"
                      width={["300px", "300px", "500px", "500px"]}
                      onClick={() => {
                        navigate("/");
                      }}
                    />
                  </div>

                  <p className="uppercase font-extrabold text-4xl m-0 text-center">
                    Find Your Pefect Advisor
                  </p>

                  <button
                    onClick={() => navigate("/search-advisor")}
                    type="submit"
                    className="bg-blue-600 duration-500 focus:outline-none w-[260px] py-[8px] rounded-[50px] text-white text-[20px] font-semibold border-[1px] border-solid border-blue-600 mt-4 hover:bg-blue-800 hover:text-blue-600 flex flex-row items-center justify-center"
                  >
                    Search All Advisors{" "}
                    <BsArrowUpRight className="text-lg text-white mx-1" />
                  </button>
                </div>
              </HStack>
            </section>


            <DashboardBlog />

            <Text className="text-3xl text-black text-center font-semibold">
              Community
            </Text>
            <HStack
              style={{
                display: "flex",
                background: "#fff",
                border: "1px solid #E2E8f0",
                padding: "30px 40px",
                borderRadius: "20px",
                width: "100%",
                justifyContent: "space-between",
              }}
              className=""
            >
              <div className="gap-4 flex flex-col justify-between w-[600px]">
                <img width={"182px"} src="/assets/images/networkingGroup.png" />
                <div>
                  <Text
                    fontSize={"25px"}
                    color={"black"}
                    fontWeight={"700"}
                    letterSpacing={"2px"}
                    padding={"0"}
                  >
                    How do I Find A Business Idea?
                  </Text>
                  <p className="text-lg text-left text-black p-0">
                    {bio.slice(0, 229)}
                  </p>
                </div>

                <a
                  href="https://cofounderlabmeet.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CTAButton
                    text={
                      <>
                        Join Now <GoArrowUpRight />
                      </>
                    }
                    bg={"#0080FF"}
                    fontSize={"1rem"}
                    padding={"0px 25px"}
                    fontWeight={"bold"}
                  />
                </a>
              </div>
              <div className="gap-4 flex">
                <img
                  className="mr-1"
                  width={"400px"}
                  src="/assets/images/community-girl.png"
                  alt="community-girm"
                />
              </div>
            </HStack>
            <Text className="text-3xl text-black text-center font-semibold">
              Founder Of The Week
            </Text>
            <VStack
              style={{
                background: "#E7F0FF",
                // border: "1px solid #E2E8f0",
                padding: "50px 40px",
                borderRadius: "20px",
                alignItems: "flex-start",
                gap: "40px",
                width: "100%",
                border: "1px solid #0080FF",
              }}
            >
              <div className="flex flex-col lg:flex-row w-[100%] justify-between gap-5">
                <div className="flex flex-col lg:gap-0 lg:items-start  items-center lg:w-[800px]">
                  <div className="flex flex-col gap-4 lg:items-start items-center">
                    <img src={"/assets/images/user-item-image.png"} />
                  </div>
                  <div className="flex flex-col lg:items-start lg:pr-3">
                    <div className="flex lg:items-start items-center flex-col lg:pt-[36px]">
                      <Text
                        fontSize={"25px"}
                        color={"black"}
                        fontWeight={"700"}
                        letterSpacing={"2px"}
                        padding={"0"}
                      >
                        Sean Walsh
                      </Text>
                      <p className="text-xl p-0">
                        Creative Director at CofoundersLab
                      </p>
                    </div>
                    <p className="text-lg lg:w-[90%]">{bio.slice(0, 229)}</p>
                  </div>
                </div>
                <div className="flex flex-col lg:w-[300px] justify-center items-end">
                  <HStack
                    backgroundColor={"white"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    paddingTop={"1.5rem"}
                    borderRadius={"6%"}
                    position={"relative"}
                    width={"300px"}
                    margin={"auto"}
                    height={"200px"}
                  >
                    <Button
                      className="absolute top-[-25px]"
                      backgroundColor={"E7F0FF"}
                      padding={"1rem"}
                      borderRadius={"20px"}
                      border={"1px solid #0080FF"}
                      color={"#0080FF"}
                    >
                      Company Stage
                    </Button>
                    <img src="/assets/images/bookmark.png" alt="bookmark" />
                    <Text fontSize={"3xl"} color={"#0080FF"} fontWeight={"500"}>
                      MVP
                    </Text>
                  </HStack>
                </div>
              </div>
            </VStack>
          </VStack>
        </FullContainer>
      </Box>
    </DashboardLayout>
  );
};

export default DashboardComp;
