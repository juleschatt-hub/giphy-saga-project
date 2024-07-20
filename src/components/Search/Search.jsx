const express = require('express')
const app = express()
import React, {useState} from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api'

const gf = new GiphyFetch('GIPHY_API_KEY');

function Search() {

const [text, setText] = useState('');
const [gifs, setGifs] = useState('');

const handleInput = (e) => {
    setText(e.target.value)
};

const searchGifs = async () => {
    try {
      const { data } = await gf.search(text, { limit: 10 });
      setGifs(data);
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    }
  };

return (
<>
<h1>Search for a GIF</h1>
<div id="gif-search">
    <input type="text" value={text} onChange={handleInput} placeholder='Search for GIFS'></input>
    <button onClick={searchGifs}>Search</button>
        <div>
          {gifs.map((gif) => (
            <img key={gif.id} src={gif.images.downsized.url} alt={gif.title} />
          ))}
        </div>
</div>
</>

)}


export default Search;