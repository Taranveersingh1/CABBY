import React from 'react'

const AvailableCab = () => {
  return (
    <div className='flex items-center border rounded-md py-2 px-5 cursor-pointer -z-10'>
      <div>
        <img src='' alt=''/>
        <p className='font-semibold text-xs'>1 min</p>
      </div>

      <div className='pl-5 text-sm'>
        <p className='font font-semibold'>Prime Suv</p>
        <p className='text-xs -z-10'>
            Suvs with FREE WIFI and TOP drivers
        </p>
      </div>
    </div>
  )
}

export default AvailableCab
