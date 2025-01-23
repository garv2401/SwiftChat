import React from "react";

const TopBar = ({
  onlinePeople,
  selectedUserId,
  setSelectedUserId,
  offlinePeople,
}) => {
  const firstName = offlinePeople[selectedUserId]
    ? offlinePeople[selectedUserId].firstName
    : null;
  return (
    <div className="w-full absolute right-2 text-white py-5 bg-dark flex items-center gap-3 justify-start pl-3">
      {selectedUserId && (
        <svg
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform="rotate(180)"
          stroke="#ffffff"
          onClick={(e) => {
            setSelectedUserId(null);
          }}
          className="hover:stroke-slate-400"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />

          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
              fill="#ffffff"
            />{" "}
          </g>
        </svg>
      )}

      {selectedUserId && (
        <>
          {selectedUserId === "AIChat" ? (
            <>
              <span>AI Buddy</span><span className="h-3 rounded-full aspect-square bg-secondary"></span>
            </>
          ) : (
            <>
              {onlinePeople[selectedUserId] ? (
                <>
                  {onlinePeople[selectedUserId].username}
                  <span className="h-3 rounded-full aspect-square bg-secondary"></span>
                </>
              ) : (
                <>
                  <span>{firstName}</span>
                  <span className="h-3 rounded-full aspect-square bg-primary"></span>
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TopBar;
