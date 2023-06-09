import * as React from 'react';

import BasicStack from '../ProjectsGrid/LeftPanel/LeftPanel';
import RightPanel from './RightPanel/RightPanel';
import Grid from '@mui/material/Grid';


function IndvProjectGrid(props) {
    return (
    <Grid container spacing={0}>
        <Grid className='ipr-grid-left' item xs={12} sm={12} md={5} >
            <div className='ipr-left-panel'>
                <BasicStack />
            </div>
        </Grid>
        <Grid className='ipr-grid-right' item xs={12} sm={12} md={7} >
            <div className='ipr-right-panel'>
                <RightPanel />
            </div>
        </Grid>
    </Grid>
    );
}

export default IndvProjectGrid;