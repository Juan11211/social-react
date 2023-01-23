import React, {useState} from 'react'

import {Tooltip, Fab, Modal, Box, styled, Typography, Avatar, TextField, Stack, ButtonGroup, Button} from '@mui/material/';
import {Add as AddIcon, DateRange, EmojiEmotions, Image, VideoCameraBack} from '@mui/icons-material'
 
function Add() {

    const [open, setOpen] = useState(false)

    const StyledModal = styled(Modal)({
        display: "flex",
        alignItems: "center", 
        justifyContent: "center"
    })

    const UserBox = styled(Box)({
        display: "flex",
        alignItems: "center", 
        
        gap: "10px", 
        marginBottom: "20px"
    })


  return (
    <>
       <Tooltip onClick={e => setOpen(true)}
       title="Delete" sx={{ position: "fixed", bottom: 20, left: {xs: "calc(50% - 25px)", md:30}}}>
       <Fab color="primary" aria-label="add">
             <AddIcon />
        </Fab>
    </Tooltip>
    <StyledModal
  open={open}
  onClose={e => setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} padding={3} borderRadius={5}>
  <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
  <UserBox>
    <Avatar 
    sx={{ width: '30', height: "30"}}
    src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
    <Typography variant='span' fontWeight={500}>Juan A</Typography>
  </UserBox>
  <TextField
          id="standard-multiline-flexible"
          multiline
          maxRows={4}
          variant="standard"
          placeholder='Whats on your mind'
          sx={{width: '100%'}}
        />
        <Stack direction='row' gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary' />
            <Image color='secondary' />
            <VideoCameraBack color='success' />
            <EmojiEmotions color='error' />
        </Stack>
        <ButtonGroup
        fullWidth 
        variant="contained" aria-label="outlined primary button group">
        <Button>Post</Button>
        <Button sx={{width: '100%'}}><DateRange/></Button>
        
        </ButtonGroup>
  </Box>
</StyledModal>
    </>
  )
}

export default Add