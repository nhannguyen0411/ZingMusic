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
