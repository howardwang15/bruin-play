export const playingSong = state => state.songs.currentPlaying;
export const data = state => state.songs.data.slice();
export const spinner = state => state.spinner.on;