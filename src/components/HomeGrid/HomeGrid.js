import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BasicStack from './LeftPanel/LeftPanel';
import Grid from '@mui/material/Grid';
import './HomeGrid.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function HomeGrid() {
    return (
    <Grid container spacing={0}>
        <Grid className='grid-left' item md={5} >
            <Item className='left-panel'>
                <BasicStack />
            </Item>
        </Grid>
        <Grid className='grid-right' item xs={12} md={7} >
            <Item className='right-panel'>Right panel</Item>
        </Grid>
    </Grid>
    );
}

export default HomeGrid;