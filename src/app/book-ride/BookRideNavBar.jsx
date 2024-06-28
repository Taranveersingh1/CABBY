
import { AppBar, Avatar, Box, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import { deepOrange } from '@mui/material/colors';
import { drawerList } from './DrawerList';
import { useRouter } from 'next/navigation';

const BookRideNavBar = () => {
    const router=useRouter();
    const [sidebarOpen,setSideBarOpen]=useState(false)

    const handleSidebarClose=()=>setSideBarOpen(false)
    const handleSidebarOpen=()=>setSideBarOpen(true) 
  return (
    <Box className=''>
    <AppBar sx={{backgroundColor:"black"}} className="" position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleSidebarOpen}
        >
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CABBY
        </Typography>
        {true?(
            <Avatar className='cursor-pointer'
              sx={{bgcolor:'darkgray'}}
              onClick={()=> router.push("/profile")}
            >
                T
            </Avatar>
        ) : (
        <Button color="inherit">Login</Button>
        )}
      </Toolbar>
    </AppBar>
    <Drawer anchor={"left"} open={sidebarOpen} onClose={handleSidebarClose}>
        {drawerList("left")}
    </Drawer>
  </Box>
  )
}

export default BookRideNavBar
