import React from "react";
import {Element} from "react-scroll";

const Features = () => {
  return (
    <Element id="features" name="features">
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:p-10 bg-dark">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Designed for business teams like yours
          </h2>

          <p className="sm:text-xl text-gray-400">
            Here at Swift we focus on markets where technology,innovation and
            capital can unlock long term value and drive economic growth.
          </p>
        </div>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
          <div className="sm:mr-0 md:mr-10  mb-10 ">
            
            <div className="flex flex-col justify-center md:items-start items-center  gap-4 mb-3">
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
                className="cf-icon-svg"
              >
                <circle cx="25" cy="25" r="25" fill="#535bf2" />

                <g transform="translate(12.5, 9) scale(1.7)">
                  <path
                    d="M13.55 15.256H1.45a.554.554 0 0 1-.553-.554V3.168a.554.554 0 1 1 1.108 0v10.98h11.544a.554.554 0 0 1 0 1.108zM3.121 13.02V6.888a.476.476 0 0 1 .475-.475h.786a.476.476 0 0 1 .475.475v6.132zm2.785 0V3.507a.476.476 0 0 1 .475-.475h.786a.476.476 0 0 1 .475.475v9.513zm2.785 0V6.888a.476.476 0 0 1 .475-.475h.786a.476.476 0 0 1 .475.475v6.132zm2.786 0v-2.753a.476.476 0 0 1 .475-.475h.785a.476.476 0 0 1 .475.475v2.753z"
                    fill="#ffffff"
                  />
                </g>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white text-center md:text-start">Marketing</h3>
            
            <p className="text-gray-400">
            
              Plan it,create it,launch it.Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </p>
          </div>

          <div className="sm:mr-0 md:mr-10 mb-10">
            <div className="flex flex-col justify-center md:items-start items-center gap-4 mb-3">
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="25" cy="25" r="25" fill="#535bf2" />
                <svg
                  x="10"
                  y="10"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.7056 1.29136L12.7045 1.29032L12.7023 1.28812L12.6989 1.28483C12.6972 1.28313 12.6966 1.28263 12.6966 1.28263L12.6978 1.28374C12.7004 1.28627 12.703 1.28881 12.7056 1.29136ZM11.3022 1.28374C11.3002 1.28552 11.2961 1.28933 11.2896 1.29508C11.2719 1.31064 11.237 1.34044 11.1829 1.38252C11.0748 1.46665 10.8893 1.60023 10.6105 1.76751C10.0531 2.10195 9.12034 2.57246 7.68377 3.05132C6.21419 3.54118 5.25494 3.77921 4.67888 3.89442C4.39127 3.95194 4.20126 3.97843 4.09269 3.99049C4.0385 3.99651 4.00499 3.9989 3.99011 3.99977C3.98708 3.99995 3.98335 4.00014 3.98335 4.00014C3.43875 4.00903 3 4.45328 3 5V12C3 15.4464 5.28175 18.2003 7.3415 20.0026C8.39238 20.9221 9.43854 21.6408 10.22 22.1292C10.7159 22.4392 11.2047 22.7454 11.7564 22.9286C11.9145 22.9811 12.0855 22.9811 12.2436 22.9286C12.7953 22.7454 13.2841 22.4392 13.78 22.1292C14.5615 21.6408 15.6076 20.9221 16.6585 20.0026C18.7183 18.2003 21 15.4464 21 12V5C21 4.45327 20.5613 4.00902 20.0166 4.00014C20.0166 4.00014 20.0129 3.99995 20.0099 3.99977C19.995 3.9989 19.9615 3.99651 19.9073 3.99049C19.7987 3.97843 19.6087 3.95194 19.3211 3.89442C18.7451 3.77921 17.7858 3.54118 16.3162 3.05132C14.8797 2.57246 13.9469 2.10195 13.3895 1.76751C13.1107 1.60023 12.9252 1.46665 12.8171 1.38252C12.763 1.34044 12.7281 1.31064 12.7105 1.29508C12.7039 1.28933 12.6998 1.28552 12.6978 1.28374C12.3097 0.905419 11.6903 0.905419 11.3022 1.28374ZM12 3.25517C11.8933 3.32603 11.7735 3.40211 11.6395 3.48249C10.9469 3.89805 9.87966 4.42754 8.31623 4.94868C6.78581 5.45882 5.74506 5.72079 5.07112 5.85558C5.04695 5.86041 5.02325 5.86509 5 5.8696V12C5 14.5536 6.71825 16.7997 8.6585 18.4974C9.60762 19.3279 10.5615 19.9842 11.28 20.4333C11.5633 20.6103 11.8084 20.7541 12 20.8628C12.1916 20.7541 12.4367 20.6103 12.72 20.4333C13.4385 19.9842 14.3924 19.3279 15.3415 18.4974C17.2817 16.7997 19 14.5536 19 12V5.8696C18.9768 5.86509 18.953 5.86041 18.9289 5.85558C18.2549 5.72079 17.2142 5.45882 15.6838 4.94868C14.1203 4.42754 13.0531 3.89805 12.3605 3.48249C12.2265 3.40211 12.1067 3.32603 12 3.25517Z"
                    fill="#ffffff"
                  />
                </svg>
              </svg>
            </div>

            <h3 className="mb-2 text-xl font-bold text-white text-center md:text-start">Legal</h3>
            <p className="text-gray-400">
              Protect your organization,devices and stay compliant with our
              structured workflows and custom permissions made for you.
            </p>
          </div>

          <div className="sm:mr-0 md:mr-10 mb-10">
            <div className="flex flex-col justify-center md:items-start items-center gap-4 mb-3">
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="32" cy="32" r="32" fill="#535bf2" />
                <svg
                  x="16px"
                  y="16px"
                  width="32px"
                  height="32px"
                  viewBox="0 0 279 279"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M250.333,85.5H230v-8.833c0-26.56-21.274-48.167-47.833-48.167H97.5C70.94,28.5,49,50.107,49,76.667V85.5H29.333
      C13.343,85.5,0,98.51,0,114.5v107c0,15.99,13.343,29,29.333,29h221c15.99,0,28.667-13.01,28.667-29v-107
      C279,98.51,266.323,85.5,250.333,85.5z M64,76.667C64,58.379,79.212,43.5,97.5,43.5h84.667C200.455,43.5,215,58.379,215,76.667V85.5
      H64V76.667z M239.333,126.5h-198c-4.143,0-7.5-3.357-7.5-7.5s3.357-7.5,7.5-7.5h198c4.143,0,7.5,3.357,7.5,7.5
      S243.476,126.5,239.333,126.5z"
                    fill="#ffffff"
                  />
                </svg>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white text-center md:text-start">
              Business Automation
            </h3>
            <p className="text-gray-400">
              Auto-assign tasks,send Slack messages,and much more.Now power up
              with hundreds of new templates to help you get started.
            </p>
          </div>

          <div className="sm:mr-0 md:mr-10 mb-10">
            <div className="flex flex-col justify-center md:items-start items-center gap-4 mb-3">
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="#535bf2" />
                <path
                  d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V7.10139C9.40464 7.43925 8.375 8.58587 8.375 10C8.375 11.4141 9.40463 12.5607 11 12.8986V14.789C10.5435 14.595 10.219 14.3039 10.2015 14.2873C9.81056 13.9024 9.18159 13.9042 8.79293 14.2929C8.4024 14.6834 8.40239 15.3166 8.79291 15.7071C9.05517 15.969 9.37099 16.1852 9.69138 16.3682C10.0315 16.5626 10.4745 16.7635 11 16.8851V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V16.8986C14.5954 16.5607 15.625 15.4141 15.625 14C15.625 12.5859 14.5954 11.4393 13 11.1014V9.16492C13.4727 9.339 13.6825 9.58115 13.7085 9.61119C14.0401 10.0402 14.6562 10.1281 15.0944 9.80419C15.5385 9.47592 15.6325 8.84977 15.3042 8.40562C15.3042 8.40562 15.3047 8.40635 15.3035 8.40472C15.2396 8.31864 15.1726 8.24151 15.0527 8.1254C14.9108 7.98796 14.707 7.81664 14.4357 7.64913C14.0715 7.42421 13.5949 7.21225 13 7.0949V7Z"
                  fill="white"
                />

                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.1252 13.2457C13.0682 13.2126 13 13.2562 13 13.3222V14.6779C13 14.7439 13.0682 14.7875 13.1252 14.7543V14.7543C13.52 14.5248 13.6249 14.19 13.6249 14C13.6249 13.8101 13.52 13.4752 13.1252 13.2457V13.2457Z"
                  fill="#535bf2"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 9.33969C11 9.26548 10.9233 9.21647 10.8597 9.25462V9.25462C10.4773 9.48379 10.375 9.81251 10.375 10C10.375 10.1875 10.4773 10.5162 10.8597 10.7454V10.7454C10.9233 10.7835 11 10.7345 11 10.6603V9.33969Z"
                  fill="#535bf2"
                />
              </svg>
            </div>

            <h3 className="mb-2 text-xl font-bold text-white text-center md:text-start">Finance</h3>
            <p className="text-gray-400">
              Audit-proof software built for critical financial operations like
              month-end close and quarterly budgeting.
            </p>
          </div>

          <div className="sm:mr-0 md:mr-10 mb-10">
            <div className="flex flex-col justify-center md:items-start items-center gap-4 mb-3">
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="#535bf2" />
                <path
                  d="M0 10l8 4 8-4v2l-8 4-8-4v-2zm0-4l8 4 8-4v2l-8 4-8-4V6zm8-6l8 4-8 4-8-4 8-4z"
                  fill="#ffffff"
                  transform="translate(6.5, 6.5) scale(0.7)"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white text-center md:text-start">
              Enterprise Design
            </h3>
            <p className="text-gray-400">
              Craft beautiful,delightful experiences for both marketing and
              product with real cross-company collaboration.
            </p>
          </div>

          <div className="sm:mr-0 md:mr-10 mb-10">
            <div className="flex flex-col justify-center md:items-start items-center gap-4 mb-3">
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 1920 1920"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="960" cy="960" r="960" fill="#535bf2" />
                <path
                  d="M1703.534 960c0-41.788-3.84-84.48-11.633-127.172l210.184-182.174-199.454-340.856-265.186 88.433c-66.974-55.567-143.323-99.389-223.85-128.415L1158.932 0h-397.78L706.49 269.704c-81.43 29.138-156.423 72.282-223.962 128.414l-265.073-88.32L18 650.654l210.184 182.174C220.39 875.52 216.55 918.212 216.55 960s3.84 84.48 11.633 127.172L18 1269.346l199.454 340.856 265.186-88.433c66.974 55.567 143.322 99.389 223.85 128.415L761.152 1920h397.779l54.663-269.704c81.318-29.138 156.424-72.282 223.963-128.414l265.073 88.433 199.454-340.856-210.184-182.174c7.793-42.805 11.633-85.497 11.633-127.285m-743.492 395.294c-217.976 0-395.294-177.318-395.294-395.294 0-217.976 177.318-395.294 395.294-395.294 217.977 0 395.294 177.318 395.294 395.294 0 217.976-177.317 395.294-395.294 395.294"
                  fill="#ffffff"
                  fill-rule="evenodd"
                  transform="scale(0.5) translate(940, 940)"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white text-center md:text-start">
              Operations
            </h3>
            <p className="text-gray-400">
              Keep your company's lights on with customizable,iterative and structured workflows built for all efficient teams and individual.
            </p>
          </div>
        </div>
      </div>
    </section>
    </Element>
  );
};

export default Features;
