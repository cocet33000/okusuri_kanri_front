import * as React from 'react';
import { useState, useContext } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { MenuContext } from "../App";


export default function TopBar() {
    const { menu, setMenu } = useContext(MenuContext);
    return (
    <Box
        sx={{
        height: 60,
        backgroundColor: 'primary.dark',
        }}
    >
        <Typography align='left' sx={{color:'white', paddingLeft:'30px', paddingTop:'10px'}} variant="h4" gutterBottom component="div">
            {menu}
        </Typography>
    </Box>
    );
}
