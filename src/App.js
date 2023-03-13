import React, { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import Data from "./data";

const CLIENT_ID = "fcd5e78886aa46c7ad8c9f179bd2a90f";
const CLIENT_SECRET = "50fe3290887246deaf6c6457a582f0f5";
const REDIRECT_URI = "https://skaichima.github.io/beemusic/";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [songs, setSongs] = useState([]);
  const [url, setUrl] = useState("");
  const [userData, setUserData] = useState({});
  const [userArtists, setUserArtists] = useState({});
  const [userSongs, setUserSongs] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setAccessToken(token);
  }, []);

  const search = async () => {
    if(!searchInput || !accessToken) return
    const request = await fetch("https://api.spotify.com/v1/search?q=" + searchInput + "&type=track&include_external=audio", getRequestParams())
    const response = await request.json()
    setSongs(response.tracks.items)
  };

  const getRequestParams = (method = "GET") => ({
    method,
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  });

  const getUserSongs = async () => {
    const request = await fetch( "https://api.spotify.com/v1/search?q=drake&type=track&include_external=audio", getRequestParams())
    const response = await request.json()
   setUserSongs(response.tracks.items);
  }

  const getUserData = async () => {
    const request = await fetch("https://api.spotify.com/v1/me", getRequestParams())
    const response = await request.json()
    setUserData(response);
  }

  const logOut = () => {
    setAccessToken("");
    window.localStorage.removeItem("token");
  };

  useEffect(() => {
    if(!accessToken) return
    getUserSongs()
    getUserData()
  }, [accessToken])

  return (
    <div className="app">
      <Sidebar
        data={Data}
        accessToken={accessToken}
        CLIENT_ID={CLIENT_ID}
        REDIRECT_URI={REDIRECT_URI}
        AUTH_ENDPOINT={AUTH_ENDPOINT}
        RESPONSE_TYPE={RESPONSE_TYPE}
        userData={userData}
        logOut={logOut}
      />
      <Main
        data={Data}
        search={search}
        setSearchInput={setSearchInput}
        searchInput={searchInput}
        songs={songs}
        userSongs={userSongs}
        url={url}
        setUrl={setUrl}
      />
    </div>
  );
}

export default App;
