import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

import logo from '../images/logo.png'

// https://mui.com/material-ui/react-app-bar/
export default function ButtonAppBar() {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <IconButton
              size="small"
              edge="start"
              onClick={() => {
                navigate('/')
              }}
            >
              <CustomLogo src={logo} />
            </IconButton>
          <CustomButton  onClick={() => {
              navigate('/example-1')
          }}>

          <CustomButtonTypography  >
            Example1
          </CustomButtonTypography>
          </CustomButton>
            <CustomButton  onClick={() => {
              navigate('/example-2')
            }}>
          <CustomButtonTypography  >
            Example2
          </CustomButtonTypography>
          </CustomButton>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}

const CustomLogo = styled.img`
width: 60px;
height: 40px;
`

const CustomButton = styled(Button)`
color: white;
`

const CustomButtonTypography = styled.div`
  color: white;
`
