import React from 'react';

const GifList = ({ gifs }) => {
    console.log(gifs);
  return (
    <ul>
      {gifs.map((gif) => (
        <li key={gif.id}>
          <img src={gif.url} alt={gif.title} />
        </li>
      ))}
    </ul>
  );
};

export default GifList;