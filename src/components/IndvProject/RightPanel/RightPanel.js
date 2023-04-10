import * as React from 'react';
import { useParams } from "react-router-dom";
import projects from '../../../image_data.json';
// import './RightPanel.css';

function RightPanel() {
    const params = useParams();
    console.log(params.id);
    console.log(projects);
    const project = projects.find(proj => params.id==proj.id);
    console.log(project);
    
    return ( 
        <div className='project-div'>
            <button>back</button>

            <div className='text-div'>
                <h2>{project.title}</h2>
            </div>
        
        </div>
    );
}

export default RightPanel;