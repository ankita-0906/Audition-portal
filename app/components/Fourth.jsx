import React from "react";
import ParticlesBg from "particles-bg";

function Fourth({ formData, handleInputChange, setpage }) {
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
        <form className="bg-transparent p-8 rounded-lg shadow-lg w-full max-w-md transition-transform transform hover:scale-105 z-10 text-cyan-200 block">
          <h2 className="text-xl font-bold text-center mb-6">You are interested in</h2>
          <div className="mb-4">
            <div className="block space-y-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="field_of_interest"
                  value="Graphic Design"
                  checked={formData.field_of_interest === 'Graphic Design'}
                  onChange={handleInputChange}
                  className="text-blue-500 focus:ring-blue-400"
                  required
                />
                <span className="ml-2">Graphic Design</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="field_of_interest"
                  value="Event Management & Content Writing"
                  checked={formData.field_of_interest === 'Event Management & Content Writing'}
                  onChange={handleInputChange}
                  className="text-blue-500 focus:ring-blue-400"
                />
                <span className="ml-2">Event Management & Content Writing</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="field_of_interest"
                  value="Web Development"
                  checked={formData.field_of_interest === 'Web Development'}
                  onChange={handleInputChange}
                  className="text-blue-500 focus:ring-blue-400"
                />
                <span className="ml-2">Web Development</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="field_of_interest"
                  value="Robotics/Data Science"
                  checked={formData.field_of_interest === 'Robotics/Data Science'}
                  onChange={handleInputChange}
                  className="text-blue-500 focus:ring-blue-400"
                />
                <span className="ml-2">Robotics/Data Science</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="field_of_interest"
                  value="Video Editing"
                  checked={formData.field_of_interest === 'Video Editing'}
                  onChange={handleInputChange}
                  className="text-blue-500 focus:ring-blue-400"
                />
                <span className="ml-2">Video Editing</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="field_of_interest"
                  value="Speaker/Presenter"
                  checked={formData.field_of_interest === 'Speaker/Presenter'}
                  onChange={handleInputChange}
                  className="text-blue-500 focus:ring-blue-400"
                />
                <span className="ml-2">Speaker/Presenter</span>
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => setpage(3)}
              type='button' // Change to button to prevent form submission
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Previous
              </span>
            </button>
            <button
              onClick={() => setpage(5)}
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

export default Fourth;
