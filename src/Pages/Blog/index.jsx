import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import HomeLayout from "../../Layouts/HomeLayout";
import FullContainer from "../../Components/FullContainer";
import { FaEdit } from "react-icons/fa";
import { HighlightCard } from "../../Components/CategoryCard/HighlightCard";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import CTAButton from "../../Components/CTAButton";
import { ProfileButton } from "../SearchAdvisors";
import DashboardLayout from "../../Layouts/DashboardLayout";

const Blog = () => {
  const navigate = useNavigate();
  const bio =
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex e commodo consequat.";

  return (
    <HomeLayout>
      <Box bg={"#f9f9f9"} width={"full"} mt={"30px"} py={"60px"}>
        {" "}
        <FullContainer>
          <VStack alignItems={"flex-start"} width={"full"} gap={"40px"}>
            <VStack width={"full"} gap={"30px"}>
              <Text color={"white.800"} fontWeight={"bold"} fontSize={"3xl"}>
                How do I Find A Business Idea
              </Text>

              <VStack width={"60%"} fontSize={"lg"} gap={"20px"}>
                <img
                  src="/assets/images/blogHero.png"
                  style={{ borderRadius: "20px", margin: "20px 0" }}
                />
                <Text fontSize={"lg"}>
                  Are you ready to take your business to the next level? As an
                  entrepreneur, you've already accomplished so much, but
                  sometimes running a business on your own can be overwhelming.
                </Text>
                <Text>
                  That's where a co-founder can come in! Below, we'll explore
                  the top 5 signs that it's time to bring on a co-founder and
                  supercharge your business growth. With a co-founder by your
                  side, you'll have the support and expertise you need to
                  overcome any challenge and achieve your biggest goals.
                </Text>
                <Text fontSize={"lg"}>
                  Are you ready to take your business to the next level? As an
                  entrepreneur, you've already accomplished so much, but
                  sometimes running a business on your own can be overwhelming.
                </Text>
                <Text>
                  That's where a co-founder can come in! Below, we'll explore
                  the top 5 signs that it's time to bring on a co-founder and
                  supercharge your business growth. With a co-founder by your
                  side, you'll have the support and expertise you need to
                  overcome any challenge and achieve your biggest goals.
                </Text>
              </VStack>
            </VStack>
            <Text fontSize={"3xl"}>Latest Updates</Text>
            <HStack
              style={{
                padding: "10px 0px",
                borderRadius: "20px",
                width: "100%",
                justifyContent: "space-between",
                gap: "50px",
              }}
            >
              <div
                style={{ flex: "1" }}
                className="gap-4 flex flex-col items-center lg:pr-5  justify-between   "
              >
                <img
                  src="/assets/images/blogHero.png"
                  style={{ borderRadius: "20px" }}
                />
                <p className="text-xl text-gray-600 text-center font-semibold">
                  How do I Find A Business Idea
                </p>
                <ProfileButton text={"Read More"} />
              </div>
              <div
                style={{ flex: "1" }}
                className="gap-4 flex flex-col items-center lg:pr-5  justify-between   "
              >
                <img
                  src="/assets/images/blogHero.png"
                  style={{ borderRadius: "20px" }}
                />
                <p className="text-xl text-gray-600 text-center font-semibold">
                  How do I Find A Business Idea
                </p>
                <ProfileButton text={"Read More"} />
              </div>
              <div
                style={{ flex: "1" }}
                className="gap-4 flex flex-col items-center lg:pr-5  justify-between   "
              >
                <img
                  src="/assets/images/blogHero.png"
                  style={{ borderRadius: "20px" }}
                />
                <p className="text-xl text-gray-600 text-center font-semibold">
                  How do I Find A Business Idea
                </p>
                <ProfileButton text={"Read More"} />
              </div>
            </HStack>
          </VStack>
        </FullContainer>
      </Box>
    </HomeLayout>
  );
};

export default Blog;
