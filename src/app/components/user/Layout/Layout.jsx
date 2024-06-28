'use client'
import { Grid } from '@mui/material'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='h-screen'>
      <Grid container>
         <Grid item xs={12} md={8} lg={5}>
           {children}
         </Grid>
         <Grid item className='h-screen w-full' xs={0} md={4} lg={7}>
          <img className='w-full h-full object-cover object-right-top'src='https://images.unsplash.com/photo-1513298793278-a7f9a9167dfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''></img>
         </Grid>
      </Grid>
    </div>
  )
}

export default Layout
