import React from "react";
import Button from "../layouts/Button";
import videoBg from "../../assets/img/ANI.mp4"; // Make sure the path is correct
import { Link } from "react-router-dom";

const FrontHome = () => {
  return (
    <div className="min-h-screen relative">
      <h1 className="text-8xl font-semibold text-center md:w-2/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white">
        Push. Persist. Progress. Prevail.
      </h1>
      <div className="absolute bottom-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <Link to="/login">
          {" "}
          <Button title="Join Now" />
        </Link>
      </div>

      <video
        className="bg-video absolute top-0 left-0 w-full h-full object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
      />
      <div className="min-h-screen flex flex-row justify-between md:px-32 px-5 relative z-10">
        <div className="bg-black bg-opacity-50 text-cyan-50 flex flex-col justify-center items-center h-full">
          {/* Content Goes Here */}
        </div>
      </div>
    </div>
  );
};

export default FrontHome;
