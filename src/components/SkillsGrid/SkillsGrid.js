import * as React from 'react';

import BasicStack from './LeftPanel/LeftPanel';
import RightPanel from './RightPanel/RightPanel';
import Grid from '@mui/material/Grid';
import './SkillsGrid.css'




function SkillsGrid() {
    return (
    <Grid container spacing={0}>
        <Grid className='sk-grid-left' item md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <div className='sk-left-panel'>
                <BasicStack />
            </div>
        </Grid>
        <Grid className='sk-grid-right' item xs={12} md={7} >
            <div className='reduced-header'>
                <div className='color-stripe-1'> </div>
                <div className='color-stripe-2'> </div>
                <h1 className='reduced-header-text'>Skills</h1>
                <div className='color-stripe-3'> </div>
                <div className='color-stripe-4'> </div>
            </div>
            <div className='sk-right-panel'>
                <RightPanel />
            </div>
        </Grid>
    </Grid>
    );
}

export default SkillsGrid;