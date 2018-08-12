export default (state, action) => {
    switch (action.type) {
        case 'UPDATE_STATE': 
            return { ...state, ...action.state };
        default: 
            return {
                ...state,
                songs: [],
                currentSong: null
            }
    }
}