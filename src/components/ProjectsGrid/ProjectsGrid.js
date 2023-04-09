import * as React from 'react';

import BasicStack from './LeftPanel/LeftPanel';
import RightPanel from './RightPanel/RightPanel';
import Grid from '@mui/material/Grid';
import './ProjectsGrid.css'




function ProjectsGrid() {
    return (
    <Grid container spacing={0}>
        <Grid className='pr-grid-left' item md={5} >
            <div className='pr-left-panel'>
                <BasicStack />
            </div>
        </Grid>
        <Grid className='pr-grid-right' item xs={12} md={7} >
            <div className='pr-right-panel'>
                <RightPanel />
            </div>
        </Grid>
    </Grid>
    );
}

export default ProjectsGrid;