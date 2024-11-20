import { usePlayerStore } from "@/stores/usePlayerStore";
import scss from "./Footer.module.scss";

import axios from "axios";
import { useEffect } from "react";
import SpotifyWebPlayer from "react-spotify-web-playback";
import NavBar from "../NavBar/NavBar";

const Footer = () => {
  const { setAccessToken, accessToken, truckIndex, trackUris, setTrackIndex } =
    usePlayerStore();

  const getAccessToken = async () => {
    const { data } = await axios("/api/auth/get-access-token");
    setAccessToken(data.accessToken);
  };

  useEffect(() => {
    getAccessToken();
  }, []);

  return (
    <footer className={scss.Footer}>
      <div className="">
        <div className={scss.content}>
          <SpotifyWebPlayer
            token={accessToken}
            uris={trackUris}
            offset={truckIndex!}
            callback={(state) => {
              if (state.isPlaying) {
                const activeTrackIndex = trackUris.findIndex(
                  (uri) => uri === state.track.uri
                );
                setTrackIndex(activeTrackIndex);
              }
            }}
            styles={{
              activeColor: "#fff",
              bgColor: "#333",
              color: "#fff",
              loaderColor: "#fff",
              sliderColor: "#1cb954",
              trackArtistColor: "#ccc",
              trackNameColor: "#fff",
            }}
          />
          <div className={scss.navbar}>
            <NavBar />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
