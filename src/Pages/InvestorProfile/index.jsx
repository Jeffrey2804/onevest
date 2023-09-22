import FullContainer from "../../Components/FullContainer";

import { HStack, Button, Box, useToast, Text, VStack } from "@chakra-ui/react";
import { FiEdit2 } from 'react-icons/fi';
import { HiLightBulb } from 'react-icons/hi';

import { useEffect, useState } from "react";

import DashboardLayout from "../../Layouts/DashboardLayout";
import { authAxiosHelper } from "../../Helpers/axiosHelper";
import { warning } from "framer-motion";

import Comment from "../../Components/Comment";
import CurrentObjectiveCard from '../../Components/CurrentObjectiveCard'
import AreasSeekingHelp from "../../Components/AreasSeekingHelp";
import CommentSection from "../../Components/CommentSection";
import BoardMemberCard from "../../Components/BoardMemberCard";
import { useNavigate } from "react-router-dom";

const InvestorProfile = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  // console.log(comments);
  const toast = useToast();

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const postcomment = async () => {
    setIsLoading(true);
    const userId = localStorage.getItem("cfl_id");
    const comment = commentText;
    if (!userId) {
      console.error("User ID not found in localStorage");
      toast({ title: "You are not eligible to make the comment", status: "warning" });
      setIsLoading(false);
      return;
    }
    const data = {
      user_id: userId,
      comment: comment,
    };

    try {
      const response = await authAxiosHelper.post("/comment", data, {
        headers: {
          token: localStorage.getItem("cflToken"),
        },
      });
      toast({ title: "Comment Added Succesfully", status: "success" })
      setIsLoading(false);
      const newComment = response.data.body;
      console.log(newComment);
      setComments((prevComments) => [...prevComments, newComment]);

      setCommentText("")
      console.log(response);

    } catch (error) {
      toast({ title: "Error posting comment:", status: warning });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCommentList = async () => {
    try {
      const response = await authAxiosHelper.get("/comment/list", {
        headers: { token: localStorage.getItem("cflToken") },
      });
      const newComments = response.data.body || [];
      setComments(newComments);
      console.log({ "fetch comments": response });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCommentList();
  }, []);

  const highlightCardStyles = {
    border: '1px solid #CEE0FF',
    backgroundColor: '#FFF',
    textColor: "#000",
    iconBackgrounColor: "#E7F0FF",
    mbText: "0px"
  }

  const bio =
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex e commodo consequat.";
  return (
    <DashboardLayout>
      <Box bg={"#F5F9FF;"} width={"full"} py={"40px"}>
        <FullContainer>
          <div className="flex flex-col gap-20">
            <div>
              <Text className="text-3xl text-black font-semibold">
                Founder Profile
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
                  border: "1px solid #0080FF"
                }}
              >
                <div className="flex flex-col lg:flex-row w-[100%] justify-between gap-5">
                  <div className="flex flex-col lg:gap-0 lg:items-start  items-center lg:w-[800px]">
                    <div className="flex flex-col lg:items-start items-center">
                      <img src={"/assets/images/user-item-image.png"} />
                    </div>
                    <div className="flex flex-col lg:items-start lg:pr-3">
                      <div className="flex lg:items-start items-center flex-col">
                        <Text fontSize={"25px"} color={"black"} fontWeight={"700"} letterSpacing={"2px"} paddingTop={"10px"}>Sean Walsh</Text>
                        <p className="text-xl p-0">
                          Creative Director at CofoundersLab
                        </p>
                      </div>
                      <p className="text-lg lg:w-[90%]">
                        {bio.slice(0, 229)}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:w-[300px] justify-center items-end">
                    <HStack
                      backgroundColor={"white"}
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      padding={"1.5rem"}
                      borderRadius={"6%"}
                      position={"relative"}
                      width={"300px"}
                      margin={"auto"}
                      height={"200px"}
                      boxShadow={"0px 0px 20px 0px #0E6EFF1C"}
                    >
                      <Button className="absolute top-[-15px]" backgroundColor={"E7F0FF"} padding={"1rem"} borderRadius={"20px"} border={"1px solid #CEE0FF"} color={"#0080FF"}>
                        Company Stage
                      </Button>
                      <img src="/assets/images/bookmark.png" alt="bookmark" />
                      <Text fontSize={"3xl"} color={"#0080FF"} fontWeight={"500"}>MVP</Text>
                    </HStack>
                    
                    <div className="flex flex-col items-center justify-center w-full">
                      <button onClick={() => navigate("/edit-profile")}
                        className="bg-blue-600 duration-500 focus:outline-none w-[180px] py-[8px] rounded-[50px] text-white text-[20px] font-semibold border-[1px] border-solid border-blue-600 mt-4 hover:bg-blue-800 hover:text-blue-600 flex flex-row items-center justify-center"
                      >
                        <FiEdit2 className="text-lg text-white mx-1" /> Edit Profile 
                      </button>
                    </div>
                   
                  </div>
                </div>
              </VStack>
            </div>

            <AreasSeekingHelp />

            <div className="flex flex-col gap-[24px]">
              <p className="text-3xl font-semibold text-black">
                My Company Board
              </p>
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="flex flex-col md:flex-col lg:flex-row lg:items-center lg:justify-between w-full">
                  <BoardMemberCard />
                  <BoardMemberCard />
                  <BoardMemberCard />
                </div>
              </div>
            </div>
          </div>
        </FullContainer>


        <FullContainer>
          <div className="notifications-wrapper pt-10 w-[100%]">
            <div className="flex justify-between w-[100%]">
              <Text className="text-3xl text-black text-center font-semibold">
                Current Objectives
              </Text>
            </div>
            <div className="lg:mt-7 sm:mt-6 mt-4">
              <div className="w-full bg-[white] px-4 rounded-lg pb-5">
                {[1, 2, 3, 4].map((_, index) =>
                  <CurrentObjectiveCard key={index} {...highlightCardStyles} icon={<HiLightBulb />} isLast={index === 3} />
                )}
              </div>
            </div>
          </div>
        </FullContainer>

        <CommentSection commentText={commentText} handleCommentChange={handleCommentChange} isLoading={isLoading} postcomment={postcomment} comments={comments} />

        <FullContainer>
          <div className="notifications-wrapper pt-10 w-[100%]">
            <div className="flex justify-between w-[100%]">
              <Text className="text-3xl text-black text-center font-semibold">
                Comments
              </Text>
            </div>
            <div className="lg:mt-7 sm:mt-6 mt-4">
              <div className="w-full bg-[white] px-4 rounded-lg pb-5">
                {/* {comments.slice().reverse().map((comment, index) =>
                  <Comment key={index} isLast={index === 3} data={comment} />
                )} */}
                <Comment setComments={setComments} comments={comments} />
              </div>
            </div>
          </div>
        </FullContainer>

      </Box>
    </DashboardLayout>
  );
};

export default InvestorProfile;