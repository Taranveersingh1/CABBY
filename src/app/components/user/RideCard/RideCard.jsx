import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import { Avatar } from '@mui/material';
const RideCard = () => {
  return (
    <div
   // onClick={()=> router.push('/ride-detail/${id}')}
    className='flex justify-between items-center rounded-s-sm p-3 cursor-pointer'>
      <div className='flex items-center'>
        <img 
         className='w-20 h-20' 
         src='https://cdn.pixabay.com/photo/2020/03/17/19/35/gulf-of-finland-4941643_1280.jpg'
         alt=''
        />
        <div className='ml-5 space-y-1'>
            <p className='text-sm font-semibold'>Today 10:08</p>
            <p className='text-xs font-semibold opacity-60'>cab KSLW998</p>
            <p className='opacity-60 text-xs'>vijay nagar</p>
            <p className='opacity-60 text-xs'>{"bhawarkua"}</p>
        </div>
      </div>
      {true ? (
        <div>
        <VerifiedIcon className='text-green-800 text-4xl' fontSize='3rem'/>
        </div>
      ) : (
        <div className='flex flex-col'>
            <p className='text-green-500 mb-5'>Schedule..</p>
            <Avatar
             alt='Reny Sharp'
             src='https://cdn.pixabay.com/photo/2016/12/02/03/08/people-talking-1876726_1280.jpg'
            />
        </div>
      )
}
    </div>
  )
}

export default RideCard
