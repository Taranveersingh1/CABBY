"use client"
import React, { useEffect } from 'react';
import { TextField , Button } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { getUser, registerUser } from '@/Redux/Auth/Action';
import * as yup from "yup";

const validationSchema=yup.object().shape({
    fullName: yup.string().required("full name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
    .string()
    .min(8,"password should be of atleast 8 characters long")
    .required("Password is Required"),
    mobile: yup.string().required("Mobile Number is required"),
});

const Register = () =>{
    const router=useRouter();
    const dispatch= useDispatch();
    const jwt=localStorage.getItem("jwt");
    const {auth} =useSelector((store)=>store);

    const goBack= () =>{
        router.back();
    };

    const formik=useFormik({
        initialValues:{
            fullName: "",
            email: "",
            password: "",
            mobile: "+91",
        },
        validationSchema : validationSchema,
        onSubmit:(values)=>{
            console.log("values",values)
            dispatch(registerUser(values));
        },
    });
    useEffect(()=>{
        if(jwt){
            dispatch(getUser(jwt));
        }
    },[jwt]);

    useEffect(()=>{
        if(auth.user?.fullName || auth.user?.name){
            router.push("/book-ride");
        }
    },[auth.user]);

    return(
        <div>
            <div className="flex items-center px-2 lg:px-5 py-2">
                <WestIcon onClick={goBack} className="cursor-pointer"/>
                <div className="w-full flex justify-center">
                    <img
                      className="h-10"
                      src="https://ideogram.ai/api/images/direct/fatjhlfiTjew2aSfX6qG8w.png"
                      alt=""
                    />
                </div>
            </div>
            <form onSubmit={formik.handleSubmit} className="z-50 h-full p-5">
            <TextField
                  label="User Name"
                  type="fullName"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  error={formik.touched.fullName && formik.errors.fullName}
                  helperText={formik.touched.fullName && formik.errors.fullName}
                />
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && formik.errors.email}
                  helperText={formik.touched.email && formik.errors.email}
                />

                <TextField
                  label="mobile number"
                  type="mobile"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  error={formik.touched.mobile && formik.errors.mobile}
                  helperText={formik.touched.mobile && formik.errors.mobile}
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && formik.errors.password}
                  helperText={formik.touched.password && formik.errors.password}
                />
               <Button
                className="w-full bg-slate-950 text-white hover:text-white"
                variant="contained"
                type="submit"
                color="secondary"
                sx={{ padding : ".9rem 0rem"}}
                onClick={()=> router.push("/book-ride")}
               >
                Register
               </Button>
            </form>
            <div className='flex flex-col w-full items-center justify-center space-y-2'>
              <p className='flex items-center mt-5 text-center'>
                If you already have an account
                <Button
                 onClick={() => router.push("login")}
                 className="ml-5"
                 color="secondary"
                >
                    Login
                </Button>
              </p>
              <p className='flex items-center mt-5 text-center'>
                Register as a driver
                <Button
                 onClick={() => router.push("/driver/register")}
                 className="ml-5"
                 color="secondary"
                >
                 Register
                </Button>
              </p>
            </div>
        </div>
    );
};

export default Register;
