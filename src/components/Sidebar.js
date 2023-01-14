import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Home, People, Storefront } from '@mui/icons-material'

function Sidebar() {
  return (
    <Box 
    flex={1} p={2} sx={{
      display: { xs: "none", sm: "block" }
    }}>
   
    <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
    </List> 
    </Box>
  )
}

export default Sidebar