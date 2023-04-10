import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import PreviewIcon from '@mui/icons-material/Preview';
import './RightPanel.css'



function srcset(image, size, rows = 1, cols = 1) {
    return {
    src: `process.env.PUBLIC_URL${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
        size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function RightPanel() {

    return (
    <div className='img-list-div'>
        {/* Image list container */}
        <ImageList
            className='img-list'
            sx={{ width: 490, height: 580 }}
            variant="quilted"
            cols={4}
            rowHeight={140}
        >
            {/* creating each tile */}
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                />
                
            {/* Label infobar */}
                <ImageListItemBar
                title={item.title}
                subtitle={item.skills}
                actionIcon={
                <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                >
                    <PreviewIcon />
                </IconButton>
                }
                />
            </ImageListItem> 
            ))}
        </ImageList>
    </div>
    )
}

// object of project info
const itemData = [
    {
        "img": "/images/spark_snippetthumbnail.png",
        // "id": 1,
        "title": "Spark",
        "skills": "React",
        "rows": 1,
        "cols": 4
    },
    {
        "img": "/images/codequiz_snippet.png",
        // "id": 2,
        "title": "Code Quiz",
        "skills": "JavaScript",
        "rows": 1,
        "cols": 2
    },
    {
        "img": "/images/team-profile-gen_snippet.png",
        // "id": 3,
        "title": "Team Profile Generator",
        "skills": "Node.js",
        "rows": 1,
        "cols": 2
    },
    {
        "img": "/images/PokeQuiz_snippet.png",
        // "id": 4,
        "title": "PokéQuiz",
        "skills": "JavaScript",
        "rows": 1,
        "cols": 4
    },
    {
        "img": "/images/JHull-bootstrap_portfolio_snippet.png",
        // "id": 5,
        "title": "Bootstrap Portfolio",
        "skills": "Bootstrap CSS",
        "rows": 1,
        "cols": 2
    },
    {
        "img": "/images/dayplanner_snippet.png",
        // "id": 6,
        "title": "Work Day Planner",
        "skills": "JQuery",
        "rows": 1,
        "cols": 2
    }
];