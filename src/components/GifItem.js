import React from 'react';

const GifItem = (image) => {
  return (
    <ul className="gif-item">
      <img src={image.gif.images.downsized.url} alt="" />
    </ul>
  )
};

export default GifItem;
