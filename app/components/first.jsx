"use client";

//import ParticlesBg from 'particles-bg';
import dynamic from "next/dynamic";
const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false });
// function(props)

export default function RegistrationForm({setpage,formData,handleInputChange}) {

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Particles Background with customized settings */}
      <ParticlesBg
        type="circle" // You can change this to "cobweb", "square", or "polygon"
        color={["#690716", "#ff6347", "#00bfff", "#ffff00"]} // Multiple colors for particles
        bg={true}
        num={50}
        size={10} // Number of particles
      />
      
      <form 
        className="bg-transparent p-8 rounded-lg shadow-lg w-full max-w-md transition-transform transform hover:scale-105 z-10 text-cyan-200" 
      >
        <h2 className="text-2xl font-bold text-center mb-6">Registration Form</h2>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-cyan-500 text-sm font-semibold mb-2">Full Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleInputChange}
            className="w-full bg-transparent px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            placeholder="Enter your full name" 
            required 
          />
        </div>

        {/* Year Radio Buttons */}
        <div className="mb-4">
          <label className="block text-cyan-500 text-sm font-semibold mb-2">Year</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="year" 
                value="first year" 
                checked={formData.year === 'first year'}
                onChange={handleInputChange}
                className="text-blue-500 focus:ring-blue-400" 
                required 
              />
              <span className="ml-2 ">First Year</span>
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="year" 
                value="second year" 
                checked={formData.year === 'second year'}
                onChange={handleInputChange}
                className="text-blue-500 focus:ring-blue-400" 
              />
              <span className="ml-2">Second Year</span>
            </label>
          </div>
        </div>

        {/* WhatsApp Number Input */}
        <div className="mb-4">
          <label className="block text-cyan-500  text-sm font-semibold mb-2">WhatsApp Number</label>
          <input 
            type="tel" 
            name="whatsapp" 
            value={formData.whatsapp}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            placeholder="Enter your WhatsApp number" 
            required 
          />
        </div>

        {/* next Button */}
        <div className='w-full flex items-center justify-center'>
        <button 
        onClick={()=>setpage(2)}
        type='button'
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Next
</span>
</button>
</div>
      </form>     
    </div>
  );
}
