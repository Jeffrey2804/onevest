import {
  FaPaperPlane,
  FaEllipsisH,
  FaPaperclip,
  FaSearch,
} from "react-icons/fa";
import image from "/assets/images/person.png";
import PersonMessage from "./PersonMessage";
import { io } from "socket.io-client";

import FullContainer from "../FullContainer";
import DashboardLayout from "../../Layouts/DashboardLayout";
import { useEffect, useRef, useState } from "react";
import { authAxiosHelper } from "../../Helpers/axiosHelper";
import { BiSolidChat } from "react-icons/bi";

function Message() {
  const lastMessageRef = useRef(null);

  const socket = io("https://advisor-buildout.onrender.com/");
  console.log(socket);
  const [chatsList, setChatsList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [reciever, setReceiver] = useState(null);
  const [sender, setSender] = useState([]);

  const user_id = localStorage.getItem("cfl_id");
  const searchChats = (e) => {
    if (e.target.value !== "") {
      const searchResult = chatsList.filter((member) => {
        return member?.user_profile_details[0]?.name
          .toLowerCase()
          .includes(e.target.value);
      });
      setFilteredList(searchResult);
    } else {
      setFilteredList([]);
    }
  };
  const fetchChats = async () => {
    await authAxiosHelper("/chat/user/list", {
      headers: { token: localStorage.getItem("cflToken") },
    })
      .then((response) => {
        console.log("chatlist", response);
        if (response.data.success === 0) {
          setChatsList([]);
        }
        if (response.data.success === 1) {
          setChatsList(response.data.body);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchMessages = async (id) => {
    await authAxiosHelper
      .get(`/message/list?user_id=${id}`, {
        headers: { token: localStorage.getItem("cflToken") },
      })
      .then((response) => {
        if (response.data.success === 0) {
          setMessages([]);
        }
        if (response.data.success === 1) {
          setMessages(response.data.body);
        }

        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const writeMessage = (e) => {
    setMessage(e.target.value);
  };
  const setChat = (data) => {
    console.log(data._id);
    setReceiver(data);
    fetchMessages(data._id);
  };
  const sendMessage = () => {
    if (message.trim() !== "") {
      socket.emit("chat_message", {
        sender_id: user_id,
        receiver_id: reciever._id,
        message: message,
        message_type: 1,
      });
      setMessage("");
    }
  };
  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [messages]);
  useEffect(() => {
    socket.on();
    socket.emit("connect_user", { user_id: user_id });
    socket.on("chat_message", (data) => {
      data.created_at = new Date();
      setMessages([...messages, data]);
    });
    // socket.on("chat_message", (data) => console.log(data));
  }, [socket, messages, user_id]);
  useEffect(() => {
    fetchChats();
  }, [messages]);

  return (
    <DashboardLayout>
      <FullContainer>
        <div className=" pt-10 pb-5">
          <div className="">
            {/* <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"> */}
            <div className="grid grid-cols-7">
              <div className="col-span-2 bg-[#FFFFFF] border-r-[1px] border-solid border-[#DBE9FF] p-[10px] ">
                <div className="flex justify-between items-center">
                  <h1 className="text-[30px] text-[#575859] font-semibold">
                    Message
                  </h1>
                </div>
                <div className="relative mb-8 mt-12">
                  <input
                    onChange={searchChats}
                    type="text"
                    placeholder="Search..."
                    className="bg-[#f9fbff] m-0 font-semibold text-[16px] placeholder:text-[#B4D2FF] pl-[45px] pr-[15px] py-[10px] rounded-[35px] focus:outline-0 outline-none w-full placeholder:font-400"
                  />
                  <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-color" />
                </div>
                <div className="flex flex-col h-[65%] overflow-scroll">
                  {filteredList.length > 0 ? (
                    <div className=" p-2 bg-gray-100">
                      {filteredList.map((chat, id) => {
                        const date = new Date(chat.timestamp);

                        return (
                          <PersonMessage
                            lastMessage={chat.lastMessage}
                            name={chat?.user_profile_details[0]?.name}
                            key={id}
                            time={date.toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                            setChat={() => setChat(chat)}
                          />
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {chatsList.length > 0 ? (
                    chatsList.map((chat, id) => {
                      const date = new Date(chat.timestamp);

                      return (
                        <PersonMessage
                          lastMessage={chat.lastMessage}
                          name={chat?.user_profile_details[0]?.name}
                          key={id}
                          time={date.toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                          setChat={() => setChat(chat)}
                        />
                      );
                    })
                  ) : (
                    <p className=" text-center ">No chat list available</p>
                  )}
                </div>
              </div>
              {reciever === null && (
                <div className="  lg:w-[800px] m-auto text-center">
                  <div className=" flex flex-col items-center w-full ">
                    <BiSolidChat color="#0080ff" fontSize={"80px"} />
                    <p></p>
                  </div>
                </div>
              )}
              {reciever && (
                <div className="col-span-5">
                  <div className="flex mt-2 ps-2 mb-2">
                    <img
                      src={image}
                      style={{ width: "50px", height: "50px" }}
                      alt="..."
                    />
                    <div className="flex flex-1 mt-1 ps-2 justify-between items-center">
                      <div>
                        <p className="text-[20px] text-[#575859] font-semibold">
                          Roger Smith
                        </p>
                        <p className="text-primary-color text-[15px] font-semibold"></p>
                      </div>
                      <div>
                        <FaEllipsisH className="text-primary-color text-[22px] me-2" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F9FBFF] h-[60vh] overflow-scroll">
                    <span className="block px-[10px] py-[12px] rounded-[20px] w-fit bg-white mx-auto relative top-[16px] text-[13px] font-semibold text-slate-500">
                      Today, April 20
                    </span>

                    {messages.length > 0 ? (
                      messages.map((chat, id) => {
                        const date = new Date(chat.updated_at);

                        return (
                          <div
                            key={id}
                            className={`flex mt-3 py-[10px] px-4 gap-2 ${
                              chat.sender_id === user_id
                                ? `flex-row-reverse`
                                : "flex-row"
                            } justify-end w-full ps-3`}
                          >
                            <img
                              src={image}
                              style={{ width: "50px", height: "50px" }}
                              alt="..."
                            />
                            <div
                              className={` flex  ${
                                chat.sender_id === user_id
                                  ? `items-end`
                                  : "items-start"
                              }  flex-col flex-1 mt-1 ps-2`}
                            >
                              <div className="flex justify-between items-end">
                                <p className="text-[14px] text-[#BBBCBF] ps-3">
                                  {date.toLocaleTimeString("en-US", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </p>
                              </div>
                              <p className="text-[16px] font-semibold  mt-1 bg-[#FFFFFF] text-primary-color w-fit rounded-e-[10px] rounded-bl-[10px] px-[20px] py-[8px] ">
                                {chat.message}
                              </p>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div></div>
                    )}
                    <div ref={lastMessageRef}></div>
                  </div>
                  <div className="p-[20px] relative">
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      id="message-form"
                      className="flex"
                    >
                      <input
                        type="text"
                        id="message-input"
                        placeholder="Write a message..."
                        value={message}
                        onChange={writeMessage}
                        className="bg-[#F9FBFF] flex-1 font-semibold text-[16px] placeholder:text-[#B4D2FF] p-[10px] rounded-[10px] outline-none  mt-2"
                      />
                      <button
                        type="button"
                        className="bg-primary-color rounded-[8px] text-white px-[15px] mt-2 ms-2"
                      >
                        <FaPaperPlane
                          onClick={() => {
                            sendMessage();
                          }}
                        />
                      </button>
                    </form>
                    <FaPaperclip className="text-[20px] absolute top-[47%] right-[11%] text-[#B4D2FF] cursor-pointer" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </FullContainer>
    </DashboardLayout>
  );
}

export default Message;
