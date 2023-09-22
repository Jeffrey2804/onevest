import { Button, Grid, HStack, Text, useToast } from "@chakra-ui/react";
import CategoryCard from "../../CategoryCard";
import {
  BsFillLightbulbFill,
  BsBugFill,
  BsGraphUpArrow,
  BsBookFill,
  BsFillJournalBookmarkFill,
} from "react-icons/bs";
import FullContainer from "../../FullContainer";
import { useState, useContext } from "react";
import { OnboardingContext } from ".";
import { authAxiosHelper } from "../../../Helpers/axiosHelper";
import { useNavigate } from "react-router-dom";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

const stages = [
  { icon: <BsFillLightbulbFill />, title: "Idea" },
  { icon: <BsBugFill />, title: "Startup" },
  { icon: <BsFillJournalBookmarkFill />, title: "Funding" },
  { icon: <BsGraphUpArrow />, title: "MVP" },
];

const areasHelp1 = [
  { icon: <BsFillLightbulbFill />, title: "Acquisitions" },
  { icon: <BsBugFill />, title: "Consumer Packaged Goods" },
  { icon: <BsFillJournalBookmarkFill />, title: "Financial Strategy" },
  { icon: <BsGraphUpArrow />, title: "Advertising" },
  { icon: <BsFillLightbulbFill />, title: "SaaS" },
  { icon: <BsBugFill />, title: "Angel Investing" },
  { icon: <BsFillJournalBookmarkFill />, title: "Customer Acquisition" },
  { icon: <BsGraphUpArrow />, title: "Scaling" },
  { icon: <BsFillLightbulbFill />, title: "Artificial Intelligence" },
  { icon: <BsBugFill />, title: "Cyber-Security" },
  { icon: <BsFillJournalBookmarkFill />, title: "Go-To-Market Strategies" },
  { icon: <BsGraphUpArrow />, title: "SEO" },
];

const areasHelp2 = [
  { icon: <BsFillLightbulbFill />, title: "Social Media Marketing" },
  { icon: <BsBugFill />, title: "B2B Marketing" },
  { icon: <BsFillJournalBookmarkFill />, title: "B2C Marketing" },
  { icon: <BsGraphUpArrow />, title: "Debt Restructuring" },
  { icon: <BsFillLightbulbFill />, title: "IPO" },
  { icon: <BsBugFill />, title: "Startups" },
  { icon: <BsFillJournalBookmarkFill />, title: "Big Data" },
  { icon: <BsGraphUpArrow />, title: "Information Technology" },
  { icon: <BsFillLightbulbFill />, title: "Billing Systems" },
  { icon: <BsBugFill />, title: "Marketing" },
  { icon: <BsFillJournalBookmarkFill />, title: "Biomedical Engineering" },
  { icon: <BsGraphUpArrow />, title: "Telecommunications" },
];

const areasHelp3 = [
  { icon: <BsFillLightbulbFill />, title: "Educational Technology" },
  { icon: <BsBugFill />, title: "Trademarks" },
  { icon: <BsFillJournalBookmarkFill />, title: "Capital Markets" },
  { icon: <BsGraphUpArrow />, title: "UI/UX" },
  { icon: <BsFillLightbulbFill />, title: "Valuation" },
  { icon: <BsBugFill />, title: "Mobile Advertising" },
  { icon: <BsFillJournalBookmarkFill />, title: "Venture Capital" },
  { icon: <BsGraphUpArrow />, title: "Equity Valuation" },
  { icon: <BsFillLightbulbFill />, title: "Organizational Leadership" },
  { icon: <BsBugFill />, title: "Viral Marketing" },
  { icon: <BsFillJournalBookmarkFill />, title: "Cloud" },
  { icon: <BsGraphUpArrow />, title: "Private Equity" },
];

const areasHelp4 = [
  { icon: <BsFillLightbulbFill />, title: "Communications" },
  { icon: <BsBugFill />, title: "Financial Modeling" },
  { icon: <BsFillJournalBookmarkFill />, title: "Research and Development" },
  { icon: <BsGraphUpArrow />, title: "Web Application" },
];
const Onboarding = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [scrollTracker, setScrollTracker] = useState(0);
  const { setScreen, screen, setUserInfo, userInfo } =
    useContext(OnboardingContext);
  const [page, setPage] = useState(userInfo.role === 2 ? 1 : 2);
  const [stage, setStage] = useState("Idea");
  const [areas, setAreas] = useState(["Acquisitions"]);
  const [submitting, setSubmitting] = useState(false);

  const [advisorSliderRef, setAdvisorSliderRef] = useState(null);
  const advisorsSettings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const addArea = (area) => {
    if (!areas.includes(area)) {
      setAreas([...areas, area]);
      console.log(areas);
    } else if (areas.includes(area)) {
      const newArray = [...areas];
      const areaIndex = newArray.indexOf(area);
      console.log("area index is", areaIndex);
      newArray.splice(areaIndex, 1);
      setAreas(newArray);
      console.log(areas);
    }
  };

  const submitOnboarding = async () => {
    console.log({
      userInfo,
      [userInfo.role == 1 ? "provide_help" : "seeking_help"]: areas,
    });
    if (areas.length < 1) {
      toast({ title: "Select at least 1 option", status: "warning" });
    } else {
      setSubmitting(true);
      await authAxiosHelper
        .post(
          "profile",
          {
            ...userInfo,
            [userInfo.role == 1 ? "provide_help" : "seeking_help"]: areas,
          },
          {
            headers: { token: localStorage.getItem("cflToken") },
          }
        )
        .then((response) => {
          console.log(response);
          setSubmitting(false);
          toast({ title: response.data.msg, status: "success" });
          navigate("/dashboard");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          setSubmitting(false);
          toast({ title: error.data.msg, status: "success" });
        });
    }
  };
  return (
    <FullContainer>
      {page === 1 && userInfo.role === 2 ? (
        <div
          style={{ paddingTop: "40px" }}
          className="flex flex-col gap-20 mt-20 lg:pt-40"
        >
          <p className="text-xl text-[#0B53BF] font-semibold">
            Which Stage Are You At?
          </p>

          <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
            {stages.map((x, id) => {
              return (
                <CategoryCard
                  key={id}
                  icon={x.icon}
                  title={x.title}
                  action={() => {
                    {
                      setStage(x.title);
                    }
                  }}
                  background={x.title === stage && "#0D63E6"}
                  color={x.title === stage && "#fff"}
                />
              );
            })}
          </div>
          <div className="flex gap-2 justify-center items-center w-full">
            <Button
              size={"lg"}
              borderRadius={"full"}
              width={"200px"}
              bg={"brand.300"}
              color={"white.50"}
              _hover={{ bg: "brand.200" }}
              onClick={() => {
                console.log(userInfo);
                setUserInfo({ ...userInfo, stage: stage });
                setPage(2);
              }}
            >
              Next
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
      {page === 2 && (
        <div
          style={{ paddingTop: "40px" }}
          className="flex flex-col gap-10 lg:gap-20 pt-[100px]"
        >
          <p className="text-xl text-[#0B53BF] font-semibold">
            {userInfo.role === 2
              ? "Which areas are you seeking help with"
              : "Which areas can you help with"}
          </p>
          <HStack
            width={"full"}
            justifyContent={"center"}
            spacing={"0"}
            gap={0}
          >
            <div
              className="bg-[#FFF] py-2 flex justify-center items-center"
              style={{
                borderRadius: "4px",
                cursor: "pointer",
                marginRight: "20px",
              }}
              onClick={advisorSliderRef?.slickPrev}
            >
              <GoTriangleLeft fontSize={"24px"} color="#0080FF" />
            </div>

            <div className=" w-[100%] bg-slate-500 my-2">
              <Slider ref={setAdvisorSliderRef} {...advisorsSettings}>
                <div className="grid">
                  {areasHelp1.map((x, id) => {
                    return (
                      <CategoryCard
                        key={id}
                        icon={x.icon}
                        title={x.title}
                        action={() => {
                          addArea(x.title);
                        }}
                        background={areas.includes(x.title) ? "#0D63E6" : ""}
                        color={areas.includes(x.title) ? "#fff" : ""}
                      />
                    );
                  })}
                </div>
                <div className="grid">
                  {areasHelp2.map((x, id) => {
                    return (
                      <CategoryCard
                        key={id}
                        icon={x.icon}
                        title={x.title}
                        action={() => {
                          addArea(x.title);
                        }}
                        background={areas.includes(x.title) ? "#0D63E6" : ""}
                        color={areas.includes(x.title) ? "#fff" : ""}
                      />
                    );
                  })}
                </div>
                <div className="grid">
                  {areasHelp3.map((x, id) => {
                    return (
                      <CategoryCard
                        key={id}
                        icon={x.icon}
                        title={x.title}
                        action={() => {
                          addArea(x.title);
                        }}
                        background={areas.includes(x.title) ? "#0D63E6" : ""}
                        color={areas.includes(x.title) ? "#fff" : ""}
                      />
                    );
                  })}
                </div>
                <div className="grid">
                  {areasHelp4.map((x, id) => {
                    return (
                      <CategoryCard
                        key={id}
                        icon={x.icon}
                        title={x.title}
                        action={() => {
                          addArea(x.title);
                        }}
                        background={areas.includes(x.title) ? "#0D63E6" : ""}
                        color={areas.includes(x.title) ? "#fff" : ""}
                      />
                    );
                  })}
                </div>
              </Slider>
            </div>
            <div
              className="bg-[#FFF] py-2 flex justify-center items-center"
              style={{
                borderRadius: "4px",
                cursor: "pointer",
                marginLeft: "20px",
              }}
              onClick={advisorSliderRef?.slickNext}
            >
              <GoTriangleRight fontSize={"24px"} color="#0080FF" />
            </div>
          </HStack>
          {/* <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
            {areasHelp1.map((x, id) => {
              return (
                <CategoryCard
                  key={id}
                  icon={x.icon}
                  title={x.title}
                  action={() => {
                    addArea(x.title);
                  }}
                  background={areas.includes(x.title) ? "#0D63E6" : ""}
                  color={areas.includes(x.title) ? "#fff" : ""}
                />
              );
            })}
          </div> */}
          <div className="flex gap-2 justify-center items-center w-full">
            <Button
              borderRadius={"full"}
              size={"lg"}
              width={"200px"}
              bg={"white.50"}
              color={"brand.300"}
              _hover={{ bg: "brand.200" }}
              border={"1px solid #0E6EFF"}
              onClick={() => {
                userInfo.role === 2 ? setPage(1) : setScreen("userinfo");
                console.log(userInfo);
              }}
            >
              Back
            </Button>
            <Button
              size={"lg"}
              borderRadius={"full"}
              width={"200px"}
              bg={"brand.300"}
              color={"white.50"}
              disabled={submitting ? true : false}
              _hover={{ bg: "brand.200" }}
              onClick={() => {
                if (userInfo.role === 2) {
                  setUserInfo({ ...userInfo, seeking_help: areas });
                } else if (userInfo.role === 1) {
                  setUserInfo({ ...userInfo, provide_help: areas });
                }
                console.log(userInfo);

                submitOnboarding();
              }}
            >
              {submitting ? "Submitting" : "Submit"}
            </Button>
          </div>
        </div>
      )}
    </FullContainer>
  );
};

export default Onboarding;
