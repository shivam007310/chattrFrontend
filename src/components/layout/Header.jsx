import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { orange } from '../constants/color'
import {Menu as MenuIcon, Search as SearchIcon} from '@mui/icons-material'

const Header = () => {

  const handlemobile = () => {
    console.log("mobile")
  }

  return (
    <>
    
    <Box sx={{ flexGrow:1 }} height={"4rem"} >
      <AppBar position='static' sx={{ bgcolor: orange }} >

        <Toolbar>
          <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
            Chattr
          </Typography>

          <Box sx={{ display: { xs: 'block', sm: 'none' } }} >
            <IconButton color='inherit' onClick={handlemobile} >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow:1 }} >
            
          </Box>
          <Box>
          <IconButton color='inherit' size='large' onClick={openSearchDialog} >
              <SearchIcon />
            </IconButton>
          </Box>

        </Toolbar>

      </AppBar>


    </Box>

    </>
  )
}

export default Header