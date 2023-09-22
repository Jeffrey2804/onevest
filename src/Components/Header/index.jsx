/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import FullContainer from "../FullContainer";
import { Link, useNavigate } from "react-router-dom";
import CTAButton from "../CTAButton";


import { HiOutlineUser } from "react-icons/hi";
import { useEffect, useState } from "react";
const Header = () => {
  const navigate = useNavigate();
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    // Add an event listener to track scroll position
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define a CSS class for the fixed header
  const headerStyles = {
    position: isHeaderFixed ? "fixed" : "relative",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff", // Change the background color as needed
    zIndex: 1000, // Adjust the z-index as needed
    borderBottom: isHeaderFixed && "1px solid #CEE0FF",
  };

  return (
    <FullContainer borderBottom={"1px solid #CEE0FF"} bg={"#fff"}>
      <HStack
        style={headerStyles}
      >
        <HStack
          alignItems={"center"}
          width={isHeaderFixed ? "73%" : "full"}
          margin={"auto"}
          justifyContent={"space-between"}
          paddingY={"20px"}
        >
          <Image
            src="/assets/images/newLogo.png"
            width={["200px", "200px", "300px", "300px"]}
            onClick={() => {
              navigate("/");
            }}
          />
          <HStack
            alignItems={"center"}
            gap={10}
            display={["none", "none", "none", "flex"]}
          >
            {/* <NavLink text={"For Advisors"} link={"/advisors"} />
          <NavLink text={"For Founders"} link={"/companies"} /> */}
          </HStack>
          <InputGroup
            size={"md"}
            width={"200px"}
            display={["none", "none", "none", "none", "none"]}
          >
            <InputLeftElement>
              <SearchIcon color={"brand.300"} />
            </InputLeftElement>
            <Input
              color={"brand.300"}
              placeholder="Search"
              borderRadius={"full"}
              _focusVisible={{ outline: "none" }}
              _placeholder={{ color: "brand.300" }}
            />
          </InputGroup>
          <HStack
            alignItems={"center"}
            gap={5}
            justifyContent={"center"}
            display={["none", "none", "none", "flex"]}
          >
            <NavLink text={"Login"} link={"/login"} />

            {/* <Button
              size={"ls"}
              background={"#0086ff"}
              color={"white.50"}
              px={"20px"}
              py={"9px"}
              width={"110px"}
              display={"flex"}
              justifyContent={"space-around"}
              borderRadius={"full"}
              _hover={{ background: "brand.400" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              <span>Login</span>  <div className="text-bold text-lg"><FiArrowUpRight /></div>
            </Button> */}

            <Button
              size={"ls"}
              background={"#0086ff"}
              color={"white.50"}
              px={"20px"}
              py={"9px"}
              width={"140px"}
              display={"flex"}
              justifyContent={"space-around"}
              borderRadius={"full"}
              _hover={{ background: "brand.400" }}
              onClick={() => {
                navigate("/register");
              }}
            >
              <span>Get Started</span>
            </Button>
          </HStack>
          <Box display={["block", "block", "block", "none"]}>
            <HamburgerIcon fontSize={"24px"} color={"brand.400"} />
          </Box>
        </HStack>
      </HStack>
    </FullContainer>
  );
};

export const AuthHeader = () => {
  const navigate = useNavigate();
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    // Add an event listener to track scroll position
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define a CSS class for the fixed header
  const headerStyles = {
    position: isHeaderFixed ? "fixed" : "relative",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff", // Change the background color as needed
    zIndex: 1000, // Adjust the z-index as needed
    borderBottom: isHeaderFixed && "1px solid #CEE0FF",
  };

  const handleLogout = () => {
    localStorage.removeItem("cflToken");
    localStorage.removeItem("username");
    navigate("/");
    location.reload();
  }
  return (
    <FullContainer borderBottom={"1px solid #CEE0FF"} bg={"#fff"}>
      <HStack style={headerStyles}>
        <HStack
          alignItems={"center"}
          width={isHeaderFixed ? "73%" : "full"}
          justifyContent={"space-between"}
          paddingY={"20px"}
          margin={"auto"}
        >
          <Image
            src="/assets/images/newLogo.png"
            width={["200px", "200px", "200px", "300px"]}
            onClick={() => {
              navigate("/dashboard");
            }}
          />

          <HStack
            alignItems={"center"}
            gap={5}
            display={["none", "none", "none", "flex"]}
          >
            {/* <NavLink text={"Dashboard"} link={"/dashboard"} /> */}
            <div onClick={() => navigate('/advisor-profile')}>
              <CTAButton
                text={
                  <HiOutlineUser />
                }
                bg={"white"}
                border={"1px solid #E2E8f0"}
                fontSize={"1.4rem"}
                padding={"1px"}
                color={"black"}
                borderRadius={"10px"}
                fontWeight={"200"}
                hoverbg={"#E2E8f0"}
              />
            </div>
            <div onClick={() => navigate('/message')}>
              <CTAButton
                text={
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20.25 8.511C21.134 8.795 21.75 9.639 21.75 10.608V14.894C21.75 16.03 20.903 16.994 19.77 17.087C19.43 17.114 19.09 17.139 18.75 17.159V20.25L15.75 17.25C14.396 17.25 13.056 17.195 11.73 17.087C11.4413 17.0637 11.1605 16.9813 10.905 16.845M20.25 8.511C20.0955 8.46127 19.9358 8.42939 19.774 8.416C17.0959 8.19368 14.4041 8.19368 11.726 8.416C10.595 8.51 9.75 9.473 9.75 10.608V14.894C9.75 15.731 10.21 16.474 10.905 16.845M20.25 8.511V6.637C20.25 5.016 19.098 3.611 17.49 3.402C15.4208 3.13379 13.3365 2.99951 11.25 3C9.135 3 7.052 3.137 5.01 3.402C3.402 3.611 2.25 5.016 2.25 6.637V12.863C2.25 14.484 3.402 15.889 5.01 16.098C5.587 16.173 6.167 16.238 6.75 16.292V21L10.905 16.845" stroke="#1E1E1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </>
                }
                bg={"white"}
                border={"1px solid #E2E8f0"}
                fontSize={"1.4rem"}
                padding={"1px"}
                color={"black"}
                borderRadius={"10px"}
                fontWeight={"200"}
                hoverbg={"#E2E8f0"}
              />
            </div>

            <div onClick={() => navigate('/notifications')}>
              <CTAButton
                text={
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M14.857 17.082C16.7202 16.8614 18.5509 16.4217 20.311 15.772C18.8204 14.1208 17.9967 11.9745 18 9.75V9.05V9C18 7.4087 17.3678 5.88258 16.2426 4.75736C15.1174 3.63214 13.5913 3 12 3C10.4087 3 8.88257 3.63214 7.75735 4.75736C6.63213 5.88258 5.99999 7.4087 5.99999 9V9.75C6.00301 11.9746 5.17898 14.121 3.68799 15.772C5.42099 16.412 7.24799 16.857 9.14299 17.082M14.857 17.082C12.959 17.3071 11.041 17.3071 9.14299 17.082M14.857 17.082C15.0011 17.5319 15.0369 18.0094 14.9616 18.4757C14.8862 18.942 14.7018 19.384 14.4234 19.7656C14.1449 20.1472 13.7803 20.4576 13.3592 20.6716C12.9381 20.8856 12.4724 20.9972 12 20.9972C11.5276 20.9972 11.0619 20.8856 10.6408 20.6716C10.2197 20.4576 9.85506 20.1472 9.57661 19.7656C9.29816 19.384 9.11375 18.942 9.0384 18.4757C8.96305 18.0094 8.99889 17.5319 9.14299 17.082" stroke="#1E1E1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </>
                }
                bg={"white"}
                border={"1px solid #E2E8f0"}
                fontSize={"1.4rem"}
                padding={"1px"}
                color={"black"}
                borderRadius={"10px"}
                fontWeight={"200"}
                hoverbg={"#E2E8f0"}
              />
            </div>
            <div onClick={() => handleLogout()} className="text-bold">
              <CTAButton
                text={
                  <>
                    Logout
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginLeft: "10px" }}>
                      <g clip-path="url(#clip0_26_2554)">
                        <path d="M11.6667 6.66659V4.99992C11.6667 4.55789 11.4911 4.13397 11.1785 3.82141C10.8659 3.50885 10.442 3.33325 10 3.33325H4.16667C3.72464 3.33325 3.30072 3.50885 2.98816 3.82141C2.67559 4.13397 2.5 4.55789 2.5 4.99992V14.9999C2.5 15.4419 2.67559 15.8659 2.98816 16.1784C3.30072 16.491 3.72464 16.6666 4.16667 16.6666H10C10.442 16.6666 10.8659 16.491 11.1785 16.1784C11.4911 15.8659 11.6667 15.4419 11.6667 14.9999V13.3333" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.5 10H17.5L15 7.5" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15 12.5L17.5 10" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_26_2554">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </>
                }
                bg={"#0086ff"}
                fontSize={"md"}
                padding={"5px 30px"}
                color={"white"}
                borderRadius={"2rem"}
                fontWeight={"600"}
              />
            </div>

            {/* <Button
            size={"md"}
            background={"#0086ff"}
            color={"white.50"}
            px={"30px"}
            py={"15px"}
            borderRadius={"full"}
            _hover={{ background: "brand.400" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Logout
          </Button> */}
          </HStack>
          <Box display={["block", "block", "block", "none"]}>
            <HamburgerIcon fontSize={"24px"} color={"brand.400"} />
          </Box>
        </HStack>
      </HStack>
    </FullContainer>
  );
};

export default Header;

const NavLink = (props) => {
  return (
    <>
      <Link to={props.link}>
        <Text
          fontSize={"md"}
          color={"white.900"}
          _hover={{ color: "brand.300" }}
          fontWeight={"600"}
          marginBottom={"0px"}
        >
          {props.text}
        </Text>
      </Link>
    </>
  );
};
