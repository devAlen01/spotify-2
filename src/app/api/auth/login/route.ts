import { NextResponse } from "next/server";
import querystring from "querystring";

export const GET = () => {
  const scopes = [
    "app-remote-control",
    "streaming",
    "user-read-email",
    "user-read-private",
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-private",
    "playlist-modify-public",
  ].join(" ");

  const clientID = process.env.SPOTIFY_CLIENT_ID;

  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  const queryParams = querystring.stringify({
    response_type: "code",
    client_id: clientID,
    scope: scopes,
    redirect_uri: redirectUri,
  });

  const url = `https://accounts.spotify.com/authorize?${queryParams}`;

  return NextResponse.redirect(url);
};
