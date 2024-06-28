"use client"

import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { usePathname, useSearchParams ,useRouter} from 'next/navigation';

const SearchResultCard = ({item,latitude_key,longitude_key,setActiveField,area_key}) => {
    const pickup_lattitude=19.0872642
    const pickup_longitude=16.2232323
    const pickup_area="Mumbai,mumbai suburban,Maharashtra,India"
    const destination_lattitude=34.3434343
    const destination_longitude=324232323
    const destination_area="Delhi,Town of delhi,Delaware Country"
       
    const searchParams=useSearchParams();
    const router = useRouter();
    const pathname=usePathname();

    const handleSelect=()=>{
       const params=new URLSearchParams(searchParams)
       params.set([latitude_key],pickup_lattitude)
       params.set([longitude_key],pickup_longitude)
       params.set([area_key],pickup_area)

      router.replace(pathname+"?"+params.toString())

      console.log("pathname-" ,pathname,"searchParams-",searchParams) //parameter setting in url
    }
  return (
    <div onClick={handleSelect} className='flex items-center py-2 z-10 bg-white cursor-pointer'>
        <div className='pr-5'>
          <LocationOnIcon/>
        </div>
      <div>
        <p className='font-semibold'>mumbai gokuldham market </p>
        <p className='font-semibold opacity-50'>
          mumbai
        </p>
      </div>
    </div>
  );
};

export default SearchResultCard
