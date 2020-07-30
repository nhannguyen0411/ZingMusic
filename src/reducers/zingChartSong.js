const initialState = {
  loadingZingChartSong: false,
  zingChartSongList: [],
};

const zingChartSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ZINGCHARTSONGLIST": {
      return {
        ...state,
        zingChartSongList: action.nowplaying.albums,
        // songTrendingList: action.nowplaying.albums.map((item, index) => ({
        //     ...item,
        //     image_url: state.imageList[index].image,
        // })),
        loadingZingChartSong: true,
      };
    }

    default:
      return state;
  }
};

export default zingChartSongReducer;
