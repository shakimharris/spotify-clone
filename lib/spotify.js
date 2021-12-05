import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
    "user-read-email",
    "streaming",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-follow-read",
    "user-read-email",
    "user-read-private",
]   .join(",");


const params = {
    scope: scopes,
}

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = "https://accounts.spotify.com/authorize?" + queryParamString.toString();