import * as React from 'react';

import BasicStack from './LeftPanel/LeftPanel';
import RightPanel from './RightPanel/RightPanel';
import Grid from '@mui/material/Grid';
import './HomeGrid.css'




function HomeGrid() {
    return (
    <Grid container spacing={0}>
        <Grid className='grid-left' item md={5} >
            <div className='left-panel'>
                <BasicStack />
            </div>
        </Grid>
        <Grid className='grid-right' item xs={12} md={7} >
            <div className='right-panel'>
                <RightPanel />
            </div>
        </Grid>
    </Grid>
    );
}

export default HomeGrid;