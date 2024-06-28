'useclient'
import React ,{useEffect}from 'react'
import WestIcon from '@mui/icons-material/West';
import { useRouter } from 'next/navigation';
import { Avatar, Button } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import RideCard from '../components/user/RideCard/RideCard';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import WifiIcon from '@mui/icons-material/Wifi';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '@/Redux/Auth/Action';
const Profile = () => {
    const dispatch=useDispatch();
    const router=useRouter();
    const jwt=localStorage.getItem("jwt");
    const {auth}=useSelector(state=>state);
    console.log(router);
    const goBack=()=>{
        router.back();
    }

    useEffect(() =>{
      dispatch(getUser(jwt))
    },[])

    console.log("auth",auth);
  return (
    <div className='px-2 lg:px-5'>
      <div className='px-2 lg:px-5 py-2'>
        <WestIcon onClick={goBack} className='cursor-pointer'/>
      </div>
      <div className='flex flex-col items-center space-y-2'>
       <Avatar sx={{bgcolor:'darkgray'}}>T</Avatar>
       <p>Taranveer Singh</p>
       <p>7024080117</p>
      </div>
      <div className='border rounded-sm mt-5'>
        <RideCard/>
        <Button onClick={()=>router.push("/your-rides")}  variant='text'>See All Rides</Button>
      </div>
      <div className='border mt-5'>
        <div className='flex items-center p-3 border-b'>
            <AccountBalanceWalletIcon className='text-green-600'/>
            <p className='ml-4'>ola money</p>
        </div>
        
        <div className='flex items-center p-3 border-b'>
            <ContactPhoneIcon/>
            <p className='ml-4'>Emergency Contact</p>
        </div>
        <div className='flex items-center p-3'>
            <WifiIcon/>
            <p className='ml-4'>Ola Wi-Fi Credetials</p>
        </div>
      </div>
      <div>
        <Button className='w-full bg-red-500 text-white' variant='contained' color='error'>Logout</Button>
      </div>
    </div>
  )
}

export default Profile