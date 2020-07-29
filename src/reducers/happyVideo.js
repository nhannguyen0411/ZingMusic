const initialState = {
  list: [],
};

const happyVideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_HAPPYVIDEOLIST": {
      return {
        ...state,
        list: action.genreList,
      };
    }

    default:
      return state;
  }
};

export default happyVideoReducer;
