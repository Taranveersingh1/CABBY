'use client '
import { useRouter } from 'next/navigation'
import React from 'react'
import WestIcon from '@mui/icons-material/West';
import { Avatar, Button, IconButton } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import StarIcon from '@mui/icons-material/Star';
import KeyIcon from '@mui/icons-material/Key';
const RideDetail = () => {
    const router=useRouter();
    console.log(router)
    const goBack=()=>{
       router.back()
    }
  return (
    <div>
      <div className='flex items-center px-2 lg:px-5 py-2'> 
        <WestIcon onClick={goBack} className="cursor-pointer"/>
        <p className='text-center w-full'>AESFFWRF44545</p>
      </div>
      <div className='px-2 lg:px-5 py-5'>
         <div className='border rounded-md'>
          <div className='flex items-center border-b p-3'>
            <span className='pr-5 opacity-70 text-xs font-semibold'>
               PICKUP:{" "}
            </span>
            <span>vijay nagar</span>
          </div>
            <div className='flex items-center border-b p-3'>
              <span className='pr-5 opacity-70 text-xs font-semibold'>
               DROP:{" "}
              </span>
              <span>bhawarkua</span>
            </div>
         </div>
      </div>
      <p className='p-2 bg-green-400 text-white text-center'>
         Arriving time 1 min
      </p>
      <div className='flex items-center justify-center w-full h-[42h]'>
         <p className='text-center w-full'>
           <iframe
           src='https://www.google.com/maps/embed/v1/place?key=API_KEY
           &q=Space+Needle,Seattle+WA'
           width="100%"
           height="150"
           style={{border:"0"}}
           allowFullScreen=""
           loading='lazy'
           ></iframe>
         </p>
      </div>
      <div className='px-2 lg:px-5 mt-2'>
        <div className='border rounded-md'>
          <div className='flex justify-between w-full border-b p-3'>
            <div className='flex items-center'>
              <Avatar 
              alt='Remy Sharp'
              src='https://cdn.pixabay.com/photo/2020/03/17/19/35/gulf-of-finland-4941643_1280.jpg'
              />
              <div className='pl-4'>
                <p>Toyota Fortuner</p>
                <p className='text-xs font-semibold opacity-60'>Mini Cab</p>
              </div>
            </div>
            <div>
              <p className='text-xs'>GJ01-2345</p>
              <p className='font-semibold'>2345</p>
            </div>
          </div>
          <div className='flex justify-between w-full p-3'>
            <div className='flex items-center'>
                 <Avatar
                 alt='Reny Sharp'
                 src='https://cdn.pixabay.com/photo/2016/12/02/03/08/people-talking-1876726_1280.jpg'
                 />
                 <div className='pl-4'>
                   <p>Rajesh Sharma</p>
                   <p className='text-xs flex items-center'>
                    4.7<StarIcon className='text-yellow-500 text-sm'/>
                   </p>
                 </div>
            </div>
            <div>
              <IconButton color='success' aria- aria-label='call driver'>
              <CallIcon/>
              </IconButton>
            </div>
           </div>
           {true ? (
             <Button
              className='bg-black text-white hover:bg-white hover:text-black'
              variant='contained'
              color='secondary'
              sx={{
                width: "100%",
                padding: ".5rem 0rem",
              }}
             >Pay Now</Button>
           ) : (
             <div className='flex justify-between items-center bg-yellow-600 text-white py-2 px-2'>
              <div className='flex items-center'>
                <KeyIcon/>
                <p className='ml-4'>OTP</p>
              </div>
              <p>4567</p>
             </div>
           )}
        </div>

      </div>
    </div>
  )
}

export default RideDetail
