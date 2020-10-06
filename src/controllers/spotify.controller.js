const SpotifyWebApi = require('spotify-web-api-node');
const axios = require('axios');
const querystring = require('querystring');
const spotifyController = {};

const stateKey = 'spotify_auth_state';
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_ID_SECRET;
const redirect_uri = process.env.SPOTIFY_URL_CALLBACK;
const BASE_URL = process.env.SPOTIFY_BASE_URL;

const scopes = [
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'streaming',
    'app-remote-control',
    'user-read-email',
    'user-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
    'playlist-read-private',
    'playlist-modify-private',
    'user-library-modify',
    'user-library-read',
    'user-top-read',
    'user-read-playback-position',
    'user-read-recently-played',
    'user-follow-read',
    'user-follow-modify'
];

const spotifyApi = new SpotifyWebApi({
    redirectUri: redirect_uri,
    clientId: client_id,
    clientSecret: client_secret
});

const config = {
    title: 'Spotify',
    layout: 'panel'
};

spotifyController.basePage = (req, res) => {
    res.render('spotify/configuracion', config);
}

spotifyController.login = (req, res) => {
    res.redirect(spotifyApi.createAuthorizeURL(scopes));
}

spotifyController.callback = (req, res) => {
    const error = req.query.error;
    const code = req.query.code;
    const state = req.query.state;

    if (error) {
        console.error('Callback Error:', error);
        res.send(`Callback Error: ${error}`);
        return;
    }

    spotifyApi
        .authorizationCodeGrant(code)
        .then(data => {
            const access_token = data.body['access_token'];
            const refresh_token = data.body['refresh_token'];
            const expires_in = data.body['expires_in'];

            spotifyApi.setAccessToken(access_token);
            spotifyApi.setRefreshToken(refresh_token);

            // console.log('access_token:', access_token);
            // console.log('refresh_token:', refresh_token);

            // console.log(
            //     `Sucessfully retreived access token. Expires in ${expires_in} s.`
            // );

            spotifyApi.getMe().then(function (data) {
                config.userSpotify = data.body;
                res.redirect('/spotify/configuracion');
                
            }).catch(function (error) {
                console.log(error);
            })
            //res.send('Success! You can now close the window.');

            setInterval(async () => {
                const data = await spotifyApi.refreshAccessToken();
                const access_token = data.body['access_token'];

                console.log('The access token has been refreshed!');
                console.log('access_token:', access_token);
                spotifyApi.setAccessToken(access_token);
            }, expires_in / 2 * 1000);
        })
        .catch(error => {
            console.error('Error getting Tokens:', error);
            res.send(`Error getting Tokens: ${error}`);
        });
}

spotifyController.search = (req, res) => {
    spotifyApi.search('ladeando', ['track'], { limit: 10 }).then(function (response) {
        console.log(response.body.tracks);
    }).catch(function (error) {
        console.log(error);
    });
    res.redirect('/spotify/configuracion');
}

spotifyController.addQueue = (req, res) => {
    spotifyApi.addToQueue("spotify:track:15v0ra246PDmiT5Vh9YzWO").then(function (response) {
        console.log("ok", response);
    }).catch(function (error){
        console.log(error);
    });
    res.redirect("/spotify/configuracion");
}

module.exports = spotifyController;