import * as React from 'react';
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import projects from '../../../image_data.json';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import './RightPanel.css';

function RightPanel() {
    const params = useParams();
    const project = projects.find(proj => params.id===proj.id);
    // console.log(project);
    
    return ( 
        <div className='project-div'>
            <Link to={`/projects`}>
                <button className='back-button'>
                    <h3 className='button-text'><ArrowBackIcon />Back</h3>
                </button>
            </Link>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                    <div className='header-div'>
                        <img 
                            className='header-img'
                            src={process.env.PUBLIC_URL + `${project.img}`}
                            alt="screenshot of project" />
                            <h1 className='header-title'>{project.title}</h1>
                    </div>
                    </Grid>
                    <Grid item xs={12}>
                    <div className='description-div'>
                        <h3 className='description-text'>{project.description}</h3>
                    </div>
                    </Grid>
                    <Grid item xs={6}>
                    <div className='deploy-link'>Link to deployed app: {project.deployed}</div>
                    </Grid>
                    <Grid item xs={6}>
                    <div className='repo-link'>Link to Repo: {project.repo}</div>
                    </Grid>
                </Grid>
            </Box>     
        </div>
    );
}

export default RightPanel;
//