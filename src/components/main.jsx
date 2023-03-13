import React,{useState} from "react";
import MusicPage from "./Music-page";
import ShortcutCard from "./cards/shortcutCard";
import FavArtist from "./cards/ArtistCard";
import MusicCard from "./cards/MusicCard";

function Main({ data, search, setSearchInput, searchInput, songs, url, setUrl, userSongs }) {
  const [ imageUrl, setImageUrl ] = useState("");
  const [currentSong, setCurrentSong] = useState({});
  return (
    <main>
      <MusicPage
        data={data}
        search={search}
        setSearchInput={setSearchInput}
        searchInput={searchInput}
        songs={songs}
        url={url}
        setUrl={setUrl}
        setImageUrl={setImageUrl}
        setCurrentSong={setCurrentSong}
        userSongs={userSongs}
      />
      <section className="side-section">
        <section className="">
          <h1 className="shortcut-header">Shortcuts</h1>
          <div className="shortcuts">
            {data.shortcuts.map((shortcuts) => (
              <ShortcutCard
                key={shortcuts.name}
                name={shortcuts.name}
                icon={shortcuts.icon}
              />
            ))}
          </div>
        </section>
        <section>
          <h1 className="Fav-header">Fav Artist</h1>
          <div className="Fav-cards">
            {data.artists.map((artist) => (
              <FavArtist key={artist["no. of songs"]} artist={artist} />
            ))}
          </div>
        </section>
        <section>
          <div className="music">
            {currentSong ? (
              <MusicCard
              image={imageUrl}
              name={currentSong.name}
              artists={currentSong.name}
            />
             ) : (
              <></>
            ) }
            
          </div>
        </section>
      </section>
    </main>
  );
}

export default Main;
