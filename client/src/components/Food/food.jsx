import React from 'react';
import Typography from '@material-ui/core/Typography';

function Food({foods}) {
  return (
    <>
      <img src={foods?.image}/>
      <Typography>{foods?.name}</Typography>
    </>
  );
}

export default Food;