import React from "react";
import ParticlesBg from "particles-bg";

function Twelfth({ formData, handleInputChange, setpage,handleSubmit,isFormComplete }) {
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
        <form onSubmit={handleSubmit} className="bg-transparent p-8 rounded-lg shadow-lg w-[800px] transition-transform transform hover:scale-105 z-10 text-cyan-200 block">
          <h2 className="text-2xl font-bold text-center mb-6">Q8. You have a crush on a good friend of yours, who is reluctant to audition for IEEE SB NITDGP. After a lot of convincing, she/he eventually auditions for IEEE SB NITDGP. You make it to the next round with positive feedback. However, your crush is not selected after the first interview round and is very upset, developing negative thoughts about the club. How would you navigate this situation and maintain your friendship with them while also striving to do your best in the next round of the audition?</h2>
          <textarea
            name="answer_eighth"
            value={formData.answer_eighth}
            onChange={handleInputChange}
            className="w-full h-32 p-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-y-auto resize-none h-[400px]"
            placeholder="Write your answer here..." // Optional placeholder
            required // Optional, if you want to ensure the field is filled
          />
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={() => setpage(11)}
              type='button' // Change to button to prevent form submission
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Previous
              </span>
            </button>
            {/* {console.log(isFormComplete())} */}
            <button
              type='Submit'
              disabled={!isFormComplete()} 
              // Change to button to prevent form submission
              className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group  ${!isFormComplete()?"cursor-not-allowed text-white bg-slate-300":"bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"}`}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {!isFormComplete()?"Fill all the field":"Submit"}
              </span>
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default Twelfth;
