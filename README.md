# bruin-play
Bruin Play music player


Bruin Play allows users to upload and listen to their favorite songs, create playlists, and follow artists

This app was built with React.js and Node.js. Along the way, I added redux to better manage state and redux-saga to dispatch actions more cleanly.

All audio files are stored using Google Cloud Storage and retrieved with the google cloud storage module (https://www.npmjs.com/package/@google-cloud/storage)

### Getting Started
1) `git clone git@github.com:howardwang15/bruin-play.git` 
    or
   `git clone https://github.com/howardwang15/bruin-play.git`
2) `cd bruin-play/client`
3) `npm i`
4) `npm start`
4) `cd bruin-play/server`
5) `npm i`
6) `npm start`

Bruin Play will be hosted at https://locahost:9000
Node API will be hosted at http://locahost:3000
