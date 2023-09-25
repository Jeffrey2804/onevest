import React from "react";
import FullContainer from "../../Components/FullContainer";
import { useState, useEffect } from "react";
import ProfileCard from "../ProfileCard";
import DashboardLayout from "../../Layouts/DashboardLayout";
import { authAxiosHelper } from "../../Helpers/axiosHelper";
import { Box, HStack, Image, Text, useToast, VStack, CloseButton } from "@chakra-ui/react";
import { warning } from "framer-motion";
import AreasSeekingHelp from "../../Components/AreasSeekingHelp";
import CommentSection from "../../Components/CommentSection";
import Review from "../../Pages/Home/Review";
import TimePicker from "./TimePicker";
import Modal from 'react-modal';

import './index.css'
import { getAdvisorProfile } from "../../Helpers/apis";
import { useNavigate, useParams } from "react-router-dom";
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '40%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    'border-radius': '30px',
    'padding': '20px',
    'border-color': 'rgb(180 210 255)'
  },
};
const AdvisorProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const toast = useToast();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [profileDetails, setProfileDetails] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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

  const fetchUser = async () => {
    const response = await getAdvisorProfile(id);
    if (response == 401) {
      toast({ title: "You're login expire, login again", status: 'error', position: 'top-right', duration: '2000' })
    } else {
      setProfileDetails(response);
    }
  }

  useEffect(() => {
    fetchCommentList();
    fetchUser();
  }, []);

  return (
    <DashboardLayout>
      <Box bg={"#F5F9FF;"} width={"full"} py={"40px"}>

        <ProfileCard title="Advisor Profile" profile={profileDetails} buttons action={event => openModal()} />

        <FullContainer>
          <div className="pt-10">
            <AreasSeekingHelp title="Areas I Can Help with" />
          </div>
        </FullContainer>

        <FullContainer>
          <div className="flex flex-col pt-10">
            <p className="text-3xl font-semibold text-black">
              Founder Review
            </p>
          </div>
          <Review noHeader />
        </FullContainer>

        <CommentSection commentText={commentText} handleCommentChange={handleCommentChange} isLoading={isLoading} postcomment={postcomment} comments={comments} />
      </Box>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex gap-3 justify-center">
          <TimePicker />
        </div>
      </Modal>


    </DashboardLayout>
  );
};



export default AdvisorProfile;
