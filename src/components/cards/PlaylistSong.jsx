import React from 'react'

function PlaylistSong({details, setUrl, setImageUrl, setCurrentSong}) {
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
    setUrl(details.preview_url);
    setImageUrl(details.album.images[0].url);
    setCurrentSong(details);
}
  return (
    <tr className='items' onClick={handleClick}>
      <td>{details.name}</td>
      <td>{details.artists[0].name}</td>
      <td>{details.album.release_date}</td>
      <td>{convertMsToM(details.duration_ms)}</td>
      <td>{details.album.name}</td>
    </tr>
  );
}

export default PlaylistSong