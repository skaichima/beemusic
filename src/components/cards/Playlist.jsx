import React from "react";
import PlaylistSong from "./PlaylistSong";

function Playlist({ data, userSongs, setUrl, setImageUrl, setCurrentSong }) {
  return (
    <section className="playlist">
      <h1>My Playlist</h1>
      <table>
        <thead>
          <tr className=".exception">
              <th>TITLE</th>
              <th>Artist</th>
              <th>RELEASE DATE</th>
              <th>TIME</th>
              <th>ALBUM</th>
          </tr>
        </thead>
        <tbody>
          {userSongs.map((details) => (
            <PlaylistSong
              key={details.id}
              details={details}
              setUrl={setUrl}
              setImageUrl={setImageUrl}
              setCurrentSong={setCurrentSong}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Playlist;
