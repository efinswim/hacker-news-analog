import React from 'react';
import { useEffect } from 'react';

import { postsLoad } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Rating from '@mui/material/Rating';

export default function CardMain() {
  const posts = useSelector((state) => {
    const { postsReducer } = state;
    return postsReducer.posts;
  });

  useEffect(() => {
    dispatch(postsLoad());
  }, []);

  const dispatch = useDispatch();

  return (
    <div>
      {!!posts.length &&
        posts.map((item) => {
          return (
            <Card sx={{ maxWidth: 600 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {/* {item.title} */}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div">
                    {item.body}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Typography gutterBottom variant="body2" component="div">
                  {item.title}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                  28.03.1997
                </Typography>
                <Rating name="read-only" readOnly />
              </CardActions>
            </Card>
          );
        })}
    </div>
  );
}
