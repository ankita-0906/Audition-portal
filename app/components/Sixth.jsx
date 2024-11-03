import React from "react";
import ParticlesBg from "particles-bg";

function Sixth({ formData, handleInputChange, setpage }) {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
        <ParticlesBg
          type="circle" // You can change this to "cobweb", "square", or "polygon"
          color={["#690716", "#ff6347", "#00bfff", "#ffff00"]} // Multiple colors for particles
          bg={true}
          num={50}
          size={10} // Number of particles
        />
        <form className="bg-transparent p-8 rounded-lg shadow-lg w-[800px] transition-transform transform hover:scale-105 z-10 text-cyan-200 block">
          <h2 className="text-2xl font-bold text-center mb-6">Q2. You're working on a complex project with your team, but another member consistently misses deadlines and contributes minimally. How do you address this situation while maintaining a positive and productive team environment?</h2>
          <textarea
            name="answer_second"
            value={formData.answer_second}
            onChange={handleInputChange}
            className="w-full h-32 p-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-y-auto resize-none h-[400px]"
            placeholder="Write your answer here..." // Optional placeholder
            required // Optional, if you want to ensure the field is filled
          />
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={() => setpage(5)}
              type='button' // Change to button to prevent form submission
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Previous
              </span>
            </button>
            <button
              onClick={() => setpage(7)}
              type='button' // Change to button to prevent form submission
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Next
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sixth;