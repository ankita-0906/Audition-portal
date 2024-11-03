import React from "react";
import ParticlesBg from "particles-bg";

function Last() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden text-white">
      <ParticlesBg
        type="circle"
        color={["#690716", "#ff6347", "#00bfff", "#ffff00"]}
        num={70}
        size={10}
        bg={true}
      />
      <div className="flex flex-col items-center justify-center z-10 space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse">
          Thank You!
        </h1>
        <p className="text-xl md:text-2xl text-center font-semibold text-gray-200">
          Your form has been successfully submitted.
        </p>
        <p className="text-lg md:text-xl text-center font-medium text-gray-300">
          Please wait for further announcements. We're excited to have you on board!
        </p>
      </div>
    </div>
  );
}

export default Last;
