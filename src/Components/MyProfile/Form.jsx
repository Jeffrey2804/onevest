import { useState } from "react";
import { authAxiosHelper } from "../../Helpers/axiosHelper";

import { AiOutlineMail } from 'react-icons/ai';
import { BsArrowUpRight } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const fetchProfile = async () => {
    authAxiosHelper
      .get("")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [values, setValues] = useState({
    firstName: "Sean",
    lastName: "Walsh",
    email: "seanwalsh33@gmail.com",
    Position: "Creative Director at CoFoundersLab",
    country: "United States",
    State: "Texas",
    Biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex e commodo consequat. Duis aute irure dolor in reprehenderit in volu tate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
  });

  const [valuesChange, setValuesChange] = useState(false);

  // Change Values
  function changeFirstName(value) {
    if (value != values.firstName) {
      setValues({ firstName: value });
      setValuesChange(true);
    }
  }

  function changeLastName(value) {
    if (value != values.firstName) {
      setValues({ lastName: value });
      setValuesChange(true);
    }
  }

  function changeEmail(value) {
    if (value != values.firstName) {
      setValues({ email: value });
      setValuesChange(true);
    }
  }

  function changePosition(value) {
    if (value != values.firstName) {
      setValues({ Position: value });
      setValuesChange(true);
    }
  }

  function changeState(value) {
    if (value != values.firstName) {
      setValues({ State: value });
      setValuesChange(true);
    }
  }

  function changeBiography(value) {
    if (value != values.firstName) {
      setValues({ Biography: value });
      setValuesChange(true);
    }
  }

  // Send Data To Data Base
  function sendData() {
    if (valuesChange == true) {
      // Send Data
    }
  }

  return (
    <form
      onSubmit={(e) => {
        sendData();
        e.preventDefault();
        navigate('/advisor-profile')
      }}
    >
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-1 mt-3">
          <label htmlFor="firtsName" className="text-black">
            First Name
          </label>
          <input
            type="text"
            value={values.firstName}
            onChange={(e) => changeFirstName(e.target.value)}
            id="firtsName"
            className="block mt-1 w-full rounded-[10px] py-2 pl-[15px] outline-none text-[#063173] border-[1px] border-solid border-[#B4D2FF] font-semibold"
          />
        </div>
        <div className="col-span-1 mt-3">
          <label htmlFor="lastName" className="text-black">
            Last Name
          </label>
          <input
            type="text"
            value={values.lastName}
            onChange={(e) => changeLastName(e.target.value)}
            id="lastName"
            className="block  mt-1 w-full rounded-[10px] py-2 pl-[15px] outline-none text-[#063173] border-[1px] border-solid border-[#B4D2FF] font-semibold"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-1 mt-3">
          <label htmlFor="email" className="text-black">
            Email
          </label>
          <input
            type="email"
            value={values.email}
            onChange={(e) => changeEmail(e.target.value)}
            id="email"
            className="block mt-1 md:w-[100%] rounded-[10px] py-2 pl-[40px] outline-none text-[#063173] border-[1px] border-solid border-[#B4D2FF] font-semibold"
          />
          <AiOutlineMail  className="-translate-y-7 translate-x-3 text-lg" />
        </div>
        <div className="col-span-1 mt-3">
          <label htmlFor="position" className="text-black">
            Position
          </label>
          <input
            type="text"
            value={values.Position}
            onChange={(e) => changePosition(e.target.value)}
            id="position"
            className="block  mt-1 md:w-[100%] rounded-[10px] py-2 pl-[15px] outline-none text-[#063173] border-[1px] border-solid border-[#B4D2FF] font-semibold"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-1 mt-3">
          <label htmlFor="companyState" className="text-black">
            Company Stage
          </label>
          <select
            className="block  mt-1 md:w-[100%] rounded-[10px] py-2 pl-[10px] outline-none text-[#063173] border-[1px] border-solid border-[#B4D2FF] font-semibold"
            id="companyStage"
          >
            <option>Idea</option>
            <option>Startup</option>
            <option>MVP</option>
            <option>Growth</option>
          </select>
        </div>
        <div className="col-span-1 mt-3">
          <label htmlFor="What you need help with" className="text-black">
            What you need help with
          </label>
          <select
            className="block  mt-1 md:w-[100%] rounded-[10px] py-2 pl-[10px] outline-none text-[#063173] border-[1px] border-solid border-[#B4D2FF] font-semibold"
            id="companyStage"
          >
            <option>Idea</option>
            <option>Startup</option>
            <option>MVP</option>
            <option>Growth</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-1 mt-3">
          <label htmlFor="country" className="text-black">
            Country
          </label>
          <select
            className="block  mt-1 md:w-[100%] rounded-[10px] py-2 pl-[10px] outline-none text-[#063173] border-[1px] border-solid border-[#B4D2FF] font-semibold"
            id="country"
          >
            <option>United States</option>
            <option>Spain</option>
            <option>Canada</option>
          </select>
        </div>
        <div className="col-span-1 mt-3">
          <label htmlFor="state" className="text-black">
            State
          </label>
          <select
            className="block  mt-1 md:w-[100%] rounded-[10px] py-2 pl-[10px] outline-none text-[#063173] border-[1px] border-solid border-[#B4D2FF] font-semibold"
            id="state"
          >
            <option>California</option>
            <option>New York</option>
            <option>Florida</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="biography" className="text-black">
          Biography
        </label>
        <textarea
          type="text"
          value={values.Biography}
          onChange={(e) => changeBiography(e.target.value)}
          id="biography"
          className="block md:w-[100%] min-h-[200px]  mt-1 w-full rounded-[10px] py-2 pl-[15px] outline-none text-[#063173] border-[1px] border-solid border-[#B4D2FF] font-semibold"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-600 duration-500 focus:outline-none w-[116px] py-[8px] rounded-[50px] text-white text-[20px] font-semibold border-[1px] border-solid border-blue-600 mt-4 hover:bg-blue-800 hover:text-blue-600 flex flex-row items-center justify-center"
      >
        Save {" "}
        <BsArrowUpRight className="text-lg text-white mx-1" />
      </button>
    </form>
  );
};

export default Form;
