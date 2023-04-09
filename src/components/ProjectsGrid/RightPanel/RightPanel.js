import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import ImgArray from '../../../image_data.json'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function RightPanel() {
    // console.log(ImgArray[0].title);
  return (
    <ImageList
      sx={{ width: 500, height: 650 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
    {
        "img": "./utils/images/spark_snippetthumbnail.png",
        "title": "Spark",
        "rows": 1,
        "cols": 4
    },
    {
        "img": "./utils/images/codequiz_snippet.png",
        "title": "Code Quiz",
        "rows": 1,
        "cols": 2

    },
    {
        "img": "./utils/images/team-profile-gen_snippet.png",
        "title": "Team Profile Generator",
        "rows": 1,
        "cols": 2
    },
    {
        "img": "./utils/images/PokeQuiz_snippet.png",
        "title": "PokéQuiz",
        "rows": 1,
        "cols": 4
    },
    {
        "img": "./utils/images/JHull-bootstrap_portfolio_snippet.png",
        "title": "Bootstrap Portfolio",
        "rows": 1,
        "cols": 2
    },
    {
        "img": "./utils/images/dayplanner_snippet.png",
        "title": "Work Day Planner",
        "rows": 1,
        "cols": 2
    }
];