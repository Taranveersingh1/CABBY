'use client' //next sabkuch server side render karta hai so to use it on client side
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from "next/navigation";
 //revisit
const HomeNavBar = () => {
  const router=useRouter();
  return (
    <nav className="bg-black py-4">
      <div className="container max-auto px-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center mx-5">
            <img
             className="h-20 w-20"
            src='https://ideogram.ai/api/images/direct/fatjhlfiTjew2aSfX6qG8w.png'             
            alt="LOGO"
            />
          </div>
          <div>
            <ul className="flex items-center">
              <li className="mr-6">
                <a href="#" className="text-white hover:text-blue-300">
                  cabby auto
                </a>
              </li>
              <li className="mr-6">
                <a href="#" className="text-white hover:text-blue-300">
                  cabby electric
                </a>
              </li>
              <li className="mr-6">
                <a href="#" className="text-white hover:text-blue-300">
                  cabby
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        <div>
            <button onClick={() => router.push("login")}   className="bg-gray-600 text-white hover:bg-gray-900 text-sm font-semibold px-6 py-3">
              Ride with cabby
            </button>
            <button onClick={() => router.push("/register")} className="bg-gray-600 text-white hover:bg-gray-900 text-sm font-semibold px-6 py-3 ml-5">
              Become a cabby
            </button>
            <button className="bg-white text-black hover:text-white hover:bg-red-500 text-sm font-semibold px-6 py-3 ml-5">
              SOS
            </button>
            <MenuIcon className="ml-10 text-white text-3xl "/> 
          </div>
      </div>
      </div>
    </nav>
  );
};

export default HomeNavBar;
