import * as React from 'react';
import { Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import IconButton from '@mui/material/IconButton';
import PreviewIcon from '@mui/icons-material/Preview';
import './RightPanel.css'

import itemData from '../../../image_data.json'


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
                <Link to={`/projects/${item.id}`}
                >
                    <PreviewIcon />
                </Link>
                }
                />
            </ImageListItem> 
            ))}
        </ImageList>
    </div>
    )
}
