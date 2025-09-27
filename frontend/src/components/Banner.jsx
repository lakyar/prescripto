import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

  return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
    
            {/* left side */}
            <div className='flex-1 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vh] md:mb-[-30px]'>
                <div className='text-xl md:text-3xl lg:text-5xl font-semibold text-white'>
                    <p>Book Appointment</p>
                    <p className='mt-3'>With 100+ Trusted Doctors</p>
                </div>
                <button onClick={()=> {navigate('/login'); scrollTo(0,0)}} className='gap-2 cursor-pointer bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>Create Account </button>
            </div>
    
            {/* right side */}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img className='w-full absolute bottom-0 max-w-md' src={assets.appointment_img} alt="" />
            </div>
        </div>
  )
}

export default Banner