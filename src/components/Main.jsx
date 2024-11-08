import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="ANITA Hero Image"
        srcset=""
      />

      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-9xl text-4xl font-bold text-gray-800">
            ANITA
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            A Compact AI Virtual Assistant,
            <TypeAnimation
              sequence={[
                "Versatile.",
                2000,
                "Adaptive.",
                2000,
                "Cost Efficient.",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={30} />
            <FaFacebookF className="cursor-pointer" size={30} />
            <FaInstagram className="cursor-pointer" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
