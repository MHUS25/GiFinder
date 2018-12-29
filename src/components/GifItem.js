import React, { Component } from 'react';

const GifItem = (image) => {
  return (
    <ul>
      <img src={image.gif.url} />
    </ul>
  )
};

export default GifItem;
