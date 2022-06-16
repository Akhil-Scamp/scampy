import React from 'react'
// import MenuIcon from '@mui/icons-material/Menu';
import '../App.css';
import HamburgerDrawer from "./HamburgerDrawer"
import { ThemeProvider, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
const Navinshorts = () => {
  return (
    <ThemeProvider theme={darkTheme}>
<div className='nav'>
        <div className='icon'>
            <HamburgerDrawer/>            
        </div>
        <img 
        src ="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" 
        alt = "inshorts" 
        height="80%"
        style={{cursor:"pointer"}}></img>
    </div>
  </ThemeProvider>
    
  )
}

export default Navinshorts