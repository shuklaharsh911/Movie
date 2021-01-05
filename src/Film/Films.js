import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Films = (item) => {
  console.log(item.item.Title);
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={item.item.Poster} title={item.item.Title} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {item.item.Title}
          </Typography>
        </div>
      </CardContent>
    </Card>
    
  );
  
};

export default Films;