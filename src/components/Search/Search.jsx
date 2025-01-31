import React, {useState} from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';

//const gf = new GiphyFetch('REACT_APP_GIPHY_KEY');
 const gf = new GiphyFetch('Vbb3105fA96JybPITEL4SFCG0oCwyKQI');


function Search() {

const [text, setText] = useState('');
const [gifs, setGifs] = useState([]);

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
console.log('gifs', gifs);
return (
<>
<h1>Search for a GIF</h1>
<div id="gif-search">
    <input type="text" value={text} onChange={handleInput} placeholder='Search for GIFS'></input>
    <button onClick={searchGifs}>Search</button>
        <div>
          {gifs.map((gif) => (
            <>
              <img key={gif.id} src={gif.images.downsized.url} alt={gif.title} />         
              <button>Add to Favorites</button>
              <br/>
            </>
          ))}
        </div>
</div>
</>

)}


export default Search;