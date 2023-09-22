import { useState } from "react";
import "./styles/global.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { noAuthAxiosHelper } from "../../Helpers/axiosHelper";
import { Box, Button, HStack, Image, Input, Spinner, Text, useToast } from "@chakra-ui/react";
import ForgetPassword from "./ForgetPassword";
import { FiArrowUpRight } from "react-icons/fi";

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPassFocused, setIsPassFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [forgetPsswordOpen, setForgetPassowerdOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const login = async (data) => {
    setIsLoading(true);
    await noAuthAxiosHelper
      .post("/login", data)
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        toast({ title: "User Logged In Successfully", status: "success" });
        localStorage.setItem("cflToken", response.data.body[0].token);
        localStorage.setItem("cfl_id", response.data.body[0]._id);
        navigate("/dashboard");
      })

      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        toast({ title: error.response.data.msg, status: "warning" });
      });
  };
  return (
    <section className="signUpMain flex justify-center items-center absolute bg top-0 left-0 right-0 bottom-0">
      <div className="formWrapper sm:mx-auto sm:w-full rounded-3xl md:py-10 sm:py-9 lg:py-6  py-8 md:px-12 sm:px-7 px-4 relative z-10" style={{ display: forgetPsswordOpen ? "none" : "block" }}>

        <div className="icon-wrapper">
          <div className="icon-1">      </div>
          <div className="icon-2">      </div>
          <div className="icon-3">      </div>
          <div className="icon-4">      </div>
          <div className="icon-5">      </div>
          <div className="icon-6">      </div>
        </div>

        <Image width={"300px"} margin={"40px auto"} paddingLeft={"3rem"} src="/assets/images/newLogo.png" />
        <HStack flexDirection={"column"} width={"450px"} backgroundColor={"#ffff"} padding={"20px 25px"} position={"relative"} borderRadius={"20px"} margin={"auto"} border={"1px solid #CEE0FF"}>
          <h2 className="my-2 text-black font-bold">
            Sign In
          </h2>
          <Button border={"1px solid #CEE0FF"} color={"#0080FF"} backgroundColor={"#E7F0FF"} borderRadius={"20px"} position={"absolute"} top={"-20px"}>Already have an account?</Button>
          <form className="space-y-6 w-full" onSubmit={handleSubmit(login)}>
            <div className="my-2 md:py-0.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="Email"
                    className="block md:text-xl lg:text-base text-base leading-7 text-#344054 font-bold"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="md:mt-3 mt-2 relative w-full">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  {...register("email")}
                  placeholder="Email"
                  border={"1px solid #D0D5DD"}
                  fontWeight={"bold"}
                  color={"black"}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                />
              </div>
            </div>

            <div className="my-2 md:py-0.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="Email"
                  className="block md:text-xl lg:text-base text-base leading-7 text-#344054 font-bold"
                >
                  Password
                </label>
              </div>
              <div className="md:mt-3 mt-2 relative w-full">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  required
                  placeholder="Password"
                  border={"1px solid #D0D5DD"}
                  fontWeight={"bold"}
                  color={"black"}
                  onFocus={() => setIsPassFocused(true)}
                  onBlur={() => setIsPassFocused(false)}
                />
              </div>
            </div>
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} cursor={"pointer"} onClick={() => setForgetPassowerdOpen(!forgetPsswordOpen)}>
              <label
                htmlFor="Email"
                className="block md:text-xl lg:text-base text-base leading-7 text-black font-bold"
                style={{ cursor: "pointer" }}
              >
                Forget Password?
              </label>
            </Box>

            <Box>
              <Button type="submit" backgroundColor={"#0080FF"} color={"#FFFFFF"} fontWeight={"bold"} borderRadius={"20px"} _hover={{ color: "black", backgroundColor: "white" }} width={"110px"} justifyContent={"space-around"} display={"flex"}>
                {isLoading ? <Spinner color='red.500' /> : <>Sign in <FiArrowUpRight /></>}
              </Button>
            </Box>

            <Box>
              <Text cursor={"pointer"} fontWeight={"400"}>Do you have an Account? <span style={{ color: "#0080FF", fontWeight: "bold" }} onClick={() => navigate("/register")}>Sign Up</span></Text>
            </Box>
          </form>
        </HStack>
      </div>

      {
        forgetPsswordOpen && <ForgetPassword setForgetPassowerdOpen={setForgetPassowerdOpen} />
      }
    </section>
  );
};

export default Login;
