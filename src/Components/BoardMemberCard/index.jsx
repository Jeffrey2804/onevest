import { CloseIcon } from "@chakra-ui/icons";
import { BiMessage } from "react-icons/bi";
import { useState } from "react";
import CTAButton from "../CTAButton";

const BoardMemberCard = () => {
  const [showHover, setShowHover] = useState(false);
  return (
    <div
      style={{ boxShadow: showHover ? "0px 0px 20px 0px #0E6EFF1C": "none", border: "1px solid #CEE0FF", minWidth: "360px"}}
      className="flex flex-col rounded-2xl bg-white cursor-pointer p-3 overflow-hidden items-center lg:items-start"
      onMouseOver={() => {
        setShowHover(true);
      }}
      onMouseLeave={() => {
        setShowHover(false);
      }}
    >
      <div className="rounded-xl flex items-center justify-center" style={{ 
        backgroundImage: 'url(/assets/images/advisor.jpeg)',
        minWidth: "340px",
        height: '253px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: false
      }}>
        {showHover ? (
          <div className="flex justify-center flex-col items-center gap-4 w-full bg-white bg-opacity-50" style={{height: '100%'}}>
            <CTAButton
                text={
                  <div className="flex flex-row items-center justify-center px-2 py-1 w-full">
                    <BiMessage color={"white"} className="text-sm"/>
                    <p className="font-extralight text-white p-0 m-0 text-sm px-2">Go to Chat</p>
                  </div>
                }
                bg={"#0080FF"}
                border={"1px solid #0080FF"}
                padding={"1px"}
                color={"black"}
                borderRadius={"40px"}
                width={"200px"}
              />

            <CTAButton
                text={
                  <div className="flex flex-row items-center justify-center px-2 py-1 w-full">
                    <CloseIcon color={"#0080FF"} className="text-sm"/>
                    <p className="font-extralight text-[#0080FF] p-0 m-0 text-sm px-2">Remove from board</p>
                  </div>
                }
                bg={"white"}
                padding={"1px"}
                color={"#0080FF"}
                borderRadius={"40px"}
                hoverbg={"#EFEFEF"}
                width={"200px"}
              />
          </div>
        ) : (
          ""
        )}
      </div>

      <p className="text-gray-800 text-xl font-semibold pt-3 mb-0">
        Sean Walsh
      </p>
      <p className="text-gray-800 text-md mb-0">Creative Director at CofoundersLab</p>
    </div>
  );
};

export default BoardMemberCard;