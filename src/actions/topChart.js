export const addNewSong = (song) => {
  return {
    type: "ADD_SONG",
    payload: song,
  };
};

export const addView = (song) => {
  return {
    type: "ADD_VIEW",
    payload: song,
  };
};

export const pgUp = (page) => {
  return {
    type: "PAGE_UP",
    payload: page,
  };
};

export const pgDown = (page) => {
  return {
    type: "PAGE_DOWN",
    payload: page,
  };
};
