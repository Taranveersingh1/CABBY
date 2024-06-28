"use client"
import React, { useEffect} from "react";
import { Grid,TextField,Button } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import { useDispatch, useSelector } from "react-redux";
import { getUser, login } from "@/Redux/Auth/Action";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";

const validationSchema=yup.object().shape({
    email: yup.string().email("invalid email").required("Email id required"),
    password: yup.string().required("password is required"),
});

const Login = () =>{
    const dispatch = useDispatch();
    const router = useRouter();
    const goBack= () =>{
      router.back();
    };
    const jwt = localStorage.getItem("jwt");
    const { auth } = useSelector((store) => store);

    const formik= useFormik({
        initialValues:{
           email: "",
           password: "",
        },
        validationSchema : validationSchema,
        onSubmit: (values) => {
           console.log('values',values)
           dispatch(login(values));
        },
    });
      useEffect(() => {
        console.log("jwt---- ",jwt);
        if(jwt){
            dispatch(getUser(jwt));  //redux store me store ho jaega
        }
      },[jwt]);

      useEffect(()=>{
        if(auth.user?.fullName || auth.user?.name){
            if(auth.user.role === "DRIVER"){
                router.push("/driver/dashboard");
            }else{
                router.push("/book-ride");
            }
        }
      }, [auth.user]);

      return(
        <div className="py-10">
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
                     sa={{ padding: ".9rem 0rem"}}
                     variant="contained"         
                    
                     className="z-10 w-full bg-slate-950 text-white hover:text-white"
                     type="submit"
                     color="secondary"
                     onClick={()=>router.push("book-ride")}
                >
                    Login
                </Button>
            </form>
            <div className="flex w-full justify-center">
                <p className="flex items-center mt-5 text-center">
                   Don't Have an Account? Register{""}
                   <Button
                     onClick={() => router.push("register")} 
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

export default Login;