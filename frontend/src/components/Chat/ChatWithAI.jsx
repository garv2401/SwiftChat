import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";

const ChatWithAI = (userDetails) => {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyBHrVfuLN-M4nLiLlwLcvVKum4v5Jp-28Q"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const [newPrompt, setNewPrompt] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState(null);
  const messageContainerRef = useRef(null);
  const inputRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    try{
      const setChat = async () => {
        const prompt =
          "Talk to me as a friend without mentioning that you are an AI or gemini";
        const result = await model.generateContent(prompt);
        //console.log(result.response.text());
        const msgObj = {
          text: result.response.text(),
          sender: "Gemini",
          createdAt: Date.now(),
        };
        setMessages((prevMessages) => [...prevMessages, msgObj]);
      };
      setChat();
      

    }catch(error){
      console.log("Error Initialising chat..",error);
    }
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", checkMobile);
    checkMobile(); // Run once on mount

    return () => window.removeEventListener("resize", checkMobile); // Clean up
  }, []);

  useEffect(() => {
    // Focus the input field when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (!newPrompt) return; // Prevent unnecessary calls

    const getResponse = async () => {
      try {
        const result = await model.generateContent(newPrompt);
        const msgObj = {
          text: result.response.text(),
          sender: "Gemini",
          createdAt: Date.now(),
        };

        setMessages((prevMessages) => [...prevMessages, msgObj]);
      } catch (error) {
        console.error("Error fetching AI response:", error);
      }
    };

    getResponse();
  }, [newPrompt]);

  useEffect(() => {
    const container = messageContainerRef.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, messageContainerRef]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (!newMessage) return; // Prevent empty messages

    const userMessage = {
      sender: userDetails._id,
      text: newMessage,
      createdAt: Date.now(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setNewPrompt(newMessage);
    setNewMessage(""); // Clear input field
  };

  return (
    <>
      <div
        className="absolute bottom-24 w-full px-7 lg:px-20 left-17 overflow-y-auto h-[80vh] md:h-[73vh] scrollbar-none"
        style={{}}
        ref={messageContainerRef}
      >
        {
          <div className="flex flex-col gap-2">
            {messages.map((msg, index) => (
              <>
                <div
                  key={index}
                  className={`text-white 
                ${
                  msg.sender !== userDetails._id
                    ? "bg-primary self-start rounded-r-2xl"
                    : "bg-indigo-700 self-end rounded-l-2xl"
                } relative group rounded-b-2xl px-5 py-3`}
                >
                  <div
                    style={{ wordWrap: "breakWord" }}
                    className="flex flex-wrap max-w-[500px] overflow-auto"
                  >
                    {msg.text}
                  </div>

                  <div
                    className={`absolute top-0 w-0 h-0 ${
                      msg.sender !== userDetails._id
                        ? "border-r-[20px] border-r-primary -left-4"
                        : "border-l-[20px] border-l-indigo-700 -right-4"
                    } border-b-[20px] border-b-transparent`}
                  ></div>
                </div>
                <div
                  className={`bg-dark flex mt-0 text-white text-[12px]
                ${
                  msg.sender !== userDetails._id
                    ? "justify-start"
                    : "justify-end"
                }
              `}
                >
                  <div>
                    {msg.createdAt
                      ? new Date(msg.createdAt).toLocaleTimeString("en-IN", {
                          timeZone: "Asia/Kolkata",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: false, // 24-hour format
                        })
                      : new Date().toLocaleTimeString("en-IN", {
                          timeZone: "Asia/Kolkata",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: false, // 24-hour format
                        })}
                  </div>
                </div>
              </>
            ))}
          </div>
        }

        {!messages.length && (
          <div className="text-gray-500 flex items-end justify-center">
            Start a conversation
          </div>
        )}
      </div>

      <div className="absolute w-full bottom-0 flex justify-center px-7">
        <form
          action=""
          onSubmit={sendMessage}
          className="relative m-4 w-full flex justify-between items-center "
        >
          {isMobile ? (
            <input
              ref={inputRef}
              type="search"
              id="search-dropdown"
              className="w-full px-4 py-3 rounded-full border-2 border-zinc-700 bg-transparent focus:outline-none text-white"
              placeholder="Your Message"
              value={newMessage}
              onChange={(ev) => setNewMessage(ev.target.value)}
              required
            />
          ) : (
            <input
              type="search"
              id="search-dropdown"
              className="w-full px-4 py-3 rounded-full border-2 border-zinc-700 bg-transparent focus:outline-none text-white"
              placeholder="Your Message"
              value={newMessage}
              onChange={(ev) => setNewMessage(ev.target.value)}
              required
            />
          )}

          <button
            className="absolute end-0 aspect-square h-10 font-medium"
            type="submit"
          >
            <svg
              fill="#ffffff"
              height={20}
              width={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512.001 512.001"
              xml:space="preserve"
              className="hover:fill-slate-400"
            >
              <g>
                <g>
                  <path
                    d="M483.927,212.664L66.967,25.834C30.95,9.695-7.905,42.023,1.398,80.368l21.593,89.001
			c3.063,12.622,11.283,23.562,22.554,30.014l83.685,47.915c6.723,3.85,6.738,13.546,0,17.405l-83.684,47.915
			c-11.271,6.452-19.491,17.393-22.554,30.015l-21.594,89c-9.283,38.257,29.506,70.691,65.569,54.534l416.961-186.83
			C521.383,282.554,521.333,229.424,483.927,212.664z M359.268,273.093l-147.519,66.1c-9.44,4.228-20.521,0.009-24.752-9.435
			c-4.231-9.44-0.006-20.523,9.434-24.752l109.37-49.006l-109.37-49.006c-9.44-4.231-13.665-15.313-9.434-24.752
			c4.229-9.44,15.309-13.666,24.752-9.435l147.519,66.101C373.996,245.505,374.007,266.49,359.268,273.093z"
                  />
                </g>
              </g>
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatWithAI;
