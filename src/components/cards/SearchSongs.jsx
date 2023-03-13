import React from 'react'

function SearchSongs({ song, setUrl, setImageUrl, setCurrentSong }) {
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    function convertMsToM(milliseconds) {
        let seconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
      
        seconds = seconds % 60;
        minutes = seconds >= 30 ? minutes + 1 : minutes;
      
        minutes = minutes % 60;
      
        return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
    }

    function handleClick() {
        setUrl(song.preview_url);
        setImageUrl(song.album.images[0].url);
        setCurrentSong(song);
    }

  return (
    <tr className='item' onClick={handleClick}>
      <td>{song.name}</td>
      <td>{song.album.release_date}</td>
      <td>{convertMsToM(song.duration_ms)}</td>
      <td>{song.album.name}</td>
    </tr>
  )
}

export default SearchSongs