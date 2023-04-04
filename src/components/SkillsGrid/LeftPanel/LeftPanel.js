
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import './LeftPanel.css'


export default function BasicStack() {
    return (

    <Box sx={{ width: '100%' }} className='stack-box'>
        <Stack spacing={0} className='stack-cont'>
            <div className='stack-div div-1'></div>
            <div className='stack-div div-2'></div>
            <div className='stack-div div-3'></div>
            <div className='stack-div div-4'>
                <h1 className='header-left'>Skills</h1>
            </div>
            <div className='stack-div div-5'></div>
            <div className='stack-div div-6'></div>
            <div className='stack-div div-7'></div>
            <div className='stack-div div-8'></div>
            <div className='stack-div div-9'></div>
        </Stack>
    </Box>
);
}