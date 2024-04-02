import React from 'react'
import CoverImage from '../assets/coverimage.jpg'
import Corsouel from '../components/Corsouel'
import { useNavigate } from 'react-router-dom'

function LandPage() {
  const navigate = useNavigate()
  const handleStart =()=>{
    navigate("querypage")
  }
  return (
    <div className="w-full h-screen absolute top-0 z-0">
        {/* <img src={CoverImage} alt="" className='w-full h-full absolute z-1' /> */}
        <div className='w-full h-full absolute bottom-1/2 translate-y-1/3  z-10  flex flex-col justify-center items-center'>
            <h2 className='text-3xl mb-5  font-bold text-[#8cc8ff]'>Welcome to</h2>
            <h1 className='text-4xl text-[#2f6294] text-center mb-5'> FLOOD FORECASTING WEBAPP</h1>
            <h1 className='text-2xl text-[#2f6294] text-center mb-4' > Accurate flood and Rainfall Prediction</h1>
            <button className='p-2 border border-[#2f6294] shadow-gray-600 shadow-sm px-10 text-black rounded-full text-2xl
            active:shadow-none'
            onClick={handleStart}>Start</button>
        </div>
        <div className='w-full h-full absolute bottom-0 '>
          <Corsouel/>
        </div>
       
   </div>
  )
}

export default LandPage