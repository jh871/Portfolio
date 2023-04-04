import * as React from 'react';

import BasicStack from './LeftPanel/LeftPanel';
import RightPanel from './RightPanel/RightPanel';
import Grid from '@mui/material/Grid';
import './SkillsGrid.css'




function SkillsGrid() {
    return (
    <Grid container spacing={0}>
        <Grid className='sk-grid-left' item md={5} >
            <div className='sk-left-panel'>
                <BasicStack />
            </div>
        </Grid>
        <Grid className='sk-grid-right' item xs={12} md={7} >
            <div className='sk-right-panel'>
                <RightPanel />
            </div>
        </Grid>
    </Grid>
    );
}

export default SkillsGrid;