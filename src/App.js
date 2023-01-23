import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import RightBar from './components/RightBar';
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from './components/Navbar';
import Add from './components/Add';
import React, {useState} from 'react'


function App() {

  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar setMode={setMode} mode={mode}/>
      <Feed /> 
      <RightBar />
      <Add /> 
    </Stack>
  </Box>
  </ThemeProvider>
  );
}

export default App;
