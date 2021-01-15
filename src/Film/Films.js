import React, {useEffect,useState} from 'react';
import queryString from 'query-string'; 
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { MovieList } from '../MovieList'
import useStyles from './styles';
import { getDefaultNormalizer } from '@testing-library/react';

const Films = (item) => {
  const classes = useStyles();
  console.log(item);
  return(
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