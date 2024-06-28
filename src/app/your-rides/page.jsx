'use client'
import React from 'react'
import Layout from '../components/user/Layout/Layout'
import Rides from './rides'

const page = () => {
  return (
    <Layout children={<Rides/>}/>
  )
}

export default page
