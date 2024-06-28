"use client"
import React from 'react'
import './Banner.css'
import CircleIcon from '@mui/icons-material/Circle'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { useRouter } from 'next/navigation'

const Banner = () => {
  const router=useRouter();
  return (
    <div className='h-[90vh] '> 
      <div className='cropped-image'></div>
      <div className='bannerMiniContainer px-36'>
        <p className='text text-5xl font-bold text-white w-[25rem] mb-5 pt-32'>
        Women Leading Safe Journeys! 
         </p>
         <div div className='py-5 bg-transparent w-[25rem] flex space-x-7 justify-around'>
          <button className='text-white'>Daily</button>
          <button className='text-white'>Rental</button>
          <button className='text-white'>Outstation</button>
          </div>
         <div className='bg-transparent pt-5 '>
          <div className=' bg-white flex items-center justify-evenly'>
            <div className='flex items-center py-2 px-14 border border-slate-900'>
            
              <CircleIcon className="pr-8 text-green-900 " style={{fontSize:40}} /><input name='current location' placeholder='Current Location'/>
            </div>
            <div className='flex items-center py-2 px-14 border border-slate-900 mr-6'>
              <CircleIcon className="pr-8 text-red-700" style={{fontSize:40}}/><input name='destination location' placeholder='Destination Location'/>
            </div>
            <div onClick={()=>router.push("login")} className="searchCabby cursor-pointer flex items-center py-5 px-14 bg-black border border-slate-900 justify-around">
              <p className='text-white font-semibold'>Search <span className="text-blue-500">Cabby</span></p>
              <ArrowRightAltIcon className="text-blue-500"/>
            </div>
          </div> 
          <div>
            <img src="" alt="" />
          </div>
         </div>
      </div>
       </div>
   
  );
}

export default Banner
