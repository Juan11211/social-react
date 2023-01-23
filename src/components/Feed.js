import React from 'react'
import Post from './Post'
import {Box} from '@mui/material'

function Feed() {
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>

  
    <>
    <Post /> 
    <Post /> 
    <Post /> 
    <Post /> 
    <Post /> 
    <Post /> 
    </>
    
    
    
    
    </Box>
  )
}

export default Feed