"use client"
import React from 'react'
import Layout from '../components/user/Layout/Layout'
import Register from './register'



const page = () => {
  return (
    <div>
      <Layout children={<Register/>}></Layout>
    </div>
  )
}

export default page;
