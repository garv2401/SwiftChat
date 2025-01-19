import React from "react";
import {useEffect,useRef,useState} from "react"

const MessageInputForm = ({
  selectedUserId,
  setNewMessage,
  newMessage,
  sendMessage,
}) => {
  const inputRef = useRef(null);
  const [isMobile,setIsMobile]=useState(false);
  //console.log(newMessage,selectedUserId);

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



  
  return (
    <>
      {selectedUserId && (
        <form
          action=""
          onSubmit={sendMessage}
          className="relative m-4 w-full flex justify-between items-center "
        >
          {isMobile?<input
            ref={inputRef}
            type="search"
            id="search-dropdown" 
            className="w-full px-4 py-3 rounded-full border-2 border-zinc-700 bg-transparent focus:outline-none text-white"
            placeholder="Your Message"
            value={newMessage}
            onChange={(ev) => setNewMessage(ev.target.value)}
            required
          /> :<input
            type="search"
            id="search-dropdown"
            className="w-full px-4 py-3 rounded-full border-2 border-zinc-700 bg-transparent focus:outline-none text-white"
            placeholder="Your Message"
            value={newMessage}
            onChange={(ev) => setNewMessage(ev.target.value)}
            required
          />}

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
      )}
    </>
  );
};

export default MessageInputForm;
