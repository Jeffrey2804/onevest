import FullContainer from "../../Components/FullContainer";
import { HStack, Button, Text, VStack, Image } from "@chakra-ui/react";
import { FiEdit2 } from 'react-icons/fi';
import CTAButton from "../CTAButton";
import { useParams } from "react-router-dom";
const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex e commodo consequat.";

const ProfileCard = (props) => {

  const details = props?.profile?.[0]; // Use optional chaining to avoid errors
  const isProfileLoading = props.isProfileLoading;
  console.log(isProfileLoading);
  return (
    <FullContainer>
      <div className="flex flex-col gap-20">
        <div>
          <Text className="text-3xl text-black font-semibold">
            {props.title || "Founder Profile"}
          </Text>
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
            <div className="flex flex-col lg:flex-row w-[100%] justify-between gap-5">
              <div className="flex flex-col lg:gap-0 lg:items-start  items-center lg:w-[800px]">
                <div className="flex flex-col lg:items-start items-center">
                  {
                    details?.profile_details[0]?.profile_image ? <Image width={"120px"} height={"120px"} borderRadius={"50%"} objectFit={"cover"} src={`${details?.profile_details[0]?.profile_image}`} /> : <Image src={"/assets/images/user-item-image.png"} />
                  }
                  {/* <Image src={"/assets/images/user-item-image.png"} /> */}
                  <VStack
                    alignItems={"center"}
                    justifyContent={"center"}
                    backgroundColor={"white"}
                    transform={'translate(70px, -30px)'}
                    padding={["5px 10px", "5px 10px", "10px"]}
                    fontSize={"12px"}
                    borderRadius={"10%"}
                    border={"1px solid #CEE0FF"}
                    minHeight={8}
                    minWidth={8}
                  >
                    <FiEdit2 />
                  </VStack>
                </div>
                <div className="flex flex-col lg:items-start lg:pr-3">
                  <div className="flex lg:items-start items-center flex-col">
                    <Text fontSize={"25px"} color={"black"} fontWeight={"700"} letterSpacing={"2px"} padding={"0"}>{details?.profile_details[0]?.name}</Text>
                    <p className="text-xl p-0">
                      {details?.profile_details[0]?.position ? details?.profile_details[0]?.position : "Creative Director"} at {details?.profile_details[0]?.stage}
                    </p>
                  </div>
                  <p className="text-lg lg:w-[90%] mb-0 pb-0">
                    {details?.profile_details[0]?.name ? details?.profile_details[0]?.name : bio.slice(0, 229)}
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:w-[300px] justify-center items-end">
                {props.buttons ?
                  <div className="flex flex-col w-full">
                    <CTAButton backgroundColor={"#0080FF"} action={props.action} color={"white"} padding={"24px 24px"} fontSize={"lg"} borderRadius={"30px"}>
                      Book a Session
                    </CTAButton>
                    <Button backgroundColor={"#FFF"} padding={"24px 24px"} fontSize={"lg"} borderRadius={"30px"} border={"1px solid #CEE0FF"} marginTop={"20px"}>
                      Add to my board
                    </Button>
                  </div> : <HStack
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
                    boxShadow={"0px 0px 20px 0px #0E6EFF1C"}
                  >
                    <Button className="absolute top-[-25px]" backgroundColor={"E7F0FF"} padding={"1rem"} borderRadius={"20px"} border={"1px solid #0080FF"} color={"#0080FF"}>
                      Company Stage
                    </Button>
                    <img src="/assets/images/bookmark.png" alt="bookmark" />
                    <Text fontSize={"3xl"} color={"#0080FF"} fontWeight={"500"}>MVP</Text>
                  </HStack>}
              </div>
            </div>
          </VStack>
        </div>
      </div>
    </FullContainer>
  );
};


export default ProfileCard;