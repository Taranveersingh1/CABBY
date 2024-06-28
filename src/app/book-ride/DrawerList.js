import { Anchor } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react'

export const drawerList = (anchor) => (
   <Box
   sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
   role="presentation"
   >
   <List>
    {["Book your cabby","Rate Card","Support"].map((text,index) => (
        <ListItem key={text} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                </ListItemIcon>
                <ListItemText primary={text}/>
            </ListItemButton>
        </ListItem>
    ))}
    <ListItem disablePadding >
        <ListItemButton>
            <ListItemIcon>
                <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary={"Your ride"}/>
        </ListItemButton>
    </ListItem>
   </List>
   </Box>
  );


