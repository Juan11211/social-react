import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import {CodeOff, Mail, Notifications } from '@mui/icons-material'
import React, {useState} from 'react'

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled('div')(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icon = styled(Box)(({theme}) => ({
   display: "none", gap: "10px", alignItems: "center",
   [theme.breakpoints.up('sm')]:{display: "flex"}
}))

const UserBox = styled(Box)(({theme}) => ({
    display: "flex", gap: "10px", alignItems: "center",
    [theme.breakpoints.up('sm')]:{display: "none"}
 }))



function Navbar() {


    const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
        <StyledToolBar>
            <Typography sx={{ display: { xs: 'none', sm: 'block'}}}>
        Navbar
        </Typography>
        <CodeOff sx={{ display: { xs: 'block', sm: 'none'}}}/>
        <Search><InputBase placeholder="Search..."/></Search>
        <Icon>
            <Badge badgeContent={4} color="error">
            <Mail />
            </Badge>
            <Badge badgeContent={4} color="error">
            <Notifications  />
            </Badge>
            
            <Badge >
            <Avatar 
            sx={{ width: "30", height: "30"}} 
            src='https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' 
            onClick={() => setOpen(true)} />
            </Badge>
        </Icon>
        <UserBox>
        <Avatar 
            sx={{ width: "30", height: "30"}} 
            src='https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' 
            onClick={() => setOpen(true)}/>
        </UserBox>
        </StyledToolBar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar