import React, {useState, useEffect}from 'react'
import GifSearch from './GifSearch'
import GifList from './GifList'

export default function GifListContainer() {
  const [gifs, setGifs] = useState([])
  const [search, setSearch] = useState('') 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'H7NaTZb05CvaiirfZR367Y90xhXit2n6';
        const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&limit=3`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        const firstThreeGifs = data.data.slice(0, 3);
        setGifs(firstThreeGifs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [search]);

  const handleSearchSubmit = (query) => {
    setSearch(query);
  };
  return (
    <div>
     <GifSearch onSearchSubmit={handleSearchSubmit} />
      <GifList gifs={gifs} />
    </div>
  )
}
