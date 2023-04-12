import * as React from 'react';
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import projects from '../../../image_data.json';
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
import './RightPanel.css';

function RightPanel() {
    const params = useParams();
    const project = projects.find(proj => params.id===proj.id);
    
    return ( 
        <div className='project-div'>
            <div className='button-div'>
            <Link to={`/projects`}>
                <button className='back-button'>
                    <h3 className='button-text'><ArrowBackIcon />Back</h3>
                </button>
            </Link>
            </div>
            <div className='grid-div'>
                <Grid container columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
                    <Grid item xs={12} md={12}>
                        <div className='header-div'>
                            <img 
                                className='header-img'
                                src={process.env.PUBLIC_URL + `${project.img}`}
                                alt="screenshot of project" />
                            <h1 className='header-title'>{project.title}</h1>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <div className='description-div'>
                            <h3 className='description-text'>
                                {project.description}
                            </h3>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <div className='deploy-link'>
                            <h3 className='link-header'> Visit the app </h3>
                            <Link to={project.deployed} className='live-link' target="_blank"> 
                            {project.deployed} 
                            </Link>
                            {project.disclaimer}
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <div className='repo-link'>
                            <h3 className='link-header'>
                                GitHub repo
                            </h3>
                            <Link to={project.repo} className='live-link' target="_blank">
                            {project.repo}
                            </Link>
                        </div>
                    </Grid>
                </Grid>    
            </div>
        </div>
    );
}

export default RightPanel;
//