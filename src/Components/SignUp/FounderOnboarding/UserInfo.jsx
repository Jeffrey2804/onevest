import { useState, useContext } from "react";
import { OnboardingContext } from ".";
import "../styles/global.css";
import { Button, Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Box,
  HStack,
  Image,
  Input,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";

const UserInfo = () => {
  const { setScreen, setUserInfo, userInfo } = useContext(OnboardingContext);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isCompanyFocused, setIsCompanyFocused] = useState(false);
  const [isBioFocused, setisBioFocused] = useState(false);
  const [page, setPage] = useState(1);

  const handleInfoSubmit = (data) => {
    setUserInfo({ ...userInfo, ...data });
    console.log(userInfo);
    setScreen("onboarding");
  };

  return (
    <section className="signUpMain flex justify-center items-center absolute bg top-0 left-0 right-0 bottom-0 w-full">
      <div className="formWrapper sm:mx-auto sm:w-full bg-white rounded-3xl md:py-10 sm:py-9 lg:py-6  py-8 md:px-12 sm:px-7 px-4 relative z-10">
        <div className="icon-wrapper">
          <div className="icon-1"> </div>
          <div className="icon-2"> </div>
          <div className="icon-3"> </div>
          <div className="icon-4"> </div>
          <div className="icon-5"> </div>
          <div className="icon-6"> </div>
        </div>

        <h2 className="my-2 text-black font-bold text-center">
          {page === 1 ? "Are you a" : "User Info..."}
        </h2>
        {page === 1 && (
          <div className="flex gap-2 justify-center items-center w-full">
            <Button
              borderRadius={"full"}
              bg={"brand.300"}
              color={"white.50"}
              _hover={{ bg: "brand.200" }}
              onClick={() => {
                setUserInfo({
                  ...userInfo,
                  role: 2,
                });
                setPage(2);
              }}
            >
              Founder
            </Button>
            <Button
              borderRadius={"full"}
              border={"1px solid #0E6EFF"}
              bg={"white.50"}
              color={"brand.300"}
              _hover={{ bg: "brand.200" }}
              onClick={() => {
                setUserInfo({
                  ...userInfo,
                  role: 1,
                });
                setPage(2);
              }}
            >
              Advisor
            </Button>
          </div>
        )}
        {page === 2 && (
          <form className="space-y-6" onSubmit={handleSubmit(handleInfoSubmit)}>
            <div>
              <div className="my-2 md:py-0.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="Email"
                    className="block md:text-xl lg:text-base text-base leading-7 text-#344054 font-bold"
                  >
                    Name
                  </label>
                </div>
                <div className="md:mt-3 mt-2 relative w-full">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    border={"1px solid #D0D5DD"}
                    fontWeight={"bold"}
                    color={"black"}
                    required
                    placeholder="Steve"
                    value={localStorage.getItem("onboardName")}
                    disabled
                    onFocus={() => setIsNameFocused(true)}
                    onBlur={() => setIsNameFocused(false)}
                  />
                </div>
              </div>

              <div className="my-2 md:py-0.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="Email"
                    className="block md:text-xl lg:text-base text-base leading-7 text-#344054 font-bold"
                  >
                    Company Name
                  </label>
                </div>
                <div className="md:mt-3 mt-2 relative w-full">
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    border={"1px solid #D0D5DD"}
                    fontWeight={"bold"}
                    color={"black"}
                    required
                    {...register("company")}
                    placeholder="Your Company"
                    onFocus={() => setIsCompanyFocused(true)}
                    onBlur={() => setIsCompanyFocused(false)}
                  />
                </div>
              </div>
              <div className="my-2 md:py-0.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="Email"
                    className="block md:text-xl lg:text-base text-base leading-7 text-#344054 font-bold"
                  >
                    Role
                  </label>
                </div>
                <div className="md:mt-3 mt-2 relative w-full">
                  <Input
                    id="role"
                    name="role"
                    type="text"
                    border={"1px solid #D0D5DD"}
                    fontWeight={"bold"}
                    color={"black"}
                    required
                    {...register("company_role")}
                    placeholder="Your Role"
                    onFocus={() => setIsCompanyFocused(true)}
                    onBlur={() => setIsCompanyFocused(false)}
                  />
                </div>
              </div>
              {/* <div className="my-2 md:py-0.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="Email"
                    className="block md:text-xl lg:text-base text-base leading-7 text-#344054 font-bold"
                  >
                    Industry
                  </label>
                </div>
                <Select
                  placeholder="Select option"
                  border={"1px solid #D0D5DD"}
                  mt={2}
                  color={"blackAlpha.400"}
                  {...register("industry")}
                >
                  <option value="IT">IT</option>
                  <option value="Medicine">Medicine</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Crypto">Crypto</option>
                </Select> */}
              {/* <div className="md:mt-3 mt-2 relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 20 21"
                >
                  <path
                    d="M10.0007 14.6673C10.4427 14.6673 10.8666 14.4917 11.1792 14.1792C11.4917 13.8666 11.6673 13.4427 11.6673 13.0007C11.6673 12.5586 11.4917 12.1347 11.1792 11.8221C10.8666 11.5096 10.4427 11.334 10.0007 11.334C9.55862 11.334 9.1347 11.5096 8.82214 11.8221C8.50958 12.1347 8.33398 12.5586 8.33398 13.0007C8.33398 13.4427 8.50958 13.8666 8.82214 14.1792C9.1347 14.4917 9.55862 14.6673 10.0007 14.6673ZM15.0007 7.16732C15.4427 7.16732 15.8666 7.34291 16.1792 7.65547C16.4917 7.96803 16.6673 8.39196 16.6673 8.83398V17.1673C16.6673 17.6093 16.4917 18.0333 16.1792 18.3458C15.8666 18.6584 15.4427 18.834 15.0007 18.834H5.00065C4.55862 18.834 4.1347 18.6584 3.82214 18.3458C3.50958 18.0333 3.33398 17.6093 3.33398 17.1673V8.83398C3.33398 8.39196 3.50958 7.96803 3.82214 7.65547C4.1347 7.34291 4.55862 7.16732 5.00065 7.16732H5.83398V5.50065C5.83398 4.39558 6.27297 3.33577 7.05437 2.55437C7.83577 1.77297 8.89558 1.33398 10.0007 1.33398C10.5478 1.33398 11.0896 1.44176 11.5952 1.65115C12.1007 1.86055 12.56 2.16746 12.9469 2.55437C13.3338 2.94128 13.6408 3.40061 13.8501 3.90614C14.0595 4.41166 14.1673 4.95348 14.1673 5.50065V7.16732H15.0007ZM10.0007 3.00065C9.33761 3.00065 8.70172 3.26404 8.23288 3.73288C7.76404 4.20173 7.50065 4.83761 7.50065 5.50065V7.16732H12.5007V5.50065C12.5007 4.83761 12.2373 4.20173 11.7684 3.73288C11.2996 3.26404 10.6637 3.00065 10.0007 3.00065Z"
                    fill={isBioFocused ? "#0E6EFF" : "#C7C9CC"}
                  />
                </svg>
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
                className={`block w-full rounded-md border-0 md:py-3.5 py-2.5 md:pr-5 pr-3.5 pl-10 md:text-lg text-base  text-black  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 placeholder:md:text-sm placeholder:text-lg focus:outline-none ${
                  isBioFocused ? "ring-blue-600 focus:text-blue-600" : ""
                }`}
                onFocus={() => setisBioFocused(true)}
                onBlur={() => setisBioFocused(false)}
              />
              <div className="absolute z-50 inset-y-0 right-0 flex items-center pr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-black  cursor-pointer"
                  onClick={togglePasswordVisibility}
                  onMouseEnter={() => setisBioFocused(true)}
                  viewBox="0 0 20 13"
                  fill="none"
                >
                  <path
                    d="M10.0007 4C9.33761 4 8.70172 4.26339 8.23288 4.73223C7.76404 5.20107 7.50065 5.83696 7.50065 6.5C7.50065 7.16304 7.76404 7.79893 8.23288 8.26777C8.70172 8.73661 9.33761 9 10.0007 9C10.6637 9 11.2996 8.73661 11.7684 8.26777C12.2373 7.79893 12.5007 7.16304 12.5007 6.5C12.5007 5.83696 12.2373 5.20107 11.7684 4.73223C11.2996 4.26339 10.6637 4 10.0007 4ZM10.0007 10.6667C8.89558 10.6667 7.83577 10.2277 7.05437 9.44628C6.27297 8.66488 5.83398 7.60507 5.83398 6.5C5.83398 5.39493 6.27297 4.33512 7.05437 3.55372C7.83577 2.77232 8.89558 2.33333 10.0007 2.33333C11.1057 2.33333 12.1655 2.77232 12.9469 3.55372C13.7283 4.33512 14.1673 5.39493 14.1673 6.5C14.1673 7.60507 13.7283 8.66488 12.9469 9.44628C12.1655 10.2277 11.1057 10.6667 10.0007 10.6667ZM10.0007 0.25C5.83398 0.25 2.27565 2.84167 0.833984 6.5C2.27565 10.1583 5.83398 12.75 10.0007 12.75C14.1673 12.75 17.7256 10.1583 19.1673 6.5C17.7256 2.84167 14.1673 0.25 10.0007 0.25Z"
                    fill="#C7C9CC"
                  />
                </svg>
              </div>
            </div> */}
              {/* </div> */}
              <div className="my-2 md:py-0.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="Email"
                    className="block md:text-xl lg:text-base text-base leading-7 text-#344054 font-bold"
                  >
                    Location
                  </label>
                </div>
                <Select
                  placeholder="Select option"
                  mt={2}
                  color={"blackAlpha.400"}
                  border={"1px solid #D0D5DD"}
                  {...register("location")}
                >
                  <option value="USA">USA</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Nigeria">Nigeria</option>
                </Select>
              </div>
              <div className="my-2 md:py-0.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="Email"
                    className="block md:text-xl lg:text-base text-base leading-7 text-#344054 font-bold"
                  >
                    Bio
                  </label>
                </div>
                <div className="md:mt-3 mt-2 relative w-full">
                  <Input
                    id="bio"
                    name="bio"
                    required
                    border={"1px solid #D0D5DD"}
                    fontWeight={"bold"}
                    color={"black"}
                    onFocus={() => setisBioFocused(true)}
                    onBlur={() => setisBioFocused(false)}
                  />
                </div>
              </div>
              <Box>
                <Button
                  type="submit"
                  backgroundColor={"#0080FF"}
                  color={"#FFFFFF"}
                  fontWeight={"bold"}
                  borderRadius={"20px"}
                  _hover={{ color: "black", backgroundColor: "white" }}
                  width={"110px"}
                  justifyContent={"space-around"}
                  display={"flex"}
                >
                  Submit
                </Button>
              </Box>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default UserInfo;
