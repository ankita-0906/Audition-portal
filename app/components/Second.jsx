import React from "react";
import ParticlesBg from "particles-bg";

function Second({formData, handleInputChange,setpage}) {
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
        <h2 className="text-2xl font-bold text-center mb-6">Your Department</h2>
        <div className="mb-4">
  <div className="block space-y-4">
    <label className="flex items-center">
      <input
        type="radio"
        name="branch"
        value="Computer Science and Engineering"
        checked={formData.branch === 'Computer Science and Engineering'}
        onChange={handleInputChange}
        className="text-blue-500 focus:ring-blue-400"
        required
      />
      <span className="ml-2">Computer Science and Engineering</span>
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="branch"
        value="Electronics and Communication Engineering"
        checked={formData.branch === 'Electronics and Communication Engineering'}
        onChange={handleInputChange}
        className="text-blue-500 focus:ring-blue-400"
      />
      <span className="ml-2">Electronics and Communication Engineering</span>
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="branch"
        value="Mechanical Engineering"
        checked={formData.branch === 'Mechanical Engineering'}
        onChange={handleInputChange}
        className="text-blue-500 focus:ring-blue-400"
      />
      <span className="ml-2">Mechanical Engineering</span>
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="branch"
        value="Civil Engineering"
        checked={formData.branch === 'Civil Engineering'}
        onChange={handleInputChange}
        className="text-blue-500 focus:ring-blue-400"
      />
      <span className="ml-2">Civil Engineering</span>
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="branch"
        value="Electrical Engineering"
        checked={formData.branch === 'Electrical Engineering'}
        onChange={handleInputChange}
        className="text-blue-500 focus:ring-blue-400"
      />
      <span className="ml-2">Electrical Engineering</span>
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="branch"
        value="Biotechnology"
        checked={formData.branch === 'Biotechnology'}
        onChange={handleInputChange}
        className="text-blue-500 focus:ring-blue-400"
      />
      <span className="ml-2">Biotechnology</span>
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="branch"
        value="Chemical Engineering"
        checked={formData.branch === 'Chemical Engineering'}
        onChange={handleInputChange}
        className="text-blue-500 focus:ring-blue-400"
      />
      <span className="ml-2">Chemical Engineering</span>
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="branch"
        value="Metallurgical and Material Engineering"
        checked={formData.branch === 'Metallurgical and Material Engineering'}
        onChange={handleInputChange}
        className="text-blue-500 focus:ring-blue-400"
      />
      <span className="ml-2">Metallurgical and Material Engineering</span>
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="branch"
        value="Chemistry"
        checked={formData.branch === 'Chemistry'}
        onChange={handleInputChange}
        className="text-blue-500 focus:ring-blue-400"
      />
      <span className="ml-2">Chemistry</span>
    </label>
  </div>
</div>
         <div className="flex justify-center items-center">
         <button 
        onClick={()=>setpage(1)}
        type='button'
        class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Previous
</span>
</button>
<button 
        onClick={()=>setpage(3)}
        type='button'
        class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Next
</span>
</button>
         </div>
        </form>
      </div>
    </div>
  );
}

export default Second;
