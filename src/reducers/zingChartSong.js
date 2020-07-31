const initialState = {
  isLoadingZingChartSong: false,
  zingChartSongList: [],
  err: "",
};

const zingChartSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ZINGCHARTSONGLIST_ONPOST": {
      return {
        ...state,
        isLoadingZingChartSong: true,
      };
    }

    case "FETCH_ZINGCHARTSONGLIST_ONSUCCESS": {
      return {
        ...state,
        zingChartSongList: action.nowplaying.albums,
        isLoadingZingChartSong: false,
      };
    }

    case "FETCH_ZINGCHARTSONGLIST_ONFAILURE": {
      return {
        ...state,
        err: action.err,
        isLoadingZingChartSong: false,
      };
    }

    default:
      return state;
  }
};

export default zingChartSongReducer;
