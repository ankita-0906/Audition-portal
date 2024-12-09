import React from "react";
//import ParticlesBg from "particles-bg";
import dynamic from "next/dynamic";
const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false });

function Third({rating, handleInputChange,setpage}) {
  return (
    <div>
        {/* {console.log(rating)} */}
      <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
        <ParticlesBg
          type="circle" // You can change this to "cobweb", "square", or "polygon"
          color={["#690716", "#ff6347", "#00bfff", "#ffff00"]} // Multiple colors for particles
          bg={true}
          num={50}
          size={10} // Number of particles
        />
        <form className="bg-transparent p-8 rounded-lg shadow-lg w-full max-w-md transition-transform transform hover:scale-105 z-10 text-cyan-200 block">
        <h2 className="text-xl font-bold text-center mb-6">Rate yourself out of 10 (10 being highest and 1 being lowest)</h2>
        <div className="mb-4">
  <div className="block space-y-4">
  {rating.map((item, index) => (
                <div key={index}>
                  <p className="text-gray-200 text-center mb-2">{item.category}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-200">1</span>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      name={`rating_${index}`} // Use a unique name for each rating input
                      value={item.value} // Set the value from the rating array
                      onChange={handleInputChange} // Call the change handler
                      className="w-full mx-4"
                    />
                    <span className="text-gray-200">10</span>
                  </div>
                </div>
              ))}
  </div>
</div>
         <div className="flex justify-center items-center">
         <button 
        onClick={()=>setpage(2)}
        type='button'
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Previous
</span>
</button>
<button 
        onClick={()=>setpage(4)}
        type='button'
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
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

export default Third;
