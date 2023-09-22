import { CalendarIcon, CheckIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";

export const ObjectiveCard = () => {
  return (
    <div
      style={{ paddingBottom: "40px" }}
      className="flex flex-col border-b-[#B4D2FF] pb-[20px] border-b-2"
    >
      <div className="flex gap-3 items-start w-[100%] ">
        <div className="flex  flex-col gap-6 mt-[4] w-[100%]">
          <div style={{ gap: "80px" }} className="flex items-center gap-60">
            <div className="flex items-center gap-6">
              {" "}
              <div className="bg-[#E7F1FF] p-4 rounded-full ">
                <FaChevronRight
                  color="#0E6EFF"
                  fontSize={"14px"}
                  fontWeight={"200"}
                />
              </div>
              <p className="text-xl text-gray-600  font-semibold">
                We are building out our pitch deck
              </p>
            </div>

            <Box
              style={{
                border: "1px solid #0086ff",
                width: "30px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100%",
                height: "30px",
                cursor: "pointer",
                textAlign: "center",
              }}
              _hover={{ bg: "#0086ff", color: "#fff" }}
            >
              <CheckIcon fontSize={"10px"} _hover={{ color: "#fff" }} />
            </Box>
          </div>

          <div className="flex gap-8 ">
            <div style={{ width: "25px" }}></div>
            <div className="flex items-center gap-4">
              <div className="w-[260px] bg-[#E0E2E6] h-[10px] rounded-full">
                <div className="w-[60%] bg-[#0E6EFF] h-[100%] rounded-full"></div>
              </div>
              <p className="text-lg text-gray-500 font-normal  ">64%</p>
            </div>
            <div className="flex gap-4 items-center">
              <CalendarIcon color={"gray.400"} />
              <p className="text-lg text-gray-500 font-light   ">
                Finish in 17 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
