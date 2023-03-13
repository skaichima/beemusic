import React from "react";
import { IoIosArrowForward, IoIosLogOut } from "react-icons/io";
import { BsSpotify } from "react-icons/bs";

function Sidebar({  accessToken, AUTH_ENDPOINT, RESPONSE_TYPE, REDIRECT_URI, CLIENT_ID, userData, logOut }) {
  return (
    <div className="sidebar">
      <header>
        <div className="logo">
          <span>Bee</span>Music
        </div>
      </header>
      <div className="nav--links">
        <div className="nav--group">
          <div className="nav-btns">
            <button>
              <span className="material-symbols-outlined">home</span>
              Home
            </button>
          </div>
        </div>
        {accessToken ? (
          <div className="nav--group">
            <div className="nav-btns">
              <button onClick={logOut}>
                <IoIosLogOut className="logoout-icon" />
                Logout
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="account-info">
        {!accessToken ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            <span>Login with</span>
            <BsSpotify />
            <span>spotify</span>
          </a>
        ) : (
          <div>
            <img
              src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'}
              alt="profile-pic"
              width="40px"
              height="40px"
            />
            <span>{userData.display_name}</span>
            <IoIosArrowForward />
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
