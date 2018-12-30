import React from 'react';

const GifItem = (image) => {
  return (
    <ul>
      <img src={image.gif.images.downsized.url} />
    </ul>
  )
};

export default GifItem;
