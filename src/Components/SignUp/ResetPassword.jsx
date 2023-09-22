import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { authAxiosHelper, noAuthAxiosHelper } from '../../Helpers/axiosHelper';
import { useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';


const ResetPassword = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const token = searchParams.get('token');
    console.log({ "id": id, "token": token });

    const toast = useToast();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [isPassFocused, setIsPassFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const changePassword = async (data) => {
        console.log(data);
        try {
            const response = await authAxiosHelper.post("/change-password", data, {
                headers: { token: token },
            });
            toast({ title: "Password Changed Successfully", status: "success" });
            console.log(response);
            navigate("/");
        } catch (error) {
            console.log(error);
            toast({ title: error.response.data.msg, status: "warning" });
        }
    };


    return (
        <section className="signUpMain flex justify-center items-center absolute bg top-0 left-0 right-0 bottom-0">
            <div className="formWrapper sm:mx-auto sm:w-full bg-white rounded-3xl md:py-10 sm:py-9 lg:py-6  py-8 md:px-12 sm:px-7 px-4 relative z-10">
                <img style={{ margin: "30px auto" }} src="/assets/images/logo.svg" />
                <h2 className="lg:mb-7 md:mb-5 mb-4 text-center lg:text-2xl md:text-4xl text-2xl font-semibold leading-relaxed tracking-tight text-gray-600">
                    Enter The New Password
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit(changePassword)}>
                    <div className="my-2 md:py-0.5">
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="new password"
                                className="block md:text-xl lg:text-base text-base font-semibold leading-7 text-gray-500"
                            >
                                New Password
                            </label>
                        </div>
                        <div className="md:mt-3 mt-2 relative w-full">
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
                                        fill={isPassFocused ? "#0E6EFF" : "#C7C9CC"}
                                    />
                                </svg>
                            </div>
                            <input
                                id="password"
                                name="new_password"
                                type={showPassword ? "text" : "password"}
                                minLength={8}
                                maxLength={15}
                                {...register("new_password", {
                                    pattern: {
                                        value:
                                            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/,
                                        message:
                                            "Password must include at least one number and special character",
                                    },
                                })}
                                aria-invalid={errors.password ? "true" : "false"}
                                required
                                placeholder="Password"
                                className={`block w-full rounded-md border-0 md:py-3.5 py-2.5 md:pr-5 pr-3.5 pl-10 md:text-lg text-base  text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 placeholder:md:text-sm placeholder:text-lg focus:outline-none ${isPassFocused ? "ring-blue-600 focus:text-blue-600" : ""
                                    }`}
                                onFocus={() => setIsPassFocused(true)}
                                onBlur={() => setIsPassFocused(false)}
                            />

                            <div className="absolute z-50 inset-y-0 right-0 flex items-center pr-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-500 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                    onMouseEnter={() => setIsPassFocused(true)}
                                    viewBox="0 0 20 13"
                                    fill="none"
                                >
                                    <path
                                        d="M10.0007 4C9.33761 4 8.70172 4.26339 8.23288 4.73223C7.76404 5.20107 7.50065 5.83696 7.50065 6.5C7.50065 7.16304 7.76404 7.79893 8.23288 8.26777C8.70172 8.73661 9.33761 9 10.0007 9C10.6637 9 11.2996 8.73661 11.7684 8.26777C12.2373 7.79893 12.5007 7.16304 12.5007 6.5C12.5007 5.83696 12.2373 5.20107 11.7684 4.73223C11.2996 4.26339 10.6637 4 10.0007 4ZM10.0007 10.6667C8.89558 10.6667 7.83577 10.2277 7.05437 9.44628C6.27297 8.66488 5.83398 7.60507 5.83398 6.5C5.83398 5.39493 6.27297 4.33512 7.05437 3.55372C7.83577 2.77232 8.89558 2.33333 10.0007 2.33333C11.1057 2.33333 12.1655 2.77232 12.9469 3.55372C13.7283 4.33512 14.1673 5.39493 14.1673 6.5C14.1673 7.60507 13.7283 8.66488 12.9469 9.44628C12.1655 10.2277 11.1057 10.6667 10.0007 10.6667ZM10.0007 0.25C5.83398 0.25 2.27565 2.84167 0.833984 6.5C2.27565 10.1583 5.83398 12.75 10.0007 12.75C14.1673 12.75 17.7256 10.1583 19.1673 6.5C17.7256 2.84167 14.1673 0.25 10.0007 0.25Z"
                                        fill="#C7C9CC"
                                    />
                                </svg>
                            </div>
                        </div>
                        {errors.password && (
                            <p className=" text-red-500 text-xs" role="alert">
                                {errors.password?.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="buttonSign md:mt-10 mt-6 flex w-full ms:text-xl justify-center bg-blue-700  lg:py-3 md:py-5 py-3 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ResetPassword;
