import React from "react";
import { BiSearch } from "react-icons/bi";
import Playlist from "./cards/Playlist";
import Trending from "./cards/Trending";
import SearchSongs from "./cards/SearchSongs";

function MusicPage({
  data,
  search,
  setSearchInput,
  searchInput,
  songs,
  setUrl,
  url,
  setImageUrl,
  setCurrentSong,
  userSongs,
}) {
  return (
    <div className="music-page">
      <header>
        <div className="search">
          <form>
            <input
              type="text"
              placeholder="Search for artists, songs and ..."
              onKeyDown={(e) => {
                if (e.key === "enter") {
                  search();
                }
              }}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button onClick={search}>
              <BiSearch />
            </button>
          </form>
        </div>
      </header>
      {searchInput ? (
        <>
          <table className="search-table">
            <thead>
              <tr className=".exception">
                <th>TITLE</th>
                <th>RELEASE DATE</th>
                <th>TIME</th>
                <th>ALBUM</th>
              </tr>
            </thead>
            <tbody>
              {songs.map((song) => (
                <SearchSongs
                  key={song.id}
                  song={song}
                  setUrl={setUrl}
                  setImageUrl={setImageUrl}
                  setCurrentSong={setCurrentSong}
                />
              ))}
            </tbody>
          </table>
          <audio src={url} controls></audio>
        </>
      ) : (
        <>
          <Trending image={data.trending.image} />
          <Playlist
            data={data.playlist}
            userSongs={userSongs}
            setUrl={setUrl}
            setImageUrl={setImageUrl}
            setCurrentSong={setCurrentSong}
          />
          <audio src={url} controls></audio>
        </>
      )}
    </div>
  );
}

export default MusicPage;
