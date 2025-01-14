import React from "react";
import { Element } from "react-scroll";

const Payments = () => {
  return (
    <Element id="payments" name="payments">
      <section>
        <div className="md:py-8 px-4 mx-5 md:mx-auto max-w-screen-xl lg:py-10 mb-6">
          <div className="mx-auto max-w-screen-md text-center mb-8">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              Empowering your team with innovative solutions
            </h2>
            <p className="mb-5 font-light sm:text-xl text-gray-400">
              At Swift, we strive to deliver cutting-edge solutions that enhance
              team collaboration, streamline processes, and drive success in a
              fast-paced, evolving digital world.
            </p>
          </div>

          <div className=" lg:grid lg:grid-cols-3 sm:gap-5">
            <div className="mb-6 flex flex-col p-6 mx-auto max-w-lg text-lg border border-primary rounded-xl ">
              <h3 className="mb-4 text-2xl font-semibold text-white">
                Starter
              </h3>
              <p className="font-light sm:text-lg text-gray-400">
                Best option for personal use & for your next project
              </p>
              <div className="flex justify-center items-baseline my-5">
                <span className="mr-2 text-5xl font-extrabold text-white">
                  $29
                </span>
                <span className="text-gray-400">/month</span>
              </div>

              <ul
                className="mb-8 space-y-4 text-left text-gray-400"
                role="list"
              >
                <li className="flex items-center space-x-3">
                  <span>Individual configuration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span>No setup,or hidden features</span>
                </li>

                <li className="flex items-center space-x-3">
                  <span>
                    Team size:{" "}
                    <span className="font-semibold text-white">
                      1 developer
                    </span>
                  </span>
                </li>

                <li className="flex items-center space-x-3">
                  <span>
                    Premium support:{" "}
                    <span className="font-semibold text-white">6 months</span>
                  </span>
                </li>

                <li className="flex items-center space-x-3">
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold text-white">6 months</span>
                  </span>
                </li>
              </ul>

              <a
                href="#"
                className="text-white bg-[#1B57E9] hover:bg-primary py-2 rounded-xl text-center"
              >
                {" "}
                Get Started
              </a>
            </div>

            <div className="mb-6 flex flex-col p-6 mx-auto max-w-lg text-lg border border-primary rounded-xl">
              <h3 className="mb-4 text-2xl font-semibold text-white">
                Company
              </h3>
              <p className="font-light sm:text-lg text-gray-400">
                Relevant for multiple users,extended & premium support
              </p>

              <div className="flex justify-center items-baseline my-5">
                <span className="mr-2 text-5xl font-extrabold text-white">
                  $99
                </span>
                <span className="text-gray-400">/month</span>
              </div>

              <ul
                className="mb-8 space-y-4 text-left text-gray-400"
                role="list"
              >
                <li className="flex items-center space-x-3">
                  <span>Individual configuration</span>
                </li>

                <li className="flex items-center space-x-3">
                  <span>No setup,or hidden features</span>
                </li>

                <li className="flex items-center space-x-3 ">
                  <span>
                    Team size:{" "}
                    <span className="font-semibold text-white">
                      10 developers
                    </span>
                  </span>
                </li>

                <li className="flex items-center space-x-3">
                  <span>
                    Premium support:{" "}
                    <span className="font-semibold text-white">24 months</span>
                  </span>
                </li>

                <li className="flex items-center space-x-3">
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold text-white">24 months</span>
                  </span>
                </li>
              </ul>

              <a
                href="#"
                className="text-white bg-[#1B57E9] hover:bg-primary py-2 rounded-xl text-center"
              >
                Get started
              </a>
            </div>

            <div className="mb-6 flex flex-col p-6 mx-auto max-w-lg text-lg border border-primary rounded-xl">
              <h3 className="mb-4 text-2xl font-semibold text-white">
                Enterprise
              </h3>
              <p className="font-light sm:text-lg text-gray-400">
                Best for large scale uses and extended redistribution
              </p>
              <div className="flex justify-center items-baseline my-5">
                <span className="mr-2 text-5xl font-extrabold text-white">
                  $499
                </span>
                <span className="text-gray-400">/month</span>
              </div>

              <ul
                className="mb-8 space-y-4 text-left text-gray-400"
                role="list"
              >
                <li className="flex items-center space-x-3">
                  <span>Individual configuration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span>No setup,or hidden features</span>
                </li>

                <li className="flex items-center space-x-3">
                  <span>
                    Team size:{" "}
                    <span className="font-semibold text-white">
                      100+ developer
                    </span>
                  </span>
                </li>

                <li className="flex items-center space-x-3">
                  <span>
                    Premium support:{" "}
                    <span className="font-semibold text-white">36 months</span>
                  </span>
                </li>

                <li className="flex items-center space-x-3">
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold text-white">36 months</span>
                  </span>
                </li>
              </ul>

              <a
                href="#"
                className="text-white bg-[#1B57E9] hover:bg-primary text-center py-2 rounded-xl"
              >
                {" "}
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Payments;
