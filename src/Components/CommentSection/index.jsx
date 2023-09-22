import FullContainer from "../../Components/FullContainer";
import { Avatar, HStack, Button, useToast, VStack } from "@chakra-ui/react";
import { Spinner } from '@chakra-ui/react'

import { LuSend } from 'react-icons/lu'
import { BiSolidSend } from "react-icons/bi";

import { useState } from "react";
import { Textarea } from "flowbite-react";

import { authAxiosHelper } from "../../Helpers/axiosHelper";
import { warning } from "framer-motion";
import CTAButton from "../CTAButton";

const CommentSection = ({ commentText, handleCommentChange, isLoading, postcomment, comments }) => {
  return (
    <FullContainer>
      <div className="flex flex-col gap-20 pt-10">
        <div>
          <VStack
            style={{
              background: "#E7F0FF",
              padding: "50px 40px",
              borderRadius: "20px",
              alignItems: "flex-start",
              gap: "40px",
              width: "100%",
              border: "1px solid #0080FF"
            }}
          >
            <div className="flex flex-col lg:flex-row w-[100%] justify-between gap-2">
              <div className="flex flex-col lg:w-[400px] justify-start items-start">
                <p className="text-2xl font-semibold text-gray-800 mb-0">
                  Board Member Comments
                </p>
                <p className="text-md text-gray-800">
                  Feel free to add your comment and suggestions.
                </p>
              </div>
              <div className="flex flex-row lg:gap-0 lg:items-center lg:justify-end items-center lg:w-[800px]">
                <textarea
                  placeholder="Write something here."
                  rows={1}
                  value={commentText}
                  onChange={handleCommentChange}
                  className="rounded-md border border-gray-300 placeholder-black"
                  style={{ width: '75%' }}
                />

                <HStack justifyContent={"flex-end"} marginLeft={"10px"}>
                  {
                    isLoading ? <Spinner color='red.500' className="mr-[3rem]" /> : <div onClick={postcomment}>
                      <CTAButton
                        text={<LuSend />}
                        bg={"#0080FF"}
                        border={"1px solid #E2E8f0"}
                        fontSize={"1rem"}
                        padding={".1px"}
                        color={"white"}
                        borderRadius={"10px"}
                        fontWeight={"100"}
                        hoverbg={"#0080FF"}
                      />
                    </div>
                  }
                </HStack>
              </div>
            </div>
          </VStack>
        </div>
      </div>
    </FullContainer>
  );
};

const Replay = ({ onReplySubmit, setReplay }) => {
  const [replyValue, setReplyValue] = useState('');
  const handleSubmit = () => {
    onReplySubmit(replyValue);
    setReplyValue('');
  };

  return (
    <div className="relative lg:w-[30%]">
      <input
        type="text"
        value={replyValue}
        onChange={(e) => setReplyValue(e.target.value)}
        className="mb-4 w-[100%] rounded-lg h-[60px] border-[#0080FF]"
      />
      <BiSolidSend className="absolute right-2 top-4 font-bold text-2xl cursor-pointer text-[#0080FF]" onClick={handleSubmit} />
    </div>
  );
};

const CommentCard = (data) => {
  const [reply, setReplay] = useState(false);
  const { comment, created_at, commenter_id } = data.data;
  const [isLoading, setIsLoading] = useState(false);
  const [replyComment, setReplyComment] = useState([]);
  const toast = useToast();
  //Time Formation
  const timestamp = created_at;
  const formatRelativeTime = (timestamp) => {
    const currentTime = new Date();
    const pastTime = new Date(timestamp);
    const timeDifference = currentTime - pastTime;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (hours >= 24) {
      const days = Math.floor(hours / 24);
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else if (hours >= 1) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (minutes >= 1) {
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else {
      return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
    }
  };
  const relativeTime = formatRelativeTime(timestamp);


  const handleReplySubmit = async (value) => {
    console.log('Reply Value:', value);
    // You can perform additional actions with the reply value if needed
    setIsLoading(true);
    const userId = localStorage.getItem("cfl_id");
    const reply = value;
    if (!userId) {
      console.error("User ID not found in localStorage");
      toast({ title: "You are not eligible to make the comment", status: "warning" });
      setIsLoading(false);
      return;
    }
    const data = {
      comment_id: commenter_id,
      comment: reply,
    };

    try {
      const response = await authAxiosHelper.post("/reply-comment", data, {
        headers: {
          token: localStorage.getItem("cflToken"),
        },
      });
      toast({ title: "Reply Succesfully", status: "success" })
      setIsLoading(false);
      setReplay(false);
      const newReply = response.data.body;
      setReplyComment((prevReply) => [...prevReply, newReply]);

      console.log(response);

    } catch (error) {
      toast({ title: "Error posting comment:", status: warning });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 border-b-[#E0E2E6] pb-8 pt-4 border-b-2">
      <div className="flex gap-6 items-center">
        <Avatar size={"md"} src="/assets/images/advisor.jpeg" />
        <p className="text-lg text-gray-600 font-semibold">
          {data.data.commenter_details && data.data.commenter_details[0]
            ? data.data.commenter_details[0].name
            : localStorage.getItem('username')}
        </p>

        <p className="text-sm text-gray-500 font-light">{relativeTime}</p>
      </div>
      <p className=" text-lg text-gray-500 font-normal lg:w-[60%]">
        {comment}
      </p>

      {
        !reply && <p p={"0px"} fontSize={"0.9rem"} backgroundColor={"#0080FF"} textColor={"white"} _hover={{ color: "black", backgroundColor: "white" }} style={{ cursor: "pointer" }} onClick={() => setReplay(!reply)}>
          Reply
        </p>
      }
      {
        replyComment && replyComment.map((replys, index) => {
          return <div className="flex flex-col ml-5 mt-4" key={index}>
            <p className="text-lg text-gray-500 font-normal lg:w-[60%]">
              {replys.comment}
            </p>
            <br />
            <div className="flex gap-4">
              <Avatar size={"sm"} src="/assets/images/advisor.jpeg" />
              <p className="text-sm text-gray-600 font-semibold mb-0">
                {localStorage.getItem('username')}
              </p>
              <p className="text-sm text-gray-500 font-light">{relativeTime}</p>
            </div>
          </div>
        })
      }
      {
        reply && <Replay onReplySubmit={handleReplySubmit} setReplay={setReplay} />
      }
    </div>
  );
};

export default CommentSection;