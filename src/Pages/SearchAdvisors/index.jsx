import FullContainer from "../../Components/FullContainer";
import {
  Box,
  HStack,
  Spinner,
  Text,
  Button,
  VStack,
  Image,
} from "@chakra-ui/react";
import { noAuthAxiosHelper } from "../../Helpers/axiosHelper";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import DashboardLayout from "../../Layouts/DashboardLayout";
import { BsArrowUpRight, BsStarFill } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

const SearchAdvisors = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);

  const [advisors, setAdvisors] = useState([]);
  const [allAdvisors, setAllAdvisors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeDivIndex, setActiveDivIndex] = useState(false);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedButton, setSelectedButton] = useState("ALL");

  const handelActiveDivIndex = () => {
    if (!activeDivIndex) {
      setSubCategories(categories);
    } else {
      setSubCategories(categories.slice(0, 5));
    }
    setActiveDivIndex(!activeDivIndex);
  };

  const getAllAdvisors = async () => {
    setLoading(true);
    try {
      const response = await noAuthAxiosHelper.get("/getAllAdvisors", {
        headers: {
          token: localStorage.getItem("cflToken"),
        },
      });
      setAllAdvisors(response.data.body);
      setAdvisors(response.data.body);
    } catch (error) {
      setAllAdvisors([]);
      setAdvisors([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllAdvisors();
  }, []);

  const getCategories = async () => {
    try {
      const response = await noAuthAxiosHelper.get("/getAllCategories", {
        headers: {
          token: localStorage.getItem("cflToken"),
        },
      });
      const temp = [
        {
          category_name: "ALL",
          _id: "allCategories_id",
        },
        ...response.data.body,
      ];
      setCategories(temp);

      setSubCategories(temp.slice(0, 5));
    } catch (error) {
      setCategories([
        {
          category_name: "ALL",
          _id: "allCategories_id",
        },
      ]);
    }
  };

  const filterAdvisors = (categoryName) => {
    if (categoryName !== "ALL") {
      const filteredAdvisors = allAdvisors.filter((advisor) =>
        advisor.industry.toLowerCase().includes(categoryName.toLowerCase())
      );
      filteredAdvisors.sort((a, b) => (a.category > b.category ? -1 : 1));
      setAdvisors(filteredAdvisors);
    } else {
      setAdvisors(allAdvisors);
    }
    setSelectedButton(categoryName);
  };

  return (
    <DashboardLayout>
      <Box bg={"#F5F9FF;"} width={"full"} py={"40px"}>
        <FullContainer>
          <div className="flex flex-col gap-10 px-2">
            <div className="flex flex-col">
              <p className="text-3xl font-semibold text-black">Category</p>
              <div>
                {subCategories.map((category, index) => (
                  <CategoryButton
                    title={category.category_name}
                    selectedButton={selectedButton}
                    key={category._id}
                    filterAdvisors={filterAdvisors}
                  />
                ))}
                <button
                  borderRadius={"20px"}
                  type="button"
                  className="btn btn-light"
                  onClick={() => handelActiveDivIndex()}
                >
                  {!activeDivIndex ? "Expand ↓↓" : "Collapse ↑↑"}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-10 justify-center	">
              {loading ? (
                <Spinner />
              ) : advisors.length > 0 ? (
                advisors.map((advisor, id) => {
                  return (
                    <AdvisorCard
                      action={() => {
                        navigate("/advisor-profile");
                      }}
                      id={advisor.id}
                      name={advisor.name}
                      industry={advisor.industry}
                      reats={advisor.reats}
                      profile_image={advisor.profile_image}
                      key={id}
                    />
                  );
                })
              ) : (
                <Text>No advisor matches your criteria</Text>
              )}
            </div>
          </div>
        </FullContainer>
      </Box>
    </DashboardLayout>
  );
};

const CategoryButton = (props) => {
  const backgroundColorButton = {
    1: "#CEE0FF",
    2: "#0086ff",
  };
  const fontColorButton = {
    1: "#0080FF",
    2: "white",
  };

  let btn_focus_ground =
    props.selectedButton == props.title
      ? backgroundColorButton[2]
      : backgroundColorButton[1];
  let btn_focus_font =
    props.selectedButton == props.title
      ? fontColorButton[2]
      : fontColorButton[1];
  return (
    <Button
      background={btn_focus_ground}
      style={{ color: btn_focus_font }}
      className="on-focus"
      backgroundColor={"E7F0FF"}
      padding={"1rem"}
      borderRadius={"20px"}
      border={"1px solid #CEE0FF"}
      color={"#0080FF"}
      marginRight={"4px"}
      marginTop={"4px"}
      marginBottom={"7px"}
      onClick={() => props.filterAdvisors(props.title)}
    >
      {props.title}
    </Button>
  );
};

export const ProfileButton = (props) => {
  return (
    <div
      onClick={props.action}
      className={`flex  items-center lg:w-[70%] justify-center px-[10px] py-[4px] lg:px-[20px] text-[#74a7f4] cursor-pointer lg:py-[8px] rounded-full border-2 border-[#74a7f4] hover:bg-blue-400 hover:text-white`}
    >
      <p
        style={{ marginTop: "revert", marginBottom: "revert" }}
        className="text-xs lg:text-base "
      >
        {props.text}
      </p>
    </div>
  );
};

export const AdvisorCard = ({ props }) => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/advisor-profile/${id}`);
  };

  let image_advisor =
    props.profile_image !== undefined && props.profile_image !== ""
      ? props.profile_image
      : "/assets/images/advisor.jpeg";
  return (
    <HStack
      style={{
        boxShadow: "0px 0px 20px 0px #0E6EFF1C",
        border: "1px solid #CEE0FF",
      }}
      display={"flex"}
      flexDirection={"column"}
      padding={"20px"}
      borderRadius={"10px"}
      height={"400px"}
      marginBottom={"2rem"}
    >
      <Image
        width={"300px"}
        height={"200px"}
        objectFit={"cover"}
        src={image_advisor}
        className="rounded-xl"
      />
      <HStack display={"flex"} flexDirection={"column"}>
        <VStack>
          <Text className="text-gray-800 text-xl font-semibold mb-0">
            {props.name}
          </Text>
          <Text className="mb-0">{props.industry}</Text>
        </VStack>

        <Box display={"flex"}>
          <BsStarFill color="#FFD231" className="mr-1" />
          <p className="mb-0">5.0</p>
        </Box>
      </HStack>

      <div className="pt-2">
        <Button
          type="submit"
          backgroundColor={"#0080FF"}
          color={"white"}
          borderRadius={"20px"}
          _hover={{ color: "black", backgroundColor: "white" }}
          onClick={() => handleNavigate(props.user_id)}
        >
          View Profile <FiArrowUpRight className=" text-xl ml-1" />
        </Button>
      </div>
    </HStack>
  );
};
export default SearchAdvisors;
