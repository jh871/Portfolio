import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './RightPanel.css'
// import ImgArray from '../../../image_data.json'

function srcset(image, size, rows = 1, cols = 1) {
    return {
    src: `process.env.PUBLIC_URL${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function RightPanel() {
    // console.log(ImgArray[0].title);
    return (
    <div className='img-list-div'>
    <ImageList
        className='img-list'
        sx={{ width: 490, height: 580 }}
        variant="quilted"
        cols={4}
        rowHeight={140}
    >
        {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            // style={{objectFit:"cover"}}
            />
        </ImageListItem>
        ))}
    </ImageList>
    </div>
    );
}

const itemData = [
    {
        "img": "/images/spark_snippetthumbnail.png",
        "title": "Spark",
        "rows": 1,
        "cols": 4
    },
    {
        "img": "/images/codequiz_snippet.png",
        "title": "Code Quiz",
        "rows": 1,
        "cols": 2

    },
    {
        "img": "/images/team-profile-gen_snippet.png",
        "title": "Team Profile Generator",
        "rows": 1,
        "cols": 2
    },
    {
        "img": "/images/PokeQuiz_snippet.png",
        "title": "PokéQuiz",
        "rows": 1,
        "cols": 4
    },
    {
        "img": "/images/JHull-bootstrap_portfolio_snippet.png",
        "title": "Bootstrap Portfolio",
        "rows": 1,
        "cols": 2
    },
    {
        "img": "/images/dayplanner_snippet.png",
        "title": "Work Day Planner",
        "rows": 1,
        "cols": 2
    }
];