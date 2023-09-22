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
import Hero from "./Hero";
import Works from "./Works";
import TitleLayout from "../../Layouts/TitleLayout";
import JoinBoard from "./JoinBoard";
import Features from "./Features";
import Review from "./Review";

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeLayout>
      <FullContainer>
        <Hero />
      </FullContainer>

      {/* Section 2 Start */}
      <FullContainer bg={"linear-gradient(180deg, rgba(14, 110, 255, 0.10) 0%, rgba(14, 110, 255, 0.00) 100%)"} pad={"50px 0 0 0"}>
        <Text fontWeight={"600"} fontSize={"xl"} color={"black"}>
          Our network includes professionals with experience from
        </Text>
        <PatnersRow />
        <Works />
      </FullContainer>

      <FullContainer bg={"linear-gradient(180deg, rgba(14, 110, 255, 0.10) 0%, rgba(14, 110, 255, 0.00) 100%)"} mg={"28% 0 0 0"}>
        <VStack width={"full"} gap={20} pt={"60"}>
          <TitleLayout title={"Join an advisory board"} buttonText={"Start Your Advisor Profile"} btnColor={"#FFFFFF"} btnBg={"#0080FF"} />
        </VStack>
        <JoinBoard />
      </FullContainer>

      <FullContainer>
        <Features />
      </FullContainer>

      <FullContainer>
        <Review />
      </FullContainer>
    </HomeLayout>
  );
};

export default Home;
