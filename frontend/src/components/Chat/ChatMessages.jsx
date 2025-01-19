import { useContext, useEffect, useRef, useState } from "react";
import React from "react";

const ChatMessages = ({ messages, userDetails, selectedUserId }) => {
  const messageContainerRef = useRef(null);
  //console.log(messages);

  useEffect(() => {
    const container = messageContainerRef.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, messageContainerRef]);

  return (
    <>
      <div
        className="absolute bottom-24 w-full px-7 lg:px-20 left-17 overflow-y-auto h-[80vh] md:h-[73vh] scrollbar-none"
        style={{}}
        ref={messageContainerRef}
      >
        {selectedUserId && (
          <div className="flex flex-col gap-2">
            {messages.map((msg) => (
              <>
                <div
                  key={msg._id}
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
        )}

        {selectedUserId && !messages.length && (
          <div className="text-gray-500 flex items-end justify-center">
            Start a conversation
          </div>
        )}
      </div>
    </>
  );
};

export default ChatMessages;
